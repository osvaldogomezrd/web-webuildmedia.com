import {
  ClientLogosOutcomeSection,
  ClientVoicesCarouselSection,
  DarkOverlayHeroSection,
  FeaturedSectionImageLeft,
  HoverRevealServicesSection,
  KeyFeatureGridSection,
  LeadCaptureSection,
  PricingItem,
  PricingSection,
  ProcessSection,
  Section2MissionSplit,
  TestimonialBannerSection,
} from "@/components/v3/sections";
import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";

type Locale = "es" | "en";

const pricingPlansByLocale: Record<Locale, PricingItem[]> = {
  es: [
    {
      plan: "Essential",
      price: "$49.99 / mes",
      audience: "Matrícula de $350 · Para negocios que necesitan una web profesional y captación clara de leads",
      features: [
        "Diseño y desarrollo web moderno, profesional y responsivo",
        "Dominio .com y hosting básico incluido",
        "Diseño 100% adaptado a tu marca",
        "Formulario de contacto básico",
        "Integración con redes sociales",
        "Botón único de WhatsApp",
      ],
    },
    {
      plan: "Business",
      price: "$74.99 USD / mes",
      audience: "Matrícula de $450 · Ideal para equipos que necesitan mayor flujo de leads y mejor conversión",
      highlight: true,
      features: [
        "Todo lo incluido en Essential",
        "Catálogo de productos o servicios",
        "Formularios inteligentes con validaciones y respuestas automáticas",
        "Múltiples botones de WhatsApp o chat flotante",
        "Hasta 10 correos profesionales",
        "Hosting más rápido y 25 GB de espacio web",
      ],
    },
    {
      plan: "Ecommerce",
      price: "$99.99 USD / mes",
      audience: "Matrícula de $550 · Para negocios listos para vender online con una tienda orientada a conversión",
      features: [
        "Todo lo incluido en Business",
        "Tienda online completa",
        "Integración con pasarelas de pago",
        "Panel autogestionable para productos y contenido",
        "Hosting ultra rápido",
        "Escalabilidad de correos y almacenamiento",
      ],
    },
  ],
  en: [
    {
      plan: "Essential",
      price: "$49.99 / month",
      audience: "$350 registration fee · For businesses that need a professional website and clear lead capture",
      features: [
        "Modern, professional, responsive website design and development",
        ".com domain and basic hosting included",
        "100% design customized to your brand",
        "Basic contact form",
        "Social media integration",
        "Unique WhatsApp button",
      ],
    },
    {
      plan: "Business",
      price: "$74.99 USD / month",
      audience: "$450 registration fee · Built for teams that need stronger lead flow and better conversion support",
      highlight: true,
      features: [
        "Everything in the Essential plan",
        "Product or service catalog",
        "Smart contact forms with validations and auto-responses",
        "Multiple WhatsApp buttons or floating live chat",
        "Up to 10 professional email accounts",
        "Faster hosting and 25 GB web space",
      ],
    },
    {
      plan: "Ecommerce",
      price: "$99.99 USD / month",
      audience: "$550 registration fee · For businesses ready to sell online with a conversion-focused store",
      features: [
        "Everything in the Business plan",
        "Complete online store",
        "Payment gateway integration",
        "Self-managed admin panel",
        "Ultra-fast hosting",
        "Scalable email and storage capacity",
      ],
    },
  ],
};

