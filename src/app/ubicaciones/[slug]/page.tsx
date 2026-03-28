import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/v3/location-page-template";
import { locationPagesContentEs, locationSlugs, type LocationSlug } from "@/lib/location-pages-content";
import { makeLanguageAlternates } from "@/lib/i18n-routing";
import { makePageMetadata } from "@/lib/seo";

function isLocationSlug(value: string): value is LocationSlug {
  return locationSlugs.includes(value as LocationSlug);
}

export function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isLocationSlug(slug)) return {};
  const content = locationPagesContentEs[slug];

  return makePageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: content.path,
    languages: makeLanguageAlternates(content.path, `/en/locations/${slug}`),
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isLocationSlug(slug)) notFound();

  return <LocationPageTemplate content={locationPagesContentEs[slug]} />;
}
