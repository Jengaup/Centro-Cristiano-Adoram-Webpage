import type { Devotional, DevotionalTag, DevotionalCategory } from "@/types/devotional";

export const devotionalTags: DevotionalTag[] = [
  { id: "tag-001", name: "Fe",            nameEn: "Faith",        slug: "fe",            color: "#C9A84C" },
  { id: "tag-002", name: "Oración",       nameEn: "Prayer",       slug: "oracion",       color: "#1B3A5C" },
  { id: "tag-003", name: "Esperanza",     nameEn: "Hope",         slug: "esperanza",     color: "#2D6494" },
  { id: "tag-004", name: "Gracia",        nameEn: "Grace",        slug: "gracia",        color: "#5E8CB8" },
  { id: "tag-005", name: "Propósito",     nameEn: "Purpose",      slug: "proposito",     color: "#163050" },
  { id: "tag-006", name: "Adoración",     nameEn: "Worship",      slug: "adoracion",     color: "#A87E28" },
  { id: "tag-007", name: "Familia",       nameEn: "Family",       slug: "familia",       color: "#1B3A5C" },
  { id: "tag-008", name: "Restauración",  nameEn: "Restoration",  slug: "restauracion",  color: "#E8852A" },
  { id: "tag-009", name: "Cristo",        nameEn: "Christ",       slug: "cristo",        color: "#0F1B2D" },
  { id: "tag-010", name: "Reino",         nameEn: "Kingdom",      slug: "reino",         color: "#163050" },
  { id: "tag-011", name: "Sufrimiento",   nameEn: "Suffering",    slug: "sufrimiento",   color: "#6B2737" },
  { id: "tag-012", name: "Fortaleza",     nameEn: "Strength",     slug: "fortaleza",     color: "#1B4332" },
];

export const devotionalCategories: DevotionalCategory[] = [
  { id: "cat-001", name: "Vida Espiritual",      nameEn: "Spiritual Life",       slug: "vida-espiritual" },
  { id: "cat-002", name: "Familia y Hogar",       nameEn: "Family & Home",        slug: "familia-y-hogar" },
  { id: "cat-003", name: "Promesas de Dios",      nameEn: "God's Promises",       slug: "promesas-de-dios" },
  { id: "cat-004", name: "Carácter Cristiano",    nameEn: "Christian Character",  slug: "caracter-cristiano" },
  { id: "cat-005", name: "Misión y Servicio",     nameEn: "Mission & Service",    slug: "mision-y-servicio" },
];

