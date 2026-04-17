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
              <div key={ministry.id} className={`rounded-2xl border p-6 bg-white transition-all duration-300 hover:shadow-warm hover:-translate-y-1 group cursor-default ${ministry.bgColor}`}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl leading-none mt-0.5" role="img" aria-hidden="true">{ministry.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-serif text-lg font-bold mb-1 ${ministry.color}`}>{item.name}</h3>
                    <p className="text-xs font-semibold text-warm-500 mb-2 italic">{item.tagline}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {item.meetingTime && (
                  <div className="mt-4 pt-4 border-t border-current/10 flex items-center justify-between">
                    <p className="text-xs text-warm-500">
                      <span className="font-semibold text-slate-600">{dict.scheduleLabel}</span> {item.meetingTime}
                    </p>
                    <ArrowRight size={14} className={`${ministry.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                )}
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
