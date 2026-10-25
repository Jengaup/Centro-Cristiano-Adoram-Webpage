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
  "upgrade-insecure-requests",
].join("; ");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // lang="es" es el valor por defecto (defaultLocale). Next.js App Router no permite
    // que un layout anidado (p.ej. app/[locale]/layout.tsx) modifique el <html> raíz, así
    // que el script de abajo corrige el idioma en rutas /en/ apenas carga el documento.
    // Ver auditoría: esto cubre lectores de pantalla y navegación con JS activo; la
    // corrección 100% "horneada" en el HTML estático por ruta requeriría reestructurar
    // el árbol de layouts (fuera de alcance de este cambio para no romper rutas).
    <html lang="es" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {/* Anti-clickjacking: GitHub Pages no permite el header X-Frame-Options,
            este fallback evita que el sitio se cargue dentro de un iframe ajeno */}
        <script
          dangerouslySetInnerHTML={{
            __html: "if(self!==top){try{top.location=self.location}catch(e){document.documentElement.style.display='none'}}",
          }}
        />
        {/* Corrige lang="en" en rutas /en/*, ya que el layout raíz no conoce el locale */}
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if(location.pathname.indexOf('/en/')===0||location.pathname==='/en'){document.documentElement.lang='en'}}catch(e){}",
          }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
