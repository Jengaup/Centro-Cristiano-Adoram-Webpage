import { getDictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-gold-500 focus:text-navy-950 focus:font-bold focus:text-sm focus:shadow-lg"
      >
        {dict.legalNav.skipToContent}
      </a>
      <Navbar locale={params.locale} dict={dict.nav} />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer locale={params.locale} dict={dict.footer} />
    </>
  );
}
