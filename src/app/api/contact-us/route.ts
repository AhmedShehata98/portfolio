import { createClient } from "@supabase/supabase-js";
import * as z from "zod";
const contactFormSchema = z.object({
  name: z.string().min(1, "Your full name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(1, "Message is required"),
});

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

export async function POST(request: Request) {
  try {
    if (!process.env.API_ROUTE_PASS_KEY) {
      return new Response(
        JSON.stringify({
          error: "access denied ,route pass key is not provided",
        }),
        { status: 403 }
      );
    }
    const body = await request.json();

    const parsedBody = contactFormSchema.safeParse(body);

    if (!parsedBody.success) {
      return new Response(JSON.stringify({ error: parsedBody.error.message }), {
        status: 400,
      });
    }

    await supabaseAdmin.from("contact_us").insert({
      full_name: body.name,
      email: body.email,
      service_type: body.service,
      message: body.message,
      created_at: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process the request." }),
      { status: 500 }
    );
  }
}
