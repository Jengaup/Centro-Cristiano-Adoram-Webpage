import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import {
  getUpcomingEvents,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
} from "@/data/events";
import { formatDate, getMonthAbbr, getDayNumber } from "@/lib/utils";

export default function EventsSection() {
  const events = getUpcomingEvents(5);

  return (
    <section
      id="eventos"
      className="py-24 bg-white"
      aria-label="Próximos eventos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="Calendario"
            title="Próximos Eventos"
            subtitle="No te pierdas nada. Hay algo especial esperándote."
            centered={false}
          />
          <a
            href="/#eventos"
            className="text-gold-600 hover:text-gold-700 font-semibold text-sm flex items-center gap-1 transition-colors shrink-0"
          >
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <article
              key={event.id}
              className="group flex items-start gap-5 bg-warm-50 hover:bg-white border border-warm-200 hover:border-gold-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-warm"
            >
              {/* Date badge */}
              <div className="shrink-0 w-16 h-16 rounded-xl bg-navy-600 group-hover:bg-navy-700 flex flex-col items-center justify-center text-white transition-colors shadow-sm">
                <span className="text-gold-400 text-xs font-bold tracking-widest uppercase leading-none">
                  {getMonthAbbr(event.date)}
                </span>
                <span className="text-white text-2xl font-bold leading-none mt-1">
                  {getDayNumber(event.date)}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[event.category]}`}
                  >
                    {CATEGORY_LABELS[event.category]}
                  </span>
                  {event.isHighlighted && (
                    <Badge variant="gold">Destacado</Badge>
                  )}
                  {event.isFree && (
                    <Badge variant="success">Gratis</Badge>
                  )}
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                  {event.title}
                </h3>
                {event.subtitle && (
                  <p className="text-gold-600 text-xs font-semibold mb-1 italic">
                    {event.subtitle}
                  </p>
                )}
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {event.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-warm-500">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={12} />
                    {formatDate(event.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {event.time}
                    {event.endTime ? ` — ${event.endTime}` : ""}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {event.location}
                  </span>
                </div>
              </div>

              <ArrowRight
                size={18}
                className="shrink-0 text-warm-400 group-hover:text-gold-500 mt-1 transition-colors hidden sm:block"
              />
            </article>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <CalendarDays size={40} className="mx-auto mb-3 opacity-30" />
            <p>No hay eventos próximos programados.</p>
          </div>
        )}
      </div>
    </section>
  );
}
