import { Lato, Cairo } from "next/font/google";
import "./globals.css";

const latoSans = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const cairoMono = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${latoSans.variable} ${cairoMono.variable} antialiased`}
      >
        <div id="modal"></div>
        {children}
      </body>
    </html>
  );
}
