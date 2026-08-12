"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BookOpen, Clock, Search, Tag, X } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { getPublishedDevotionals, devotionalCategories, devotionalTags } from "@/data/devotionals";
import { formatDate, cn } from "@/lib/utils";

interface ExplorerDict {
  count: string;
  countPlural: string;
  searchTitle: string;
  searchPlaceholder: string;
  searchLabel: string;
  categoriesTitle: string;
  allCategories: string;
  tagsTitle: string;
  featured: string;
  minutesRead: string;
  emptyTitle: string;
  emptySubtitle: string;
  clearFilters: string;
  noResultsTitle: string;
  noResultsSubtitle: string;
}

export default function DevotionalsExplorer({ locale, dict }: { locale: string; dict: ExplorerDict }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [tags, setTags] = useState<Set<string>>(new Set());

  const isEn = locale === "en";
  const all = useMemo(() => getPublishedDevotionals(), []);

  const toggleTag = (id: string) => {
    setTags((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const clearAll = () => {
    setQuery("");
    setCategory(null);
    setTags(new Set());
  };

  const hasFilters = query.trim() !== "" || category !== null || tags.size > 0;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((d) => {
      if (category && d.categoryId !== category) return false;
      if (tags.size > 0 && !d.tags.some((t) => tags.has(t.id))) return false;
      if (q) {
        const haystack = [
          d.title,
          d.titleEn ?? "",
          d.excerpt,
          d.excerptEn ?? "",
          d.scriptureReference,
          d.authorName,
          ...d.tags.map((t) => t.name),
          ...d.tags.map((t) => t.nameEn ?? ""),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [all, query, category, tags]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-10">
      <aside className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 space-y-6">
          <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-5">
            <h2 className="font-bold text-navy-800 text-sm mb-3">{dict.searchTitle}</h2>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-500" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={dict.searchPlaceholder}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-100 outline-none text-sm bg-warm-50 focus:bg-white transition-colors"
                aria-label={dict.searchLabel}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-5">
            <h2 className="font-bold text-navy-800 text-sm mb-3">{dict.categoriesTitle}</h2>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => setCategory(null)}
                  aria-pressed={category === null}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors focus-ring",
                    category === null
                      ? "font-semibold text-navy-600 bg-navy-50 hover:bg-navy-100"
                      : "text-slate-600 hover:bg-warm-100 hover:text-navy-700"
                  )}
                >
                  {dict.allCategories}
                </button>
              </li>
              {devotionalCategories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => setCategory(category === cat.id ? null : cat.id)}
                    aria-pressed={category === cat.id}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors focus-ring",
                      category === cat.id
                        ? "font-semibold text-navy-600 bg-navy-50 hover:bg-navy-100"
                        : "text-slate-600 hover:bg-warm-100 hover:text-navy-700"
                    )}
                  >
                    {isEn && cat.nameEn ? cat.nameEn : cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-warm-200 shadow-card p-5">
            <h2 className="flex items-center gap-1.5 font-bold text-navy-800 text-sm mb-3">
              <Tag size={13} />
              {dict.tagsTitle}
            </h2>
            <div className="flex flex-wrap gap-2">
              {devotionalTags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  aria-pressed={tags.has(tag.id)}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-semibold transition-colors border focus-ring",
                    tags.has(tag.id)
                      ? "bg-navy-600 text-white border-navy-600"
                      : "bg-warm-100 text-slate-600 border-warm-200 hover:bg-navy-100 hover:text-navy-700"
                  )}
                >
                  {isEn && tag.nameEn ? tag.nameEn : tag.name}
                </button>
              ))}
            </div>
          </div>

          {hasFilters && (
            <button
              onClick={clearAll}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-warm-300 bg-white text-navy-700 text-sm font-semibold hover:bg-warm-50 hover:border-gold-300 transition-colors focus-ring"
            >
              <X size={14} />
              {dict.clearFilters}
            </button>
          )}
        </div>
      </aside>

      <main className="lg:col-span-3">
        <p className="text-slate-500 text-sm mb-6" role="status" aria-live="polite">
          {filtered.length} {filtered.length !== 1 ? dict.countPlural : dict.count}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((devotional) => (
            <article key={devotional.id}>
              <Link
                href={`/${locale}/devocionales/${devotional.slug}`}
                className="group block h-full bg-white rounded-2xl border border-warm-200 hover:border-gold-300 hover:shadow-gold transition-all duration-300 overflow-hidden shadow-card focus-ring"
              >
                <div className="h-1 bg-gradient-to-r from-gold-400 to-gold-600" />
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {devotional.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag.id} variant="gold">{isEn && tag.nameEn ? tag.nameEn : tag.name}</Badge>
                    ))}
                    {devotional.isFeatured && (
                      <Badge variant="navy">{dict.featured}</Badge>
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
                        <p className="text-xs text-warm-500">{formatDate(devotional.publishDate, { day: "numeric", month: "short" }, locale)}</p>
                      </div>
                    </div>
                    {devotional.readingTimeMinutes && (
                      <span className="flex items-center gap-1 text-xs text-warm-500">
                        <Clock size={11} />{devotional.readingTimeMinutes} {dict.minutesRead}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <BookOpen size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg font-semibold">{hasFilters ? dict.noResultsTitle : dict.emptyTitle}</p>
            <p className="text-sm mt-1">{hasFilters ? dict.noResultsSubtitle : dict.emptySubtitle}</p>
            {hasFilters && (
              <button
                onClick={clearAll}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-600 hover:bg-navy-700 text-white text-sm font-semibold transition-colors focus-ring"
              >
                <X size={14} />
                {dict.clearFilters}
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
