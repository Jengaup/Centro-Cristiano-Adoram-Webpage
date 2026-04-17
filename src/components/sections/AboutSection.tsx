import { BookOpen, Target, Eye, Flame } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    icon: BookOpen,
    title: "Quiénes Somos",
    text: "Somos una iglesia apostólica protestante que cree en la autoridad completa de las Escrituras, en la Trinidad, en la muerte y resurrección de Jesucristo, y en el poder del Espíritu Santo para transformar vidas hoy.",
  },
  {
    icon: Target,
    title: "Nuestra Misión",
    text: "Hacer discípulos de Jesucristo que adoren a Dios en espíritu y en verdad, crezcan en su Palabra y transformen sus familias, comunidades y naciones con el evangelio.",
  },
  {
    icon: Eye,
    title: "Nuestra Visión",
    text: "Ser una iglesia local viva y fiel que funcione como un centro de restauración, adoración e impacto — donde cada persona encuentre su identidad en Cristo y su propósito en el Reino de Dios.",
  },
  {
    icon: Flame,
    title: "Nuestra Fe",
    text: "Creemos en la gracia soberana de Dios, en la justificación solo por fe, en la santidad práctica y en los dones del Espíritu Santo activos hoy. Somos una iglesia bíblica, espiritual y misionera.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-24 bg-warm-50"
      aria-label="Quiénes somos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Conócenos"
          title="Una familia de fe auténtica"
          subtitle="No somos perfectos, pero somos reales. Un lugar donde las personas encuentran a Dios, hallan comunidad y descubren su propósito."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-8 shadow-card border border-warm-200 group hover:border-gold-300 hover:shadow-gold transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center mb-5 group-hover:bg-gold-50 group-hover:border-gold-200 transition-colors">
                  <Icon size={22} className="text-navy-600 group-hover:text-gold-600 transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <blockquote className="mt-16 text-center max-w-3xl mx-auto">
          <p className="font-serif text-2xl sm:text-3xl text-navy-800 italic leading-relaxed">
            "Conéctate con lo que Dios está haciendo. Hay más de lo que puedes imaginar esperándote aquí."
          </p>
          <footer className="mt-4 text-gold-600 font-semibold text-sm tracking-wider uppercase">
            — Centro Cristiano Adoram
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
