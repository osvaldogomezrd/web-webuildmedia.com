import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "18491234567";

export const WHATSAPP_DEFAULT_MESSAGE = encodeURIComponent(
  "Hi! I found you through your website and I'd like to learn more about your web design services."
);

export function getWhatsAppUrl(message?: string) {
  const msg = message
    ? encodeURIComponent(message)
    : WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
