import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";
import {
  AboutOverlayStatsSection,
  FaqSection,
  FeatureShowcaseSection,
  InnovationSplitSection,
  LeadCaptureSection,
  PricingSection,
  ProcessSection,
  ProofSection,
} from "@/components/v3/sections";
import {
  footerExtraLinks,
  footerServiceLinks,
  homeByLocale,
  localeNavLinks,
  localePaths,
  SiteLocale,
} from "@/lib/v3-multilang-content";

function commonLeadProps(locale: SiteLocale) {
  const isEs = locale === "es";
  const paths = localePaths(locale);

  return {
    quoteHref: "#lead-form",
    proposalHref: paths.contact,
    whatsappLabel: isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp",
    whatsappMessage: isEs
      ? "Hola, quiero una propuesta para mi negocio."
      : "Hi, I want a proposal for my business.",
  };
}

export function LocalePricingPage({ locale }: { locale: SiteLocale }) {
  const isEs = locale === "es";
  const paths = localePaths(locale);
  const plans = homeByLocale[locale].plans;

  return (
    <>
      <div className="relative bg-[#19174f]">
        <h1 className="sr-only">{isEs ? "Precios de diseño web" : "Web design pricing"}</h1>
        <HomeV3Header
          dark
          homeHref={paths.home}
          ctaHref={paths.contact}
          navLinks={localeNavLinks(locale)}
        />
        <div className="pt-16">
          <FeatureShowcaseSection
            id="hero"
            eyebrow={isEs ? "Precios" : "Pricing"}
            titleLineOne={isEs ? "Planes claros para" : "Simple plans for"}
            titleLineTwo={isEs ? "generar más clientes" : "more leads and sales"}
            subtitle={
              isEs
                ? "Nuestros planes combinan estructura de conversión, presencia profesional y soporte para crecimiento comercial."
                : "Our plans combine conversion structure, professional positioning, and lead generation support for local businesses."
            }
            ctaLabel="Request Proposal"
            ctaHref={paths.contact}
            image="https://www.figma.com/api/mcp/asset/675ae58d-5522-453d-a408-b4a8b5a01ab5"
            items={[
              {
                icon: "broadcast",
                title: isEs ? "Más consultas" : "More inquiries",
                description: isEs ? "Diseño orientado a contacto y cotización." : "Design focused on proposal and quote requests.",
              },
              {
                icon: "framework",
                title: isEs ? "Oferta clara" : "Clear offer",
                description: isEs ? "Tu servicio se comunica mejor y más rápido." : "Your services are easier to understand and compare.",
              },
              {
                icon: "performance",
                title: isEs ? "Mejor rendimiento" : "Better performance",
                description: isEs ? "Sitios rápidos para mejorar conversión." : "Fast websites that support stronger conversion rates.",
              },
              {
                icon: "ecosystem",
                title: isEs ? "Soporte comercial" : "Lead support",
                description: isEs ? "WhatsApp + formulario alineados al flujo de ventas." : "WhatsApp and forms aligned to your sales workflow.",
              },
            ]}
          />
        </div>
      </div>

      <PricingSection
        id="pricing"
        title={isEs ? "Precios simples. Resultados reales." : "Simple pricing. Real business results."}
        subtitle={
          isEs
            ? "El plan Business está diseñado para ser el punto ideal entre presencia profesional y generación de leads."
            : "The Business plan is the best balance of professional positioning and lead generation performance."
        }
        plans={plans}
        proposalHref={paths.contact}
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
        helpText=""
        helpCtaText={isEs ? "Request Free Quote para tu negocio" : "Request Free Quote for your business"}
        helpCtaHref={paths.contact}
      />

      <FaqSection
        id="faq"
        title={isEs ? "Preguntas frecuentes de precios" : "Pricing FAQ"}
        subtitle={
          isEs
            ? "Todo lo que necesitas saber antes de elegir un plan."
            : "Answers to help you choose the right plan with confidence."
        }
        items={
          isEs
            ? [
                {
                  question: "¿El plan Business es el más recomendado?",
                  answer:
                    "Sí. Es el plan más popular porque combina estructura de conversión, mejor rendimiento y mayor capacidad comercial.",
                },
                {
                  question: "¿Puedo comenzar con Essential y luego subir de plan?",
                  answer:
                    "Sí. Puedes escalar cuando necesites más funcionalidades, correos, catálogo o mejor performance.",
                },
                {
                  question: "¿Qué plan recomiendan para la mayoría de negocios en crecimiento?",
                  answer:
                    "Business suele ser la mejor opción porque equilibra conversión, rendimiento y capacidad comercial para escalar.",
                },
              ]
            : [
                {
                  question: "Is Business the recommended plan?",
                  answer:
                    "Yes. It is the most popular option because it balances conversion performance, speed, and business growth features.",
                },
                {
                  question: "Can I start with Essential and upgrade later?",
                  answer:
                    "Yes. You can upgrade when you need more capabilities, email accounts, catalog features, or performance improvements.",
                },
                {
                  question: "Which plan is recommended for most growing businesses?",
                  answer:
                    "Business is typically the best fit because it balances conversion performance, speed, and lead generation capacity.",
                },
              ]
        }
      />

      <LeadCaptureSection
        title={
          isEs
            ? "Cuéntanos tu negocio y te recomendamos el mejor plan"
            : "Tell us about your business and we will recommend the right plan"
        }
        subtitle={
          isEs
            ? "Enviamos una propuesta con alcance, precio y próximos pasos para generar más clientes."
            : "We will send a proposal with scope, pricing, and next steps focused on getting more clients."
        }
        bullets={
          isEs
            ? [
                "Recomendación por tipo de negocio",
                "Enfoque en ROI y generación de leads",
                "Claridad de tiempos y entregables",
                "Soporte para crecer por etapas",
              ]
            : [
                "Plan recommendation by business type",
                "ROI and lead generation focus",
                "Clear scope, timeline, and deliverables",
                "Scalable setup for long-term growth",
              ]
        }
        {...commonLeadProps(locale)}
      />

      <HomeV3Footer
        homeHref={paths.home}
        description={homeByLocale[locale].footerDescription}
        serviceLinks={footerServiceLinks(locale)}
        extraLinks={footerExtraLinks(locale)}
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
      />
    </>
  );
}

