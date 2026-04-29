import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Search, Tag } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { getPublishedDevotionals, devotionalCategories, devotionalTags } from "@/data/devotionals";
import { formatDate } from "@/lib/utils";
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
  const devotionals = getPublishedDevotionals();
  const isEn = params.locale === "en";

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="bg-navy-gradient py-24 pt-32 text-white text-center">
        <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-4">{d.heroEyebrow}</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">{d.heroTitle}</h1>
        <p className="text-navy-200 text-lg max-w-xl mx-auto leading-relaxed px-4">{d.heroSubtitle}</p>
        <div className="mt-6 h-1 w-16 rounded-full bg-gold-500 mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-5">
                <h2 className="font-bold text-navy-800 text-sm mb-3">{d.searchTitle}</h2>
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-500" />
                  <input
                    type="search"
                    placeholder={d.searchPlaceholder}
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-warm-50 focus:bg-white transition-colors"
                    aria-label={d.searchLabel}
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-5">
                <h2 className="font-bold text-navy-800 text-sm mb-3">{d.categoriesTitle}</h2>
                <ul className="space-y-1.5">
                  <li>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-navy-600 bg-navy-50 hover:bg-navy-100 transition-colors">
                      {d.allCategories}
                    </button>
                  </li>
                  {devotionalCategories.map((cat) => (
                    <li key={cat.id}>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-warm-100 hover:text-navy-700 transition-colors">
                        {params.locale === "en" && cat.nameEn ? cat.nameEn : cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-5">
                <h2 className="flex items-center gap-1.5 font-bold text-navy-800 text-sm mb-3">
                  <Tag size={13} />
                  {d.tagsTitle}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {devotionalTags.map((tag) => (
                    <button
                      key={tag.id}
                      className="px-2.5 py-1 rounded-full bg-warm-100 text-slate-600 text-xs font-semibold hover:bg-navy-100 hover:text-navy-700 transition-colors border border-warm-200"
                    >
                      {params.locale === "en" && tag.nameEn ? tag.nameEn : tag.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <p className="text-slate-500 text-sm mb-6">
              {devotionals.length} {devotionals.length !== 1 ? d.countPlural : d.count}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {devotionals.map((devotional) => (
                <article key={devotional.id}>
                  <Link
                    href={`/${params.locale}/devocionales/${devotional.slug}`}
                    className="group block h-full bg-white rounded-2xl border border-warm-200 hover:border-gold-300 hover:shadow-gold transition-all duration-300 overflow-hidden shadow-card"
                  >
                    <div className="h-1 bg-gradient-to-r from-gold-400 to-gold-600" />
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {devotional.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag.id} variant="gold">{params.locale === "en" && tag.nameEn ? tag.nameEn : tag.name}</Badge>
                        ))}
                        {devotional.isFeatured && (
                          <Badge variant="navy">{d.featured}</Badge>
                        )}
                      </div>
                      <p className="text-gold-600 text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 mb-2">
                        <BookOpen size={11} />{devotional.scriptureReference}
                      </p>
                      <h2 className="font-serif text-xl font-bold text-navy-900 group-hover:text-navy-700 transition-colors leading-snug mb-2">
                        {isEn && devotional.titleEn ? devotional.titleEn : devotional.title}
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
                        {isEn && devotional.excerptEn ? devotional.excerptEn : devotional.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-warm-100">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-navy-100 flex items-center justify-center">
                            <span className="text-navy-700 font-bold text-xs">{devotional.authorName.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-navy-700">{devotional.authorName}</p>
                            <p className="text-xs text-warm-500">{formatDate(devotional.publishDate, { day: "numeric", month: "short" })}</p>
                          </div>
                        </div>
                        {devotional.readingTimeMinutes && (
                          <span className="flex items-center gap-1 text-xs text-warm-500">
                            <Clock size={11} />{devotional.readingTimeMinutes} {d.minutesRead}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {devotionals.length === 0 && (
              <div className="text-center py-20 text-slate-400">
                <BookOpen size={48} className="mx-auto mb-4 opacity-20" />
                <p className="text-lg font-semibold">{d.emptyTitle}</p>
                <p className="text-sm mt-1">{d.emptySubtitle}</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
