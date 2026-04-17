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
    title: "Encuentro de Adoración",
    subtitle: "Una noche de glorificar a Dios",
    description:
      "Únete a nosotros para una noche especial de adoración, intercesión y búsqueda del rostro de Dios. Todos son bienvenidos.",
    date: "2026-04-26",
    time: "7:00 PM",
    endTime: "9:30 PM",
    location: "Santuario Principal",
    category: "culto",
    isHighlighted: true,
    isFree: true,
  },
  {
    id: "evt-002",
    title: "Conferencia Familiar",
    subtitle: "Construyendo hogares sobre la roca",
    description:
      "Una conferencia especial para matrimonios y familias. Hablaremos sobre cómo edificar el hogar conforme al diseño de Dios.",
    date: "2026-05-03",
    time: "10:00 AM",
    endTime: "3:00 PM",
    location: "Salón Multiusos",
    category: "conferencia",
    isHighlighted: true,
    isFree: true,
  },
  {
    id: "evt-003",
    title: "Retiro de Jóvenes",
    subtitle: "Generación Adoram — Encendidos",
    description:
      "Un fin de semana de retiro espiritual para jóvenes de 15 a 30 años. Adoración intensa, Palabra poderosa y comunidad transformadora.",
    date: "2026-05-09",
    time: "6:00 PM",
    endTime: "",
    location: "Centro de Retiros (Detalles al registrarse)",
    category: "retiro",
    isHighlighted: false,
    isFree: false,
  },
  {
    id: "evt-004",
    title: "Bautismos en Agua",
    subtitle: "Dando el siguiente paso de fe",
    description:
      "Si has entregado tu vida a Cristo y estás listo para dar el paso público del bautismo en agua, este servicio especial es para ti.",
    date: "2026-05-17",
    time: "11:00 AM",
    location: "Santuario Principal",
    category: "especial",
    isHighlighted: true,
    isFree: true,
  },
  {
    id: "evt-005",
    title: "Tarde de Alcance Comunitario",
    subtitle: "Siendo luz en nuestra comunidad",
    description:
      "Voluntarios de Adoram servirán a nuestra comunidad con alimentos, oración y amor práctico. ¡Ven y sé parte del impacto!",
    date: "2026-05-24",
    time: "9:00 AM",
    endTime: "1:00 PM",
    location: "Punto de reunión: Estacionamiento de la iglesia",
    category: "comunidad",
    isHighlighted: false,
    isFree: true,
  },
];

export const getUpcomingEvents = (limit?: number): ChurchEvent[] => {
  const sorted = upcomingEvents.sort(
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
