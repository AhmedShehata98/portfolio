import { Metadata } from "next";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import GallerySection from "@/components/sections/Gallery";
import TimelineSection from "@/components/sections/Timeline";
import ContactSection from "@/components/sections/Contact";
import GoTopBtn from "@/components/GoTopBtn";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { use } from "react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Ahmed Shehata | Portfolio",
  description:
    "Passionate frontend developer specializing in modern web technologies and creating exceptional user experiences",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#5417cf" },
    { media: "(prefers-color-scheme: dark)", color: "#7e47eb" },
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        sizes: "16x16",
        url: "/favicon-16x16.png",
        type: "image/png",
        color: "#5417cf",
      },
      {
        sizes: "32x32",
        url: "/favicon-32x32.png",
        type: "image/png",
        color: "#5417cf",
      },
      {
        sizes: "192x192",
        url: "/favicon-192x192.png",
        type: "image/png",
        color: "#5417cf",
      },
      {
        sizes: "512x512",
        url: "/favicon-512x512.png",
        type: "image/png",
        color: "#5417cf",
      },
    ],
  },
  openGraph: {
    title: "Ahmed Shehata | Portfolio",
    description:
      "Passionate frontend developer specializing in modern web technologies and creating exceptional user experiences",
    url: "https://ahmedshehata.online",
    images: [
      {
        url: "/profile-photo.png",
        width: 375,
        height: 468,
        alt: "ahmed-shehata-profile-img.png",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Shehata | Portfolio",
    description:
      "Passionate frontend developer specializing in modern web technologies and creating exceptional user experiences",
    images: [
      {
        url: "/profile-photo.png",
        width: 375,
        height: 468,
        alt: "ahmed-shehata-profile-img.png",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://ahmedshehata.online",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function HomePage({
  params,
}: {
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
