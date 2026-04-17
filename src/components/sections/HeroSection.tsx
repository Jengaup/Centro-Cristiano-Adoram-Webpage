import Link from "next/link";
import { ArrowRight, Calendar, PlayCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
      aria-label="Bienvenida"
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial light glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      {/* Cross accent light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <div className="relative">
          <div className="w-1 h-48 bg-gold-400 rounded-full mx-auto" />
          <div className="w-32 h-1 bg-gold-400 rounded-full absolute top-16 left-1/2 -translate-x-1/2" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        {/* Eyebrow */}
        <p className="animate-fade-in text-gold-400 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-6">
          Iglesia Apostólica Protestante
        </p>

        {/* Headline */}
        <h1 className="animate-slide-up font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Un lugar donde{" "}
          <span className="text-gold-400 relative inline-block">
            el cielo
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="6"
              viewBox="0 0 200 6"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 3 Q50 0 100 3 Q150 6 200 3"
                stroke="#C9A84C"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </span>{" "}
          toca la tierra
        </h1>

        {/* Subheadline */}
        <p className="animate-slide-up text-navy-100 text-base sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
          Bienvenido a{" "}
          <strong className="text-white">Centro Cristiano Adoram</strong> —
          una familia de fe donde la adoración es genuina, la Palabra es viva
          y <em>hay un lugar para ti</em>.
        </p>

        {/* CTAs */}
        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
          <Link href="/visitar">
            <Button variant="gold" size="xl" className="group">
              <Calendar size={20} className="shrink-0" />
              Planifica tu Visita
              <ArrowRight
                size={18}
                className="shrink-0 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </Link>
          <a
            href="#transmision"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 hover:border-white/60 transition-all duration-200"
          >
            <PlayCircle size={22} className="text-gold-400" />
            Ver en Vivo
          </a>
        </div>

        {/* Trust signals */}
        <div className="animate-fade-in mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-navy-200 text-sm [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span>Domingos 10:00 AM</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span>Familias bienvenidas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span>Estamos listos para recibirte</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-gold-400 animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
}
