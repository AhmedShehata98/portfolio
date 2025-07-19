"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import useSectionObserver from "@/hook/useSectionObserver";
import useCurrentHash from "@/hook/useCurrentHash";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hash = useCurrentHash();

  const navItems = [
    { href: "/#", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#gallery", label: t("gallery") },
    { href: "#timeline", label: t("timeline") },
    { href: "#contact", label: t("contact") },
  ];

  const isActive = (href: string) => {
    if (hash === href) {
      return pathname === "/" || pathname === "/en" || pathname === "/ar";
    }
    return pathname.includes(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useSectionObserver();

  return (
    <header
      className={`fixed top-0 left-0 right-0 rounded-b-xl z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/15 shadow-xl backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-gradient-primary focus-visible:focus-visible"
            >
              Portfolio
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`material-label-large transition-all duration-300 hover:text-primary focus-visible:focus-visible ${
                    isActive(item.href)
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LanguageToggle />

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden btn-outlined"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 p-4 glass-surface rounded-lg border border-outline-variant animate-fade-in-scale">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`material-label-large text-left py-2 px-4 rounded-lg transition-all duration-300 hover:bg-primary-container hover:text-primary-container-foreground focus-visible:focus-visible ${
                      isActive(item.href)
                        ? "bg-primary-container text-primary-container-foreground font-semibold"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
