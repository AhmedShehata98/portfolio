import React from "react";
import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

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
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      url: "mailto:ahmed.shehata@example.com",
    },
  ];

  return (
    <footer className="bg-surface-container-high border-t border-outline-variant">
      <div className="app-container !text-start py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Ahmed Shehata
              </h3>
              <p className="material-body-medium text-muted-foreground max-w-sm">
                Frontend Web Developer from Alexandria, Egypt. Creating modern
                web experiences with React, Next.js, and Vue.js.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="material-headline-small mb-4 text-primary">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block material-body-medium text-foreground hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </a>
                <a
                  href="#gallery"
                  className="block material-body-medium text-foreground hover:text-primary transition-colors"
                >
                  {t("nav.gallery")}
                </a>
                <a
                  href="#timeline"
                  className="block material-body-medium text-foreground hover:text-primary transition-colors"
                >
                  {t("nav.timeline")}
                </a>
                <a
                  href="#contact"
                  className="block material-body-medium text-foreground hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="material-headline-small mb-4 text-primary">
                {t("footer.social")}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    className="btn-outlined w-12 h-12 p-0 hover-lift"
                    asChild
                    aria-label={social.label}
                  >
                    <Link href={social.url} target="_blank">
                      {social.icon}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-outline-variant">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="material-body-medium text-muted-foreground mb-4 md:mb-0">
                © {currentYear} Ahmed Shehata. {t("footer.rights")}.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <p className="material-body-medium">Made by</p>
                <p className="material-body-medium">ahmed shehata</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
