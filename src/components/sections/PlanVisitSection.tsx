import { Shirt, Smile, Baby, Car, Clock, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/config";
import type { Locale } from "@/i18n/config";

interface PlanVisitItem { title: string; description: string; }
interface PlanVisitDict {
  ariaLabel: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  items: PlanVisitItem[];
  checklistTitle: string;
  checklistSubtitle: string;
  checklist: string[];
  checklistQuote: string;
  ctaVisit: string;
  ctaWhatsApp: string;
}

const ITEM_ICONS = [Smile, Shirt, Baby, Car, Clock];

interface Props { locale: Locale; dict: PlanVisitDict; }

export default function PlanVisitSection({ locale, dict }: Props) {
  return (
    <section id="visitar" className="py-20 sm:py-24 bg-white" aria-label={dict.ariaLabel}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader eyebrow={dict.eyebrow} title={<>{dict.title} <span className="text-gold-500">{dict.titleAccent}</span></>} subtitle={dict.subtitle} centered={false} />
            <div className="mt-10 space-y-5">
              {dict.items.map((item, i) => {
                const Icon = ITEM_ICONS[i];
                return (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-warm-100 border border-warm-200 flex items-center justify-center shrink-0 group-hover:bg-gold-50 group-hover:border-gold-200 transition-colors">
                      <Icon size={20} className="text-navy-600 group-hover:text-gold-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-navy-900 mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href={`/${locale}/visitar`} variant="gold" size="lg" className="group w-full sm:w-auto">
                {dict.ctaVisit}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href={siteConfig.social.whatsapp} external variant="outline" size="lg" className="w-full sm:w-auto">
                <MessageCircle size={16} />
                {dict.ctaWhatsApp}
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 sm:p-8 text-white shadow-navy">
            <h3 className="font-serif text-2xl font-bold mb-2">{dict.checklistTitle}</h3>
            <p className="text-navy-200 text-sm mb-7">{dict.checklistSubtitle}</p>
            <ul className="space-y-4">
              {dict.checklist.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold-400 mt-0.5 shrink-0" />
                  <span className="text-navy-100 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gold-300 font-serif text-lg italic text-center">{dict.checklistQuote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
