import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KayVet — Ветеринарная помощь в Уссурийске",
    template: "%s | KayVet",
  },
  description:
    "Ветеринарная клиника в Уссурийске. Круглосуточная помощь, терапия, хирургия, диагностика, зоотакси, вызов врача на дом. Современное оборудование.",
  keywords: [
    "ветклиника",
    "Уссурийск",
    "ветеринар",
    "помощь животным",
    "зоотакси",
    "вызов врача на дом",
  ],
  openGraph: {
    title: "KayVet — Ветеринарная помощь в Уссурийске",
    description:
      "Круглосуточная ветклиника. Терапия, хирургия, диагностика. Зоотакси, вызов врача на дом.",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
