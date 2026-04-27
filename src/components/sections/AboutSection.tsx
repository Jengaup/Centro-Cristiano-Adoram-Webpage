import { BookOpen, Target, Eye, Flame } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

interface Pillar { title: string; text: string; }
interface AboutDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  pillars: Pillar[];
}

const PILLAR_ICONS = [BookOpen, Target, Eye, Flame];

export default function AboutSection({ dict }: { dict: AboutDict }) {
  return (
    <section id="nosotros" className="py-24 bg-warm-50" aria-label="Quiénes somos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <div key={pillar.title} className="relative bg-white rounded-2xl p-8 shadow-card border border-warm-200 group hover:border-gold-300 hover:shadow-gold transition-all duration-300 overflow-hidden">
                {/* Large background number */}
                <span className="absolute -top-3 -right-1 text-[6.5rem] font-black leading-none select-none pointer-events-none text-warm-100 group-hover:text-gold-50 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center mb-5 group-hover:bg-gold-50 group-hover:border-gold-200 transition-colors duration-300 shadow-sm">
                    <Icon size={22} className="text-navy-600 group-hover:text-gold-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{pillar.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <blockquote className="mt-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gold-200" />
            <span className="w-2 h-2 rotate-45 bg-gold-400 shrink-0" />
            <div className="h-px flex-1 bg-gold-200" />
          </div>
          <p className="font-serif text-2xl sm:text-3xl text-navy-800 italic leading-relaxed">{dict.quote}</p>
          <footer className="mt-5 flex items-center justify-center gap-2 text-gold-600 font-bold text-xs tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-500 shrink-0" />
            {dict.quoteAuthor}
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-500 shrink-0" />
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
