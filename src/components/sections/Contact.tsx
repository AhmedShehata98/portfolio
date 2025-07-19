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

export default function ContactSection() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ahmed.shehata@example.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+20 xxx xxx xxxx",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Alexandria, Egypt",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/ahmed-shehata",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/ahmed-shehata",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      url: "https://twitter.com/ahmed_shehata",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // toast({
      //   title: t('form.success'),
      //   description: "I'll get back to you soon!",
      // });

      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      // toast({
      //   title: t('form.error'),
      //   description: "Please try again later.",
      //   variant: "destructive",
      // });
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
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-primary-container-foreground">
                      {info.icon}
                    </div>
                    <div>
                      <p className="material-label-large text-primary">
                        {info.label}
                      </p>
                      <p className="material-body-medium text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="material-headline-small mb-6 text-primary">
                  {t("footer.social")}
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className="btn-outlined w-12 h-12 p-0"
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
                  Let&apos;s Build Something Amazing Together
                </h3>
                <p className="material-body-medium text-foreground">
                  I&apos;m always excited to work on new projects and help bring
                  your ideas to life. Whether you need a web application, mobile
                  app, or just want to discuss your project, I&apos;d love to
                  hear from you.
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

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-filled hover-lift"
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
