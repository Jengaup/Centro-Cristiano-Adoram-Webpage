export interface Sermon {
  id: string;
  title: string;
  excerpt: string;
  preacher: string;
  series?: string;
  scriptureReference: string;
  date: string;
  youtubeVideoId: string;
  thumbnailUrl: string;
  durationMinutes?: number;
  category: "domingo" | "estudio-biblico" | "conferencia" | "especial";
  tags: string[];
}

export const recentSermons: Sermon[] = [
  {
    id: "ser-001",
    title: "El Dios Que Restaura",
    excerpt:
      "Descubre cómo el Dios de la Biblia no solo perdona, sino que restaura completamente todo lo que fue perdido.",
    preacher: "Pastor(a) Nombre Apellido",
    series: "El Dios que actúa",
    scriptureReference: "Joel 2:25-27",
    date: "2026-04-13",
    youtubeVideoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    durationMinutes: 52,
    category: "domingo",
    tags: ["restauración", "fe", "esperanza"],
  },
  {
    id: "ser-002",
    title: "Adoración Como Estilo de Vida",
    excerpt:
      "La adoración genuina no se limita al domingo. Aprende cómo vivir cada momento como un acto de adoración a Dios.",
    preacher: "Pastor(a) Nombre Apellido",
    series: "El Dios que actúa",
    scriptureReference: "Romanos 12:1-2",
    date: "2026-04-06",
    youtubeVideoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    durationMinutes: 48,
    category: "domingo",
    tags: ["adoración", "vida cristiana"],
  },
  {
    id: "ser-003",
    title: "Fe Que Mueve Montañas",
    excerpt:
      "¿Qué significa realmente tener fe? Una enseñanza profunda sobre la confianza inquebrantable en las promesas de Dios.",
    preacher: "Inv. Nombre Apellido",
    series: "",
    scriptureReference: "Marcos 11:22-24",
    date: "2026-03-30",
    youtubeVideoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    durationMinutes: 55,
    category: "domingo",
    tags: ["fe", "oración", "promesas"],
  },
  {
    id: "ser-004",
    title: "El Espíritu Santo: Tu Ayudador",
    excerpt:
      "Conoce al Espíritu Santo no como una doctrina, sino como una Persona viva que camina contigo cada día.",
    preacher: "Pastor(a) Nombre Apellido",
    series: "Vida en el Espíritu",
    scriptureReference: "Juan 14:16-17",
    date: "2026-03-25",
    youtubeVideoId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    durationMinutes: 60,
    category: "estudio-biblico",
    tags: ["espíritu santo", "vida espiritual"],
  },
];

export const getRecentSermons = (limit?: number): Sermon[] => {
  const sorted = recentSermons.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
};
