"use server";

import { sendEmail } from "@/app/services/contact-mail";
import { adminTemplate, clientEmailTemplate } from "@/app/utils/templates";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";

export const contactFormAction = async (formdata: FormData) => {
  const fullName = formdata.get("fullName") as string;
  const email = formdata.get("email") as string;
  const service = formdata.get("service") as string;
  const message = formdata.get("message") as string;
  const messages = await getMessages();

  try {
    const res = await fetch(`${process.env.FRONTEND_URL}/api/contact-us`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: fullName,
        email: email,
        service: service,
        message: message,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to send your message ,something wrong !");
    }
    const data = await res.json();
    if (data.success) {
      // revalidatePath(`/${locale}/#contact`);
      Promise.all([
        sendEmail({
          to: process.env.NEXT_PUBLIC_EMAIL as string,
          subject: messages.contact.form.subject,
          html: await adminTemplate({
            name: fullName,
            email: email,
            service: service,
            message: message,
          }),
        }),
        sendEmail({
          to: email,
          subject: messages.contact.form.subject,
          html: await clientEmailTemplate({
            name: fullName,
            service: service,
          }),
        }),
      ]);
      return data;
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error("Error sending contact form:", error);
    return {
      success: false,
      message: "Failed to send your message ,internal server error !",
    };
  }
};
