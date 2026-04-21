import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { getUpcomingEvents, CATEGORY_COLORS } from "@/data/events";
import { formatDate, getMonthAbbr, getDayNumber } from "@/lib/utils";
import type { ChurchEvent } from "@/data/events";

interface EventsDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewAll: string;
  free: string;
  featured: string;
  noEvents: string;
  categories: Record<ChurchEvent["category"], string>;
}

export default function EventsSection({ dict }: { dict: EventsDict }) {
  const events = getUpcomingEvents(5);

  return (
    <section id="eventos" className="py-24 bg-white" aria-label="Próximos eventos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <SectionHeader eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} centered={false} />
          <a href="#eventos" className="text-gold-600 hover:text-gold-700 font-semibold text-sm flex items-center gap-1 transition-colors shrink-0 group">
            {dict.viewAll} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="space-y-3">
          {events.map((event) => (
            <article key={event.id} className="group flex items-start gap-5 bg-warm-50 hover:bg-white border border-warm-200 hover:border-gold-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-warm">
              {/* Calendar-style date box */}
              <div className="shrink-0 w-14 rounded-xl overflow-hidden shadow-sm border border-warm-200 group-hover:border-navy-200 group-hover:shadow-md transition-all duration-300">
                <div className="bg-navy-700 group-hover:bg-navy-800 text-center py-1.5 transition-colors">
                  <span className="text-gold-400 text-[9px] font-black tracking-[0.2em] uppercase block leading-none">
                    {getMonthAbbr(event.date)}
                  </span>
                </div>
                <div className="bg-white text-center py-2">
                  <span className="text-navy-900 text-2xl font-black leading-none">{getDayNumber(event.date)}</span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${CATEGORY_COLORS[event.category]}`}>
                    {dict.categories[event.category]}
                  </span>
                  {event.isHighlighted && <Badge variant="gold">{dict.featured}</Badge>}
                  {event.isFree && <Badge variant="success">{dict.free}</Badge>}
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900 group-hover:text-navy-700 transition-colors">{event.title}</h3>
                {event.subtitle && <p className="text-gold-600 text-xs font-semibold mb-1 italic">{event.subtitle}</p>}
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{event.description}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs text-warm-500">
                  <span className="flex items-center gap-1.5"><CalendarDays size={11} />{formatDate(event.date)}</span>
                  <span className="flex items-center gap-1.5"><Clock size={11} />{event.time}{event.endTime ? ` — ${event.endTime}` : ""}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={11} />{event.location}</span>
                </div>
              </div>
              <ArrowRight size={18} className="shrink-0 text-warm-300 group-hover:text-gold-500 mt-1 transition-all duration-200 group-hover:translate-x-0.5 hidden sm:block" />
            </article>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <CalendarDays size={40} className="mx-auto mb-3 opacity-30" />
            <p>{dict.noEvents}</p>
          </div>
        )}
      </div>
    </section>
  );
}
