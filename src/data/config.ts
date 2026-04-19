import type { YouTubeChannelConfig } from "@/types/youtube";

export const siteConfig = {
  name: "Centro Cristiano Adoram",
  tagline: "Un lugar donde el cielo toca la tierra",
  description:
    "Una familia de fe apostólica comprometida con adorar a Dios, crecer en su Palabra y transformar nuestras comunidades.",
  url: "https://adoram.iglesia",
  contactEmail: "adoramlares@gmail.com",
  phone: "787-379-8296",
  whatsappNumber: "17873798296",
  address: {
    street: "Av. de la Fe 1234",
    city: "Tu Ciudad",
    state: "Estado",
    zip: "00000",
    country: "País",
    mapsUrl: "https://maps.app.goo.gl/tTsXxCGkToC2HiUk8",
  },
  serviceTimes: [
    { day: "Domingo", time: "10:00 AM", name: "Servicio Principal" },
    { day: "Martes", time: "7:00 PM", name: "Estudios Bíblicos (Zoom)" },
    { day: "Viernes", time: "7:00 PM", name: "Servicio de Oración" },
    { day: "Viernes", time: "7:30 PM", name: "Servicio de Jóvenes" },
  ],
  social: {
    youtube: "https://www.youtube.com/@CCAdoram",
    facebook: "https://www.facebook.com/share/17euRRLxaq/",
    instagram: "https://instagram.com/CentroCristianoAdoram",
    whatsapp: "https://wa.me/17873798296",
  },
  pastorName: "Apóstol Juan Alberto Martines & Apóstol Wendy Ortis",
  pastorTitle: "Apóstoles",
};

export const youtubeConfig: YouTubeChannelConfig = {
  channelId: "UCxxxxxxxxxxxxxxxxxxxxxxxx",
  channelHandle: "@CCAdoram",
  channelUrl: "https://www.youtube.com/@CCAdoram",
  // apiKey: process.env.YOUTUBE_API_KEY, // Uncomment when ready
};

export const adminConfig = {
  mockCurrentUserId: "user-001",
};
