import { Quote } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function PastorWelcome() {
  return (
    <section
      id="pastor"
      className="py-24 bg-white"
      aria-label="Mensaje del pastor"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden bg-gradient-to-br from-navy-100 to-warm-200 aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-navy flex items-center justify-center">
              {/* Avatar placeholder */}
              <div className="text-center p-8">
                <div className="w-28 h-28 rounded-full bg-navy-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-4xl">
                    {siteConfig.pastorName.charAt(0)}
                  </span>
                </div>
                <p className="text-navy-600 font-semibold text-sm">
                  Foto del Pastor
                </p>
                <p className="text-warm-500 text-xs mt-1">
                  (Actualiza con foto real)
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gold-500/10 border-2 border-gold-400/30 -z-0" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-navy-100 border-2 border-navy-200/50 -z-0" />

            {/* Name card */}
            <div className="absolute -bottom-3 left-8 lg:left-4 z-20 bg-white shadow-warm rounded-xl px-5 py-3 border border-warm-200">
              <p className="font-bold text-navy-800 text-sm">{siteConfig.pastorName}</p>
              <p className="text-gold-600 text-xs font-semibold tracking-wide uppercase">
                {siteConfig.pastorTitle}
              </p>
            </div>
          </div>

          {/* Message */}
          <div>
            <p className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-4">
              Mensaje Pastoral
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
              Hay un lugar{" "}
              <span className="text-gold-500">preparado</span> para ti
            </h2>

            <div className="relative">
              <Quote
                size={40}
                className="absolute -top-2 -left-4 text-gold-200 fill-gold-100"
              />
              <div className="pl-6 space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
                <p>
                  Bienvenido. Si estás leyendo esto, quiero que sepas que no llegaste aquí por accidente. Dios tiene algo especial preparado para ti, y nosotros en{" "}
                  <strong className="text-navy-800">Adoram</strong> estamos aquí para caminar contigo en ese proceso.
                </p>
                <p>
                  No importa de dónde vengas, qué hayas vivido o cuántas veces hayas fallado. Aquí encontrarás una familia que te recibe, te acepta y cree en tu potencial en Cristo.
                </p>
                <p>
                  Si eres nuevo, te invito a planificar tu primera visita. Nuestras puertas — y nuestros corazones — están abiertos para ti y tu familia.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-warm-200" />
              <p className="text-navy-500 text-sm italic">
                Con cariño pastoral
              </p>
              <div className="h-px flex-1 bg-warm-200" />
            </div>

            <p className="mt-4 font-serif text-lg text-navy-700 font-bold italic text-center">
              {siteConfig.pastorName}
            </p>
            <p className="text-gold-600 text-xs font-semibold tracking-widest uppercase text-center mt-1">
              {siteConfig.pastorTitle}
            </p>

            <div className="mt-8 bg-warm-50 rounded-xl p-4 border border-warm-200">
              <p className="text-navy-700 text-sm font-semibold text-center mb-1">
                ¿Primera vez? Tenemos algo especial para ti.
              </p>
              <a
                href="/visitar"
                className="block text-center text-gold-600 hover:text-gold-700 text-sm font-bold transition-colors underline underline-offset-2"
              >
                Conoce qué esperar en tu primera visita →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
