import type { Metadata } from "next";
import DevotionalsExplorer from "@/components/sections/DevotionalsExplorer";
import { getDictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.devocionales.heroTitle,
    description: dict.devocionales.heroSubtitle,
  };
}

export default async function DevotionalsPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const d = dict.devocionales;

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="bg-navy-gradient py-24 pt-32 text-white text-center">
        <p className="text-gold-400 text-xs font-black tracking-[0.25em] uppercase mb-4">{d.heroEyebrow}</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">{d.heroTitle}</h1>
        <p className="text-navy-200 text-lg max-w-xl mx-auto leading-relaxed px-4">{d.heroSubtitle}</p>
        <div className="mt-6 h-1 w-16 rounded-full bg-gold-500 mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <DevotionalsExplorer
          locale={params.locale}
          dict={{
            count: d.count,
            countPlural: d.countPlural,
            searchTitle: d.searchTitle,
            searchPlaceholder: d.searchPlaceholder,
            searchLabel: d.searchLabel,
            categoriesTitle: d.categoriesTitle,
            allCategories: d.allCategories,
            tagsTitle: d.tagsTitle,
            featured: d.featured,
            minutesRead: d.minutesRead,
            emptyTitle: d.emptyTitle,
            emptySubtitle: d.emptySubtitle,
            clearFilters: d.clearFilters,
            noResultsTitle: d.noResultsTitle,
            noResultsSubtitle: d.noResultsSubtitle,
          }}
        />
      </div>
    </div>
  );
}
