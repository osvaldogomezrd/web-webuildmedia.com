import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";
import {
  BelowTheFoldSection,
  FaqSection,
  FeaturedBlackSection,
  Hero2BlueSection,
  HoverRevealServicesSection,
  KeyFeatureGridSection,
  LeadCaptureSection,
  PricingSection,
  ProcessSection,
  TestimonialBannerSection,
} from "@/components/v3/sections";
import { getWhatsAppUrl } from "@/lib/utils";
import type { LocationPageContent } from "@/lib/location-pages-content";

export function LocationPageTemplate({ content }: { content: LocationPageContent }) {
  const isEs = content.locale === "es";
  const heroWhatsappHref = getWhatsAppUrl(content.hero.whatsappMessage);
  const ratingText = isEs
    ? "4.9 promedio en resultados de captación"
    : "4.9 average in lead-generation results";
  const locationBasePath = isEs ? "/ubicaciones" : "/en/locations";
  const homeHref = isEs ? "/" : "/en";

  const navItems = [
    {
      label: isEs ? "Servicios" : "Services",
      children: [
        { label: isEs ? "Diseño web" : "Web Design", href: "/services/diseno-web" },
        { label: isEs ? "Landing pages" : "Landing pages", href: "/services/landing-pages" },
        { label: "Ecommerce", href: "/services/ecommerce" },
        { label: isEs ? "Rediseño web" : "Website redesign", href: "/services/rediseno-web" },
        { label: isEs ? "Soluciones personalizadas" : "Custom solutions", href: "/services/soluciones-personalizadas" },
      ],
    },
    {
      label: isEs ? "Industrias" : "Industries",
      children: [
        { label: isEs ? "Real Estate & Inmobiliarias" : "Real Estate", href: isEs ? "/industries/real-estate" : "/en/industries/real-estate" },
        { label: isEs ? "Restaurantes & Bares" : "Restaurants & Bars", href: isEs ? "/industries/restaurantes" : "/en/industries/restaurants" },
        { label: isEs ? "Hoteles & Villas" : "Hotels & Villas", href: isEs ? "/industries/hoteles-villas" : "/en/industries/hotels-villas" },
        { label: isEs ? "Tours & Excursiones" : "Tours & Excursions", href: isEs ? "/industries/tours-excursiones" : "/en/industries/tours-excursions" },
        { label: isEs ? "Spas & Wellness" : "Spas & Wellness", href: isEs ? "/industries/spas-wellness" : "/en/industries/spas-wellness" },
        { label: isEs ? "Clínicas & Salud" : "Clinics & Health", href: isEs ? "/industries/clinicas-salud" : "/en/industries/clinics-health" },
        {
          label: isEs ? "Abogados & Servicios Premium" : "Lawyers & Premium Services",
          href: isEs ? "/industries/abogados-servicios-premium" : "/en/industries/lawyers-premium-services",
        },
        {
          label: isEs ? "Constructoras & Desarrollos" : "Construction & Developments",
          href: isEs ? "/industries/constructoras-desarrollos" : "/en/industries/construction-developments",
        },
        { label: isEs ? "Negocios turísticos" : "Tourism businesses", href: isEs ? "/industries/negocios-turisticos" : "/en/industries/tourism-businesses" },
      ],
    },
    {
      label: isEs ? "Ubicaciones" : "Locations",
      children: [
        { label: "Diseño web Punta Cana", href: `${locationBasePath}/punta-cana` },
        { label: "Diseño web República Dominicana", href: `${locationBasePath}/republica-dominicana` },
        { label: "Diseño web Santiago", href: `${locationBasePath}/santiago` },
        { label: "Web design Miami", href: `${locationBasePath}/miami` },
        { label: "Web design Orlando", href: `${locationBasePath}/orlando` },
      ],
    },
  ];

  return (
    <>
      <div className="relative bg-[#19174f]">
        <HomeV3Header
          dark
          homeHref={homeHref}
          ctaHref="#contact"
          ctaLabel={isEs ? "Solicitar servicio" : "Request service"}
          ctaWhatsappMessage={content.hero.whatsappMessage}
          navItems={navItems}
        />
        <Hero2BlueSection
          id="hero"
          ratingText={ratingText}
          titleLineOne={content.hero.titleLineOne}
          titleLineTwo={content.hero.titleLineTwo}
          subtitle={content.hero.subtitle}
          primaryLabel={isEs ? "Solicitar propuesta" : "Request proposal"}
          primaryHref="#contact"
          secondaryLabel={isEs ? "Escríbeme por WhatsApp" : "Message me on WhatsApp"}
          secondaryHref={heroWhatsappHref}
          image={content.hero.image}
          backgroundClass="bg-[#19174f]"
          disableTitleClamp
          disableSubtitleClamp
        />
      </div>

      <BelowTheFoldSection
        id="trust"
        titleLineOne={content.trust.titleLineOne}
        titleLineTwo={content.trust.titleLineTwo}
        subtitleLineOne={content.trust.subtitleLineOne}
        subtitleLineTwo={content.trust.subtitleLineTwo}
        stats={content.trust.stats}
        secondaryTitleLineOne={content.why.titleLineOne}
        secondaryTitleLineTwo={content.why.titleLineTwo}
        secondarySubtitleLineOne={content.why.subtitleLineOne}
        secondarySubtitleLineTwo={content.why.subtitleLineTwo}
        features={content.why.features}
        activeDot={0}
        showBottomCta={false}
      />

      <HoverRevealServicesSection
        id="services"
        tone="light"
        eyebrow={isEs ? "Servicios" : "Services"}
        titleLineOne={content.services.titleLineOne}
        titleLineTwo={content.services.titleLineTwo}
        intro={content.services.intro}
        ctaLabel={isEs ? "Solicitar propuesta" : "Request proposal"}
        ctaHref="#contact"
        items={content.services.items}
      />

      <KeyFeatureGridSection
        id="industries"
        eyebrow={isEs ? "Industrias" : "Industries"}
        titleLineOne={content.industries.titleLineOne}
        titleLineTwo={content.industries.titleLineTwo}
        subtitle={content.industries.subtitle}
        ctaLabel={isEs ? "Solicitar propuesta" : "Request proposal"}
        ctaHref="#contact"
        items={content.industries.items}
      />

      <FeaturedBlackSection
        id="outcomes"
        titleLineOne={content.outcomes.titleLineOne}
        titleLineTwo={content.outcomes.titleLineTwo}
        descriptionLines={content.outcomes.descriptionLines}
        features={content.outcomes.features}
        featureImage="https://www.figma.com/api/mcp/asset/ca337080-94cb-422c-8be2-e4bb50ec6c44"
        stats={content.outcomes.stats}
        quotePrimary={content.outcomes.quotePrimary}
        quoteSecondaryLineOne={content.outcomes.quoteSecondaryLineOne}
        quoteSecondaryLineTwo={content.outcomes.quoteSecondaryLineTwo}
        quoteSecondaryLineThree={content.outcomes.quoteSecondaryLineThree}
      />

      <ProcessSection
        id="process"
        tone="light"
        eyebrow={isEs ? "Proceso" : "Process"}
        title={content.process.title}
        subtitle={content.process.subtitle}
        steps={content.process.steps}
        ctaHref="#contact"
        ctaLabel={isEs ? "Solicitar propuesta" : "Request proposal"}
        whatsappLabel={isEs ? "Escríbeme por WhatsApp" : "Message me on WhatsApp"}
        whatsappMessage={content.hero.whatsappMessage}
      />

      <PricingSection
        id="pricing"
        title={content.pricing.title}
        subtitle={content.pricing.subtitle}
        plans={content.pricing.plans}
        proposalHref="#contact"
        cardButtonLabel={isEs ? "Solicitar servicio" : "Request service"}
        whatsappLabel={isEs ? "Escríbeme por WhatsApp" : "Message me on WhatsApp"}
        whatsappMessage={content.hero.whatsappMessage}
        helpText=""
        helpCtaText=""
      />

      <TestimonialBannerSection
        id="banner"
        sectionTone="light"
        quote={content.testimonialBanner.quote}
        author={content.testimonialBanner.author}
        role={content.testimonialBanner.role}
        reviewsText={content.testimonialBanner.reviewsText}
        bgImage={content.testimonialBanner.image}
      />

      <LeadCaptureSection
        title={content.lead.title}
        subtitle={content.lead.subtitle}
        bullets={content.lead.bullets}
        whatsappLabel={isEs ? "Escríbeme por WhatsApp" : "Message me on WhatsApp"}
        whatsappMessage={content.hero.whatsappMessage}
        formSubmitLabel={isEs ? "Solicitar propuesta" : "Request proposal"}
        formDefaultService={content.lead.defaultService}
      />

      <FaqSection
        id="faq"
        title={content.faq.title}
        subtitle={content.faq.subtitle}
        items={content.faq.items}
      />

      <HomeV3Footer
        homeHref={homeHref}
        description={content.footerDescription}
        locale={content.locale}
        whatsappLabel={isEs ? "Escríbeme por WhatsApp" : "Message me on WhatsApp"}
      />
    </>
  );
}
