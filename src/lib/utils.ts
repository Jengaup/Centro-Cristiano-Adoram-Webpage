import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
  locale: string = "es"
): string {
  return new Intl.DateTimeFormat(locale, options).format(new Date(dateString));
}

export function formatShortDate(dateString: string, locale: string = "es"): string {
  return formatDate(dateString, { day: "numeric", month: "short" }, locale);
}

export function getDayOfWeek(dateString: string, locale: string = "es"): string {
  return new Intl.DateTimeFormat(locale, { weekday: "long" }).format(
    new Date(dateString)
  );
}

export function getMonthAbbr(dateString: string, locale: string = "es"): string {
  return new Intl.DateTimeFormat(locale, { month: "short" })
    .format(new Date(dateString))
    .toUpperCase();
}

export function getDayNumber(dateString: string, locale: string = "es"): string {
  return new Intl.DateTimeFormat(locale, { day: "numeric" }).format(
    new Date(dateString)
  );
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
