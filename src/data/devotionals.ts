import type { Devotional, DevotionalTag, DevotionalCategory } from "@/types/devotional";

export const devotionalTags: DevotionalTag[] = [
  { id: "tag-001", name: "Fe",            slug: "fe",            color: "#C9A84C" },
  { id: "tag-002", name: "Oración",       slug: "oracion",       color: "#1B3A5C" },
  { id: "tag-003", name: "Esperanza",     slug: "esperanza",     color: "#2D6494" },
  { id: "tag-004", name: "Gracia",        slug: "gracia",        color: "#5E8CB8" },
  { id: "tag-005", name: "Propósito",     slug: "proposito",     color: "#163050" },
  { id: "tag-006", name: "Adoración",     slug: "adoracion",     color: "#A87E28" },
  { id: "tag-007", name: "Familia",       slug: "familia",       color: "#1B3A5C" },
  { id: "tag-008", name: "Restauración",  slug: "restauracion",  color: "#E8852A" },
  { id: "tag-009", name: "Cristo",        slug: "cristo",        color: "#0F1B2D" },
  { id: "tag-010", name: "Reino",         slug: "reino",         color: "#163050" },
];

export const devotionalCategories: DevotionalCategory[] = [
  { id: "cat-001", name: "Vida Espiritual",      slug: "vida-espiritual" },
  { id: "cat-002", name: "Familia y Hogar",       slug: "familia-y-hogar" },
  { id: "cat-003", name: "Promesas de Dios",      slug: "promesas-de-dios" },
  { id: "cat-004", name: "Carácter Cristiano",    slug: "caracter-cristiano" },
  { id: "cat-005", name: "Misión y Servicio",     slug: "mision-y-servicio" },
];

