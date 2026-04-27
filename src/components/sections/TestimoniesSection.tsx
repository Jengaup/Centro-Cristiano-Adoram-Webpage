import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonies } from "@/data/testimonies";
import type { Locale } from "@/i18n/config";

interface TestimoniesDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  yearsAt: string;
  shareTitle: string;
  shareLink: string;
}

interface Props {
  locale: Locale;
  dict: TestimoniesDict;
}

export default function TestimoniesSection({ locale, dict }: Props) {
  return (
    <section id="testimonios" className="py-24 bg-warm-50" aria-label="Testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonies.map((testimony) => (
            <article key={testimony.id} className="relative bg-white rounded-2xl p-8 shadow-card border border-warm-200 hover:border-gold-200 hover:shadow-gold transition-all duration-300 group overflow-hidden">
              {/* Decorative quote mark background */}
              <Quote size={80} className="absolute -top-2 -right-2 text-warm-100 fill-warm-100 group-hover:text-gold-50 group-hover:fill-gold-50 transition-colors duration-500 pointer-events-none" />
              <div className="relative">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 min-h-12 self-stretch bg-gradient-to-b from-gold-500 to-gold-300 rounded-full shrink-0" />
                  <p className="font-serif text-lg font-bold text-navy-800 italic leading-snug">"{testimony.highlight}"</p>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base pl-4">{testimony.excerpt}</p>
                <div className="mt-6 pt-5 border-t border-warm-200 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center shrink-0 group-hover:from-gold-500 group-hover:to-gold-700 transition-all duration-300 shadow-sm">
                    <span className="font-bold text-white text-sm">{testimony.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy-800 text-sm">{testimony.name}</p>
                    <div className="flex items-center gap-2">
                      {testimony.role && <p className="text-warm-500 text-xs">{testimony.role}</p>}
                      {testimony.yearsInChurch && (
                        <span className="text-gold-500 text-xs font-semibold">· {testimony.yearsInChurch} {dict.yearsAt}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-base mb-4">{dict.shareTitle}</p>
          <a href={`/${locale}#oracion`} className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-bold text-sm underline underline-offset-2 transition-colors">
            {dict.shareLink}
          </a>
        </div>
      </div>
    </section>
  );
}