export function HomePageContent({ locale = "es" }: { locale?: Locale }) {
  const isEs = locale === "es";

  const navItems = [
    {
      label: isEs ? "Servicios" : "Services",
      children: [
        {
          label: isEs ? "Diseño web" : "Web Design",
          href: "/services/diseno-web",
          description: isEs ? "Sitios profesionales orientados a conversión" : "Conversion-focused professional websites",
        },
        {
          label: isEs ? "Landing pages" : "Landing Pages",
          href: "/services/landing-pages",
          description: isEs ? "Páginas enfocadas en campañas y leads" : "Campaign pages built for lead capture",
        },
        {
          label: "Ecommerce",
          href: "/services/ecommerce",
          description: isEs ? "Tiendas online listas para vender" : "Online stores ready to sell",
        },
        {
          label: isEs ? "Rediseño web" : "Website Redesign",
          href: "/services/rediseno-web",
          description: isEs ? "Mejora de sitios existentes" : "Upgrade and optimize your current website",
        },
        {
          label: isEs ? "Soluciones personalizadas" : "Custom Solutions",
          href: "/services/soluciones-personalizadas",
          description: isEs ? "Funcionalidades avanzadas para necesidades específicas" : "Advanced functionality for specific needs",
        },
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
        { label: isEs ? "Negocios turísticos" : "Tourism Businesses", href: isEs ? "/industries/negocios-turisticos" : "/en/industries/tourism-businesses" },
      ],
    },
    {
      label: isEs ? "Ubicaciones" : "Locations",
      children: [
        { label: isEs ? "Diseño web Punta Cana" : "Web design Punta Cana", href: "#lead-form" },
        { label: isEs ? "Diseño web República Dominicana" : "Web design Dominican Republic", href: "#lead-form" },
        { label: isEs ? "Diseño web Santiago" : "Web design Santiago", href: "#lead-form" },
        { label: "Web design Miami", href: "#lead-form" },
        { label: "Web design Orlando", href: "#lead-form" },
        { label: isEs ? "Ver todas las ubicaciones" : "View all locations", href: "#lead-form" },
      ],
    },
    { label: isEs ? "Sobre Nosotros" : "About Us", href: "#benefits" },
  ];

  return (
    <>
      <div className="relative bg-[#19174f]">
        <HomeV3Header
          dark
          homeHref="#hero"
          ctaHref="#lead-form"
          ctaLabel={isEs ? "Solicitar cotizacion gratis" : "Request Free Quote"}
          navItems={navItems}
        />
        <DarkOverlayHeroSection
          id="hero"
          backgroundImage="https://www.figma.com/api/mcp/asset/eaf9e64e-7cc6-4116-97b0-8555d3cae1c5"
          badgeText={isEs ? "Diseño web para crecimiento real" : "Web design for real growth"}
          titleLineOne={isEs ? "Sitios web que generan" : "Websites that generate"}
          titleLineTwo={isEs ? "leads de calidad" : "qualified leads"}
          subtitle={
            isEs
              ? "Diseño orientado a conversión, estructura clara para atraer mejores clientes y cerrar más ventas."
              : "Conversion-focused design, clear structure to attract better clients and close more sales."
          }
          supportPoints={
            isEs
              ? [
                  "Diseñado para conversión y generación de leads",
                  "Adaptado a tu tipo de negocio",
                  "Planes claros sin costos ocultos",
                ]
              : [
                  "Built for conversion and lead generation",
                  "Adapted to your business model",
                  "Clear plans with no hidden costs",
                ]
          }
          contentMaxWidthClass="max-w-[920px]"
          primaryLabel={isEs ? "Solicitar propuesta" : "Request Proposal"}
          primaryHref="#lead-form"
          secondaryLabel={isEs ? "Ver planes" : "View Plans"}
          secondaryHref="#plans-preview"
        />
      </div>

      <ClientLogosOutcomeSection
        id="clients-outcomes"
        tone="light"
        logosTitle={isEs ? "Nuestros Clientes" : "Our Clients"}
        logos={["Cubekit", "Acme Corp", "Alt+Shift", "ContrastAI", "Eightball", "CoreOS", "Command+R", "ennLabs"]}
        titleLineOne={isEs ? "Sitios web diseñados para generar" : "Websites built to generate"}
        titleLineTwo={isEs ? "resultados reales de negocio" : "real business results"}
        subtitle={
          isEs
            ? "Diseñados para atraer clientes, convertir leads y apoyar el crecimiento en diferentes industrias y mercados."
            : "Designed to attract clients, convert leads, and support growth across different industries and markets."
        }
        ctaLabel={isEs ? "Solicitar propuesta" : "Request Proposal"}
        ctaHref="#lead-form"
        stats={[
          {
            value: "95%",
            label: isEs ? "Clientes satisfechos con el proceso y resultados" : "Clients satisfied with process and results",
          },
          {
            value: "15+",
            label: isEs ? "Industrias atendidas con sitios orientados a conversión" : "Industries served with conversion-focused websites",
          },
          { value: "$25M+", label: isEs ? "Ingresos impactados por estrategia digital" : "Revenue influenced through digital strategy" },
        ]}
      />

      <KeyFeatureGridSection
        id="industries"
        eyebrow={isEs ? "Industrias" : "Industries"}
        titleLineOne={isEs ? "Diseñado para la forma en que" : "Built for the way your"}
        titleLineTwo={isEs ? "realmente funciona tu negocio" : "business actually works"}
        subtitle={
          isEs
            ? "Cada industria requiere estrategias diferentes. Diseñamos sitios según cómo opera tu negocio y cómo tus clientes toman decisiones."
            : "Different industries require different strategies. We design websites based on how your business operates and how your customers make decisions."
        }
        ctaLabel={isEs ? "Explorar industrias" : "Explore Industries"}
        ctaHref="#industries"
        items={[
          { icon: "real_estate", title: isEs ? "Real Estate & Inmobiliarias" : "Real Estate", description: "", href: "#lead-form", ctaLabel: isEs ? "Ver enfoque" : "See focus" },
          { icon: "villas", title: isEs ? "Hoteles & Villas" : "Hotels & Villas", description: "", href: "#lead-form", ctaLabel: isEs ? "Ver enfoque" : "See focus" },
          { icon: "restaurants", title: isEs ? "Restaurantes & Bares" : "Restaurants & Bars", description: "", href: "#lead-form", ctaLabel: isEs ? "Ver enfoque" : "See focus" },
          { icon: "tours", title: isEs ? "Tours & Excursiones" : "Tours & Excursions", description: "", href: "#lead-form", ctaLabel: isEs ? "Ver enfoque" : "See focus" },
          { icon: "wellness", title: isEs ? "Spas & Wellness" : "Spas & Wellness", description: "", href: "#lead-form", ctaLabel: isEs ? "Ver enfoque" : "See focus" },
          { icon: "clinics", title: isEs ? "Clínicas & Salud" : "Clinics & Health", description: "", href: "#lead-form", ctaLabel: isEs ? "Ver enfoque" : "See focus" },
          { icon: "lawyers", title: isEs ? "Abogados & Servicios Premium" : "Lawyers & Premium Services", description: "", href: "#lead-form", ctaLabel: isEs ? "Ver enfoque" : "See focus" },
          { icon: "construction", title: isEs ? "Constructoras & Desarrollos" : "Construction & Developments", description: "", href: "#lead-form", ctaLabel: isEs ? "Ver enfoque" : "See focus" },
          { icon: "tourism", title: isEs ? "Negocios turísticos" : "Tourism Businesses", description: "", href: "#lead-form", ctaLabel: isEs ? "Ver enfoque" : "See focus" },
        ]}
      />

      <HoverRevealServicesSection
        id="services"
        tone="light"
        eyebrow={isEs ? "Servicios" : "Services"}
        titleLineOne={isEs ? "Soluciones web diseñadas" : "Web solutions designed"}
        titleLineTwo={isEs ? "para crecer contigo" : "to grow with you"}
        intro={
          isEs
            ? "Desde sitios simples hasta plataformas avanzadas, nos adaptamos a la etapa de tu negocio."
            : "From simple websites to advanced platforms, we adapt to your business stage."
        }
        ctaLabel={isEs ? "Solicitar propuesta" : "Request Proposal"}
        ctaHref="#lead-form"
        items={[
          {
            title: isEs ? "Diseño web" : "Web Design",
            description: isEs ? "Diseño orientado a conversión para tu audiencia y mercado." : "Conversion-focused web design tailored to your audience and market.",
            image: "https://www.figma.com/api/mcp/asset/4cafdd73-b8c3-470d-9bce-393d6ca84715",
            chips: isEs ? ["Marca", "Conversión", "Mobile-first"] : ["Brand-ready", "Lead-focused", "Mobile-first"],
            ctaLabel: isEs ? "Ver servicio" : "View service",
            ctaHref: "#lead-form",
          },
          {
            title: isEs ? "Landing pages" : "Landing Pages",
            description: isEs ? "Páginas de alto intento para campañas y captación." : "High-intent pages for campaigns and lead generation.",
            image: "https://www.figma.com/api/mcp/asset/6f9b6a7e-0d73-4cd7-953c-d23911cab9ff",
            chips: isEs ? ["Campañas", "Rápido", "Conversión"] : ["Campaign-ready", "Fast launch", "Higher conversion"],
            ctaLabel: isEs ? "Ver servicio" : "View service",
            ctaHref: "#lead-form",
          },
          {
            title: "Ecommerce",
            description: isEs ? "Tiendas optimizadas para descubrimiento y checkout." : "Online stores optimized for product discovery and checkout.",
            image: "https://www.figma.com/api/mcp/asset/afa9ba56-58ed-4f04-98fd-66018f4021f3",
            chips: isEs ? ["Catálogo", "Checkout", "Ventas"] : ["Product UX", "Checkout flow", "Revenue growth"],
            ctaLabel: isEs ? "Ver servicio" : "View service",
            ctaHref: "#lead-form",
          },
          {
            title: isEs ? "Rediseño web" : "Website Redesign",
            description: isEs ? "Transforma sitios antiguos en sistemas de conversión." : "Transform outdated websites into lead-generation systems.",
            image: "https://www.figma.com/api/mcp/asset/afe672a4-6741-4a98-9a17-d60212c3dc9d",
            chips: isEs ? ["Modernización", "Confianza", "Rendimiento"] : ["Modernization", "Trust boost", "Performance"],
            ctaLabel: isEs ? "Ver servicio" : "View service",
            ctaHref: "#lead-form",
          },
          {
            title: isEs ? "Soluciones personalizadas" : "Custom Solutions",
            description: isEs ? "Arquitectura avanzada para necesidades específicas." : "Advanced architecture for specific business needs.",
            image: "https://www.figma.com/api/mcp/asset/4cafdd73-b8c3-470d-9bce-393d6ca84715",
            chips: isEs ? ["Custom", "Integraciones", "Escalable"] : ["Custom build", "Integrations", "Scalable systems"],
            ctaLabel: isEs ? "Ver servicio" : "View service",
            ctaHref: "#lead-form",
          },
        ]}
      />

      <Section2MissionSplit
        id="benefits"
        titleLineOne={isEs ? "Tu sitio web debe funcionar" : "Your website should work"}
        titleLineTwo={isEs ? "como una herramienta de negocio" : "like a business tool"}
        subtitle={
          isEs
            ? "Construido para mejorar conversión, confianza y desempeño comercial desde la primera visita."
            : "Built to improve conversion, trust, and business performance from the first visit."
        }
        missionLabel={isEs ? "Beneficios" : "Benefits"}
        ctaLabel={isEs ? "Solicitar propuesta" : "Request Proposal"}
        ctaHref="#lead-form"
        stats={[
          { icon: "satisfaction", value: "95%", label: isEs ? "Clientes satisfechos con proceso y resultados" : "Clients satisfied with process and results" },
          { icon: "industries", value: "15+", label: isEs ? "Industrias atendidas con enfoque en conversión" : "Industries served with conversion-focused websites" },
          { icon: "value", value: "$25M+", label: isEs ? "Ingresos impactados por estrategia digital" : "Revenue influenced through digital strategy" },
        ]}
        image="https://www.figma.com/api/mcp/asset/ca337080-94cb-422c-8be2-e4bb50ec6c44"
        tickerItems={[
          { avatar: "https://www.figma.com/api/mcp/asset/5840bd1f-3900-4cf9-8cc1-c31c11de32b3", text: isEs ? "Conversión" : "Conversion" },
          { avatar: "https://www.figma.com/api/mcp/asset/c403a76f-7cd6-41d4-ac60-c371e5ebc420", text: isEs ? "Confianza" : "Trust", muted: true },
          { avatar: "https://www.figma.com/api/mcp/asset/b860798b-cdc4-44be-8353-3cddd5130012", text: isEs ? "Leads" : "Leads" },
        ]}
      />

      <FeaturedSectionImageLeft
        id="benefits-split"
        titleLineOne={isEs ? "Tu sitio web debe funcionar" : "Your website should work"}
        titleLineTwo={isEs ? "como activo comercial" : "as a business asset"}
        eyebrow={isEs ? "Beneficios clave" : "Key benefits"}
        ctaLabel={isEs ? "Solicitar propuesta" : "Request Proposal"}
        ctaHref="#lead-form"
        paragraphOne={
          isEs
            ? "Convierte visitas en clientes reales · Construye confianza desde la primera impresión · Mejora tu presencia online."
            : "Turn visitors into real clients · Build trust from the first impression · Improve your online presence."
        }
        paragraphTwo={
          isEs
            ? "Captura leads de forma eficiente · Optimizado para móvil y velocidad · Integración directa con WhatsApp."
            : "Capture leads efficiently · Optimized for mobile and speed · Direct WhatsApp integration."
        }
        backgroundImage="https://www.figma.com/api/mcp/asset/1a8b8817-5608-4c8f-9bc3-5fe1c28f39e1"
        featureImage="https://www.figma.com/api/mcp/asset/ca337080-94cb-422c-8be2-e4bb50ec6c44"
      />

      <ClientVoicesCarouselSection
        id="testimonials"
        title={isEs ? "Lo que dicen nuestros clientes" : "What our clients say"}
        subtitle={
          isEs
            ? "Confiado por negocios que necesitan resultados reales de pipeline y conversiones."
            : "Trusted by businesses that need real pipeline growth and measurable conversion outcomes."
        }
        ratingText={isEs ? "4.9 promedio en clientes activos" : "4.9 average rating from active clients"}
        items={[
          {
            quote:
              "The team brought clarity to our vision and delivered beyond expectations. A seamless blend of strategy, execution, and ongoing support.",
            author: "Emma Johnson",
            role: "CEO & Co-Founder",
            avatar: "https://www.figma.com/api/mcp/asset/5840bd1f-3900-4cf9-8cc1-c31c11de32b3",
          },
          {
            quote:
              "Their process helped us turn website traffic into qualified inquiries. We now get more WhatsApp conversations from serious prospects.",
            author: "Daniel Roberts",
            role: "Founder, Apex Labs",
            avatar: "https://www.figma.com/api/mcp/asset/c403a76f-7cd6-41d4-ac60-c371e5ebc420",
          },
          {
            quote:
              "Execution was clean from kickoff to launch. We finally have a website system our team can scale confidently.",
            author: "Leila Chen",
            role: "Marketing Director",
            avatar: "https://www.figma.com/api/mcp/asset/b860798b-cdc4-44be-8353-3cddd5130012",
          },
        ]}
      />

      <ProcessSection
        id="process"
        eyebrow={isEs ? "Proceso" : "Process"}
        title={isEs ? "Un proceso transparente diseñado para resultados" : "A transparent process designed for business outcomes"}
        subtitle={
          isEs
            ? "De estrategia a lanzamiento, cada paso está enfocado en calidad de conversión y generación de leads."
            : "From strategy to launch, every step is focused on conversion quality and lead generation."
        }
        steps={[
          {
            step: isEs ? "Paso 01" : "Step 01",
            title: isEs ? "Estrategia" : "Strategy",
            description: isEs ? "Definimos objetivos, intención del cliente y prioridades de conversión." : "Define goals, audience intent, and conversion priorities.",
          },
          {
            step: isEs ? "Paso 02" : "Step 02",
            title: isEs ? "Diseño" : "Design",
            description: isEs ? "Creamos secciones premium con jerarquía clara y señales de confianza." : "Create premium sections with clear hierarchy and trust cues.",
          },
          {
            step: isEs ? "Paso 03" : "Step 03",
            title: isEs ? "Desarrollo" : "Development",
            description: isEs ? "Construimos páginas rápidas, responsivas y listas para SEO." : "Build fast, responsive, SEO-ready pages and workflows.",
          },
          {
            step: isEs ? "Paso 04" : "Step 04",
            title: isEs ? "Lanzamiento" : "Launch",
            description: isEs ? "Publicamos, validamos flujo de leads y mejoramos conversión." : "Go live, validate lead flow, and improve conversion behavior.",
          },
        ]}
        ctaHref="#lead-form"
        ctaLabel={isEs ? "Solicitar propuesta" : "Request Proposal"}
        whatsappLabel={isEs ? "Conversar por WhatsApp" : "Chat on WhatsApp"}
      />

      <PricingSection
        id="plans-preview"
        title={isEs ? "Planes mensuales con precios transparentes" : "Monthly plans with transparent pricing"}
        subtitle={
          isEs
            ? "Elige Essential, Business o Ecommerce según la etapa de tu negocio y tus metas de leads."
            : "Choose Essential, Business, or Ecommerce based on your business stage and lead goals."
        }
        plans={pricingPlansByLocale[locale]}
        proposalHref="#lead-form"
        whatsappLabel={isEs ? "Conversar por WhatsApp" : "Chat on WhatsApp"}
        helpText={isEs ? "¿Necesitas ayuda para elegir el plan correcto?" : "Need help choosing the right plan?"}
        helpCtaText={isEs ? "Solicitar cotización gratuita" : "Request Free Quote for your business"}
        helpCtaHref="#plans-preview"
      />

      <TestimonialBannerSection
        id="banner-cta"
        quote="The team brought clarity to our vision and delivered beyond expectations. A seamless blend of strategy, execution, and ongoing support."
        author="Emma Johnson"
        role="CEO & Co-Founder of Roundsite"
        reviewsText="4.6 Rate by 16,000+ Reviews"
        bgImage="https://www.figma.com/api/mcp/asset/4f3985a6-d756-48a4-8db6-cd3dba920c9f"
      />

      <LeadCaptureSection
        title={isEs ? "Solicita tu propuesta" : "Request your proposal"}
        subtitle={
          isEs
            ? "Cuéntanos tus objetivos de servicio, industria y mercado. Te enviaremos una propuesta orientada a conversión."
            : "Tell us your service, industry, and location goals. We will send a conversion-focused plan and recommendation."
        }
        bullets={
          isEs
            ? [
                "Arquitectura web estratégica para generación de leads",
                "Estructura SEO por servicio, industria y ubicación",
                "Planes transparentes sin costos ocultos",
                "Vía rápida de propuesta + WhatsApp",
              ]
            : [
                "Strategic website architecture for lead generation",
                "SEO-ready structure by service, industry, and location",
                "Transparent plans with no hidden pricing",
                "Proposal + WhatsApp conversion pathways",
              ]
        }
        proposalHref="#lead-form"
        quoteHref="#lead-form"
        whatsappLabel={isEs ? "Conversar por WhatsApp" : "Chat on WhatsApp"}
      />

      <HomeV3Footer
        homeHref="#hero"
        whatsappLabel={isEs ? "Conversar con un agente vía WhatsApp" : "Chat on WhatsApp"}
        locale={locale}
        serviceLinks={[
          { label: isEs ? "Diseño web" : "Web Design", href: "/services/diseno-web" },
          { label: "Landing Pages", href: "/services/landing-pages" },
          { label: "Ecommerce", href: "/services/ecommerce" },
          { label: isEs ? "Rediseño web" : "Website Redesign", href: "/services/rediseno-web" },
          { label: isEs ? "Soluciones personalizadas" : "Custom Solutions", href: "/services/soluciones-personalizadas" },
        ]}
        extraLinks={[
          { label: isEs ? "Industrias" : "Industries", href: "#industries" },
          { label: isEs ? "Proceso" : "Process", href: "#process" },
          { label: isEs ? "Planes" : "Plans", href: "#plans-preview" },
          { label: isEs ? "Contacto" : "Contact", href: "#lead-form" },
        ]}
      />
    </>
  );
}
