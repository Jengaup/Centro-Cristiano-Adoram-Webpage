import Image from "next/image";
import { Quote } from "lucide-react";
import { siteConfig } from "@/data/config";
import type { Locale } from "@/i18n/config";

interface PastorDict {
  eyebrow: string;
  title: string;
  titleAccent: string;
  titleEnd: string;
  message1: string;
  message2: string;
  message3: string;
  signature: string;
  firstVisitTeaser: string;
  firstVisitLink: string;
  photoPlaceholder: string;
  photoPlaceholderSub: string;
}

interface Props {
  locale: Locale;
  dict: PastorDict;
}

export default function PastorWelcome({ locale, dict }: Props) {
  return (
    <section id="pastor" className="py-24 bg-white" aria-label="Mensaje del pastor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Pastor photo */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-navy">
              <Image
                src="/pastores.jpeg"
                alt={siteConfig.pastorName}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gold-500/10 border-2 border-gold-400/30 -z-0" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-navy-100 border-2 border-navy-200/50 -z-0" />
            <div className="absolute -bottom-3 left-4 z-20 bg-white shadow-warm rounded-xl px-4 py-3 border border-warm-200 max-w-[calc(100%-1.5rem)]">
              <p className="font-bold text-navy-800 text-sm leading-snug">{siteConfig.pastorName}</p>
              <p className="text-gold-600 text-xs font-semibold tracking-wide uppercase">{siteConfig.pastorTitle}</p>
            </div>
          </div>

          {/* Message */}
          <div>
            <p className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-4">{dict.eyebrow}</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
              {dict.title}{" "}
              <span className="text-gold-500">{dict.titleAccent}</span>{" "}
              {dict.titleEnd}
            </h2>
            <div className="relative">
              <Quote size={40} className="absolute -top-2 -left-4 text-gold-200 fill-gold-100" />
              <div className="pl-6 space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
                <p>{dict.message1}</p>
                <p>{dict.message2}</p>
                <p>{dict.message3}</p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-warm-200" />
              <p className="text-navy-500 text-sm italic">{dict.signature}</p>
              <div className="h-px flex-1 bg-warm-200" />
            </div>
            <p className="mt-4 font-serif text-lg text-navy-700 font-bold italic text-center">{siteConfig.pastorName}</p>
            <p className="text-gold-600 text-xs font-semibold tracking-widest uppercase text-center mt-1">{siteConfig.pastorTitle}</p>
            <div className="mt-8 bg-warm-50 rounded-xl p-4 border border-warm-200">
              <p className="text-navy-700 text-sm font-semibold text-center mb-1">{dict.firstVisitTeaser}</p>
              <a href={`/${locale}/visitar`} className="block text-center text-gold-600 hover:text-gold-700 text-sm font-bold transition-colors underline underline-offset-2">
                {dict.firstVisitLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
