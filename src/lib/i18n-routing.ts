import type { IndustrySlug } from "@/lib/industry-pages-content";

export type SiteLocale = "es" | "en";

export type IndustryEnSlug =
  | "real-estate"
  | "restaurants"
  | "hotels-villas"
  | "tours-excursions"
  | "spas-wellness"
  | "clinics-health"
  | "lawyers-premium-services"
  | "construction-developments"
  | "tourism-businesses";

export const INDUSTRY_ES_TO_EN: Record<IndustrySlug, IndustryEnSlug> = {
  "real-estate": "real-estate",
  restaurantes: "restaurants",
  "hoteles-villas": "hotels-villas",
  "tours-excursiones": "tours-excursions",
  "spas-wellness": "spas-wellness",
  "clinicas-salud": "clinics-health",
  "abogados-servicios-premium": "lawyers-premium-services",
  "constructoras-desarrollos": "construction-developments",
  "negocios-turisticos": "tourism-businesses",
};

export const INDUSTRY_EN_TO_ES: Record<IndustryEnSlug, IndustrySlug> = {
  "real-estate": "real-estate",
  restaurants: "restaurantes",
  "hotels-villas": "hoteles-villas",
  "tours-excursions": "tours-excursiones",
  "spas-wellness": "spas-wellness",
  "clinics-health": "clinicas-salud",
  "lawyers-premium-services": "abogados-servicios-premium",
  "construction-developments": "constructoras-desarrollos",
  "tourism-businesses": "negocios-turisticos",
};

function normalizePath(pathname: string): string {
  if (!pathname) return "/";
  const noQuery = pathname.split("?")[0] ?? "/";
  const noHash = noQuery.split("#")[0] ?? "/";
  const prefixed = noHash.startsWith("/") ? noHash : `/${noHash}`;
  if (prefixed.length > 1 && prefixed.endsWith("/")) {
    return prefixed.slice(0, -1);
  }
  return prefixed || "/";
}

export function localeFromPath(pathname: string): SiteLocale {
  const normalized = normalizePath(pathname);
  return normalized === "/en" || normalized.startsWith("/en/") ? "en" : "es";
}

export function toLocalePath(pathname: string, targetLocale: SiteLocale): string {
  const normalized = normalizePath(pathname);
  const currentLocale = localeFromPath(normalized);
  if (currentLocale === targetLocale) return normalized;

  if (targetLocale === "en") {
    if (normalized === "/") return "/en";
    if (normalized === "/diseno-web") return "/en/web-design";
    if (normalized === "/services/diseno-web") return "/en/web-design";
    if (normalized.startsWith("/ubicaciones/")) {
      const slug = normalized.replace("/ubicaciones/", "");
      return `/en/locations/${slug}`;
    }
    if (normalized.startsWith("/services/")) return "/en";
    if (normalized.startsWith("/industries/")) {
      const esSlug = normalized.replace("/industries/", "") as IndustrySlug;
      const enSlug = INDUSTRY_ES_TO_EN[esSlug];
      return enSlug ? `/en/industries/${enSlug}` : `/en${normalized}`;
    }
    return `/en${normalized}`;
  }

  if (normalized === "/en") return "/";
  if (normalized === "/en/web-design") return "/services/diseno-web";
  if (normalized.startsWith("/en/locations/")) {
    const slug = normalized.replace("/en/locations/", "");
    return `/ubicaciones/${slug}`;
  }
  if (normalized.startsWith("/en/industries/")) {
    const enSlug = normalized.replace("/en/industries/", "") as IndustryEnSlug;
    const esSlug = INDUSTRY_EN_TO_ES[enSlug];
    return esSlug ? `/industries/${esSlug}` : normalized.replace(/^\/en/, "") || "/";
  }
  if (normalized.startsWith("/en/")) {
    return normalized.replace(/^\/en/, "") || "/";
  }

  return normalized;
}

export function makeLanguageAlternates(esPath: string, enPath: string): Record<string, string> {
  return {
    es: esPath,
    "es-DO": esPath,
    en: enPath,
    "en-US": enPath,
    "x-default": esPath,
  };
}
