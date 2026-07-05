"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, Video } from "lucide-react";
import { weeklyServices, specialEvents, CATEGORY_COLORS } from "@/data/events";
import type { ChurchEvent } from "@/data/events";

// Campos compartidos entre servicios semanales y eventos especiales
interface CalendarItem {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  time: string;
  endTime?: string;
  location: string;
  locationEn?: string;
  category: ChurchEvent["category"];
  registrationUrl?: string;
  imageUrl?: string;
}

interface CalendarDict {
  today: string;
  noEventsDay: string;
  joinZoom: string;
  categories: Record<ChurchEvent["category"], string>;
}

const CATEGORY_DOTS: Record<ChurchEvent["category"], string> = {
  culto: "bg-navy-600",
  conferencia: "bg-gold-500",
  retiro: "bg-burgundy-500",
  ministerio: "bg-gold-600",
  especial: "bg-gold-600",
  comunidad: "bg-green-700",
};

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function dateKey(d: Date) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

// Eventos especiales primero, luego los servicios semanales del día
function itemsFor(date: Date): CalendarItem[] {
  const key = dateKey(date);
  return [
    ...specialEvents.filter((e) => e.date === key),
    ...weeklyServices.filter((s) => s.dayOfWeek === date.getDay()),
  ];
}

export default function MonthCalendar({ locale, dict }: { locale: string; dict: CalendarDict }) {
  const [today, setToday] = useState<Date | null>(null);
  const [viewDate, setViewDate] = useState<Date | null>(null);
  const [selected, setSelected] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    setToday(now);
    setViewDate(new Date(now.getFullYear(), now.getMonth(), 1));
    setSelected(now);
  }, []);

  if (!today || !viewDate || !selected) {
    return <div className="h-[480px] rounded-2xl bg-warm-50 border border-warm-200 animate-pulse" aria-hidden />;
  }

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  // 7 de junio de 2026 es domingo; genera los nombres de los días localizados
  const weekdayNames = Array.from({ length: 7 }, (_, i) =>
    new Date(2026, 5, 7 + i).toLocaleDateString(locale, { weekday: "short" })
  );

  const rawMonthLabel = viewDate.toLocaleDateString(locale, { month: "long", year: "numeric" });
  const monthLabel = rawMonthLabel.charAt(0).toUpperCase() + rawMonthLabel.slice(1);

  const selectedServices = itemsFor(selected);
  const isEn = locale === "en";

  const rawSelectedLabel = selected.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long" });
  const selectedLabel = rawSelectedLabel.charAt(0).toUpperCase() + rawSelectedLabel.slice(1);

  const goMonth = (delta: number) => setViewDate(new Date(year, month + delta, 1));
  const goToday = () => {
    setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelected(today);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Calendario */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-warm-200 shadow-card overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 bg-navy-800">
          <h3 className="font-serif text-lg font-bold text-white">{monthLabel}</h3>
          <div className="flex items-center gap-1.5">
            <button
              onClick={goToday}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-gold-400 hover:text-navy-900 hover:bg-gold-400 border border-gold-400/50 transition-colors"
            >
              {dict.today}
            </button>
            <button
              onClick={() => goMonth(-1)}
              aria-label="Mes anterior"
              className="p-1.5 rounded-lg text-navy-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => goMonth(1)}
              aria-label="Mes siguiente"
              className="p-1.5 rounded-lg text-navy-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 border-b border-warm-200 bg-warm-50">
          {weekdayNames.map((name) => (
            <div key={name} className="py-2 text-center text-[10px] sm:text-xs font-bold tracking-wide uppercase text-navy-600">
              {name}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {cells.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="min-h-14 sm:min-h-24 border-b border-r border-warm-100 bg-warm-50/50" />;
            }
            const date = new Date(year, month, day);
            const services = itemsFor(date);
            const isToday = sameDay(date, today);
            const isSelected = sameDay(date, selected);
            return (
              <button
                key={day}
                onClick={() => setSelected(date)}
                className={`min-h-14 sm:min-h-24 border-b border-r border-warm-100 p-1 sm:p-1.5 text-left align-top transition-colors ${
                  isSelected ? "bg-gold-50 ring-2 ring-inset ring-gold-400" : "hover:bg-warm-50"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                    isToday ? "bg-navy-700 text-white" : "text-navy-800"
                  }`}
                >
                  {day}
                </span>
                {/* Puntos en móvil */}
                {services.length > 0 && (
                  <span className="flex gap-1 mt-1 sm:hidden">
                    {services.map((s) => (
                      <span key={s.id} className={`w-1.5 h-1.5 rounded-full ${CATEGORY_DOTS[s.category]}`} />
                    ))}
                  </span>
                )}
                {/* Etiquetas en pantallas grandes */}
                <span className="hidden sm:block mt-1 space-y-0.5">
                  {services.map((s) => (
                    <span
                      key={s.id}
                      className={`block truncate rounded px-1.5 py-0.5 text-[10px] font-semibold text-white ${CATEGORY_DOTS[s.category]}`}
                    >
                      {isEn && s.titleEn ? s.titleEn : s.title}
                    </span>
                  ))}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detalle del día seleccionado */}
      <aside className="bg-warm-50 rounded-2xl border border-warm-200 p-6">
        <h3 className="font-serif text-lg font-bold text-navy-900 mb-4">{selectedLabel}</h3>
        {selectedServices.length === 0 ? (
          <p className="text-slate-500 text-sm">{dict.noEventsDay}</p>
        ) : (
          <div className="space-y-4">
            {selectedServices.map((s) => (
              <article key={s.id} className="bg-white rounded-xl border border-warm-200 p-4">
                {s.imageUrl && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${s.imageUrl}`}
                    alt={isEn && s.titleEn ? s.titleEn : s.title}
                    className="w-full rounded-lg mb-3"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
                <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 ${CATEGORY_COLORS[s.category]}`}>
                  {dict.categories[s.category]}
                </span>
                <h4 className="font-serif text-base font-bold text-navy-900">
                  {isEn && s.titleEn ? s.titleEn : s.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed mt-1 mb-3">
                  {isEn && s.descriptionEn ? s.descriptionEn : s.description}
                </p>
                <div className="space-y-1 text-xs text-warm-600">
                  <p className="flex items-center gap-1.5">
                    <Clock size={11} />
                    {s.time}
                    {s.endTime ? `, ${s.endTime}` : ""}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin size={11} />
                    {isEn && s.locationEn ? s.locationEn : s.location}
                  </p>
                </div>
                {s.registrationUrl && (
                  <a
                    href={s.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <Video size={13} />
                    {dict.joinZoom}
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </aside>
    </div>
  );
}
