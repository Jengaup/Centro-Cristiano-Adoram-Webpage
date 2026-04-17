import HeroSection from "@/components/sections/HeroSection";
import QuickAccess from "@/components/sections/QuickAccess";
import YouTubeLiveSection from "@/components/sections/YouTubeLiveSection";
import AboutSection from "@/components/sections/AboutSection";
import PastorWelcome from "@/components/sections/PastorWelcome";
import MinistriesSection from "@/components/sections/MinistriesSection";
import EventsSection from "@/components/sections/EventsSection";
import SermonsSection from "@/components/sections/SermonsSection";
import DevotionalHighlight from "@/components/sections/DevotionalHighlight";
import TestimoniesSection from "@/components/sections/TestimoniesSection";
import PlanVisitSection from "@/components/sections/PlanVisitSection";
import PrayerRequestSection from "@/components/sections/PrayerRequestSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickAccess />
      <YouTubeLiveSection />
      <AboutSection />
      <PastorWelcome />
      <MinistriesSection />
      <EventsSection />
      <SermonsSection />
      <DevotionalHighlight />
      <TestimoniesSection />
      <PlanVisitSection />
      <PrayerRequestSection />
    </>
  );
}
