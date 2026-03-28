import {
  BelowTheFoldSection,
  ClientVoicesCarouselSection,
  DarkOverlayHeroSection,
  FeaturedBlackSection,
  HoverRevealServicesSection,
  LeadCaptureSection,
  PricingItem,
  PricingSection,
  ProcessSection,
  TestimonialBannerSection,
} from "@/components/v3/sections";
import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";

type Locale = "es" | "en";

const pricingPlansEs: PricingItem[] = [
  {
    plan: "Essential",
    price: "$49.99 USD / mes",
    audience:
      "350 USD de inscripción · Ideal para emprendedores y negocios pequeños que necesitan una presencia profesional y comenzar a generar leads rápidamente.",
    features: [
      "Diseño y desarrollo de sitio web moderno, profesional y responsivo",
      "Dominio .com y hosting básico incluido",
      "Diseño 100% personalizado según tu marca",
      "Formulario de contactos básicos",
      "Integración con redes sociales",
      "Botón de WhatsApp único",
      "Certificado de seguridad SSL",
      "Blog autogestionable para compartir contenido",
      "2 cuentas de correo profesional con tu dominio",
      "Soporte técnico vía Helpdesk",
      "10 GB de espacio web",
    ],
    whatsappMessage:
      "Hola, estoy interesado en el plan Essential ($49.99 USD/mes, inscripción de $350 USD). Me gustaría recibir más información sobre este servicio.",
  },
  {
    plan: "Business",
    price: "$74.99 USD / mes",
    audience:
      "450 USD de inscripción · Perfecto para negocios que quieren un sitio completo que convierta visitantes en clientes y les ayude a crecer de forma constante.",
    highlight: true,
    features: [
      "Incluye todo lo del Plan Essential, más:",
      "Catálogo de productos o servicios: Muestra de manera dinámica lo que puedes hacer",
      "Formularios de contacto inteligentes: Con campos dinámicos, validaciones y respuestas automáticas",
      "Botón de WhatsApp múltiple o chat flotante en vivo",
      "Hasta 10 cuentas de correo profesional: Más espacio para tu equipo",
      "Hosting más rápido: Servidores optimizados para mejor tiempo de carga y rendimiento",
      "25 GB de espacio web: Mayor capacidad de almacenamiento",
    ],
    whatsappMessage:
      "Hola, estoy interesado en el plan Business ($74.99 USD/mes, inscripción de $450 USD). Me gustaría recibir más información sobre este servicio.",
  },
  {
    plan: "Ecommerce",
    price: "$145 USD / mes",
    audience:
      "1,200 USD de inscripción · Diseñado para negocios que quieren vender online de forma profesional, automatizar procesos y escalar sus ingresos.",
    features: [
      "Incluye todo lo del Plan Business, más:",
      "Tienda en línea completa: Muestra tus productos y servicios, y haz que te compren de inmediato",
      "Integración con pasarelas de pago: Stripe, Cardnet, Azul, Visanet, PayPal y otras",
      "Panel de administración para autogestión: Administra tus textos, productos y publicaciones sin depender de nadie",
      "Hosting ultra veloz: Servidores optimizados para máxima velocidad y mejor rendimiento SEO",
      "Más de 10 cuentas de correo electrónico (costo adicional por cuenta)",
      "Más de 25 GB de espacio web (costo adicional por GB)",
    ],
    whatsappMessage:
      "Hola, estoy interesado en el plan Ecommerce ($145 USD/mes, inscripción de $1,200 USD). Me gustaría recibir más información sobre este servicio.",
  },
];

