"use client";
import React from "react";
import { Button } from "./ui/button";
import Turnstile from "react-turnstile";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

const ContactFormActions = () => {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [verifiedCaptcha, setVerifiedCaptcha] = React.useState(false);

  const handleVerifyCaptcha = async (token: string) => {
    try {
      const res = await fetch("/api/turnstile/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.success) {
        setVerifiedCaptcha(true);
      } else {
        setVerifiedCaptcha(false);
      }
    } catch (error) {
      console.error("Error verifying captcha:", error);
      setVerifiedCaptcha(false);
    }
  };

  return (
    <div className="flex flex-col w-full items-start justify-start gap-3 mt-4">
      <Turnstile
        className="place-self-center md:place-self-start"
        sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
        onVerify={handleVerifyCaptcha}
        onExpire={() => setVerifiedCaptcha(false)}
        onError={() => setVerifiedCaptcha(false)}
        onTimeout={() => setVerifiedCaptcha(false)}
      />
      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || !verifiedCaptcha}
        className="w-full btn-filled hover-lift cursor-pointer disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent mr-2"></div>
            {t("form.sending")}
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            {t("form.send")}
          </>
        )}
      </Button>
    </div>
  );
};

export default ContactFormActions;
