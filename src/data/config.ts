import type { YouTubeChannelConfig } from "@/types/youtube";

export const siteConfig = {
  name: "Centro Cristiano Adoram",
  tagline: "Un lugar donde el cielo toca la tierra",
  description:
    "Una familia de fe apostólica protestante comprometida con adorar a Dios, crecer en su Palabra y transformar nuestras comunidades.",
  url: "https://adoram.iglesia",
  contactEmail: "info@adoram.iglesia",
  phone: "+1 (000) 000-0000",
  whatsappNumber: "10000000000",
  address: {
    street: "Av. de la Fe 1234",
    city: "Tu Ciudad",
    state: "Estado",
    zip: "00000",
    country: "País",
    mapsUrl: "https://maps.google.com",
  },
  serviceTimes: [
    { day: "Domingo", time: "10:00 AM", name: "Servicio Principal" },
    { day: "Miércoles", time: "7:00 PM", name: "Estudio Bíblico" },
    { day: "Viernes", time: "7:30 PM", name: "Noche de Alabanza" },
  ],
  social: {
    youtube: "https://youtube.com/@CentroCristianoAdoram",
    facebook: "https://facebook.com/CentroCristianoAdoram",
    instagram: "https://instagram.com/CentroCristianoAdoram",
    whatsapp: "https://wa.me/10000000000",
  },
  pastorName: "Pastor(a) Nombre Apellido",
  pastorTitle: "Pastor Principal",
};

export const youtubeConfig: YouTubeChannelConfig = {
  channelId: "UCxxxxxxxxxxxxxxxxxxxxxxxx",
  channelHandle: "@CentroCristianoAdoram",
  channelUrl: "https://youtube.com/@CentroCristianoAdoram",
  // apiKey: process.env.YOUTUBE_API_KEY, // Uncomment when ready
};

export const adminConfig = {
  mockCurrentUserId: "user-001",
};