const pricingPlansByLocale: Record<Locale, PricingItem[]> = {
  es: pricingPlansEs,
  en: pricingPlansEs,
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
          showParticles
          particleConfig={{
            particleCount: 54,
            speed: 0.15,
            opacity: 0.18,
            minSize: 0.8,
            maxSize: 2.1,
            accentRatio: 0.06,
            mobileDensity: 0.56,
          }}
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

      <BelowTheFoldSection
        id="clients-outcomes"
        titleLineOne={isEs ? "Creamos webs" : "We deliver Innovation"}
        titleLineTwo={isEs ? "que generan ventas" : "that drives results"}
        subtitleLineOne={
          isEs
            ? "Combinamos estrategia, diseño y tecnología para atraer mejores leads,"
            : "We combine strategy, design, and technology to attract better leads,"
        }
        subtitleLineTwo={
          isEs
            ? "acelerar decisiones y generar resultados medibles para tu negocio."
            : "accelerate decisions, and drive measurable business outcomes."
        }
        stats={[
          {
            value: "95%",
            lineOne: isEs ? "Satisfacción del cliente" : "Customer satisfaction",
            lineTwo: isEs ? "basada en confianza y resultados" : "built on trust and results",
          },
          {
            value: "15+",
            lineOne: isEs ? "Industrias impulsadas" : "Industries empowered",
            lineTwo: isEs ? "con soluciones a la medida" : "with tailored solutions",
          },
          {
            value: "$25M+",
            lineOne: isEs ? "Valor de negocio generado" : "Business value generated",
            lineTwo: isEs ? "con estrategia digital" : "through strategic execution",
          },
        ]}
        secondaryTitleLineOne={isEs ? "Todo lo que necesitas" : "Everything you need"}
        secondaryTitleLineTwo={isEs ? "para empezar hoy" : "to get started"}
        secondarySubtitleLineOne={
          isEs
            ? "Simple, escalable y listo para cualquier industria."
            : "Simple, scalable, and ready for any industry. Our platform helps you"
        }
        secondarySubtitleLineTwo={
          isEs
            ? "Lanza más rápido y crece sin fricción."
            : "launch faster, operate smarter, and grow without barriers."
        }
        features={[
          {
            icon: "framework",
            title: isEs ? "Framework flexible" : "Flexible framework",
            lineOne:
              isEs
                ? "Adaptamos estructura, herramientas e integraciones a tu"
                : "Adapt workflows, tools, and integrations to match your",
            lineTwo: isEs ? "modelo de negocio sin complejidad innecesaria." : "business model without extra complexity.",
          },
          {
            icon: "seo",
            title: isEs ? "SEO listo para crecer" : "SEO-ready growth",
            lineOne:
              isEs
                ? "Estructura técnica optimizada para posicionarte y atraer"
                : "Technical structure optimized to rank and attract",
            lineTwo: isEs ? "tráfico con intención de compra." : "high-intent organic traffic.",
          },
          {
            icon: "integrations",
            title: isEs ? "Integraciones inteligentes" : "Smart integrations",
            lineOne:
              isEs
                ? "Conecta formularios, CRM y automatizaciones para operar"
                : "Connect forms, CRM, and automations to run",
            lineTwo: isEs ? "más rápido con menos tareas manuales." : "faster with less manual effort.",
          },
          {
            icon: "design",
            title: isEs ? "Diseño adaptable" : "Adaptive design",
            lineOne:
              isEs
                ? "Experiencia visual consistente en desktop, tablet y"
                : "Consistent visual experience across desktop, tablet, and",
            lineTwo: isEs ? "mobile para mejorar confianza y respuesta." : "mobile to improve trust and action.",
          },
          {
            icon: "management",
            title: isEs ? "Gestión simple" : "Simple management",
            lineOne:
              isEs
                ? "Actualiza contenido y secciones clave sin depender de"
                : "Update key content and sections without depending on",
            lineTwo: isEs ? "procesos técnicos complejos." : "complex technical workflows.",
          },
          {
            icon: "performance",
            title: isEs ? "Rendimiento optimizado" : "Optimized performance",
            lineOne:
              isEs
                ? "Carga rápida y arquitectura limpia para reducir rebote"
                : "Fast loading and clean architecture to reduce bounce",
            lineTwo: isEs ? "y aumentar conversiones." : "and increase conversion rates.",
          },
          {
            icon: "mobile",
            title: isEs ? "Experiencia mobile first" : "Mobile-first experience",
            lineOne:
              isEs
                ? "Diseñado para usuarios móviles donde ocurre la mayor"
                : "Designed for mobile users where most discovery and",
            lineTwo: isEs ? "parte de la captación de clientes." : "lead capture actually happens.",
          },
        ]}
        activeDot={0}
        showBottomCta={false}
      />

      <FeaturedBlackSection
        id="ai-acceleration"
        titleLineOne={isEs ? "IA que acelera entregas" : "AI that speeds delivery"}
        titleLineTwo={isEs ? "y mejora resultados" : "and lifts results"}
        descriptionLines={
          isEs
            ? [
                "Usamos IA para entregar proyectos en menos tiempo,",
                "con SEO y performance optimizados desde el inicio,",
                "y un enfoque pionero con ventaja real.",
              ]
            : [
                "We use AI to deliver projects in less time,",
                "with SEO and performance optimized from day one,",
                "and a pioneering approach built for advantage.",
              ]
        }
        features={[
          {
            icon: "collaboration",
            lineOne: isEs ? "IA aplicada en" : "AI applied across",
            lineTwo: isEs ? "estrategia y ejecución" : "strategy and execution",
          },
          {
            icon: "layout",
            lineOne: isEs ? "Flujos más rápidos" : "Faster workflows",
            lineTwo: isEs ? "con menos fricción" : "with less friction",
          },
          {
            icon: "speed",
            lineOne: isEs ? "SEO técnico + performance" : "Technical SEO + performance",
            lineTwo: isEs ? "listos desde el día uno" : "ready from day one",
          },
          {
            icon: "integration",
            lineOne: isEs ? "Pioneros en integrar IA" : "Pioneers in AI integration",
            lineTwo: isEs ? "en entregas de alto nivel" : "for high-level delivery",
          },
        ]}
        featureImage="https://www.figma.com/api/mcp/asset/ca337080-94cb-422c-8be2-e4bb50ec6c44"
        stats={[
          {
            value: "4x",
            lineOne: isEs ? "Entrega más rápida" : "Faster delivery",
            lineTwo: isEs ? "que lo tradicional" : "than traditional flow",
          },
          {
            value: "90+",
            lineOne: isEs ? "Base técnica en" : "Technical score in",
            lineTwo: isEs ? "SEO y performance" : "SEO and performance",
          },
          {
            value: "1st",
            lineOne: isEs ? "Enfoque pionero" : "Pioneer approach",
            lineTwo: isEs ? "en IA aplicada" : "in applied AI",
          },
        ]}
        quotePrimary={
          isEs
            ? "“La IA acelera la entrega,"
            : "“AI speeds up delivery,"
        }
        quoteSecondaryLineOne={
          isEs
            ? "pero la diferencia es criterio."
            : "but judgment stays central."
        }
        quoteSecondaryLineTwo={
          isEs
            ? "Más velocidad, mejor SEO y performance,"
            : "More speed, better SEO and performance,"
        }
        quoteSecondaryLineThree={
          isEs
            ? "con ejecución de alto nivel.”"
            : "with high-level execution.”"
        }
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
        tone="light"
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
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
      />

      <PricingSection
        id="plans-preview"
        title="Planes claros, sin sorpresas"
        subtitle="Elige el plan que mejor se adapta a la etapa y necesidades de tu negocio."
        plans={pricingPlansByLocale[locale]}
        proposalHref="#lead-form"
        cardButtonLabel="Solicitar servicio"
        showSecondaryWhatsAppButton={false}
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
        helpText=""
        helpCtaText=""
        helpCtaHref="#plans-preview"
      />

      <TestimonialBannerSection
        id="banner-cta"
        sectionTone="light"
        quote={
          isEs
            ? "El equipo le dio claridad a nuestra visión y entregó más allá de lo esperado. Una combinación impecable de estrategia, ejecución y soporte continuo."
            : "The team brought clarity to our vision and delivered beyond expectations. A seamless blend of strategy, execution, and ongoing support."
        }
        author="Emma Johnson"
        role={isEs ? "CEO y cofundadora de Roundsite" : "CEO & Co-Founder of Roundsite"}
        reviewsText={isEs ? "4.6 de calificación en 16,000+ reseñas" : "4.6 Rate by 16,000+ Reviews"}
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
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
      />

      <HomeV3Footer
        homeHref="#hero"
        whatsappLabel={isEs ? "Hablemos por WhatsApp" : "Hablemos por WhatsApp"}
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
