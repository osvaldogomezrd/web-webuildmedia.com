import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/v3/service-page-template";
import { makeLanguageAlternates } from "@/lib/i18n-routing";
import { makePageMetadata } from "@/lib/seo";
import { servicePagesContent, type ServicePageSlug } from "@/lib/service-pages-content";

function isServiceSlug(value: string): value is ServicePageSlug {
  return value in servicePagesContent;
}

export function generateStaticParams() {
  return Object.keys(servicePagesContent).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) return {};

  const content = servicePagesContent[slug];
  const path = `/services/${slug}`;

  return makePageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path,
    ...(slug === "diseno-web"
      ? { languages: makeLanguageAlternates("/services/diseno-web", "/en/web-design") }
      : {}),
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();

  return <ServicePageTemplate content={servicePagesContent[slug]} />;
}

