import Link from "next/link";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { getFeaturedDevotional } from "@/data/devotionals";
import { formatDate } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

interface DevotionalDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  exploreAll: string;
  readFull: string;
  minutesRead: string;
}

interface Props {
  locale: Locale;
  dict: DevotionalDict;
}

export default function DevotionalHighlight({ locale, dict }: Props) {
  const devotional = getFeaturedDevotional();
  if (!devotional) return null;

  const isEn = locale === "en";
  const devTitle  = isEn && devotional.titleEn       ? devotional.titleEn       : devotional.title;
  const devExcerpt = isEn && devotional.excerptEn    ? devotional.excerptEn     : devotional.excerpt;
  const devVerse  = isEn && devotional.scriptureTextEn ? devotional.scriptureTextEn : devotional.scriptureText;

  return (
    <section id="devocional" className="py-24 bg-navy-gradient text-white" aria-label="Devocional destacado">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} light centered={false} />
            <Link href={`/${locale}/devocionales`} className="mt-8 inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-semibold text-sm transition-colors">
              {dict.exploreAll} <ArrowRight size={14} />
            </Link>
          </div>

          <div>
            <Link href={`/${locale}/devocionales/${devotional.slug}`} className="group block">
              <article className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-gold-400/40 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent pointer-events-none" />
                <div className="flex flex-wrap gap-2 mb-4">
                  {devotional.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag.id} variant="gold" className="bg-gold-500/20 border-gold-400/40 text-gold-300">{locale === "en" && tag.nameEn ? tag.nameEn : tag.name}</Badge>
                  ))}
                </div>
                <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                  <BookOpen size={12} />{devotional.scriptureReference}
                </p>
                <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors leading-tight">{devTitle}</h3>
                <blockquote className="border-l-2 border-gold-500 pl-4 mb-4">
                  <p className="text-navy-200 text-sm italic leading-relaxed">"{devVerse}"</p>
                </blockquote>
                <p className="text-navy-200 text-sm leading-relaxed mb-5">{devExcerpt}</p>
                <div className="flex items-center justify-between text-xs text-navy-300">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gold-500/30 border border-gold-500/50 flex items-center justify-center">
                      <span className="text-gold-300 font-bold text-xs">{devotional.authorName.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{devotional.authorName}</p>
                      <p className="text-navy-300 text-xs">{formatDate(devotional.publishDate)}</p>
                    </div>
                  </div>
                  {devotional.readingTimeMinutes && (
                    <span className="flex items-center gap-1"><Clock size={11} />{devotional.readingTimeMinutes} {dict.minutesRead}</span>
                  )}
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-gold-400 font-semibold text-sm group-hover:text-gold-300 transition-colors">{dict.readFull}</span>
                  <ArrowRight size={16} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
