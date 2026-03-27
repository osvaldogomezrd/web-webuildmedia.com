import type { Metadata } from "next";
import DisenoWebPage from "@/app/diseno-web/page";
import { makeLanguageAlternates } from "@/lib/i18n-routing";
import { makePageMetadata } from "@/lib/seo";

export const metadata: Metadata = makePageMetadata({
  title: "Professional Web Design | Request Proposal",
  description:
    "Professional web design service with SEO, development, and maintenance. Clear pricing, a 30-day process, and direct WhatsApp contact.",
  path: "/en/web-design",
  languages: makeLanguageAlternates("/services/diseno-web", "/en/web-design"),
});

export default function EnglishWebDesignPage() {
  return <DisenoWebPage />;
}
