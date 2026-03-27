import type { Metadata } from "next";
import { HomePageContent } from "@/components/v3/home-page-content";
import { makeLanguageAlternates } from "@/lib/i18n-routing";
import { makePageMetadata } from "@/lib/seo";

export const metadata: Metadata = makePageMetadata({
  title: "Web Design Punta Cana, Miami & Orlando | Request Proposal",
  description:
    "Conversion-focused web design and web development for businesses in Punta Cana, Miami, and Orlando. Request Proposal, Request Free Quote, or chat on WhatsApp.",
  path: "/en",
  languages: makeLanguageAlternates("/", "/en"),
});

export default function EnglishHomePage() {
  return <HomePageContent locale="en" />;
}

