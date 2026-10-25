import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { locales } from "@/i18n/config";
import { getPublishedDevotionals } from "@/data/devotionals";

// Rutas públicas conocidas del sitio (excluye /admin, que está marcado noindex
// y bloqueado en robots.txt). Next.js genera esto como sitemap.xml estático
// en el build gracias a `output: "export"`.
const STATIC_PATHS = ["", "/visitar", "/devocionales", "/privacidad", "/terminos", "/accesibilidad", "/solicitud-datos"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const devotionalSlugs = getPublishedDevotionals().map((d) => d.slug);

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of STATIC_PATHS) {
      entries.push({ url: `${base}/${locale}${path}` });
    }
    for (const slug of devotionalSlugs) {
      entries.push({ url: `${base}/${locale}/devocionales/${slug}` });
    }
  }

  return entries;
}
