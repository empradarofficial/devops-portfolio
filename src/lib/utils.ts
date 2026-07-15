import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  },
): string {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}

export function formatDateRange(
  startDate: string,
  endDate: string | null,
): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Present";
  return `${start} — ${end}`;
}

export function absoluteUrl(path: string, baseUrl: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, "")}${normalized}`;
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trimEnd()}…`;
}
