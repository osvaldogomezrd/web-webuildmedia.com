import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";
import {
  BenefitsSection,
  DualColumnHeroSection,
  ExploreServicesSection,
  FaqSection,
  LeadCaptureSection,
  PricingSection,
  ProblemSolutionSection,
  ProcessSection,
  TestimonialTickerSection,
} from "@/components/v3/sections";
import {
  footerExtraLinks,
  footerServiceLinks,
  localeNavLinks,
  localePaths,
  MultiLocationHomeContent,
  sharedHeroImage,
} from "@/lib/v3-multilang-content";

export function MultiLocationHome({ content }: { content: MultiLocationHomeContent }) {
  const paths = localePaths(content.locale);

  return (
    <>
      <div className="relative bg-[#19174f]">
        <h1 className="sr-only">{content.heroTitle}</h1>
        <HomeV3Header
          dark
          homeHref={content.homePath}
          ctaHref={paths.contact}
          navLinks={localeNavLinks(content.locale)}
        />
        <div className="pt-16">
          <DualColumnHeroSection
            id="hero"
            title={content.heroTitle}
            subtitle={content.heroSubtitle}
            ratingText={content.heroRatingText}
            image={sharedHeroImage}
            primaryCtaLabel={content.heroPrimaryCta}
            primaryCtaHref={paths.contact}
            secondaryCtaLabel={content.heroSecondaryCta}
            secondaryCtaHref={paths.pricing}
          />
        </div>
      </div>

      <ExploreServicesSection
        id="locations"
        title={content.chooseLocationTitle}
        subtitle={content.chooseLocationSubtitle}
        ctaLabel={content.chooseLocationCta}
        ctaHref="#locations"
        cards={content.locationCards}
      />

      <ProblemSolutionSection
        id="problems"
        eyebrow="Problems We Solve"
        title={content.problemsTitle}
        subtitle={content.problemsSubtitle}
        items={content.problems}
      />

      <BenefitsSection
        id="services"
        eyebrow="Services"
        title={content.benefitsTitle}
        subtitle={content.benefitsSubtitle}
        items={content.benefits}
      />

      <ProcessSection
        id="process"
        eyebrow="Process"
        title={content.processTitle}
        subtitle={content.processSubtitle}
        steps={content.process}
        ctaHref={paths.contact}
        ctaLabel="Request Proposal"
        whatsappLabel={content.locale === "es" ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
        whatsappMessage={
          content.locale === "es"
            ? "Hola, quiero una propuesta para conseguir más clientes con mi sitio web."
            : "Hi, I want a proposal to get more clients through my website."
        }
      />

      <PricingSection
        id="pricing"
        title={content.pricingTitle}
        subtitle={content.pricingSubtitle}
        plans={content.plans}
        proposalHref={paths.contact}
        whatsappLabel={content.locale === "es" ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
        helpText=""
        helpCtaText={
          content.locale === "es"
            ? "Request Free Quote para tu negocio"
            : "Request Free Quote for your business"
        }
        helpCtaHref={paths.contact}
      />

      <TestimonialTickerSection
        id="testimonials"
        title={content.testimonialsTitle}
        subtitle={content.testimonialsSubtitle}
        rowLeft={content.tickerLeft}
        rowRight={content.tickerRight}
      />

      <FaqSection
        id="faq"
        title={content.faqTitle}
        subtitle={content.faqSubtitle}
        items={content.faqs}
      />

      <LeadCaptureSection
        title={content.leadTitle}
        subtitle={content.leadSubtitle}
        bullets={content.leadBullets}
        quoteHref="#lead-form"
        proposalHref={paths.contact}
        whatsappLabel={content.locale === "es" ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
        whatsappMessage={
          content.locale === "es"
            ? "Hola, quiero una propuesta para mi negocio."
            : "Hi, I want a proposal for my business."
        }
      />

      <HomeV3Footer
        homeHref={content.homePath}
        description={content.footerDescription}
        serviceLinks={footerServiceLinks(content.locale)}
        extraLinks={footerExtraLinks(content.locale)}
        whatsappLabel={content.locale === "es" ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
      />
    </>
  );
}
