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

const ZOOM_URL = "https://us02web.zoom.us/j/85293924829?pwd=KCeqASTEdyT1r17rJLuqa9tAhbaREH.1";

export interface WeeklyService {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  dayOfWeek: number; // 0 = domingo, 1 = lunes, ... 6 = sábado
  time: string;
  endTime?: string;
  location: string;
  locationEn?: string;
  category: ChurchEvent["category"];
  registrationUrl?: string;
}

export const weeklyServices: WeeklyService[] = [
  {
    id: "svc-domingo",
    title: "Servicio Principal",
    titleEn: "Main Service",
    description: "Únete a nuestra familia cada domingo para un tiempo de adoración, Palabra y comunidad. Todos son bienvenidos.",
    descriptionEn: "Join our family every Sunday for a time of worship, the Word, and community. Everyone is welcome.",
    dayOfWeek: 0,
    time: "10:00 AM",
    endTime: "12:00 PM",
    location: "Santuario Principal",
    locationEn: "Main Sanctuary",
    category: "culto",
  },
  {
    id: "svc-martes",
    title: "Estudios Bíblicos",
    titleEn: "Bible Study",
    description: "Estudio profundo de la Palabra de Dios en formato virtual. Conéctate desde donde estés cada martes.",
    descriptionEn: "In-depth study of God's Word in a virtual format. Connect from wherever you are every Tuesday.",
    dayOfWeek: 2,
    time: "7:00 PM",
    location: "Zoom",
    category: "ministerio",
    registrationUrl: ZOOM_URL,
  },
  {
    id: "svc-viernes-oracion",
    title: "Servicio de Oración",
    titleEn: "Prayer Service",
    description: "Noche de oración e intercesión. La iglesia que ora prevalece, ven a clamar juntos delante de Dios.",
    descriptionEn: "A night of prayer and intercession. The praying church prevails; come and cry out to God together.",
    dayOfWeek: 5,
    time: "7:00 PM",
    endTime: "9:00 PM",
    location: "Santuario Principal / Zoom",
    locationEn: "Main Sanctuary / Zoom",
    category: "culto",
    registrationUrl: ZOOM_URL,
  },
  {
    id: "svc-viernes-jovenes",
    title: "Servicio de Jóvenes",
    titleEn: "Youth Service",
    description: "Espacio para jóvenes encendidos que buscan a Dios con pasión. T. G. Youth Network, ¡te esperamos!",
    descriptionEn: "A space for young people on fire, seeking God with passion. T. G. Youth Network, we're waiting for you!",
    dayOfWeek: 5,
    time: "7:30 PM",
    endTime: "9:30 PM",
    location: "Santuario Principal",
    locationEn: "Main Sanctuary",
    category: "ministerio",
  },
];

export const upcomingEvents: ChurchEvent[] = [
  {
    id: "evt-001",
    title: "Servicio Principal",
    subtitle: "Domingos 10:00 AM",
    description: "Únete a nuestra familia cada domingo para un tiempo de adoración, Palabra y comunidad. Todos son bienvenidos.",
    date: "2026-07-05",
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
    date: "2026-07-07",
    time: "7:00 PM",
    location: "Zoom",
    registrationUrl: "https://us02web.zoom.us/j/85293924829?pwd=KCeqASTEdyT1r17rJLuqa9tAhbaREH.1",
    category: "ministerio",
    isHighlighted: false,
    isFree: true,
  },
  {
    id: "evt-003",
    title: "Servicio de Oración",
    subtitle: "Viernes 7:00 PM",
    description: "Noche de oración e intercesión. La iglesia que ora prevalece, ven a clamar juntos delante de Dios.",
    date: "2026-07-03",
    time: "7:00 PM",
    endTime: "9:00 PM",
    location: "Santuario Principal / Zoom",
    registrationUrl: "https://us02web.zoom.us/j/85293924829?pwd=KCeqASTEdyT1r17rJLuqa9tAhbaREH.1",
    category: "culto",
    isHighlighted: false,
    isFree: true,
  },
  {
    id: "evt-004",
    title: "Servicio de Jóvenes",
    subtitle: "Viernes 7:30 PM",
    description: "Espacio para jóvenes encendidos que buscan a Dios con pasión. T. G. Youth Network, ¡te esperamos!",
    date: "2026-07-03",
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
    date: "2026-07-12",
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
    date: "2026-07-14",
    time: "7:00 PM",
    location: "Zoom",
    registrationUrl: "https://us02web.zoom.us/j/85293924829?pwd=KCeqASTEdyT1r17rJLuqa9tAhbaREH.1",
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
