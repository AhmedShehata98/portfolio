import { Metadata } from "next";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import GallerySection from "@/components/sections/Gallery";
import TimelineSection from "@/components/sections/Timeline";
import ContactSection from "@/components/sections/Contact";
import GoTopBtn from "@/components/GoTopBtn";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {use} from "react";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Ahmed Shehata | Portfolio",
  description:
    "Passionate frontend developer specializing in modern web technologies and creating exceptional user experiences",
};

export default function HomePage({params}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);

    setRequestLocale(locale || routing.defaultLocale);

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TimelineSection />
      <ContactSection />
      <GoTopBtn />
    </main>
  );
}
