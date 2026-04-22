export interface ChurchEvent {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  time: string;
  endTime?: string;
  location: string;
  category: "culto" | "conferencia" | "retiro" | "ministerio" | "especial" | "comunidad";
  imageUrl?: string;
  registrationUrl?: string;
  isHighlighted: boolean;
  isFree: boolean;
}

export const upcomingEvents: ChurchEvent[] = [
  {
    id: "evt-001",
    title: "Servicio Principal",
    subtitle: "Domingos 10:00 AM",
    description: "Únete a nuestra familia cada domingo para un tiempo de adoración, Palabra y comunidad. Todos son bienvenidos.",
    date: "2026-04-19",
    time: "10:00 AM",
    endTime: "12:00 PM",
    location: "Santuario Principal",
    category: "culto",
    isHighlighted: true,
    isFree: true,
  },
  {
    id: "evt-002",
    title: "Estudios Bíblicos",
    subtitle: "Martes 7:00 PM, por Zoom",
    description: "Estudio profundo de la Palabra de Dios en formato virtual. Conéctate desde donde estés cada martes.",
    date: "2026-04-21",
    time: "7:00 PM",
    location: "Zoom (enlace por WhatsApp)",
    category: "ministerio",
    isHighlighted: false,
    isFree: true,
  },
  {
    id: "evt-003",
    title: "Servicio de Oración",
    subtitle: "Viernes 7:00 PM",
    description: "Noche de oración e intercesión. La iglesia que ora prevalece, ven a clamar juntos delante de Dios.",
    date: "2026-04-24",
    time: "7:00 PM",
    endTime: "9:00 PM",
    location: "Santuario Principal",
    category: "culto",
    isHighlighted: false,
    isFree: true,
  },
  {
    id: "evt-004",
    title: "Servicio de Jóvenes",
    subtitle: "Viernes 7:30 PM",
    description: "Espacio para jóvenes encendidos que buscan a Dios con pasión. Generación Adoram, ¡te esperamos!",
    date: "2026-04-24",
    time: "7:30 PM",
    endTime: "9:30 PM",
    location: "Santuario Principal",
    category: "ministerio",
    isHighlighted: true,
    isFree: true,
  },
  {
    id: "evt-005",
    title: "Servicio Principal",
    subtitle: "Domingos 10:00 AM",
    description: "Únete a nuestra familia cada domingo para un tiempo de adoración, Palabra y comunidad. Todos son bienvenidos.",
    date: "2026-04-26",
    time: "10:00 AM",
    endTime: "12:00 PM",
    location: "Santuario Principal",
    category: "culto",
    isHighlighted: false,
    isFree: true,
  },
  {
    id: "evt-006",
    title: "Estudios Bíblicos",
    subtitle: "Martes 7:00 PM, por Zoom",
    description: "Estudio profundo de la Palabra de Dios en formato virtual. Conéctate desde donde estés cada martes.",
    date: "2026-04-28",
    time: "7:00 PM",
    location: "Zoom (enlace por WhatsApp)",
    category: "ministerio",
    isHighlighted: false,
    isFree: true,
  },
];

export const getUpcomingEvents = (limit?: number): ChurchEvent[] => {
  const sorted = [...upcomingEvents].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
};

export const CATEGORY_LABELS: Record<ChurchEvent["category"], string> = {
  culto: "Culto",
  conferencia: "Conferencia",
  retiro: "Retiro",
  ministerio: "Ministerio",
  especial: "Especial",
  comunidad: "Comunidad",
};

export const CATEGORY_COLORS: Record<ChurchEvent["category"], string> = {
  culto: "bg-navy-600 text-white",
  conferencia: "bg-gold-500 text-navy-900",
  retiro: "bg-burgundy-500 text-white",
  ministerio: "bg-navy-400 text-white",
  especial: "bg-gold-600 text-white",
  comunidad: "bg-green-700 text-white",
};
