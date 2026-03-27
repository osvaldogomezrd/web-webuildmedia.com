import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";
import {
  ClientVoicesCarouselSection,
  FaqSplitActionSection,
  Hero2BlueSection,
  KeyFeatureGridSection,
  LeadCaptureSection,
  PortfolioCardsSection,
  Pricing2DarkFlatSection,
  TestimonialBannerSection,
} from "@/components/v3/sections";
import { ScrollStepperSection } from "@/components/v3/scroll-stepper-section";
import { getWhatsAppUrl } from "@/lib/utils";
import type { ServicePageContent } from "@/lib/service-pages-content";

export function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  return (
    <>
      <div className="relative bg-[#070707]">
        <HomeV3Header dark homeHref="/" ctaHref="#lead-form" ctaLabel="Solicitar cotizacion gratis" />
        <Hero2BlueSection
          id="hero"
          ratingText={content.hero.ratingText}
          titleLineOne={content.hero.titleLineOne}
          titleLineTwo={content.hero.titleLineTwo}
          subtitle={content.hero.subtitle}
          primaryLabel="Solicitar propuesta"
          primaryHref="#lead-form"
          secondaryLabel="Ver precios"
          secondaryHref="#precios"
          image={content.hero.image}
          backgroundClass="bg-[#070707]"
        />
      </div>

      <KeyFeatureGridSection
        id="servicios-incluidos"
        eyebrow="Servicio"
        titleLineOne={content.includes.titleLineOne}
        titleLineTwo={content.includes.titleLineTwo}
        subtitle={content.includes.subtitle}
        ctaLabel="Solicitar propuesta"
        ctaHref="#lead-form"
        items={content.includes.items}
      />

      <ScrollStepperSection
        id="proceso"
        eyebrow="Proceso"
        title={content.process.title}
        subtitle={content.process.subtitle}
        ctaHref="#lead-form"
        ctaLabel="Solicitar propuesta"
        whatsappLabel="Hablemos por WhatsApp"
        whatsappMessage={content.process.whatsappMessage}
        items={content.process.items}
      />

      <Pricing2DarkFlatSection
        id="precios"
        title={content.pricing.title}
        subtitle={content.pricing.subtitle}
        plans={content.pricing.plans}
        trustText={content.pricing.trustText}
        logos={content.pricing.logos}
      />

      <ClientVoicesCarouselSection
        id="testimonios"
        title={content.testimonials.title}
        subtitle={content.testimonials.subtitle}
        ratingText={content.testimonials.ratingText}
        items={content.testimonials.items}
      />

      <PortfolioCardsSection
        id="portafolio"
        titleLineOne={content.portfolio.titleLineOne}
        titleLineTwo={content.portfolio.titleLineTwo}
        items={content.portfolio.items}
      />

      <TestimonialBannerSection
        id="cta-final"
        quote={content.banner.quote}
        author={content.banner.author}
        reviewsText=""
        bgImage={content.banner.bgImage}
        sectionTone="light"
        showStars={false}
        showReviews={false}
        showQuoteMarks={false}
        primaryCtaLabel="Hablar por WhatsApp"
        primaryCtaHref={getWhatsAppUrl(content.banner.whatsappMessage)}
        secondaryCtaLabel="Solicitar presupuesto"
        secondaryCtaHref="#lead-form"
      />

      <FaqSplitActionSection
        id="faq"
        titleLineOne={content.faq.titleLineOne}
        titleLineTwo={content.faq.titleLineTwo}
        subtitle={content.faq.subtitle}
        ctaLabel="Solicitar propuesta"
        ctaHref="#lead-form"
        items={content.faq.items}
      />

      <LeadCaptureSection
        title={content.lead.title}
        subtitle={content.lead.subtitle}
        bullets={content.lead.bullets}
        eyebrow=""
        showPrimaryCta={false}
        primaryCtaLabel="Solicitar cotización gratis"
        quoteHref="#lead-form"
        showProposalCta={false}
        proposalHref="#lead-form"
        whatsappLabel="Hablemos por WhatsApp"
        whatsappMessage={content.lead.whatsappMessage}
        formSubmitLabel="Solicitar cotización gratis"
        formShowWhatsAppLink={false}
        formDefaultService={content.lead.formDefaultService}
      />

      <HomeV3Footer
        homeHref="/"
        locale="es"
        description={content.footerDescription}
        whatsappLabel="Hablemos por WhatsApp"
      />
    </>
  );
}

