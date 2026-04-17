import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonies } from "@/data/testimonies";

export default function TestimoniesSection() {
  return (
    <section
      id="testimonios"
      className="py-24 bg-warm-50"
      aria-label="Testimonios"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonios"
          title="Vidas transformadas por Dios"
          subtitle="Estas no son solo historias bonitas — son evidencia del poder real de Dios obrando en personas reales."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonies.map((testimony) => (
            <article
              key={testimony.id}
              className="bg-white rounded-2xl p-8 shadow-card border border-warm-200 hover:border-gold-200 hover:shadow-gold transition-all duration-300 group"
            >
              {/* Highlight */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-1 h-full min-h-12 bg-gold-500 rounded-full shrink-0" />
                <p className="font-serif text-lg font-bold text-navy-800 italic leading-snug">
                  "{testimony.highlight}"
                </p>
              </div>

              {/* Quote icon */}
              <div className="relative">
                <Quote
                  size={28}
                  className="text-gold-200 fill-gold-100 mb-3"
                />
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {testimony.excerpt}
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-5 border-t border-warm-200 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy-100 to-warm-200 flex items-center justify-center shrink-0 group-hover:from-gold-100 group-hover:to-warm-200 transition-all">
                  <span className="font-bold text-navy-700 text-sm">
                    {testimony.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-navy-800 text-sm">{testimony.name}</p>
                  <div className="flex items-center gap-2">
                    {testimony.role && (
                      <p className="text-warm-500 text-xs">{testimony.role}</p>
                    )}
                    {testimony.yearsInChurch && (
                      <span className="text-gold-500 text-xs">
                        · {testimony.yearsInChurch} años en Adoram
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA below */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-base mb-4">
            ¿Tienes un testimonio que compartir?
          </p>
          <a
            href="/#oracion"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-bold text-sm underline underline-offset-2 transition-colors"
          >
            Escríbenos — queremos escucharte
          </a>
        </div>
      </div>
    </section>
  );
}
