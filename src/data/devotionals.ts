import type { Devotional, DevotionalTag, DevotionalCategory } from "@/types/devotional";

export const devotionalTags: DevotionalTag[] = [
  { id: "tag-001", name: "Fe", slug: "fe", color: "#C9A84C" },
  { id: "tag-002", name: "Oración", slug: "oracion", color: "#1B3A5C" },
  { id: "tag-003", name: "Esperanza", slug: "esperanza", color: "#8B2635" },
  { id: "tag-004", name: "Gracia", slug: "gracia", color: "#2D6494" },
  { id: "tag-005", name: "Propósito", slug: "proposito", color: "#5E1522" },
  { id: "tag-006", name: "Adoración", slug: "adoracion", color: "#A87E28" },
  { id: "tag-007", name: "Familia", slug: "familia", color: "#163050" },
  { id: "tag-008", name: "Restauración", slug: "restauracion", color: "#C45A6E" },
];

export const devotionalCategories: DevotionalCategory[] = [
  { id: "cat-001", name: "Vida Espiritual", slug: "vida-espiritual" },
  { id: "cat-002", name: "Familia y Hogar", slug: "familia-y-hogar" },
  { id: "cat-003", name: "Promesas de Dios", slug: "promesas-de-dios" },
  { id: "cat-004", name: "Carácter Cristiano", slug: "caracter-cristiano" },
  { id: "cat-005", name: "Misión y Servicio", slug: "mision-y-servicio" },
];

