import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F1B2D",
};

export const metadata: Metadata = {
  title: {
    default: "Centro Cristiano Adoram",
    template: "%s | Centro Cristiano Adoram",
  },
  description:
    "Una familia de fe donde la adoración es genuina, la Palabra es viva y hay un lugar para ti.",
};

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://img.youtube.com https://i.ytimg.com",
  "font-src 'self'",
  "frame-src https://www.youtube.com",
  "connect-src 'self' https://formsubmit.co",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formsubmit.co",
].join("; ");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="font-sans min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
