import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";
import {
  AboutOverlayStatsSection,
  BenefitsSection,
  ExploreServicesSection,
  FaqSection,
  FeatureShowcaseSection,
  InnovationSplitSection,
  LeadCaptureSection,
  PricingSection,
  ProblemSolutionSection,
  ProcessSection,
  ProofSection,
} from "@/components/v3/sections";
import {
  footerExtraLinks,
  footerServiceLinks,
  localeNavLinks,
  localePaths,
  LocationPageContent,
} from "@/lib/v3-multilang-content";

const heroImages = {
  "punta-cana": "https://www.figma.com/api/mcp/asset/ca337080-94cb-422c-8be2-e4bb50ec6c44",
  miami: "https://www.figma.com/api/mcp/asset/dcd613ff-b269-4ed0-8027-5155270c3c88",
  orlando: "https://www.figma.com/api/mcp/asset/675ae58d-5522-453d-a408-b4a8b5a01ab5",
};

export function LocationWebDesignPage({ content }: { content: LocationPageContent }) {
  const paths = localePaths(content.locale);

  const isEs = content.locale === "es";

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
          {content.city === "punta-cana" ? (
            <AboutOverlayStatsSection
              id="hero"
              eyebrow={isEs ? "Punta Cana" : "Punta Cana"}
              titleLineOne={isEs ? "Diseño web para" : "Web design for"}
              titleLineTwo={isEs ? "real estate, villas" : "real estate, villas,"}
              titleLineThree={isEs ? "y turismo que quiere más leads" : "and tourism teams that need more leads"}
              subtitle={content.heroSubtitle}
              ctaLabel="Request Proposal"
              ctaHref={paths.contact}
              image={heroImages["punta-cana"]}
              stats={[
                {
                  icon: "satisfaction",
                  value: "95%",
                  label: isEs ? "clientes reportan mejores consultas" : "clients report better inquiry quality",
                },
                {
                  icon: "industries",
                  value: "15+",
                  label: isEs ? "segmentos turísticos y de servicios" : "tourism and service verticals supported",
                },
                {
                  icon: "value",
                  value: "2-4x",
                  label: isEs ? "aumento típico en leads calificados" : "typical lift in qualified leads",
                },
                {
                  icon: "users",
                  value: "24h",
                  label: isEs ? "tiempo medio para primera respuesta" : "average first-response timeline",
                },
              ]}
            />
          ) : content.city === "miami" ? (
            <InnovationSplitSection
              id="hero"
              title={isEs ? "Diseño web premium para negocios competitivos en Miami" : "Premium web design for competitive Miami businesses"}
              subtitle={content.heroSubtitle}
              missionLabel={isEs ? "Posicionamiento + performance" : "Positioning + performance"}
              ctaLabel="Request Proposal"
              ctaHref={paths.contact}
              image={heroImages.miami}
              stripItems={[
                {
                  avatar: "https://www.figma.com/api/mcp/asset/3a7c22e4-5b75-445b-9eea-885c814a822f",
                  text: isEs ? "Más autoridad." : "More authority.",
                },
                {
                  avatar: "https://www.figma.com/api/mcp/asset/1c5c2d4c-157b-45f9-8759-44163fb5279a",
                  text: isEs ? "Más conversiones." : "More conversions.",
                  muted: true,
                },
                {
                  avatar: "https://www.figma.com/api/mcp/asset/fb56b661-bcec-4ee7-b522-496e7dcf2c95",
                  text: isEs ? "Más leads." : "More leads.",
                },
                {
                  avatar: "https://www.figma.com/api/mcp/asset/b6efad81-01ec-47ab-bc8c-521024e56c2d",
                  text: isEs ? "Mejor ROI." : "Better ROI.",
                  muted: true,
                },
              ]}
              stats={[
                { value: "4.9/5", label: isEs ? "valoración promedio" : "average rating" },
                { value: "2-4x", label: isEs ? "mejora en leads" : "lead growth" },
                { value: "<3s", label: isEs ? "carga móvil" : "mobile load target" },
              ]}
            />
          ) : (
            <FeatureShowcaseSection
              id="hero"
              eyebrow={isEs ? "Orlando" : "Orlando"}
              titleLineOne={isEs ? "Web design para" : "Web design for"}
              titleLineTwo={isEs ? "servicios locales que quieren más clientes" : "local service businesses that need more clients"}
              subtitle={content.heroSubtitle}
              ctaLabel="Request Proposal"
              ctaHref={paths.contact}
              image={heroImages.orlando}
              items={[
                {
                  icon: "broadcast",
                  title: isEs ? "Más solicitudes" : "More inquiries",
                  description: isEs
                    ? "Estructuras de página que convierten visitas en contactos reales."
                    : "Page flows that convert visits into qualified inquiries.",
                },
                {
                  icon: "framework",
                  title: isEs ? "Oferta más clara" : "Clearer offer",
                  description: isEs
                    ? "Tu servicio se entiende rápido y genera más confianza."
                    : "Your services are clear fast, reducing buyer hesitation.",
                },
                {
                  icon: "performance",
                  title: isEs ? "Mejor rendimiento" : "Faster experience",
                  description: isEs
                    ? "Sitio rápido para móvil y listo para búsquedas locales."
                    : "Fast mobile experience ready for local search intent.",
                },
                {
                  icon: "ecosystem",
                  title: isEs ? "Leads conectados" : "Connected lead flow",
                  description: isEs
                    ? "Formulario, WhatsApp y seguimiento alineados para vender más."
                    : "Form, WhatsApp, and follow-up connected in one conversion system.",
                },
              ]}
            />
          )}
        </div>
      </div>

      <ProblemSolutionSection
        id="problems"
        eyebrow="Problem / Solution"
        title={content.problemsTitle}
        subtitle={content.problemsSubtitle}
        items={content.problems}
      />

      <BenefitsSection
        id="services"
        eyebrow="Service Benefits"
        title={content.benefitsTitle}
        subtitle={content.benefitsSubtitle}
        items={content.benefits}
      />

      <ProcessSection
        id="process"
        eyebrow="Execution"
        title={content.processTitle}
        subtitle={content.processSubtitle}
        steps={content.process}
        ctaHref={paths.contact}
        ctaLabel="Request Proposal"
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
        whatsappMessage={
          isEs
            ? "Hola, quiero una propuesta para mi sitio web en esta ciudad."
            : "Hi, I want a proposal for my website in this city."
        }
      />

      <PricingSection
        id="pricing"
        title={content.pricingTitle}
        subtitle={content.pricingSubtitle}
        plans={content.plans}
        proposalHref={paths.contact}
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
        helpText=""
        helpCtaText={isEs ? "Request Free Quote para tu negocio" : "Request Free Quote for your business"}
        helpCtaHref={paths.contact}
      />

      <ProofSection
        id="proof"
        title={content.proofTitle}
        subtitle={content.proofSubtitle}
        stats={content.stats}
        testimonials={content.testimonials}
      />

      <FaqSection
        id="faq"
        title={content.faqTitle}
        subtitle={content.faqSubtitle}
        items={content.faqs}
      />

      <ExploreServicesSection
        id="locations"
        title={content.relatedTitle}
        subtitle={content.relatedSubtitle}
        ctaLabel={content.relatedCta}
        ctaHref={content.homePath}
        cards={content.relatedCards}
      />

      <LeadCaptureSection
        title={content.leadTitle}
        subtitle={content.leadSubtitle}
        bullets={content.leadBullets}
        quoteHref="#lead-form"
        proposalHref={paths.contact}
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
        whatsappMessage={
          isEs
            ? "Hola, quiero una propuesta para mi negocio."
            : "Hi, I want a proposal for my business."
        }
      />

      <HomeV3Footer
        homeHref={content.homePath}
        description={content.footerDescription}
        serviceLinks={footerServiceLinks(content.locale)}
        extraLinks={footerExtraLinks(content.locale)}
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
      />
    </>
  );
}