export const devotionals: Devotional[] = [
  {
    id: "dev-001",
    slug: "nueva-mañana-nueva-misericordia",
    title: "Nueva Mañana, Nueva Misericordia",
    excerpt:
      "Cada amanecer es un recordatorio del amor inagotable de Dios. Sus misericordias son nuevas cada mañana, y eso cambia todo.",
    content: `
      <p>Hay algo profundamente poderoso en las palabras de Jeremías cuando escribió desde el dolor de la devastación: "¡Cuán grande es tu fidelidad!" (Lamentaciones 3:23). En medio de la ruina, encontró razón para alabar.</p>

      <p>Cada mañana que despiertas es una declaración del amor de Dios sobre tu vida. Él no te ha abandonado. Sus misericordias no se agotan como un recurso limitado — se renuevan con cada amanecer, inagotables, frescas, disponibles para ti.</p>

      <blockquote>Esto recapacito en mi corazón, por lo tanto esperaré. Las misericordias del Señor jamás terminan, pues nunca fallan sus bondades; son nuevas cada mañana. ¡Grande es tu fidelidad! — Lamentaciones 3:21-23</blockquote>

      <p>Cuando enfrentes un nuevo día cargado de incertidumbre, de preguntas sin respuesta, de desafíos que parecen más grandes que tú, recuerda: las misericordias de Dios llegaron antes que tus problemas. Él ya estuvo en ese mañana que temes.</p>

      <p>Hoy, antes de revisar tu teléfono, antes de ver las noticias, antes de que la ansiedad tenga la primera palabra — deja que la fidelidad de Dios sea lo primero que llene tu corazón.</p>

      <h3>Para reflexionar:</h3>
      <p>¿Qué área de tu vida necesita hoy la misericordia fresca de Dios? Llévala ante Él con confianza. Sus brazos siempre están abiertos.</p>
    `,
    scriptureReference: "Lamentaciones 3:22-23",
    scriptureText:
      "Las misericordias del Señor jamás terminan, pues nunca fallan sus bondades; son nuevas cada mañana. ¡Grande es tu fidelidad!",
    authorId: "user-002",
    authorName: "María González",
    featuredImage: "",
    tags: [
      devotionalTags[0],
      devotionalTags[2],
    ],
    categoryId: "cat-001",
    status: "published",
    publishDate: "2026-04-14",
    createdAt: "2026-04-10T09:00:00Z",
    updatedAt: "2026-04-13T14:00:00Z",
    isFeatured: true,
    readingTimeMinutes: 4,
  },
  {
    id: "dev-002",
    slug: "cuando-la-oracion-parece-silencio",
    title: "Cuando la Oración Parece Silencio",
    excerpt:
      "Hay momentos en que el cielo parece callado. Pero el silencio de Dios no es ausencia — es una invitación a una fe más profunda.",
    content: `
      <p>Todos hemos pasado por esos momentos: oramos, esperamos, y el cielo parece guardar silencio. La respuesta no llega cuando la esperamos. Y en ese espacio intermedio, la duda susurra: "¿Está Dios escuchando?"</p>

      <p>El rey David conoció ese silencio. "¡Dios mío, Dios mío! ¿Por qué me has desamparado?" (Salmo 22:1). Sin embargo, ese mismo salmo termina en una declaración de confianza plena. La travesía del silencio lo llevó a una fe más profunda.</p>

      <p>El silencio de Dios no es indiferencia. A veces es la sala de espera donde Él forma en nosotros la perseverancia, la humildad, la dependencia total en Él. El agricultor no llora porque la semilla no brota al día siguiente — sabe que algo está pasando bajo la tierra.</p>

      <h3>Lo que el silencio no significa:</h3>
      <ul>
        <li>No significa que Dios no te ama</li>
        <li>No significa que tu oración fue en vano</li>
        <li>No significa que olvidó tu situación</li>
      </ul>

      <p>Sigue orando. Sigue confiando. Lo que Dios está construyendo en el silencio vale más que la respuesta rápida que pediste.</p>
    `,
    scriptureReference: "Salmo 22:1-5",
    scriptureText:
      "Dios mío, Dios mío, ¿por qué me has desamparado? [...] En ti confiaron nuestros padres; confiaron, y tú los libraste.",
    authorId: "user-003",
    authorName: "Carlos Mendoza",
    featuredImage: "",
    tags: [devotionalTags[1], devotionalTags[0]],
    categoryId: "cat-001",
    status: "published",
    publishDate: "2026-04-10",
    createdAt: "2026-04-07T11:00:00Z",
    updatedAt: "2026-04-09T16:30:00Z",
    isFeatured: false,
    readingTimeMinutes: 5,
  },
  {
    id: "dev-003",
    slug: "el-llamado-de-dios-sobre-tu-familia",
    title: "El Llamado de Dios Sobre Tu Familia",
    excerpt:
      "Tu hogar no es un accidente. Dios tiene un propósito eterno para cada familia que lo honra.",
    content: `
      <p>Josué declaró con convicción ante todo Israel: "Yo y mi casa serviremos al Señor" (Josué 24:15). No fue una declaración casual — fue una decisión de pacto que marcaría generaciones.</p>

      <p>Dios tiene un plan para tu familia que va más allá de la comodidad y el éxito terrenal. Te llama a ser una unidad de discipulado, un hogar de oración, una comunidad de gracia donde todos crecen en el conocimiento del Señor.</p>

      <p>No necesitas ser una familia perfecta — necesitas ser una familia rendida. El altar de tu hogar no es el televisor ni el teléfono. Es el lugar donde se ora juntos, donde la Biblia se lee, donde el perdón se practica, donde Dios es el centro.</p>

      <p>Hoy es un buen día para reafirmar ese pacto en tu hogar. Dios honra a las familias que lo honran a Él.</p>
    `,
    scriptureReference: "Josué 24:15",
    scriptureText:
      "...pero yo y mi casa serviremos al Señor.",
    authorId: "user-002",
    authorName: "María González",
    featuredImage: "",
    tags: [devotionalTags[6], devotionalTags[4]],
    categoryId: "cat-002",
    status: "published",
    publishDate: "2026-04-07",
    createdAt: "2026-04-04T08:00:00Z",
    updatedAt: "2026-04-06T10:00:00Z",
    isFeatured: false,
    readingTimeMinutes: 3,
  },
  {
    id: "dev-004",
    slug: "restauracion-el-arte-de-dios",
    title: "Restauración: El Arte de Dios",
    excerpt:
      "Nadie puede tomar algo roto y hacerlo hermoso como Dios. La restauración es su especialidad.",
    content: `
      <p>El profeta Joel recibió una promesa extraordinaria para un pueblo que había perdido todo: "Os restituiré los años que comió la langosta" (Joel 2:25). Un Dios que puede restaurar años — no solo días — es un Dios sin límites.</p>

      <p>Quizás llegas a esta devoción cargando el peso de años perdidos, de decisiones que no puedes deshacer, de relaciones que se quebraron, de sueños que parecen muertos. Quiero decirte algo con toda certeza: Dios es especialista en lo que el mundo llama "imposible de recuperar".</p>

      <p>La restauración de Dios no es solo reparar — es transformar. El barro en manos del alfarero no vuelve a ser simplemente barro: se convierte en una vasija con propósito. Tú, en sus manos, eres más que lo que fuiste antes.</p>

      <p>No te conformes con la versión rota de tu historia. Pon lo que tienes en las manos del Restaurador.</p>
    `,
    scriptureReference: "Joel 2:25",
    scriptureText:
      "Y os restituiré los años que comió la langosta, el saltón, el revoltón y la oruga, mi gran ejército que envié contra vosotros.",
    authorId: "user-004",
    authorName: "Ana Ramírez",
    featuredImage: "",
    tags: [devotionalTags[7], devotionalTags[2]],
    categoryId: "cat-003",
    status: "published",
    publishDate: "2026-04-03",
    createdAt: "2026-03-31T07:00:00Z",
    updatedAt: "2026-04-02T09:00:00Z",
    isFeatured: false,
    readingTimeMinutes: 4,
  },
  {
    id: "dev-005",
    slug: "adoracion-mas-alla-de-la-musica",
    title: "Adoración Más Allá de la Música",
    excerpt:
      "La verdadera adoración no termina cuando el último coro se apaga. Es una postura del corazón que transforma cada momento.",
    content: `
      <p>Hay una frase del apóstol Pablo que redefine completamente lo que significa adorar: "Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional." (Romanos 12:1)</p>

      <p>La adoración no es un segmento del servicio del domingo. Es la entrega total de quién eres — tu trabajo, tus relaciones, tus ambiciones, tus temores, tus talentos — colocados sobre el altar de la voluntad de Dios.</p>

      <p>El verdadero adorador lava los platos como acto de adoración. Habla con verdad en el trabajo porque eso glorifica a Dios. Ama a su familia con paciencia porque ha encontrado en el amor de Cristo su modelo.</p>

      <p>Hoy, antes de empezar tu día, haz esta oración simple: "Señor, que todo lo que haga hoy sea un acto de adoración hacia ti." Y observa cómo cambia la textura de tu jornada.</p>
    `,
    scriptureReference: "Romanos 12:1",
    scriptureText:
      "Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional.",
    authorId: "user-003",
    authorName: "Carlos Mendoza",
    featuredImage: "",
    tags: [devotionalTags[5], devotionalTags[3]],
    categoryId: "cat-004",
    status: "draft",
    publishDate: "2026-04-20",
    scheduledDate: "2026-04-20T08:00:00Z",
    createdAt: "2026-04-15T10:00:00Z",
    updatedAt: "2026-04-15T10:00:00Z",
    isFeatured: false,
    readingTimeMinutes: 4,
  },
];

export const getFeaturedDevotional = (): Devotional | undefined =>
  devotionals.find((d) => d.isFeatured && d.status === "published");

export const getPublishedDevotionals = (): Devotional[] =>
  devotionals
    .filter((d) => d.status === "published")
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );

export const getDevotionalBySlug = (slug: string): Devotional | undefined =>
  devotionals.find((d) => d.slug === slug);
