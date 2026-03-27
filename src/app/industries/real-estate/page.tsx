import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/v3/industry-page-template";
import { industryPageContent } from "@/lib/industry-pages-content";
import { INDUSTRY_ES_TO_EN, makeLanguageAlternates } from "@/lib/i18n-routing";
import { makePageMetadata } from "@/lib/seo";

const content = industryPageContent["real-estate"];

export const metadata: Metadata = makePageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/industries/real-estate",
  languages: makeLanguageAlternates(`/industries/${content.slug}`, `/en/industries/${INDUSTRY_ES_TO_EN[content.slug]}`),
});

export default function RealEstateIndustryPage() {
  return <IndustryPageTemplate content={content} />;
}
