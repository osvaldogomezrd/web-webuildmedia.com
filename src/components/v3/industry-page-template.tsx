import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";
import { OurProcessScrollCardsSection } from "@/components/v3/scroll-stepper-section";
import {
  ClientLogosOutcomeSection,
  DarkOverlayHeroSection,
  FaqSplitActionSection,
  Hero2BlueSection,
  KeyFeatureGridSection,
  LeadCaptureSection,
  PortfolioCardsSection,
  Pricing2DarkFlatSection,
  ProblemSolutionSection,
  TestimonialBannerSection,
} from "@/components/v3/sections";
import { PrimaryCta, SecondaryCta, V3Section } from "@/components/v3/primitives";
import { defaultPricingPlans, type IndustryPageContent, type IndustrySlug } from "@/lib/industry-pages-content";
import { INDUSTRY_ES_TO_EN } from "@/lib/i18n-routing";
import { getWhatsAppUrl } from "@/lib/utils";

const industryHeroAvatars = [
  "https://www.figma.com/api/mcp/asset/5840bd1f-3900-4cf9-8cc1-c31c11de32b3",
  "https://www.figma.com/api/mcp/asset/c403a76f-7cd6-41d4-ac60-c371e5ebc420",
  "https://www.figma.com/api/mcp/asset/b860798b-cdc4-44be-8353-3cddd5130012",
];

const forceHero2BlueSlugs = new Set<IndustrySlug>([
  "real-estate",
  "hoteles-villas",
  "tours-excursiones",
  "abogados-servicios-premium",
  "clinicas-salud",
  "constructoras-desarrollos",
  "negocios-turisticos",
]);

function limitWords(text: string, maxWords: number) {
  const clean = text.trim().replace(/\s+/g, " ");
  if (!clean) return "";
  const words = clean.split(" ");
  if (words.length <= maxWords) return clean;
  return `${words.slice(0, maxWords).join(" ")}…`;
}

function getHeroVariant(slug: IndustrySlug) {
  return forceHero2BlueSlugs.has(slug) ? 1 : 0;
}

const sharedPortfolioItems = [
  {
    image: "https://www.figma.com/api/mcp/asset/b3f5e911-84db-4362-902b-7cad4926a275",
    title: "Real Estate & Inmobiliaria",
    description: "Estructura orientada a captar leads y convertir consultas en oportunidades reales.",
    ctaLabel: "Ver ejemplo",
    ctaHref: "#lead-form",
  },
  {
    image: "https://www.figma.com/api/mcp/asset/1a8b8817-5608-4c8f-9bc3-5fe1c28f39e1",
    title: "Hoteles & Villas",
    description: "Experiencia visual premium con flujo de reservas y contacto directo por WhatsApp.",
    ctaLabel: "Ver ejemplo",
    ctaHref: "#lead-form",
  },
  {
    image: "https://www.figma.com/api/mcp/asset/880c7dc8-1d4a-42d7-9d8b-69c03eabe910",
    title: "Restaurantes",
    description: "Sitios enfocados en menú, ubicación y conversiones rápidas desde mobile.",
    ctaLabel: "Ver ejemplo",
    ctaHref: "#lead-form",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    title: "Tours & Excursiones",
    description: "Landings por paquete con llamados claros para aumentar reservas por temporada.",
    ctaLabel: "Ver ejemplo",
    ctaHref: "#lead-form",
  },
  {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    title: "Clínicas & Wellness",
    description: "Diseño de autoridad con servicios bien estructurados y captación de citas.",
    ctaLabel: "Ver ejemplo",
    ctaHref: "#lead-form",
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    title: "Servicios Premium",
    description: "Presencia digital estratégica para elevar percepción y cerrar más propuestas.",
    ctaLabel: "Ver ejemplo",
    ctaHref: "#lead-form",
  },
] as const;

const portfolioSubtitleByIndustry: Partial<Record<IndustrySlug, string>> = {
  "real-estate": "Ejemplos de cómo puede verse una web inmobiliaria profesional enfocada en captar compradores.",
  restaurantes: "Ejemplos de cómo puede verse un sitio gastronómico diseñado para reservas y pedidos.",
  "hoteles-villas": "Ejemplos de cómo puede verse una web hotelera enfocada en reservas directas.",
  "tours-excursiones": "Ejemplos de cómo puede verse una web para vender experiencias y excursiones.",
  "spas-wellness": "Ejemplos de cómo puede verse una web premium para bienestar, citas y fidelización.",
  "clinicas-salud": "Ejemplos de cómo puede verse una web clínica profesional enfocada en credibilidad.",
  "abogados-servicios-premium": "Ejemplos de cómo puede verse una web legal orientada a consultas calificadas.",
  "constructoras-desarrollos": "Ejemplos de cómo puede verse una web de proyectos para captar inversionistas y clientes.",
  "negocios-turisticos": "Ejemplos de cómo puede verse una web turística enfocada en reservas y confianza.",
};

