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
  }
): string {
  return new Intl.DateTimeFormat("es", options).format(new Date(dateString));
}

export function formatShortDate(dateString: string): string {
  return formatDate(dateString, { day: "numeric", month: "short" });
}

export function getDayOfWeek(dateString: string): string {
  return new Intl.DateTimeFormat("es", { weekday: "long" }).format(
    new Date(dateString)
  );
}

export function getMonthAbbr(dateString: string): string {
  return new Intl.DateTimeFormat("es", { month: "short" })
    .format(new Date(dateString))
    .toUpperCase();
}

export function getDayNumber(dateString: string): string {
  return new Intl.DateTimeFormat("es", { day: "numeric" }).format(
    new Date(dateString)
  );
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