export const devotionals: Devotional[] = [
  // ─── 1 ────────────────────────────────────────────────────────────────────
  {
    id: "dev-001",
    slug: "el-ancla-que-no-cede",
    title: "El ancla que no cede",
    excerpt:
      "Cuando la incertidumbre quiere robarnos la paz, la fe no es un sentimiento, es una decisión enraizada en quién es Jesús. El ancla del alma es firme y segura, y entra hasta donde está Cristo.",
    content: `
      <p>Vivimos tiempos donde la incertidumbre quiere robarnos la paz. Proyectos que no avanzan, sueños que tardan, oraciones que parecen quedar sin respuesta. En esos momentos, la fe no es un sentimiento, es una decisión enraizada en quién es Jesús.</p>

      <p>La esperanza cristiana no descansa en circunstancias favorables, sino en la resurrección de Cristo. Porque Él salió victorioso del sepulcro, nuestra esperanza tiene fundamento eterno. Pablo no escribió a una comunidad próspera; escribió a personas que enfrentaban presión, y les dijo que el Dios de esperanza podía llenarlos de toda alegría y paz en el creer, no después de resolver los problemas, sino en medio de ellos.</p>

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

      <p><em>«El que prometió es fiel.», Hebreos 10:23</em></p>
    `,
    scriptureReference: "Hebreos 11:1 · Romanos 15:13",
    scriptureText:
      "La fe es la certeza de lo que se espera, la convicción de lo que no se ve.",
    titleEn: "The Anchor That Holds",
    excerptEn:
      "When uncertainty tries to steal our peace, faith is not a feeling, it is a decision rooted in who Jesus is. The anchor of the soul is firm and secure, reaching all the way to where Christ is.",
    scriptureTextEn:
      "Now faith is the substance of things hoped for, the evidence of things not seen.",
    contentEn: `
      <p>We live in times where uncertainty wants to steal our peace. Projects that don't move forward, dreams that are delayed, prayers that seem to go unanswered. In those moments, faith is not a feeling, it is a decision rooted in who Jesus is.</p>

      <p>Christian hope does not rest on favorable circumstances, but on the resurrection of Christ. Because He came out victorious from the tomb, our hope has an eternal foundation. Paul did not write to a prosperous community; he wrote to people facing pressure, and told them that the God of hope could fill them with all joy and peace in believing, not after the problems were solved, but in the middle of them.</p>

      <p>Faith and hope are not illusions. They are the anchor of the soul, firm and secure, which enters within the veil, where Christ is (Hebrews 6:19).</p>

      <h3>Questions to Reflect On</h3>
      <ul>
        <li>In what specific circumstance do you need to trust today that Christ has already conquered?</li>
        <li>Is your hope anchored in outcomes or in the person of Jesus Christ?</li>
        <li>What promise of God do you need to speak out loud this week?</li>
      </ul>

      <h3>Prayer</h3>
      <blockquote>Lord Jesus, when the road darkens and the wait grows long, remind me that You are my anchor. May my faith not rest on what I see but on who You are. Fill me with living hope today, not because the circumstances have changed, but because You rose and You reign. Amen.</blockquote>

      <h3>Concrete Action</h3>
      <ol>
        <li>Write a biblical promise related to your situation and place it where you will see it every morning.</li>
        <li>Share with someone you trust in what area you need to believe God this week.</li>
        <li>Read Hebrews 11 in full as a reminder that faith has always been a journey, not a destination.</li>
      </ol>

      <p><em>"He who promised is faithful.", Hebrews 10:23</em></p>
    `,
    authorId: "pastor-001",
    authorName: "Pastor Jose Alberto Jimenez",
    featuredImage: "",
    tags: [devotionalTags[0], devotionalTags[2], devotionalTags[8]],
    categoryId: "cat-001",
    status: "published",
    publishDate: "2026-04-21",
    createdAt: "2026-04-18T09:00:00Z",
    updatedAt: "2026-04-20T14:00:00Z",
    isFeatured: false,
    readingTimeMinutes: 5,
  },

  // ─── 2 ────────────────────────────────────────────────────────────────────
  {
    id: "dev-002",
    slug: "mas-que-palabras-orar-desde-la-cruz",
    title: "Más que palabras: orar desde la cruz",
    excerpt:
      "Orar en el nombre de Jesús no es una fórmula, es orar desde la posición de quienes han sido reconciliados con el Padre, cubiertos por Su justicia y representados por Su intercesión.",
    content: `
      <p>Muchos oran, pero pocos entienden lo que significa orar en el nombre de Jesús. No es una fórmula mágica al final de la oración, es orar desde la posición de quienes han sido reconciliados con el Padre a través de la cruz, cubiertos por Su justicia, representados por Su intercesión.</p>

      <p>Romanos 8:34 revela algo asombroso: en este momento, Cristo Jesús está a la diestra del Padre, intercediendo por nosotros. Nuestra oración se une a la oración de Cristo mismo. Cuando tú doblas rodillas, no estás solo, estás participando en algo que ya está sucediendo en los cielos.</p>

      <p>La fe en la oración no es convencer a Dios de algo que no quiere hacer. Es alinearse con lo que Él ya desea: nuestra restauración, nuestra paz, el avance de Su reino. Orar con fe es confiar en el carácter del Padre, tal como Jesús lo hizo en Getsemaní: «No mi voluntad, sino la tuya.»</p>

      <h3>Preguntas para meditar</h3>
      <ul>
        <li>¿Oras buscando la voluntad de Dios o tratando de doblar Su brazo hacia la tuya?</li>
        <li>¿Cómo cambia tu oración saber que Cristo está intercediendo junto a ti?</li>
        <li>¿Hay algo que has dejado de orar por falta de fe? ¿Qué te detiene?</li>
      </ul>

      <h3>Oración</h3>
      <blockquote>Padre, gracias porque no llego a ti con mis méritos sino con la sangre de tu Hijo. Gracias porque Jesús mismo intercede por mí. Enséñame a orar con fe genuina, no para manipularte, sino para alinearme contigo. Que mi voluntad se doble ante la tuya con confianza, no con temor. En el nombre de Jesús. Amén.</blockquote>

      <h3>Acción concreta</h3>
      <ol>
        <li>Separa 15 minutos hoy para orar en silencio, sin lista de peticiones, solo escucha.</li>
        <li>Lleva un diario de oración por 7 días, anotando peticiones y respuestas, incluidas las inesperadas.</li>
        <li>Lee Lucas 11:1-13 y deja que la enseñanza de Jesús sobre la oración renueve tu perspectiva.</li>
      </ol>

      <p><em>«Vive siempre para interceder por ellos.», Hebreos 7:25</em></p>
    `,
    scriptureReference: "Juan 16:24 · Romanos 8:34 · Lucas 22:42",
    scriptureText:
      "Hasta ahora nada habéis pedido en mi nombre; pedid, y recibiréis, para que vuestro gozo sea cumplido.",
    titleEn: "More Than Words: Praying From the Cross",
    excerptEn:
      "Praying in Jesus' name is not a magic formula at the end of a prayer, it is praying from the position of those who have been reconciled with the Father through the cross, covered by His righteousness, represented by His intercession.",
    scriptureTextEn:
      "Until now you have asked nothing in My name. Ask, and you will receive, that your joy may be full.",
    contentEn: `
      <p>Many pray, but few understand what it means to pray in the name of Jesus. It is not a magic formula at the end of a prayer, it is praying from the position of those who have been reconciled with the Father through the cross, covered by His righteousness, represented by His intercession.</p>

      <p>Romans 8:34 reveals something astounding: at this very moment, Christ Jesus is at the right hand of the Father, interceding for us. Our prayer joins the prayer of Christ Himself. When you kneel down, you are not alone, you are participating in something that is already happening in the heavens.</p>

      <p>Faith in prayer is not convincing God to do something He doesn't want to do. It is aligning with what He already desires: our restoration, our peace, the advance of His kingdom. Praying with faith is trusting the character of the Father, just as Jesus did in Gethsemane: "Not my will, but yours."</p>

      <h3>Questions to Reflect On</h3>
      <ul>
        <li>Do you pray seeking God's will, or trying to bend His arm toward yours?</li>
        <li>How does your prayer change knowing that Christ is interceding alongside you?</li>
        <li>Is there something you have stopped praying for out of lack of faith? What holds you back?</li>
      </ul>

      <h3>Prayer</h3>
      <blockquote>Father, thank You because I come to You not with my own merits but with the blood of Your Son. Thank You because Jesus Himself intercedes for me. Teach me to pray with genuine faith, not to manipulate You, but to align with You. May my will bow before Yours with confidence, not with fear. In the name of Jesus. Amen.</blockquote>

      <h3>Concrete Action</h3>
      <ol>
        <li>Set aside 15 minutes today to pray in silence, without a list of requests, just listen.</li>
        <li>Keep a prayer journal for 7 days, noting requests and answers, including unexpected ones.</li>
        <li>Read Luke 11:1-13 and let Jesus' teaching on prayer renew your perspective.</li>
      </ol>

      <p><em>"He always lives to make intercession for them.", Hebrews 7:25</em></p>
    `,
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
      "Josué no dijo «yo y mi casa serviremos a Jehová» desde la comodidad de una vida resuelta. Lo dijo al final de una peregrinación larga. Tu hogar no es un accidente, es un territorio con propósito eterno.",
    content: `
      <p>Josué no dijo esas palabras desde la comodidad de una vida resuelta. Las dijo al final de una peregrinación larga, enfrentando un pueblo que tenía que elegir entre los dioses de la cultura circundante y el Dios que los había librado. Y en ese momento de decisión colectiva, él habló por su hogar.</p>

      <p>La familia con propósito no es aquella donde todo funciona perfectamente. Es aquella donde Cristo es el centro, donde los valores del reino se transmiten a través de conversaciones cotidianas, de la mesa, del conflicto resuelto con gracia, del perdón que se practica antes de que los hijos sean grandes.</p>

      <p>Deuteronomio 6 instruye a los padres a hablar de los mandamientos «cuando te sientes en tu casa, cuando andes por el camino, cuando te acuestes, y cuando te levantes.» El evangelio no es un programa de los domingos, es el pulso del hogar. Cristo en la cocina, en las discusiones difíciles, en las lágrimas de los hijos.</p>

      <h3>Preguntas para meditar</h3>
      <ul>
        <li>¿Tu hogar refleja el carácter de Cristo o el de la cultura que lo rodea?</li>
        <li>¿Qué hábitos concretos tienes para transmitir la fe a quienes viven contigo?</li>
        <li>¿Dónde necesitas pedir perdón en tu familia antes de liderar espiritualmente?</li>
      </ul>

      <h3>Oración</h3>
      <blockquote>Señor, que mi hogar sea más que un lugar de convivencia, que sea un territorio donde tu presencia se siente, donde el perdón fluye, donde tus palabras se escuchan. Ayúdame a ser el tipo de esposo, padre o hijo que señala a Cristo con mi manera de vivir, no solo de hablar. Santifica mi casa desde adentro. Amén.</blockquote>

      <h3>Acción concreta</h3>
      <ol>
        <li>Esta semana, comparte una promesa bíblica en la mesa familiar y hablen juntos lo que significa.</li>
        <li>Pide perdón específicamente a alguien de tu familia por algo pendiente, sin esperar que ellos lo hagan primero.</li>
        <li>Ora en voz alta con y por los tuyos, aunque sea breve, la oración en familia tiene un impacto generacional.</li>
      </ol>

      <p><em>«Instrúyelo en su camino, y aun cuando fuere viejo no se apartará.», Proverbios 22:6</em></p>
    `,
    scriptureReference: "Josué 24:15 · Efesios 5:25 · Deuteronomio 6:6-7",
    scriptureText:
      "Y yo y mi casa serviremos a Jehová.",
    titleEn: "Your Home, His Territory",
    excerptEn:
      "Joshua did not say 'as for me and my house, we will serve the Lord' from the comfort of a settled life. He said it at the end of a long journey. Your home is not an accident, it is a territory with an eternal purpose.",
    scriptureTextEn:
      "But as for me and my house, we will serve the Lord.",
    contentEn: `
      <p>Joshua did not say those words from the comfort of a settled life. He said them at the end of a long journey, facing a people who had to choose between the gods of the surrounding culture and the God who had delivered them. And in that moment of collective decision, he spoke for his household.</p>

      <p>A family with purpose is not one where everything works perfectly. It is one where Christ is the center, where the values of the kingdom are passed on through everyday conversations, at the table, in conflict resolved with grace, in forgiveness practiced before the children are grown.</p>

      <p>Deuteronomy 6 instructs parents to speak of the commandments "when you sit in your house, when you walk by the way, when you lie down, and when you rise up." The gospel is not a Sunday program, it is the pulse of the home. Christ in the kitchen, in the hard conversations, in the tears of the children.</p>

      <h3>Questions to Reflect On</h3>
      <ul>
        <li>Does your home reflect the character of Christ or the culture that surrounds it?</li>
        <li>What concrete habits do you have for passing on faith to those who live with you?</li>
        <li>Where do you need to ask forgiveness in your family before leading spiritually?</li>
      </ul>

      <h3>Prayer</h3>
      <blockquote>Lord, may my home be more than a place of coexistence, may it be a territory where Your presence is felt, where forgiveness flows, where Your words are heard. Help me to be the kind of husband, father, or son who points to Christ through the way I live, not just through what I say. Sanctify my house from the inside. Amen.</blockquote>

      <h3>Concrete Action</h3>
      <ol>
        <li>This week, share a biblical promise at the family table and discuss together what it means.</li>
        <li>Specifically ask forgiveness from someone in your family for something unresolved, without waiting for them to go first.</li>
        <li>Pray aloud with and for your loved ones, even briefly, family prayer has a generational impact.</li>
      </ol>

      <p><em>"Train up a child in the way he should go, and when he is old he will not depart from it.", Proverbs 22:6</em></p>
    `,
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
      "Hay pérdidas que no parecen recuperables. Pero el Dios de Joel es un Dios que restituye, no solo que perdona, sino que devuelve. La promesa no es que el pasado no existió, sino que el futuro será más grande que el daño sufrido.",
    content: `
      <p>Hay pérdidas que no parecen recuperables. Años desperdiciados, relaciones rotas, decisiones que todavía duelen. Y la tentación es vivir mirando hacia atrás, calculando lo que se perdió, convenciéndose de que ya no hay tiempo o gracia suficiente.</p>

      <p>Pero el Dios de Joel es un Dios que restituye. No solo que perdona, que devuelve. Que toma lo que las langostas comieron y lo transforma. La promesa no es que el pasado no existió, sino que el futuro será más grande que el daño sufrido. Eso solo es posible porque Cristo cargó no solo nuestro pecado, sino nuestras pérdidas.</p>

      <p>La escena de Juan 21 es poderosa: Pedro había negado a Jesús tres veces. Y Jesús no lo evade ni lo condena, le hace la misma pregunta tres veces. Una por cada negación. No para recordarle su fracaso, sino para restaurarlo en su vocación. Eso es lo que Cristo hace contigo: no borra el pasado, lo redime.</p>

      <h3>Preguntas para meditar</h3>
      <ul>
        <li>¿Hay algo de tu pasado que todavía no has dejado en manos de Cristo para que lo redima?</li>
        <li>¿Crees genuinamente que Dios puede restaurar lo que se perdió, o solo lo dices de boca?</li>
        <li>¿Qué «años de langosta» podrías ver de forma diferente si confiaras en la promesa de Joel?</li>
      </ul>

      <h3>Oración</h3>
      <blockquote>Señor, te entrego los años que se fueron, las oportunidades perdidas, los errores que aún pesan. Tú eres el Dios que restituye. Tú tomaste lo que pareció una derrota, la cruz, y lo convertiste en victoria eterna. Confío que puedes hacer lo mismo con mi historia. Restáurame. Dame esperanza que no avergüence. Amén.</blockquote>

      <h3>Acción concreta</h3>
      <ol>
        <li>Escribe en papel las áreas de tu vida donde necesitas restauración y preséntaselas a Dios como un acto de fe.</li>
        <li>Lee Juan 21:1-19 lentamente. Identifícate con Pedro, ¿qué te dice Jesús a ti hoy?</li>
        <li>Busca a alguien que también esté en proceso de restauración y sé su compañía, no su juez.</li>
      </ol>

      <p><em>«El Espíritu del Señor... a proclamar el año de la buena voluntad del Señor.», Isaías 61:1-2</em></p>
    `,
    scriptureReference: "Joel 2:25 · Isaías 61:3 · Juan 21:15-17",
    scriptureText:
      "Os restituiré los años que comió la oruga, el saltón, el revoltón y la langosta... Y comeréis hasta saciaros, y alabaréis el nombre de Jehová vuestro Dios.",
    titleEn: "God Works With the Pieces",
    excerptEn:
      "There are losses that don't seem recoverable. But the God of Joel is a God who restores, not just who forgives, but who gives back. The promise is not that the past didn't happen, but that the future will be greater than the damage suffered.",
    scriptureTextEn:
      "So I will restore to you the years that the swarming locust has eaten... You shall eat in plenty and be satisfied, and praise the name of the Lord your God.",
    contentEn: `
      <p>There are losses that don't seem recoverable. Wasted years, broken relationships, decisions that still hurt. And the temptation is to live looking backward, tallying what was lost, convincing yourself that there is no longer enough time or grace.</p>

      <p>But the God of Joel is a God who restores. Not just one who forgives, one who gives back. Who takes what the locusts ate and transforms it. The promise is not that the past didn't exist, but that the future will be greater than the damage suffered. That is only possible because Christ carried not only our sin, but our losses.</p>

      <p>The scene in John 21 is powerful: Peter had denied Jesus three times. And Jesus does not avoid him or condemn him, He asks him the same question three times. One for each denial. Not to remind him of his failure, but to restore him to his calling. That is what Christ does with you: He does not erase the past, He redeems it.</p>

      <h3>Questions to Reflect On</h3>
      <ul>
        <li>Is there something from your past you still haven't placed in Christ's hands for Him to redeem?</li>
        <li>Do you genuinely believe God can restore what was lost, or do you just say it?</li>
        <li>What "locust years" could you see differently if you trusted in Joel's promise?</li>
      </ul>

      <h3>Prayer</h3>
      <blockquote>Lord, I give You the years that are gone, the missed opportunities, the mistakes that still weigh on me. You are the God who restores. You took what seemed like a defeat, the cross, and turned it into eternal victory. I trust that You can do the same with my story. Restore me. Give me hope that does not put to shame. Amen.</blockquote>

      <h3>Concrete Action</h3>
      <ol>
        <li>Write down on paper the areas of your life where you need restoration and present them to God as an act of faith.</li>
        <li>Read John 21:1-19 slowly. Identify with Peter, what is Jesus saying to you today?</li>
        <li>Find someone who is also in the process of restoration and be their companion, not their judge.</li>
      </ol>

      <p><em>"The Spirit of the Lord... to proclaim the year of the Lord's favor.", Isaiah 61:1-2</em></p>
    `,
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
  // ─── 5 ────────────────────────────────────────────────────────────────────
  {
    id: "dev-005",
    slug: "el-peso-que-el-ya-cargo",
    title: "El peso que Él ya cargó",
    excerpt:
      "El sufrimiento desorienta porque nadie lo elige. Pero Pablo descubrió algo que cambia todo: en la debilidad humana, el poder de Cristo se manifiesta de una forma que ninguna fortaleza propia puede replicar.",
    content: `
      <p>El sufrimiento desorienta porque nadie lo elige. Llega sin anunciarse, en forma de enfermedad, de pérdida, de traición, de silencio de Dios cuando más se necesita respuesta. Y en ese momento, la fe enfrenta su prueba más real: ¿seguiremos creyendo cuando no entendemos?</p>

      <p>Pablo conocía esa tensión desde adentro. Tenía un «aguijón en la carne» que le pedía a Dios tres veces que removiera. La respuesta divina no fue quitar el dolor, fue revelar algo mayor: que en la debilidad humana, la fortaleza de Cristo se manifiesta de una forma que ningún poder propio puede replicar.</p>

      <p>Isaías 53 declara que Cristo mismo «cargó nuestros dolores», no solo nuestros pecados, también nuestro sufrimiento. Eso significa que cuando atraviesas el valle, no lo haces con un Dios distante observando desde afuera. Lo haces con uno que conoce el dolor por experiencia propia, que fue crucificado, y que salió victorioso. Su fortaleza no elimina el sufrimiento inmediatamente, lo atraviesa contigo y lo transforma en algo que no puedes imaginar desde donde estás ahora.</p>

      <h3>Preguntas para meditar</h3>
      <ul>
        <li>¿Hay dolor que estás cargando solo porque te da vergüenza reconocer que no puedes más?</li>
        <li>¿Cómo cambiaría tu perspectiva saber que Cristo ya cargó este peso en la cruz?</li>
        <li>¿Qué fortaleza ha nacido en ti precisamente porque atravesaste algo difícil?</li>
      </ul>

      <h3>Oración</h3>
      <blockquote>Señor Jesús, hoy el peso se siente real y pesado. No tengo fuerza propia para seguir. Pero tú dijiste que tu gracia es suficiente. Que donde yo me acabo, tú empiezas. Te pido que tu poder repose sobre mi debilidad hoy, no cuando me sienta mejor, ahora. Tú cargaste mis dolores en la cruz. Confío en que sabes lo que haces con mi historia. Amén.</blockquote>

      <h3>Acción concreta</h3>
      <ol>
        <li>Escribe honestamente lo que estás sufriendo, sin adornarlo ni espiritualizarlo. Luego entrégaselo a Dios en oración leyéndolo en voz alta.</li>
        <li>Lee el Salmo 22 completo, el grito de abandono que terminó en alabanza. Es el salmo que Jesús citó en la cruz.</li>
        <li>Busca a alguien que haya atravesado algo parecido y pregúntale cómo Dios lo sostuvo. La fe se fortalece con testimonios reales.</li>
      </ol>

      <p><em>«Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.», Salmo 23:4</em></p>
    `,
    scriptureReference: "2 Corintios 12:9 · Isaías 53:4 · Filipenses 4:13",
    scriptureText:
      "Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.",
    titleEn: "The Weight He Already Carried",
    excerptEn:
      "Suffering disorients because no one chooses it. But Paul discovered something that changes everything: in human weakness, the power of Christ manifests in a way that no personal strength can replicate.",
    scriptureTextEn:
      "My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.",
    contentEn: `
      <p>Suffering disorients because no one chooses it. It arrives unannounced, in the form of illness, loss, betrayal, or the silence of God when an answer is needed most. And in that moment, faith faces its most real test: will we keep believing when we don't understand?</p>

      <p>Paul knew that tension from the inside. He had a "thorn in the flesh" and asked God three times to remove it. The divine response was not to take away the pain, but to reveal something greater: that in human weakness, the strength of Christ manifests in a way that no personal power can replicate.</p>

      <p>Isaiah 53 declares that Christ Himself "carried our sorrows", not just our sins, but our suffering too. That means when you walk through the valley, you don't do it with a distant God watching from outside. You do it with One who knows pain by personal experience, who was crucified, and who came out victorious. His strength doesn't immediately eliminate suffering, it walks through it with you and transforms it into something you cannot imagine from where you are now.</p>

      <h3>Questions to Reflect On</h3>
      <ul>
        <li>Is there pain you are carrying alone because you are ashamed to admit you can't go on?</li>
        <li>How would your perspective change knowing that Christ already carried this weight on the cross?</li>
        <li>What strength has been born in you precisely because you went through something difficult?</li>
      </ul>

      <h3>Prayer</h3>
      <blockquote>Lord Jesus, today the weight feels real and heavy. I have no strength of my own to keep going. But You said Your grace is sufficient. That where I end, You begin. I ask that Your power rest on my weakness today, not when I feel better, now. You carried my sorrows on the cross. I trust that You know what You are doing with my story. Amen.</blockquote>

      <h3>Concrete Action</h3>
      <ol>
        <li>Write honestly what you are suffering, without adorning it or spiritualizing it. Then give it to God in prayer by reading it aloud.</li>
        <li>Read Psalm 22 in full, the cry of abandonment that ended in praise. It is the psalm Jesus quoted on the cross.</li>
        <li>Find someone who has gone through something similar and ask them how God sustained them. Faith is strengthened by real testimonies.</li>
      </ol>

      <p><em>"Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.", Psalm 23:4</em></p>
    `,
    authorId: "pastor-001",
    authorName: "Pastor Jose Alberto Jimenez",
    featuredImage: "",
    tags: [devotionalTags[10], devotionalTags[11], devotionalTags[8]],
    categoryId: "cat-001",
    status: "published",
    publishDate: "2026-04-24",
    createdAt: "2026-04-24T07:00:00Z",
    updatedAt: "2026-04-24T07:00:00Z",
    isFeatured: true,
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