export function LocaleAboutPage({ locale }: { locale: SiteLocale }) {
  const isEs = locale === "es";
  const paths = localePaths(locale);

  return (
    <>
      <div className="relative bg-[#19174f]">
        <h1 className="sr-only">{isEs ? "Sobre nuestra agencia" : "About our agency"}</h1>
        <HomeV3Header
          dark
          homeHref={paths.home}
          ctaHref={paths.contact}
          navLinks={localeNavLinks(locale)}
        />
        <div className="pt-16">
          <AboutOverlayStatsSection
            id="hero"
            eyebrow={isEs ? "Nosotros" : "About"}
            titleLineOne={isEs ? "Ayudamos a negocios" : "We help businesses"}
            titleLineTwo={isEs ? "a convertir tráfico" : "turn website traffic"}
            titleLineThree={isEs ? "en clientes reales" : "into real clients"}
            subtitle={
              isEs
                ? "No hacemos sitios genéricos. Diseñamos experiencias enfocadas en confianza, conversión y resultados comerciales."
                : "We do not build generic websites. We design conversion-focused systems that increase trust, inquiries, and sales opportunities."
            }
            ctaLabel="Request Proposal"
            ctaHref={paths.contact}
            image="https://www.figma.com/api/mcp/asset/ca337080-94cb-422c-8be2-e4bb50ec6c44"
            stats={[
              { icon: "satisfaction", value: "95%", label: isEs ? "satisfacción de clientes" : "client satisfaction" },
              { icon: "industries", value: "15+", label: isEs ? "industrias atendidas" : "industries served" },
              { icon: "value", value: "2-4x", label: isEs ? "mejora típica en leads" : "typical lead growth" },
              { icon: "users", value: "3-6", label: isEs ? "semanas para lanzar" : "weeks to launch" },
            ]}
          />
        </div>
      </div>

      <ProcessSection
        id="process"
        eyebrow={isEs ? "Cómo trabajamos" : "How we work"}
        title={isEs ? "Nuestro proceso está diseñado para resultados" : "Our process is built for outcomes"}
        subtitle={
          isEs
            ? "Cada etapa está enfocada en conseguir más consultas y mejores oportunidades de venta."
            : "Each step is focused on generating more inquiries and better sales opportunities."
        }
        steps={homeByLocale[locale].process}
        ctaHref={paths.contact}
        ctaLabel="Request Proposal"
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
      />

      <ProofSection
        id="proof"
        title={isEs ? "Resultados que respaldan nuestra metodología" : "Results that support our approach"}
        subtitle={
          isEs
            ? "Combinamos estrategia, diseño y ejecución para generar impacto comercial real."
            : "We combine strategy, design, and execution to create measurable business impact."
        }
        stats={[
          { value: "4.9/5", label: isEs ? "valoración promedio" : "average rating" },
          { value: "2-4x", label: isEs ? "más leads calificados" : "qualified lead growth" },
          { value: "<3s", label: isEs ? "velocidad móvil objetivo" : "target mobile load" },
        ]}
        testimonials={
          isEs
            ? [
                {
                  quote: "El nuevo sitio nos trajo mejores leads por WhatsApp desde el primer mes.",
                  author: "Carlos M.",
                  role: "Director comercial",
                },
                {
                  quote: "El proceso fue claro, rápido y enfocado en resultados de negocio.",
                  author: "Laura P.",
                  role: "Fundadora",
                },
                {
                  quote: "Ahora nuestra web vende mejor y transmite mucha más confianza.",
                  author: "Rafael T.",
                  role: "Gerente de marca",
                },
              ]
            : [
                {
                  quote: "Our new website started driving better WhatsApp leads in the first month.",
                  author: "Carlos M.",
                  role: "Commercial Director",
                },
                {
                  quote: "The process was clear, fast, and focused on real business outcomes.",
                  author: "Laura P.",
                  role: "Founder",
                },
                {
                  quote: "Our site now converts better and communicates far more trust.",
                  author: "Rafael T.",
                  role: "Brand Manager",
                },
              ]
        }
      />

      <LeadCaptureSection
        title={isEs ? "Hablemos de tu objetivo comercial" : "Let’s talk about your growth goals"}
        subtitle={
          isEs
            ? "Te enviamos una propuesta clara para mejorar conversiones, leads y ventas."
            : "We will send a clear proposal focused on improving conversion, inquiries, and sales."
        }
        bullets={
          isEs
            ? [
                "Estrategia adaptada a tu ciudad",
                "Copy orientado a intención de compra",
                "Flujo de conversión por WhatsApp y formularios",
                "Plan de trabajo con foco en ROI",
              ]
            : [
                "City-specific growth strategy",
                "Buyer-intent messaging and structure",
                "WhatsApp and form conversion flow",
                "Execution roadmap focused on ROI",
              ]
        }
        {...commonLeadProps(locale)}
      />

      <HomeV3Footer
        homeHref={paths.home}
        description={homeByLocale[locale].footerDescription}
        serviceLinks={footerServiceLinks(locale)}
        extraLinks={footerExtraLinks(locale)}
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
      />
    </>
  );
}

