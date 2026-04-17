import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Centro Cristiano Adoram | Iglesia Apostólica Protestante",
    template: "%s | Centro Cristiano Adoram",
  },
  description:
    "Una familia de fe donde la adoración es genuina, la Palabra es viva y hay un lugar para ti. Visítanos — estamos listos para recibirte.",
  keywords: [
    "iglesia cristiana",
    "adoram",
    "apostólica protestante",
    "fe",
    "adoración",
    "devocionales",
  ],
  openGraph: {
    title: "Centro Cristiano Adoram",
    description: "Hay un lugar para ti en Adoram",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro Cristiano Adoram",
    description: "Hay un lugar para ti en Adoram",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
