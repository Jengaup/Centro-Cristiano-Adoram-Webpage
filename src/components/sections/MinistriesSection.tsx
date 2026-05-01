import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ministries } from "@/data/ministries";
import type { Locale } from "@/i18n/config";

interface MinistryItem {
  name: string;
  tagline: string;
  description: string;
  meetingTime: string;
}

interface MinistriesDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  scheduleLabel: string;
  contactText: string;
  contactLink: string;
  contactEnd: string;
  items: MinistryItem[];
}

interface Props {
  locale: Locale;
  dict: MinistriesDict;
}

export default function MinistriesSection({ locale, dict }: Props) {
  return (
    <section id="ministerios" className="py-24 bg-warm-50" aria-label="Ministerios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, i) => {
            const item = dict.items[i] ?? { name: ministry.name, tagline: ministry.tagline, description: ministry.description, meetingTime: ministry.meetingTime ?? "" };
            return (
              <div key={ministry.id} className={`relative rounded-2xl border p-6 bg-white transition-all duration-300 hover:shadow-warm hover:-translate-y-1.5 group cursor-default overflow-hidden ${ministry.bgColor}`}>
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/70 border border-current/10 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl leading-none" role="img" aria-hidden="true">{ministry.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h3 className={`font-serif text-lg font-bold mb-0.5 ${ministry.color}`}>{item.name}</h3>
                      <p className="text-xs font-semibold text-warm-500 italic">{item.tagline}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  {item.meetingTime && (
                    <div className="mt-4 pt-4 border-t border-current/10 flex items-center justify-between">
                      <p className="text-xs text-warm-500">
                        <span className="font-semibold text-slate-600">{dict.scheduleLabel}</span>{" "}{item.meetingTime}
                      </p>
                      <ArrowRight size={14} className={`${ministry.color} opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5`} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-slate-500 text-sm">
          {dict.contactText}{" "}
          <a href={`/${locale}#oracion`} className="text-gold-600 hover:text-gold-700 font-semibold underline underline-offset-2 transition-colors">{dict.contactLink}</a>
          {" "}{dict.contactEnd}
        </p>
      </div>
    </section>
  );
}