export function LocaleContactPage({ locale }: { locale: SiteLocale }) {
  const isEs = locale === "es";
  const paths = localePaths(locale);

  return (
    <>
      <div className="relative bg-[#19174f]">
        <h1 className="sr-only">{isEs ? "Contacto" : "Contact"}</h1>
        <HomeV3Header
          dark
          homeHref={paths.home}
          ctaHref={paths.contact}
          navLinks={localeNavLinks(locale)}
        />
        <div className="pt-16">
          <InnovationSplitSection
            id="hero"
            title={isEs ? "Cuéntanos tu negocio y te enviamos una propuesta clara" : "Tell us about your business and get a clear proposal"}
            subtitle={
              isEs
                ? "Diseñamos una ruta práctica para que tu web genere más consultas, más cotizaciones y más clientes."
                : "We map a practical plan to make your website generate more inquiries, more quotes, and more clients."
            }
            missionLabel={isEs ? "Respuesta rápida y enfoque comercial" : "Fast response and conversion guidance"}
            ctaLabel="Request Proposal"
            ctaHref="#lead-form"
            image="https://www.figma.com/api/mcp/asset/dcd613ff-b269-4ed0-8027-5155270c3c88"
            stripItems={[
              {
                avatar: "https://www.figma.com/api/mcp/asset/3a7c22e4-5b75-445b-9eea-885c814a822f",
                text: isEs ? "Request Proposal" : "Request Proposal",
              },
              {
                avatar: "https://www.figma.com/api/mcp/asset/1c5c2d4c-157b-45f9-8759-44163fb5279a",
                text: isEs ? "Request Free Quote" : "Request Free Quote",
                muted: true,
              },
              {
                avatar: "https://www.figma.com/api/mcp/asset/fb56b661-bcec-4ee7-b522-496e7dcf2c95",
                text: isEs ? "WhatsApp directo" : "Direct WhatsApp",
              },
            ]}
            stats={[
              { value: "24h", label: isEs ? "respuesta inicial" : "first response" },
              { value: "4.9/5", label: isEs ? "valoración de clientes" : "client rating" },
              { value: "100%", label: isEs ? "propuesta adaptada" : "tailored proposal" },
            ]}
          />
        </div>
      </div>

      <LeadCaptureSection
        title={isEs ? "Listo para conseguir más clientes con tu web" : "Ready to get more clients through your website"}
        subtitle={
          isEs
            ? "Completa el formulario y te enviaremos una propuesta con enfoque en leads y resultados."
            : "Fill out the form and we will send a proposal focused on qualified leads and measurable outcomes."
        }
        bullets={
          isEs
            ? [
                "Diagnóstico de tu situación actual",
                "Recomendación de estructura y plan",
                "Presupuesto estimado y próximos pasos",
                "Canal directo por WhatsApp",
              ]
            : [
                "Current website and offer diagnosis",
                "Recommended page structure and plan",
                "Estimated budget and next steps",
                "Direct WhatsApp communication",
              ]
        }
        {...commonLeadProps(locale)}
      />

      <FaqSection
        id="faq"
        title={isEs ? "Preguntas frecuentes de contacto" : "Contact FAQ"}
        subtitle={
          isEs
            ? "Resolvemos dudas rápidas antes de iniciar tu propuesta."
            : "Quick answers before we prepare your proposal."
        }
        items={
          isEs
            ? [
                {
                  question: "¿Cuánto tardan en responder?",
                  answer: "Normalmente respondemos el mismo día hábil por formulario o WhatsApp.",
                },
                {
                  question: "¿Pueden trabajar con mi web actual?",
                  answer: "Sí. Podemos optimizar lo existente o proponer un rediseño si conviene más.",
                },
                {
                  question: "¿La propuesta incluye precios y alcance?",
                  answer: "Sí. Recibirás una propuesta clara con inversión estimada, alcance y próximos pasos.",
                },
              ]
            : [
                {
                  question: "How fast do you respond?",
                  answer: "We usually reply the same business day by form submission or WhatsApp.",
                },
                {
                  question: "Can you work with my current website?",
                  answer: "Yes. We can optimize your existing site or recommend a full redesign when needed.",
                },
                {
                  question: "Will the proposal include scope and pricing?",
                  answer: "Yes. You will receive a clear proposal with estimated investment, scope, and next steps.",
                },
              ]
        }
      />

      <HomeV3Footer
        homeHref={paths.home}
        description={homeByLocale[locale].footerDescription}
        serviceLinks={footerServiceLinks(locale)}
        extraLinks={footerExtraLinks(locale)}
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
      />
    </>
  );
}