export function IndustryPageTemplate({
  content,
  locale = "es",
}: {
  content: IndustryPageContent;
  locale?: "es" | "en";
}) {
  const variant = getHeroVariant(content.slug);
  const heroTitleOne = limitWords(content.hero.titleLineOne, 5);
  const heroTitleTwo = limitWords(content.hero.titleLineTwo, 5);
  const heroSubtitle = limitWords(content.hero.subtitle, 14);
  const heroRating = limitWords(content.hero.ratingText, 9);
  const homeHref = locale === "en" ? "/en" : "/";
  const currentIndustryHref =
    locale === "en"
      ? `/en/industries/${INDUSTRY_ES_TO_EN[content.slug]}`
      : `/industries/${content.slug}`;
  const portfolioSubtitle =
    portfolioSubtitleByIndustry[content.slug] ??
    "Ejemplos de cómo puede verse tu web profesional según tu industria.";

  return (
    <>
      <div className="relative bg-[#070707]">
        <HomeV3Header dark homeHref={homeHref} ctaHref="#lead-form" />
        {variant === 0 ? (
          <DarkOverlayHeroSection
            id="hero"
            backgroundImage={content.hero.image}
            badgeText="Industria"
            titleLineOne={heroTitleOne}
            titleLineTwo={heroTitleTwo}
            subtitle={heroSubtitle}
            primaryLabel="Hablemos por WhatsApp"
            primaryHref={getWhatsAppUrl(content.hero.whatsappMessage)}
            secondaryLabel="Ver precios"
            secondaryHref="#precios"
            supportPoints={content.trust.stats.slice(0, 3).map((stat) => `${stat.value} ${limitWords(stat.label, 4)}`)}
            avatars={industryHeroAvatars}
            ratingText={heroRating}
          />
        ) : null}
        {variant === 1 ? (
          <Hero2BlueSection
            id="hero"
            ratingText={heroRating}
            titleLineOne={heroTitleOne}
            titleLineTwo={heroTitleTwo}
            subtitle={heroSubtitle}
            primaryLabel="Hablemos por WhatsApp"
            primaryHref={getWhatsAppUrl(content.hero.whatsappMessage)}
            secondaryLabel="Ver precios"
            secondaryHref="#precios"
            image={content.hero.image}
            backgroundClass="bg-[#070707]"
          />
        ) : null}
      </div>

      <ClientLogosOutcomeSection
        id="trust"
        tone="light"
        logosTitle={content.trust.logosTitle}
        logos={content.trust.logos}
        titleLineOne={content.trust.titleLineOne}
        titleLineTwo={content.trust.titleLineTwo}
        subtitle={content.trust.subtitle}
        ctaLabel="Solicitar cotización gratis"
        ctaHref="#lead-form"
        stats={content.trust.stats}
      />

      <KeyFeatureGridSection
        id="includes"
        eyebrow="Qué incluye"
        titleLineOne={content.includes.titleLineOne}
        titleLineTwo={content.includes.titleLineTwo}
        subtitle={content.includes.subtitle}
        ctaLabel="Solicitar cotización gratis"
        ctaHref="#lead-form"
        items={content.includes.items}
      />

      <PortfolioCardsSection
        id="our-portfolio"
        titleLineOne="Esto es lo que"
        titleLineTwo="puedes tener"
        subtitle={portfolioSubtitle}
        items={[...sharedPortfolioItems]}
      />

      <ProblemSolutionSection
        id="who-is-for"
        eyebrow="Perfil ideal"
        title={"Ideal para\nestos perfiles"}
        subtitle={content.who.subtitle}
        items={content.who.items}
      />

      <ProblemSolutionSection
        id="problem-solves"
        eyebrow="Oportunidad"
        title={content.problem.title}
        subtitle={content.problem.subtitle}
        items={content.problem.items}
      />

      <Pricing2DarkFlatSection
        id="precios"
        title={content.pricing.title}
        subtitle={content.pricing.subtitle}
        plans={defaultPricingPlans.map((plan) => ({ ...plan, features: [...plan.features], ctaHref: "#lead-form" }))}
        trustText={content.pricing.trustText}
        logos={content.pricing.logos}
      />

      <OurProcessScrollCardsSection
        id="process"
        eyebrow="How we work"
        titleLineOne={content.process.titleLineOne}
        titleLineTwo={content.process.titleLineTwo}
        subtitleLineOne={content.process.subtitleLineOne}
        subtitleLineTwo={content.process.subtitleLineTwo}
        ctaLabel="Solicitar cotización gratis"
        ctaHref="#lead-form"
        items={content.process.items}
      />

      <TestimonialBannerSection
        id="cta-banner"
        quote={content.banner.quote}
        author={content.banner.author}
        role={content.banner.role}
        reviewsText=""
        bgImage={content.banner.bgImage}
        sectionTone="light"
        showStars={false}
        showReviews={false}
        showQuoteMarks={false}
        primaryCtaLabel="Hablemos por WhatsApp"
        primaryCtaHref={getWhatsAppUrl(content.banner.whatsappMessage)}
        secondaryCtaLabel="Enviar por formulario"
        secondaryCtaHref="#lead-form"
      />

      <FaqSplitActionSection
        id="faq"
        titleLineOne="Todo lo que necesitas"
        titleLineTwo="saber antes de empezar"
        subtitle={content.faq.subtitle}
        ctaLabel="Hablemos por WhatsApp"
        ctaHref={getWhatsAppUrl(content.faq.askWhatsappMessage)}
        items={content.faq.items}
      />

      <V3Section tone="soft" className="pt-0">
        <div className="rounded-[8px] ds-border bg-white p-6 md:p-8">
          <h3 className="ds-h5 text-[#1e1e1e]">¿Tu pregunta no está aquí?</h3>
          <p className="mt-3 max-w-[780px] text-base leading-7 text-[#3d3d3d]">
            No hay pregunta tonta. Escríbela y te la respondemos personalmente, por formulario o directo al WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryCta href={getWhatsAppUrl(content.faq.followupWhatsappMessage)}>Hablemos por WhatsApp</PrimaryCta>
            <SecondaryCta href="#lead-form">Enviar por formulario</SecondaryCta>
          </div>
        </div>
      </V3Section>

      <LeadCaptureSection
        title={content.form.title}
        subtitle={content.form.subtitle}
        bullets={content.form.bullets}
        eyebrow=""
        showPrimaryCta={false}
        showProposalCta={false}
        whatsappLabel="Hablemos por WhatsApp"
        whatsappMessage={content.form.whatsappMessage}
        formSubmitLabel="Enviar mensaje"
        formShowWhatsAppLink={false}
        formShowBudgetField={false}
        formShowWhatsAppField
        formDefaultService={content.form.defaultService}
      />

      <HomeV3Footer
        homeHref={homeHref}
        locale={locale}
        whatsappLabel="Contacto / WhatsApp"
        serviceLinks={
          locale === "en"
            ? [
                { label: "Web Design", href: "/services/diseno-web" },
                { label: "Industries", href: "/en/industries/real-estate" },
                { label: "Current Industry", href: currentIndustryHref },
                { label: "Plans", href: "/en#precios" },
                { label: "Contact / WhatsApp", href: getWhatsAppUrl(content.form.whatsappMessage) },
              ]
            : [
                { label: "Servicios", href: "/services/diseno-web" },
                { label: "Industrias", href: "/industries/real-estate" },
                { label: "Industria actual", href: currentIndustryHref },
                { label: "Planes", href: "/#precios" },
                { label: "Contacto / WhatsApp", href: getWhatsAppUrl(content.form.whatsappMessage) },
              ]
        }
        extraLinks={
          locale === "en"
            ? [
                { label: "Real Estate Industry", href: "/en/industries/real-estate" },
                { label: "Restaurants Industry", href: "/en/industries/restaurants" },
                { label: "Hotels & Villas Industry", href: "/en/industries/hotels-villas" },
                { label: "Tours & Excursions Industry", href: "/en/industries/tours-excursions" },
              ]
            : [
                { label: "Industria Real Estate", href: "/industries/real-estate" },
                { label: "Industria Restaurantes", href: "/industries/restaurantes" },
                { label: "Industria Hoteles & Villas", href: "/industries/hoteles-villas" },
                { label: "Industria Tours", href: "/industries/tours-excursiones" },
              ]
        }
      />
    </>
  );
}
