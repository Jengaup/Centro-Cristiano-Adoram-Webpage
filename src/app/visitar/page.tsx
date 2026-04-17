import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Shirt,
  Smile,
  Baby,
  Car,
  Coffee,
  Music,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Planifica tu Visita",
  description:
    "Todo lo que necesitas saber antes de visitar Centro Cristiano Adoram por primera vez. Estamos listos para recibirte.",
};

const whatToExpect = [
  {
    icon: Clock,
    title: "Llega unos minutos antes",
    description:
      "Te recomendamos llegar 10 a 15 minutos antes del inicio del servicio. Habrá alguien esperándote en la entrada para orientarte y presentarte.",
  },
  {
    icon: Music,
    title: "Tiempo de adoración",
    description:
      "Comenzamos con un tiempo de adoración musical que prepara nuestros corazones para recibir la Palabra de Dios. Es participativo y lleno de vida.",
  },
  {
    icon: BookOpen,
    title: "La Palabra de Dios",
    description:
      "Una predicación bíblica relevante, práctica y aplicable a tu vida diaria. Enseñamos la Biblia como la verdad inspirada de Dios.",
  },
  {
    icon: Coffee,
    title: "Tiempo de comunidad",
    description:
      "Al finalizar el servicio, nos reunimos para un tiempo de café y conversación. Es el momento ideal para conocer a la familia de Adoram.",
  },
];

const faqs = [
  {
    question: "¿Debo saber de la Biblia para venir?",
    answer:
      "¡Para nada! Muchos de nuestros miembros llegaron sin conocer la Biblia. Aquí aprenderás desde cero, con amor y sin presión.",
  },
  {
    question: "¿Qué debo llevar?",
    answer:
      "Solo tu corazón abierto. Si tienes una Biblia, puedes traerla. Si no, no te preocupes — usaremos pantallas durante la predicación.",
  },
  {
    question: "¿Hay algo para mis hijos?",
    answer:
      "Sí. Adoram Kids funciona durante los servicios principales. Tus hijos estarán en manos de voluntarios capacitados, aprendiendo de Dios de forma divertida y segura.",
  },
  {
    question: "¿Me pedirán dinero?",
    answer:
      "Nunca. Aunque tenemos momentos de ofrenda para nuestros miembros, los visitantes no están obligados a participar en ningún momento.",
  },
  {
    question: "¿Debo vestirme de cierta manera?",
    answer:
      "Ven como eres. No tenemos código de vestimenta. Lo que importa es que estés presente — no lo que lleves puesto.",
  },
  {
    question: "¿Cuánto dura el servicio?",
    answer:
      "Nuestros servicios duran aproximadamente 90 minutos, incluyendo adoración, predicación y anuncios.",
  },
];

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero */}
      <div className="bg-hero-gradient py-24 pt-32 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-4">
            Primera Visita
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Estamos listos{" "}
            <span className="text-gold-400">para recibirte</span>
          </h1>
          <p className="text-navy-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Sabemos que visitar una nueva iglesia puede sentirse intimidante.
            Queremos que llegues con confianza, sabiendo exactamente qué esperar.
          </p>
          <div className="mt-6 h-1 w-16 rounded-full bg-gold-500 mx-auto" />
        </div>
      </div>

      {/* Service times & address */}
      <div className="bg-white border-b border-warm-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="w-9 h-9 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center">
                  <Clock size={18} className="text-navy-600" />
                </div>
                <h2 className="font-bold text-navy-800">Horarios</h2>
              </div>
              <ul className="space-y-1.5">
                {siteConfig.serviceTimes.map((s) => (
                  <li key={s.name} className="text-sm text-slate-600">
                    <span className="font-semibold text-navy-800">{s.day}</span>{" "}
                    {s.time} —{" "}
                    <span className="text-warm-500">{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="w-9 h-9 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center">
                  <MapPin size={18} className="text-navy-600" />
                </div>
                <h2 className="font-bold text-navy-800">Ubicación</h2>
              </div>
              <p className="text-sm text-slate-600">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}
              </p>
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 hover:text-gold-700 text-sm font-semibold underline underline-offset-2 mt-1 inline-block transition-colors"
              >
                Abrir en Google Maps →
              </a>
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="w-9 h-9 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center">
                  <Car size={18} className="text-navy-600" />
                </div>
                <h2 className="font-bold text-navy-800">Estacionamiento</h2>
              </div>
              <p className="text-sm text-slate-600">
                Estacionamiento disponible. Nuestros voluntarios de bienvenida te
                orientarán al llegar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* What to expect */}
        <section>
          <SectionHeader
            eyebrow="El Servicio"
            title="¿Qué vas a experimentar?"
            subtitle="Cada servicio es diseñado para que te encuentres con Dios en un ambiente cálido y auténtico."
            centered={false}
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatToExpect.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-warm-200 p-6 shadow-card hover:border-gold-200 hover:shadow-gold transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-warm-50 border border-warm-200 flex items-center justify-center mb-4 group-hover:bg-gold-50 group-hover:border-gold-200 transition-colors">
                    <Icon size={20} className="text-navy-600 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Kids section */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
              <Baby size={26} className="text-emerald-700" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-emerald-900 mb-2">
                Adoram Kids: tus hijos en buenas manos
              </h2>
              <p className="text-emerald-800 text-sm leading-relaxed mb-4">
                Durante los servicios principales, Adoram Kids ofrece un programa
                especial para niños de 0 a 12 años. Nuestros voluntarios son
                capacitados, comprometidos y aman a los niños. Tus hijos
                aprenderán de Dios de forma divertida, segura e impactante.
              </p>
              <ul className="space-y-2">
                {[
                  "Ambiente seguro y supervisado",
                  "Actividades adaptadas por edad",
                  "Maestros voluntarios capacitados",
                  "Informe al final de cada servicio",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-emerald-800">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            title="¿Tienes preguntas?"
            subtitle="Aquí respondemos las dudas más comunes de personas que visitan por primera vez."
            centered={false}
          />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-warm-200 p-6 shadow-card"
              >
                <h3 className="font-bold text-navy-800 mb-2">{faq.question}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-navy-gradient rounded-2xl p-10 text-white">
          <h2 className="font-serif text-3xl font-bold mb-3">
            ¿Listo para visitarnos?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-md mx-auto">
            Si tienes alguna pregunta antes de venir, escríbenos — con gusto te respondemos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-lg transition-colors"
            >
              <MessageCircle size={18} />
              Escríbenos por WhatsApp
            </a>
            <Link
              href="/#oracion"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors"
            >
              Enviar petición de oración
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
