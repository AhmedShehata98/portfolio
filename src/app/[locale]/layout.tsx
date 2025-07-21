import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale || routing.defaultLocale)) {
    notFound();
  }

  setRequestLocale(locale || routing.defaultLocale);

  return (
    <html
      lang={locale || routing.defaultLocale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
