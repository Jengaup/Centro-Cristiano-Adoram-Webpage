import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Car, Baby, MessageCircle, ArrowRight, CheckCircle2, Music, BookOpen, Coffee } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/config";
import { getDictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

const EXPECT_ICONS = [Clock, Music, BookOpen, Coffee];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  const d = dict.visitPage;
  return {
    title: `${d.heroTitle} ${d.heroTitleAccent}`,
    description: d.heroSubtitle,
  };
}

export default async function VisitPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const d = dict.visitPage;

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero */}
      <div className="bg-hero-gradient py-24 pt-32 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-4">{d.heroEyebrow}</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            {d.heroTitle} <span className="text-gold-400">{d.heroTitleAccent}</span>
          </h1>
          <p className="text-navy-100 text-lg leading-relaxed max-w-2xl mx-auto">{d.heroSubtitle}</p>
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
                <h2 className="font-bold text-navy-800">{d.schedulesTitle}</h2>
              </div>
              <ul className="space-y-1.5">
                {siteConfig.serviceTimes.map((s) => (
                  <li key={s.name} className="text-sm text-slate-600">
                    <span className="font-semibold text-navy-800">{s.day}</span> {s.time} {" "}
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
                <h2 className="font-bold text-navy-800">{d.locationTitle}</h2>
              </div>
              <div className="space-y-4">
                {siteConfig.locations.map((loc) => (
                  <div key={loc.name}>
                    <p className="text-sm font-bold text-navy-700">{loc.city}, {loc.state}</p>
                    {loc.street && (
                      <p className="text-sm text-slate-600">{loc.street}</p>
                    )}
                    {loc.scheduleNote && (
                      <p className="text-xs text-gold-600 italic mt-0.5">{loc.scheduleNote}</p>
                    )}
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-600 hover:text-gold-700 text-sm font-semibold underline underline-offset-2 mt-0.5 inline-block transition-colors"
                    >
                      {d.openMaps}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="w-9 h-9 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center">
                  <Car size={18} className="text-navy-600" />
                </div>
                <h2 className="font-bold text-navy-800">{d.parkingTitle}</h2>
              </div>
              <p className="text-sm text-slate-600">{d.parkingText}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* What to expect */}
        <section>
          <SectionHeader
            eyebrow={d.expectEyebrow}
            title={d.expectTitle}
            subtitle={d.expectSubtitle}
            centered={false}
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {d.expectItems.map((item, i) => {
              const Icon = EXPECT_ICONS[i];
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-warm-200 p-6 shadow-card hover:border-gold-200 hover:shadow-gold transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-warm-50 border border-warm-200 flex items-center justify-center mb-4 group-hover:bg-gold-50 group-hover:border-gold-200 transition-colors">
                    <Icon size={20} className="text-navy-600 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
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
              <h2 className="font-serif text-2xl font-bold text-emerald-900 mb-2">{d.kidsTitle}</h2>
              <p className="text-emerald-800 text-sm leading-relaxed mb-4">{d.kidsText}</p>
              <ul className="space-y-2">
                {d.kidsBullets.map((point) => (
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
            eyebrow={d.faqEyebrow}
            title={d.faqTitle}
            subtitle={d.faqSubtitle}
            centered={false}
          />
          <div className="mt-10 space-y-4">
            {d.faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl border border-warm-200 p-6 shadow-card">
                <h3 className="font-bold text-navy-800 mb-2">{faq.question}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-navy-gradient rounded-2xl p-10 text-white">
          <h2 className="font-serif text-3xl font-bold mb-3">{d.finalTitle}</h2>
          <p className="text-navy-200 text-lg mb-8 max-w-md mx-auto">{d.finalText}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-lg transition-colors"
            >
              <MessageCircle size={18} />
              {d.finalWhatsApp}
            </a>
            <Link
              href={`/${params.locale}#oracion`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors"
            >
              {d.finalPrayer}
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
