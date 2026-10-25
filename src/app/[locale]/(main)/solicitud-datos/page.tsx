import type { Metadata } from "next";
import { CheckCircle2, Mail } from "lucide-react";
import { siteConfig } from "@/data/config";
import { getDictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.dataRequestPage.heroTitle,
    description: dict.dataRequestPage.intro,
    alternates: {
      languages: { es: "/es/solicitud-datos", en: "/en/solicitud-datos" },
    },
  };
}

export default async function DataRequestPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const d = dict.dataRequestPage;
  const mailtoHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(d.howToRequest.emailSubject)}`;

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="bg-navy-gradient py-20 pt-32 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-xs font-black tracking-[0.25em] uppercase mb-4">{d.heroEyebrow}</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3">{d.heroTitle}</h1>
          <p className="text-navy-300 text-sm">{d.lastUpdated}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-slate-600 text-base leading-relaxed mb-10">{d.intro}</p>

        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">{d.whatYouCanRequest.heading}</h2>
          <ul className="space-y-3">
            {d.whatYouCanRequest.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-2xl border border-warm-200 shadow-card p-6 sm:p-8 mb-8">
          <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">{d.howToRequest.heading}</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">{d.howToRequest.text}</p>
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-600 hover:bg-navy-700 text-white text-sm font-bold transition-colors focus-ring"
          >
            <Mail size={16} />
            {d.howToRequest.emailButtonLabel}
          </a>
        </section>

        <p className="text-slate-500 text-sm leading-relaxed italic">{d.responseNote}</p>
      </div>
    </div>
  );
}
