import type { Locale } from "./config";

const dictionaries = {
  es: () => import("./dictionaries/es").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return (dictionaries[locale] ?? dictionaries.es)();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
