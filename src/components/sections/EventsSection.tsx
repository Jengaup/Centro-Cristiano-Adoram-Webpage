import SectionHeader from "@/components/ui/SectionHeader";
import MonthCalendar from "@/components/sections/MonthCalendar";
import type { ChurchEvent } from "@/data/events";

interface EventsDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  today: string;
  noEventsDay: string;
  joinZoom: string;
  categories: Record<ChurchEvent["category"], string>;
}

export default function EventsSection({ locale, dict }: { locale: string; dict: EventsDict }) {
  return (
    <section id="eventos" className="py-24 bg-white" aria-label="Calendario de eventos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} centered={false} />
        </div>
        <MonthCalendar
          locale={locale}
          dict={{
            today: dict.today,
            noEventsDay: dict.noEventsDay,
            joinZoom: dict.joinZoom,
            categories: dict.categories,
          }}
        />
      </div>
    </section>
  );
}
