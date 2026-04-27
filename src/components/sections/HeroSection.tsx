import Link from "next/link";
import { ArrowRight, Calendar, PlayCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";

interface HeroDict {
  eyebrow: string;
  headline1: string;
  headlineAccent: string;
  headline2: string;
  subheadline: string;
  cta1: string;
  cta2: string;
  trust1: string;
  trust2: string;
  trust3: string;
}

interface Props {
  locale: Locale;
  dict: HeroDict;
}

export default function HeroSection({ locale, dict }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient" aria-label="Bienvenida">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Atmospheric glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-navy-500/40 blur-3xl" />
      </div>

      {/* Decorative concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[560px] h-[560px] rounded-full border border-white/[0.04]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-gold-500/[0.06]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        {dict.eyebrow && (
          <p className="animate-fade-in text-gold-400 text-xs sm:text-sm font-black tracking-[0.35em] uppercase mb-6">
            {dict.eyebrow}
          </p>
        )}
        <h1 className="animate-slide-up font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
          {dict.headline1}{" "}
          <span className="text-gold-400 relative inline-block">
            {dict.headlineAccent}
            <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
              <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#E8852A" strokeWidth="2.5" fill="none" opacity="0.8" />
            </svg>
          </span>{" "}
          {dict.headline2}
        </h1>
        <p className="animate-slide-up text-navy-100 text-base sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
          {dict.subheadline}
        </p>
        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
          <Link href={`/${locale}/visitar`}>
            <Button variant="gold" size="xl" className="group w-full sm:w-auto">
              <Calendar size={20} className="shrink-0" />
              {dict.cta1}
              <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <a
            href="#transmision"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white border border-white/25 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <PlayCircle size={20} className="text-gold-400 shrink-0" />
            {dict.cta2}
          </a>
        </div>

        {/* Trust badges */}
        <div className="animate-fade-in mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
          {[dict.trust1, dict.trust2, dict.trust3].map((t) => (
            <div key={t} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] border border-white/10 text-navy-200 text-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-gold-400 animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
}
