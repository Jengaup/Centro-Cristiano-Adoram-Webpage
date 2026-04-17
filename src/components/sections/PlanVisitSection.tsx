import Link from "next/link";
import { Shirt, Smile, Baby, Car, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const items = [
  {
    icon: Smile,
    title: "Ambiente",
    description:
      "Encontrarás una atmósfera cálida, informal y genuinamente amistosa. Somos una familia que se alegra de verte.",
  },
  {
    icon: Shirt,
    title: "¿Qué vestir?",
    description:
      "Ven como eres. No hay código de vestimenta. Lo que importa es que estés presente.",
  },
  {
    icon: Baby,
    title: "Niños y Familias",
    description:
      "Adoram Kids está disponible durante los servicios. Tus hijos estarán seguros, felices y aprendiendo de Dios.",
  },
  {
    icon: Car,
    title: "Estacionamiento",
    description:
      "Contamos con estacionamiento disponible. Llega sin estrés — te ayudaremos a orientarte.",
  },
  {
    icon: Clock,
    title: "¿A qué hora llegar?",
    description:
      "Te recomendamos llegar 10 a 15 minutos antes del servicio para que puedas orientarte y conocer a las personas.",
  },
];

export default function PlanVisitSection() {
  return (
    <section
      id="visitar"
      className="py-24 bg-white"
      aria-label="Planifica tu visita"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Primera Visita"
              title="Estamos listos para recibirte"
              subtitle="Sabemos que visitar una iglesia por primera vez puede sentirse intimidante. Queremos que llegues con confianza."
              centered={false}
            />

            <div className="mt-10 space-y-5">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-warm-100 border border-warm-200 flex items-center justify-center shrink-0 group-hover:bg-gold-50 group-hover:border-gold-200 transition-colors">
                      <Icon size={18} className="text-navy-600 group-hover:text-gold-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/visitar">
                <Button variant="gold" size="lg" className="group">
                  Planifica tu Visita
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href={`https://wa.me/${10000000000}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Pregúntanos por WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right: checklist box */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white shadow-navy">
            <h3 className="font-serif text-2xl font-bold mb-2">
              Tu primera visita en 5 puntos
            </h3>
            <p className="text-navy-200 text-sm mb-7">
              Todo lo que necesitas saber antes de llegar
            </p>

            <ul className="space-y-4">
              {[
                "Llegamos 10 minutos antes — hay alguien esperándote en la entrada",
                "Adoración y música en vivo para comenzar",
                "Predicación bíblica relevante a tu vida",
                "Adoram Kids cuida a tus hijos durante el servicio",
                "Al finalizar, tiempo de café y comunidad",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-gold-400 mt-0.5 shrink-0"
                  />
                  <span className="text-navy-100 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gold-300 font-serif text-lg italic text-center">
                "Hay un lugar para ti aquí."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
