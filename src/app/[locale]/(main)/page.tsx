import { getDictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import HeroSection from "@/components/sections/HeroSection";
import QuickAccess from "@/components/sections/QuickAccess";
import AboutSection from "@/components/sections/AboutSection";
import PastorWelcome from "@/components/sections/PastorWelcome";
import MinistriesSection from "@/components/sections/MinistriesSection";
import EventsSection from "@/components/sections/EventsSection";
import DevotionalHighlight from "@/components/sections/DevotionalHighlight";
import TestimoniesSection from "@/components/sections/TestimoniesSection";
import PlanVisitSection from "@/components/sections/PlanVisitSection";
import PrayerRequestSection from "@/components/sections/PrayerRequestSection";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function HomePage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <HeroSection locale={params.locale} dict={dict.hero} />
      <QuickAccess locale={params.locale} dict={dict.quickAccess} />
      <AboutSection dict={dict.about} />
      <PastorWelcome locale={params.locale} dict={dict.pastor} />
      <MinistriesSection locale={params.locale} dict={dict.ministries} />
      <EventsSection dict={dict.events} />
<DevotionalHighlight locale={params.locale} dict={dict.devotional} />
      <TestimoniesSection locale={params.locale} dict={dict.testimonies} />
      <PlanVisitSection locale={params.locale} dict={dict.planVisit} />
      <PrayerRequestSection dict={dict.prayer} />
    </>
  );
}
