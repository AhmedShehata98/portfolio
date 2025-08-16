import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

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
import { contactFormAction } from "@/lib/actions";
import ContactFormActions from "../ContactFormActions";

export default function ContactSection() {
  const t = useTranslations("contact");

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
                  {socialLinks.map((social, idx) => (
                    <Button
                      key={`${social.label}_${idx}`}
                      variant="outline"
                      size="sm"
                      className="btn-outlined w-12 h-12 p-0 cursor-pointer hover:!bg-primary"
                      asChild
                    >
                      <Link href={social.url} target="_blank">
                        {social.icon}
                      </Link>
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
              <form action={contactFormAction} className="p-8 space-y-6">
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
                    name="fullName"
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
                    name="email"
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
                  <Select name="service">
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
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <ContactFormActions />
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
