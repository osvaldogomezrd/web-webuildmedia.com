import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";
import { getWhatsAppUrl } from "@/lib/utils";
import { getAgencyPricingPlans } from "@/lib/agency-pricing";
import {
  BenefitsSection,
  DarkOverlayHeroSection,
  ExploreServicesSection,
  FaqSection,
  FeatureShowcaseItem,
  FeatureShowcaseSection,
  LeadCaptureSection,
  PricingSection,
  ProblemSolutionSection,
  ProofSection,
  ProcessItem,
  ProcessSection,
  TestimonialItem,
} from "@/components/v3/sections";

export interface CoreServicePageContent {
  slug: string;
  hero: {
    h1: string;
    badgeText: string;
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    ratingText: string;
    backgroundImage: string;
  };
  metadataTitle: string;
  metadataDescription: string;
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefitsItems: { title: string; description: string }[];
  audienceTitle: string;
  audienceSubtitle: string;
  audienceItems: { title: string; description: string }[];
  processTitle: string;
  processSubtitle: string;
  processSteps: ProcessItem[];
  outcomesTitle?: string;
  outcomesSubtitle?: string;
  outcomesStats?: { value: string; label: string }[];
  outcomesTestimonials?: TestimonialItem[];
  recommendedPlan?: string;
  deliverables: {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    image: string;
    items: FeatureShowcaseItem[];
  };
  ctaBanner: {
    badgeText: string;
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    ratingText: string;
    backgroundImage: string;
  };
  faqs: { question: string; answer: string }[];
  finalCta: {
    title: string;
    subtitle: string;
    bullets: string[];
  };
  relatedServices: {
    title: string;
    subtitle: string;
    cards: {
      image: string;
      title: string;
      description: string;
      tags: string[];
      href: string;
    }[];
  };
}

const commonAvatars = [
  "https://www.figma.com/api/mcp/asset/8542e6a8-7b4f-42ba-9775-865183e92d21",
  "https://www.figma.com/api/mcp/asset/e2a55614-25fc-4430-952a-29d2c57e5e93",
  "https://www.figma.com/api/mcp/asset/4124ac31-e9b7-4aca-bcc8-d7d15be82457",
  "https://www.figma.com/api/mcp/asset/2f1e43fd-5718-45bd-b498-4f8f977f6026",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Plans", href: "/plans" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

const footerServiceLinks = [
  { label: "Web Design", href: "/web-design" },
  { label: "Web Development", href: "/web-development" },
  { label: "Ecommerce Websites", href: "/ecommerce-websites" },
  { label: "Website Redesign", href: "/website-redesign" },
  { label: "Landing Page Design", href: "/landing-page-design" },
];

const footerExtraLinks = [
  { label: "Web Design Punta Cana", href: "/web-design-punta-cana" },
  { label: "Web Design Orlando", href: "/web-design-orlando" },
  { label: "Web Design Miami", href: "/en/web-design-miami" },
  { label: "Contact", href: "/contact" },
];

export function CoreServicePageTemplate({ content }: { content: CoreServicePageContent }) {
  const outcomesStats = content.outcomesStats ?? [
    { value: "2-4x", label: "increase in qualified lead flow" },
    { value: "4.9/5", label: "average client satisfaction" },
    { value: "<3s", label: "mobile performance target" },
  ];
  const outcomesTestimonials = content.outcomesTestimonials ?? [
    {
      quote: "Our inquiry quality improved within weeks after launch.",
      author: "Client Team",
      role: "Operations",
    },
    {
      quote: "The structure made our offer easier to understand and buy.",
      author: "Business Owner",
      role: "Founder",
    },
    {
      quote: "Clear process, strong conversion focus, and measurable progress.",
      author: "Marketing Lead",
      role: "Growth",
    },
  ];

  return (
    <>
      <div className="relative bg-[#070707]">
        <h1 className="sr-only">{content.hero.h1}</h1>
        <HomeV3Header dark homeHref="/home-v3" ctaHref="/contact" navLinks={navLinks} />
        <div className="pt-16">
          <DarkOverlayHeroSection
            id="hero"
            backgroundImage={content.hero.backgroundImage}
            badgeText={content.hero.badgeText}
            titleLineOne={content.hero.titleLineOne}
            titleLineTwo={content.hero.titleLineTwo}
            subtitle={content.hero.subtitle}
            primaryLabel="Request Proposal"
            primaryHref="/contact"
            secondaryLabel="Hablemos por WhatsApp"
            secondaryHref={getWhatsAppUrl("Hi, I want a proposal for this service.")}
            avatars={commonAvatars}
            ratingText={content.hero.ratingText}
          />
        </div>
      </div>

      <ProblemSolutionSection
        id="who-is-for"
        eyebrow="Who Is This For"
        title={content.audienceTitle}
        subtitle={content.audienceSubtitle}
        items={content.audienceItems}
      />

      <FeatureShowcaseSection
        id="what-includes"
        eyebrow={content.deliverables.eyebrow}
        titleLineOne={content.deliverables.titleLineOne}
        titleLineTwo={content.deliverables.titleLineTwo}
        subtitle={content.deliverables.subtitle}
        ctaLabel="Request Free Quote"
        ctaHref="/contact#lead-form"
        image={content.deliverables.image}
        items={content.deliverables.items}
      />

      <BenefitsSection
        id="benefits"
        eyebrow="Benefits"
        title={content.benefitsTitle}
        subtitle={content.benefitsSubtitle}
        items={content.benefitsItems}
      />

      <ProofSection
        id="outcomes"
        title={content.outcomesTitle ?? "Outcomes that improve lead generation"}
        subtitle={
          content.outcomesSubtitle ??
          "Each page is designed to improve trust, conversion quality, and inquiry consistency."
        }
        stats={outcomesStats}
        testimonials={outcomesTestimonials}
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
        whatsappMessage={`Hi, I want a proposal for ${content.hero.h1}.`}
      />

      <PricingSection
        id="recommended-plan"
        title="Recommended plan for this service"
        subtitle="Transparent pricing, clear scope, and a plan based on your current growth stage."
        plans={getAgencyPricingPlans(content.recommendedPlan)}
        proposalHref="/contact"
        whatsappLabel="Hablemos por WhatsApp"
        helpText=""
        helpCtaText="Request Free Quote for your business"
        helpCtaHref="/contact#lead-form"
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
        secondaryHref={getWhatsAppUrl("Hi, I want a free quote.")}
        avatars={commonAvatars}
        ratingText={content.ctaBanner.ratingText}
      />

      <FaqSection
        id="faq"
        title="Frequently asked questions about this service"
        subtitle="Answers designed to remove friction before users request a proposal."
        items={content.faqs}
      />

      <ExploreServicesSection
        id="related-services"
        title={content.relatedServices.title}
        subtitle={content.relatedServices.subtitle}
        ctaLabel="Request Proposal"
        ctaHref="/contact"
        cards={content.relatedServices.cards}
      />

      <LeadCaptureSection
        title={content.finalCta.title}
        subtitle={content.finalCta.subtitle}
        bullets={content.finalCta.bullets}
        proposalHref="/contact"
        quoteHref="/contact#lead-form"
        whatsappLabel="Hablemos por WhatsApp"
        whatsappMessage={`Hi, I want to get started with ${content.hero.h1}.`}
      />

      <HomeV3Footer
        homeHref="/"
        whatsappLabel="Hablemos por WhatsApp"
        serviceLinks={footerServiceLinks}
        extraLinks={footerExtraLinks}
      />
    </>
  );
}
