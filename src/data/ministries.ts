export interface Ministry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  targetAudience: string;
  meetingTime?: string;
  contactEmail?: string;
  leader?: string;
}

export const ministries: Ministry[] = [
  {
    id: "min-001",
    name: "Adoram Kids",
    tagline: "Sembrando fe desde pequeños",
    description:
      "Un ministerio vibrante donde los niños aprenden el amor de Dios de forma divertida, segura y significativa. Cada niño importa.",
    icon: "🌱",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50 border-emerald-200",
    targetAudience: "Niños de 0 a 12 años",
    meetingTime: "Domingos en los servicios principales",
    leader: "Encargado(a) de Niños",
  },
  {
    id: "min-002",
    name: "T. G. Youth Network",
    tagline: "Jóvenes encendidos para Dios",
    description:
      "Una generación de jóvenes que busca a Dios con pasión, desarrolla su identidad en Cristo y es agente de cambio en su entorno.",
    icon: "🔥",
    color: "text-orange-700",
    bgColor: "bg-orange-50 border-orange-200",
    targetAudience: "Jóvenes de 13 a 30 años",
    meetingTime: "Viernes 7:00 PM",
    leader: "Líder de Jóvenes",
  },
  {
    id: "min-003",
    name: "Real Men",
    tagline: "Varones que honran a Dios",
    description:
      "Un espacio para que los hombres crezcan como líderes espirituales en sus hogares, comunidades y la iglesia, arraigados en la Palabra.",
    icon: "⚔️",
    color: "text-navy-700",
    bgColor: "bg-navy-50 border-navy-200",
    targetAudience: "Varones mayores de 18 años",
    meetingTime: "Cada 2 semanas, Miércoles 7:00 PM",
    leader: "Coordinador de Varones",
  },
  {
    id: "min-004",
    name: "Mujeres de Valor",
    tagline: "Mujer, conoce tu dignidad en Cristo",
    description:
      "Un ministerio que celebra, equipa y fortalece a las mujeres en su identidad en Cristo, su rol en la familia y su llamado en la iglesia.",
    icon: "👑",
    color: "text-burgundy-600",
    bgColor: "bg-rose-50 border-rose-200",
    targetAudience: "Mujeres de todas las edades",
    meetingTime: "Eventos mensuales",
    leader: "Coordinadora de Mujeres",
  },
  {
    id: "min-005",
    name: "Kadosh",
    tagline: "Líderes de adoración, no solo músicos",
    description:
      "Músicos, cantantes y adoradores comprometidos a llevar la presencia de Dios a cada servicio y preparar corazones para el encuentro divino.",
    icon: "🎵",
    color: "text-gold-700",
    bgColor: "bg-amber-50 border-amber-200",
    targetAudience: "Músicos y cantantes de la congregación",
    meetingTime: "Ensayos semanales, Consultar horario",
    leader: "Director(a) de Alabanza",
  },
  {
    id: "min-006",
    name: "Ministerio de Intercesión",
    tagline: "La iglesia que ora prevalece",
    description:
      "Intercesores comprometidos que sostienen a la iglesia, a los líderes y a la comunidad en oración ferviente y persistente.",
    icon: "🙏",
    color: "text-indigo-700",
    bgColor: "bg-indigo-50 border-indigo-200",
    targetAudience: "Toda persona llamada a la intercesión",
    meetingTime: "Semanal, consultar horario",
    leader: "Coordinador(a) de Oración",
  },
  {
    id: "min-007",
    name: "Ministerio de Medios",
    tagline: "Tecnología al servicio del Reino",
    description:
      "El equipo que hace posible que el mensaje del evangelio llegue más allá de nuestras paredes a través de transmisiones, redes sociales y producción.",
    icon: "📡",
    color: "text-slate-700",
    bgColor: "bg-slate-50 border-slate-200",
    targetAudience: "Creativos, técnicos y comunicadores",
    meetingTime: "Según necesidades del ministerio",
    leader: "Director(a) de Medios",
  },
  {
    id: "min-010",
    name: "Danza Chayil",
    tagline: "Adorando a Dios con todo el cuerpo",
    description:
      "Un ministerio de danza que expresa la adoración a Dios a través del movimiento, la expresión artística y la gloria que honra su presencia.",
    icon: "🩰",
    color: "text-purple-700",
    bgColor: "bg-purple-50 border-purple-200",
    targetAudience: "Mujeres y jóvenes con llamado a la danza",
    meetingTime: "Consultar horario",
    leader: "Coordinadora de Danza",
  },
  {
    id: "min-009",
    name: "Alcance Comunitario",
    tagline: "El amor de Dios en acción",
    description:
      "Voluntarios que salen a la comunidad con amor práctico: distribución de alimentos, visitas hospitalarias, apoyo a familias necesitadas.",
    icon: "🌍",
    color: "text-green-700",
    bgColor: "bg-green-50 border-green-200",
    targetAudience: "Voluntarios de servicio y misiones",
    meetingTime: "Eventos mensuales de alcance",
    leader: "Coordinador(a) de Alcance",
  },
];
