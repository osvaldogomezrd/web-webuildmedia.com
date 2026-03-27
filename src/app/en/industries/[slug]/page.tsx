import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPageTemplate } from "@/components/v3/industry-page-template";
import { industryPageContent, type IndustrySlug } from "@/lib/industry-pages-content";
import {
  INDUSTRY_EN_TO_ES,
  INDUSTRY_ES_TO_EN,
  type IndustryEnSlug,
  makeLanguageAlternates,
} from "@/lib/i18n-routing";
import { makePageMetadata } from "@/lib/seo";

function resolveSpanishSlug(slug: string): IndustrySlug | null {
  return (INDUSTRY_EN_TO_ES as Partial<Record<string, IndustrySlug>>)[slug] ?? null;
}

export function generateStaticParams() {
  return Object.values(INDUSTRY_ES_TO_EN).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const esSlug = resolveSpanishSlug(slug);
  if (!esSlug) return {};

  const content = industryPageContent[esSlug];
  const enSlug = INDUSTRY_ES_TO_EN[esSlug];
  const esPath = `/industries/${esSlug}`;
  const enPath = `/en/industries/${enSlug}`;

  return makePageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: enPath,
    languages: makeLanguageAlternates(esPath, enPath),
  });
}

export default async function EnglishIndustryPage({
  params,
}: {
  params: Promise<{ slug: IndustryEnSlug }>;
}) {
  const { slug } = await params;
  const esSlug = resolveSpanishSlug(slug);
  if (!esSlug) notFound();

  const content = industryPageContent[esSlug];
  return <IndustryPageTemplate content={content} locale="en" />;
}

