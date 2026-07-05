export interface ChurchEvent {
  id: string;
  title: string;
  titleEn?: string;
  subtitle?: string;
  description: string;
  descriptionEn?: string;
  date: string;
  time: string;
  endTime?: string;
  location: string;
  locationEn?: string;
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

// Eventos especiales de una sola vez; se muestran en el calendario en su fecha exacta
export const specialEvents: ChurchEvent[] = [
  {
    id: "evt-matrimonios-2026-08",
    title: "Actividad para Matrimonios",
    titleEn: "Marriage Event",
    description: "Una noche especial dedicada a los matrimonios. Ven junto a tu cónyuge a fortalecer tu relación delante de Dios.",
    descriptionEn: "A special evening dedicated to married couples. Come with your spouse and strengthen your relationship before God.",
    date: "2026-08-21",
    time: "7:00 PM",
    location: "Santuario Principal",
    locationEn: "Main Sanctuary",
    category: "especial",
    isHighlighted: true,
    isFree: true,
  },
];

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
