export interface Testimony {
  id: string;
  name: string;
  role?: string;
  yearsInChurch?: number;
  excerpt: string;
  fullText?: string;
  avatar?: string;
  highlight: string;
}

export const testimonies: Testimony[] = [
  {
    id: "test-001",
    name: "Laura M.",
    role: "Miembro",
    yearsInChurch: 3,
    excerpt:
      "Llegué a Adoram en uno de los momentos más oscuros de mi vida. No sabía que vendría a encontrarme con un Dios que me conocía por nombre y tenía un plan para mí.",
    highlight: "Encontré restauración cuando más la necesitaba",
    avatar: "",
  },
  {
    id: "test-002",
    name: "Roberto & Carmen S.",
    role: "Matrimonio",
    yearsInChurch: 5,
    excerpt:
      "Nuestro matrimonio estaba en crisis. A través de la comunidad de Adoram, encontramos consejería bíblica, oración y hermanos que creyeron en nosotros. Hoy tenemos un matrimonio completamente renovado.",
    highlight: "Dios restauró nuestro matrimonio",
    avatar: "",
  },
  {
    id: "test-003",
    name: "Miguel A.",
    role: "Joven",
    yearsInChurch: 2,
    excerpt:
      "Vine por primera vez porque un amigo me invitó. Pensé que no era 'para mí'. Pero desde el primer servicio sentí algo diferente, una calidez genuina y una presencia que no podía explicar.",
    highlight: "Me encontró donde estaba sin juzgarme",
    avatar: "",
  },
  {
    id: "test-004",
    name: "Esperanza R.",
    role: "Abuela de la congregación",
    yearsInChurch: 8,
    excerpt:
      "A mis 67 años, pensaba que era demasiado tarde para cambiar. Adoram me enseñó que para Dios nunca es tarde. Hoy sirvo en el ministerio de intercesión con más fuego que cuando tenía 30.",
    highlight: "Nunca es demasiado tarde para comenzar",
    avatar: "",
  },
];
