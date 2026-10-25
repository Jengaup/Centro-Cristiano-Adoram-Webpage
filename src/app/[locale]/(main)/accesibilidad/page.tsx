import type { Metadata } from "next";
import LegalPageLayout from "@/components/sections/LegalPageLayout";
import { getDictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.accessibilityPage.heroTitle,
    description: dict.accessibilityPage.intro,
    alternates: {
      languages: { es: "/es/accesibilidad", en: "/en/accesibilidad" },
    },
  };
}

export default async function AccessibilityPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return <LegalPageLayout dict={dict.accessibilityPage} />;
}
