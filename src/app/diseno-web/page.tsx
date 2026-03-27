import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/v3/service-page-template";
import { makeLanguageAlternates } from "@/lib/i18n-routing";
import { makePageMetadata } from "@/lib/seo";
import { servicePagesContent } from "@/lib/service-pages-content";

const content = servicePagesContent["diseno-web"];

export const metadata: Metadata = makePageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/services/diseno-web",
  languages: makeLanguageAlternates("/services/diseno-web", "/en/web-design"),
});

export default function DisenoWebLegacyRoutePage() {
  return <ServicePageTemplate content={content} />;
}