export const devotionals: Devotional[] = [
  // ─── 1 ────────────────────────────────────────────────────────────────────
  {
    id: "dev-001",
    slug: "el-ancla-que-no-cede",
    title: "El ancla que no cede",
    excerpt:
      "Cuando la incertidumbre quiere robarnos la paz, la fe no es un sentimiento — es una decisión enraizada en quién es Jesús. El ancla del alma es firme y segura, y entra hasta donde está Cristo.",
    content: `
      <p>Vivimos tiempos donde la incertidumbre quiere robarnos la paz. Proyectos que no avanzan, sueños que tardan, oraciones que parecen quedar sin respuesta. En esos momentos, la fe no es un sentimiento — es una decisión enraizada en quién es Jesús.</p>

      <p>La esperanza cristiana no descansa en circunstancias favorables, sino en la resurrección de Cristo. Porque Él salió victorioso del sepulcro, nuestra esperanza tiene fundamento eterno. Pablo no escribió a una comunidad próspera; escribió a personas que enfrentaban presión, y les dijo que el Dios de esperanza podía llenarlos de toda alegría y paz en el creer — no después de resolver los problemas, sino en medio de ellos.</p>

      <p>Fe y esperanza no son ilusiones. Son el ancla del alma, firme y segura, que entra hasta dentro del velo, donde está Cristo (Hebreos 6:19).</p>

      <h3>Preguntas para meditar</h3>
      <ul>
        <li>¿En qué circunstancia específica necesitas confiar hoy que Cristo ya venció?</li>
        <li>¿Tu esperanza está anclada en resultados o en la persona de Jesucristo?</li>
        <li>¿Qué promesa de Dios necesitas declarar en voz alta esta semana?</li>
      </ul>

      <h3>Oración</h3>
      <blockquote>Señor Jesús, cuando el camino se oscurece y la espera se alarga, recuérdame que Tú eres mi ancla. Que mi fe no descanse en lo que veo sino en lo que Tú eres. Lléname de esperanza viva hoy, no porque las circunstancias hayan cambiado, sino porque Tú resucitaste y reinas. Amén.</blockquote>

      <h3>Acción concreta</h3>
      <ol>
        <li>Escribe una promesa bíblica relacionada a tu situación y colócala donde la veas cada mañana.</li>
        <li>Comparte con alguien de confianza en qué área necesitas creer a Dios esta semana.</li>
        <li>Lee Hebreos 11 completo como un recordatorio de que la fe siempre ha sido un camino, no una llegada.</li>
      </ol>

      <p><em>«El que prometió es fiel.» — Hebreos 10:23</em></p>
    `,
    scriptureReference: "Hebreos 11:1 · Romanos 15:13",
    scriptureText:
      "La fe es la certeza de lo que se espera, la convicción de lo que no se ve.",
    authorId: "pastor-001",
    authorName: "Pastor Jose Alberto Jimenez",
    featuredImage: "",
    tags: [devotionalTags[0], devotionalTags[2], devotionalTags[8]],
    categoryId: "cat-001",
    status: "published",
    publishDate: "2026-04-21",
    createdAt: "2026-04-18T09:00:00Z",
    updatedAt: "2026-04-20T14:00:00Z",
    isFeatured: true,
    readingTimeMinutes: 5,
  },

  // ─── 2 ────────────────────────────────────────────────────────────────────
  {
    id: "dev-002",
    slug: "mas-que-palabras-orar-desde-la-cruz",
    title: "Más que palabras: orar desde la cruz",
    excerpt:
      "Orar en el nombre de Jesús no es una fórmula — es orar desde la posición de quienes han sido reconciliados con el Padre, cubiertos por Su justicia y representados por Su intercesión.",
    content: `
      <p>Muchos oran, pero pocos entienden lo que significa orar en el nombre de Jesús. No es una fórmula mágica al final de la oración — es orar desde la posición de quienes han sido reconciliados con el Padre a través de la cruz, cubiertos por Su justicia, representados por Su intercesión.</p>

      <p>Romanos 8:34 revela algo asombroso: en este momento, Cristo Jesús está a la diestra del Padre, intercediendo por nosotros. Nuestra oración se une a la oración de Cristo mismo. Cuando tú doblas rodillas, no estás solo — estás participando en algo que ya está sucediendo en los cielos.</p>

      <p>La fe en la oración no es convencer a Dios de algo que no quiere hacer. Es alinearse con lo que Él ya desea: nuestra restauración, nuestra paz, el avance de Su reino. Orar con fe es confiar en el carácter del Padre, tal como Jesús lo hizo en Getsemaní: «No mi voluntad, sino la tuya.»</p>

      <h3>Preguntas para meditar</h3>
      <ul>
        <li>¿Oras buscando la voluntad de Dios o tratando de doblar Su brazo hacia la tuya?</li>
        <li>¿Cómo cambia tu oración saber que Cristo está intercediendo junto a ti?</li>
        <li>¿Hay algo que has dejado de orar por falta de fe? ¿Qué te detiene?</li>
      </ul>

      <h3>Oración</h3>
      <blockquote>Padre, gracias porque no llego a ti con mis méritos sino con la sangre de tu Hijo. Gracias porque Jesús mismo intercede por mí. Enséñame a orar con fe genuina — no para manipularte, sino para alinearme contigo. Que mi voluntad se doble ante la tuya con confianza, no con temor. En el nombre de Jesús. Amén.</blockquote>

      <h3>Acción concreta</h3>
      <ol>
        <li>Separa 15 minutos hoy para orar en silencio, sin lista de peticiones — solo escucha.</li>
        <li>Lleva un diario de oración por 7 días, anotando peticiones y respuestas, incluidas las inesperadas.</li>
        <li>Lee Lucas 11:1-13 y deja que la enseñanza de Jesús sobre la oración renueve tu perspectiva.</li>
      </ol>

      <p><em>«Vive siempre para interceder por ellos.» — Hebreos 7:25</em></p>
    `,
    scriptureReference: "Juan 16:24 · Romanos 8:34 · Lucas 22:42",
    scriptureText:
      "Hasta ahora nada habéis pedido en mi nombre; pedid, y recibiréis, para que vuestro gozo sea cumplido.",
    authorId: "pastor-001",
    authorName: "Pastor Jose Alberto Jimenez",
    featuredImage: "",
    tags: [devotionalTags[1], devotionalTags[0], devotionalTags[8]],
    categoryId: "cat-001",
    status: "published",
    publishDate: "2026-04-17",
    createdAt: "2026-04-14T11:00:00Z",
    updatedAt: "2026-04-16T16:00:00Z",
    isFeatured: false,
    readingTimeMinutes: 6,
  },

  // ─── 3 ────────────────────────────────────────────────────────────────────
  {
    id: "dev-003",
    slug: "tu-hogar-su-territorio",
    title: "Tu hogar, su territorio",
    excerpt:
      "Josué no dijo «yo y mi casa serviremos a Jehová» desde la comodidad de una vida resuelta. Lo dijo al final de una peregrinación larga. Tu hogar no es un accidente — es un territorio con propósito eterno.",
    content: `
      <p>Josué no dijo esas palabras desde la comodidad de una vida resuelta. Las dijo al final de una peregrinación larga, enfrentando un pueblo que tenía que elegir entre los dioses de la cultura circundante y el Dios que los había librado. Y en ese momento de decisión colectiva, él habló por su hogar.</p>

      <p>La familia con propósito no es aquella donde todo funciona perfectamente. Es aquella donde Cristo es el centro, donde los valores del reino se transmiten a través de conversaciones cotidianas, de la mesa, del conflicto resuelto con gracia, del perdón que se practica antes de que los hijos sean grandes.</p>

      <p>Deuteronomio 6 instruye a los padres a hablar de los mandamientos «cuando te sientes en tu casa, cuando andes por el camino, cuando te acuestes, y cuando te levantes.» El evangelio no es un programa de los domingos — es el pulso del hogar. Cristo en la cocina, en las discusiones difíciles, en las lágrimas de los hijos.</p>

      <h3>Preguntas para meditar</h3>
      <ul>
        <li>¿Tu hogar refleja el carácter de Cristo o el de la cultura que lo rodea?</li>
        <li>¿Qué hábitos concretos tienes para transmitir la fe a quienes viven contigo?</li>
        <li>¿Dónde necesitas pedir perdón en tu familia antes de liderar espiritualmente?</li>
      </ul>

      <h3>Oración</h3>
      <blockquote>Señor, que mi hogar sea más que un lugar de convivencia — que sea un territorio donde tu presencia se siente, donde el perdón fluye, donde tus palabras se escuchan. Ayúdame a ser el tipo de esposo, padre o hijo que señala a Cristo con mi manera de vivir, no solo de hablar. Santifica mi casa desde adentro. Amén.</blockquote>

      <h3>Acción concreta</h3>
      <ol>
        <li>Esta semana, comparte una promesa bíblica en la mesa familiar y hablen juntos lo que significa.</li>
        <li>Pide perdón específicamente a alguien de tu familia por algo pendiente — sin esperar que ellos lo hagan primero.</li>
        <li>Ora en voz alta con y por los tuyos, aunque sea breve — la oración en familia tiene un impacto generacional.</li>
      </ol>

      <p><em>«Instrúyelo en su camino, y aun cuando fuere viejo no se apartará.» — Proverbios 22:6</em></p>
    `,
    scriptureReference: "Josué 24:15 · Efesios 5:25 · Deuteronomio 6:6-7",
    scriptureText:
      "Y yo y mi casa serviremos a Jehová.",
    authorId: "pastor-001",
    authorName: "Pastor Jose Alberto Jimenez",
    featuredImage: "",
    tags: [devotionalTags[6], devotionalTags[4], devotionalTags[9]],
    categoryId: "cat-002",
    status: "published",
    publishDate: "2026-04-12",
    createdAt: "2026-04-09T08:00:00Z",
    updatedAt: "2026-04-11T10:00:00Z",
    isFeatured: false,
    readingTimeMinutes: 5,
  },

  // ─── 4 ────────────────────────────────────────────────────────────────────
  {
    id: "dev-004",
    slug: "dios-trabaja-con-los-pedazos",
    title: "Dios trabaja con los pedazos",
    excerpt:
      "Hay pérdidas que no parecen recuperables. Pero el Dios de Joel es un Dios que restituye — no solo que perdona, sino que devuelve. La promesa no es que el pasado no existió, sino que el futuro será más grande que el daño sufrido.",
    content: `
      <p>Hay pérdidas que no parecen recuperables. Años desperdiciados, relaciones rotas, decisiones que todavía duelen. Y la tentación es vivir mirando hacia atrás, calculando lo que se perdió, convenciéndose de que ya no hay tiempo o gracia suficiente.</p>

      <p>Pero el Dios de Joel es un Dios que restituye. No solo que perdona — que devuelve. Que toma lo que las langostas comieron y lo transforma. La promesa no es que el pasado no existió, sino que el futuro será más grande que el daño sufrido. Eso solo es posible porque Cristo cargó no solo nuestro pecado, sino nuestras pérdidas.</p>

      <p>La escena de Juan 21 es poderosa: Pedro había negado a Jesús tres veces. Y Jesús no lo evade ni lo condena — le hace la misma pregunta tres veces. Una por cada negación. No para recordarle su fracaso, sino para restaurarlo en su vocación. Eso es lo que Cristo hace contigo: no borra el pasado, lo redime.</p>

      <h3>Preguntas para meditar</h3>
      <ul>
        <li>¿Hay algo de tu pasado que todavía no has dejado en manos de Cristo para que lo redima?</li>
        <li>¿Crees genuinamente que Dios puede restaurar lo que se perdió, o solo lo dices de boca?</li>
        <li>¿Qué «años de langosta» podrías ver de forma diferente si confiaras en la promesa de Joel?</li>
      </ul>

      <h3>Oración</h3>
      <blockquote>Señor, te entrego los años que se fueron, las oportunidades perdidas, los errores que aún pesan. Tú eres el Dios que restituye. Tú tomaste lo que pareció una derrota — la cruz — y lo convertiste en victoria eterna. Confío que puedes hacer lo mismo con mi historia. Restáurame. Dame esperanza que no avergüence. Amén.</blockquote>

      <h3>Acción concreta</h3>
      <ol>
        <li>Escribe en papel las áreas de tu vida donde necesitas restauración y preséntaselas a Dios como un acto de fe.</li>
        <li>Lee Juan 21:1-19 lentamente. Identifícate con Pedro — ¿qué te dice Jesús a ti hoy?</li>
        <li>Busca a alguien que también esté en proceso de restauración y sé su compañía, no su juez.</li>
      </ol>

      <p><em>«El Espíritu del Señor... a proclamar el año de la buena voluntad del Señor.» — Isaías 61:1-2</em></p>
    `,
    scriptureReference: "Joel 2:25 · Isaías 61:3 · Juan 21:15-17",
    scriptureText:
      "Os restituiré los años que comió la oruga, el saltón, el revoltón y la langosta... Y comeréis hasta saciaros, y alabaréis el nombre de Jehová vuestro Dios.",
    authorId: "pastor-001",
    authorName: "Pastor Jose Alberto Jimenez",
    featuredImage: "",
    tags: [devotionalTags[2], devotionalTags[7], devotionalTags[3]],
    categoryId: "cat-003",
    status: "published",
    publishDate: "2026-04-07",
    createdAt: "2026-04-04T07:00:00Z",
    updatedAt: "2026-04-06T09:00:00Z",
    isFeatured: false,
    readingTimeMinutes: 6,
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
