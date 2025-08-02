"use client";

import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { toast } from "sonner";
import Turnstile from "react-turnstile";
import { adminTemplate, clientEmailTemplate } from "@/app/utils/templates";

export default function ContactSection() {
  const t = useTranslations("contact");
  const tTemplate = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [verifiedCaptcha, setVerifiedCaptcha] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t("email"),
      value: "contact@ahmedshehata.online",
      href: "mailto:contact@ahmedshehata.online",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t("phone"),
      value: "+201559021655",
      href: "tel:+201559021655",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t("location"),
      value: "Alexandria, Egypt",
      href: "https://goo.gl/maps/Alexandria,Egypt",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/AhmedShehata98",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ahmedshehata98/",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      url: "https://x.com/Ahmed98Shehata",
    },
  ];

  const services = [
    { value: "webdev", label: t("services.webdev") },
    { value: "mobile", label: t("services.mobile") },
    { value: "design", label: t("services.design") },
    { value: "consulting", label: t("services.consulting") },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const sendEmail = async ({
    to,
    subject,
    html,
  }: {
    to: string;
    subject: string;
    html: string;
  }) => {
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, subject, html }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }

    return res.json();
  };

  const sendContactForm = async ({
    formData,
    cb,
  }: {
    formData: {
      name: string;
      email: string;
      service: string;
      message: string;
    };
    cb: (success: boolean, error?: unknown) => void;
  }) => {
    try {
      const res = await fetch("/api/contact-us", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        const parsedError = JSON.parse(errorData.error);
        cb(false, parsedError?.[0]?.message);
        return;
      }
      const data = await res.json();
      if (data.success) {
        cb(true);
      } else {
        cb(false, data.error);
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      cb(false, error);
    }
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      setIsSubmitting(true);
      await sendContactForm({
        formData,
        cb: async (success, error) => {
          if (success) {
            toast.success(t("form.success"));
            Promise.all([
              sendEmail({
                to: process.env.NEXT_PUBLIC_EMAIL as string,
                subject: t("form.subject", { name: formData.name }),
                html: adminTemplate({
                  t: tTemplate,
                  name: formData.name,
                  email: formData.email,
                  service: formData.service,
                  message: formData.message,
                }),
              }),
              sendEmail({
                to: formData.email,
                subject: t("form.subject", { name: formData.name }),
                html: clientEmailTemplate({
                  t: tTemplate,
                  name: formData.name,
                  service: formData.service,
                }),
              }),
            ]);
            setFormData({
              name: "",
              email: "",
              service: "",
              message: "",
            });
          } else {
            toast.error(
              error && typeof error === "string" ? error : t("form.error")
            );
          }
        },
      });
      setIsSubmitting(false);

      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(t("form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="app-container py-20 bg-background">
      <div>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="material-display-medium mb-4 text-gradient-primary animate-fade-in-up">
              {t("title")}
            </h2>
            <p className="material-headline-small text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up stagger-2">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Link
                    key={info.label}
                    className="flex items-center gap-4"
                    href={info.href}
                  >
                    <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-primary-container-foreground">
                      {info.icon}
                    </div>
                    <div>
                      <p className="material-label-large text-start text-primary">
                        {info.label}
                      </p>
                      <p className="material-body-medium text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="material-headline-small mb-6 md:text-start text-primary">
                  {t("footer.social")}
                </h3>
                <div className="flex gap-4 max-md:justify-center">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className="btn-outlined w-12 h-12 p-0 cursor-pointer hover:!bg-primary"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      {social.icon}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Decorative Card */}
              <Card className="card-elevated p-8 bg-gradient-hero">
                <h3 className="material-headline-small mb-4 text-primary">
                  {t("decorativeCard.title")}
                </h3>
                <p className="material-body-medium text-foreground">
                  {t("decorativeCard.description")}
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-elevated animate-fade-in-up stagger-3">
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="material-label-large text-primary"
                  >
                    {t("form.name")}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="material-label-large text-primary"
                  >
                    {t("form.email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className="material-label-large text-primary"
                  >
                    {t("form.service")}
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      handleInputChange("service", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="material-label-large text-primary"
                  >
                    {t("form.message")}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    required
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

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
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
