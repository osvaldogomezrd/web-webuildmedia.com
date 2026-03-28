import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";
import { getWhatsAppUrl } from "@/lib/utils";
import {
  DarkOverlayHeroSection,
  DualColumnHeroSection,
  ExploreServiceCard,
  ExploreServicesSection,
  LeadCaptureSection,
  ProcessSection,
} from "@/components/v3/sections";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Plans", href: "/plans" },
  { label: "Contact", href: "/contact" },
];

export interface HubPageTemplateContent {
  hero: {
    title: string;
    subtitle: string;
    ratingText: string;
    image: string;
  };
  sectionTitle: string;
  sectionSubtitle: string;
  cards: ExploreServiceCard[];
  processTitle: string;
  processSubtitle: string;
  processSteps: { step: string; title: string; description: string }[];
  ctaBanner: {
    badgeText: string;
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    ratingText: string;
    backgroundImage: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    bullets: string[];
  };
}

const avatars = [
  "https://www.figma.com/api/mcp/asset/8542e6a8-7b4f-42ba-9775-865183e92d21",
  "https://www.figma.com/api/mcp/asset/e2a55614-25fc-4430-952a-29d2c57e5e93",
  "https://www.figma.com/api/mcp/asset/4124ac31-e9b7-4aca-bcc8-d7d15be82457",
  "https://www.figma.com/api/mcp/asset/2f1e43fd-5718-45bd-b498-4f8f977f6026",
];

export function HubPageTemplate({ content }: { content: HubPageTemplateContent }) {
  return (
    <>
      <div className="relative bg-[#19174f]">
        <HomeV3Header dark homeHref="/" ctaHref="/contact" navLinks={navLinks} />
        <div className="pt-16">
          <DualColumnHeroSection
            id="hero"
            title={content.hero.title}
            subtitle={content.hero.subtitle}
            ratingText={content.hero.ratingText}
            image={content.hero.image}
            primaryCtaLabel="Request Proposal"
            primaryCtaHref="/contact"
            secondaryCtaLabel="Hablemos por WhatsApp"
            secondaryCtaHref={getWhatsAppUrl("Hi, I want to discuss this page category.")}
          />
        </div>
      </div>

      <ExploreServicesSection
        id="overview"
        title={content.sectionTitle}
        subtitle={content.sectionSubtitle}
        ctaLabel="Request Proposal"
        ctaHref="/contact"
        cards={content.cards}
      />

      <ProcessSection
        id="process"
        eyebrow="Process"
        title={content.processTitle}
        subtitle={content.processSubtitle}
        steps={content.processSteps}
        ctaHref="/contact"
        ctaLabel="Request Proposal"
        whatsappLabel="Hablemos por WhatsApp"
      />

      <DarkOverlayHeroSection
        id="cta-banner"
        backgroundImage={content.ctaBanner.backgroundImage}
        badgeText={content.ctaBanner.badgeText}
        titleLineOne={content.ctaBanner.titleLineOne}
        titleLineTwo={content.ctaBanner.titleLineTwo}
        subtitle={content.ctaBanner.subtitle}
        primaryLabel="Request Proposal"
        primaryHref="/contact"
        secondaryLabel="Hablemos por WhatsApp"
        secondaryHref={getWhatsAppUrl("Hi, I want a proposal.")}
        avatars={avatars}
        ratingText={content.ctaBanner.ratingText}
      />

      <LeadCaptureSection
        title={content.finalCta.title}
        subtitle={content.finalCta.subtitle}
        bullets={content.finalCta.bullets}
        quoteHref="/contact#lead-form"
        proposalHref="/contact"
        whatsappLabel="Hablemos por WhatsApp"
      />

      <HomeV3Footer homeHref="/" whatsappLabel="Hablemos por WhatsApp" />
    </>
  );
}
