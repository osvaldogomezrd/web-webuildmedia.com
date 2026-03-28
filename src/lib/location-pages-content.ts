export type LocationSlug = "punta-cana" | "republica-dominicana" | "santiago" | "miami" | "orlando";

type ProcessItem = { step: string; title: string; description: string };
type FaqItem = { question: string; answer: string };
type PricingItem = { plan: string; price: string; audience: string; features: string[]; highlight?: boolean; whatsappMessage?: string };
type HoverServiceItem = { title: string; description: string; image: string; chips: string[]; ctaLabel: string; ctaHref: string };
type KeyIndustryItem = {
  icon:
    | "real_estate"
    | "villas"
    | "restaurants"
    | "tours"
    | "wellness"
    | "clinics"
    | "lawyers"
    | "construction"
    | "tourism";
  title: string;
  description: string;
};

export interface LocationPageContent {
  locale: "es" | "en";
  slug: LocationSlug;
  path: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    badgeText: string;
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    supportPoints: string[];
    image: string;
    whatsappMessage: string;
  };
  trust: {
    titleLineOne: string;
    titleLineTwo: string;
    subtitleLineOne: string;
    subtitleLineTwo: string;
    stats: { value: string; lineOne: string; lineTwo: string }[];
  };
  why: {
    titleLineOne: string;
    titleLineTwo: string;
    subtitleLineOne: string;
    subtitleLineTwo: string;
    features: {
      icon: "framework" | "seo" | "integrations" | "design" | "management" | "performance" | "mobile";
      title: string;
      lineOne: string;
      lineTwo: string;
    }[];
  };
  services: {
    titleLineOne: string;
    titleLineTwo: string;
    intro: string;
    items: HoverServiceItem[];
  };
  industries: {
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    items: KeyIndustryItem[];
  };
  outcomes: {
    titleLineOne: string;
    titleLineTwo: string;
    descriptionLines: string[];
    features: { icon: "collaboration" | "layout" | "speed" | "integration"; lineOne: string; lineTwo: string }[];
    stats: { value: string; lineOne: string; lineTwo: string; lineThree?: string }[];
    quotePrimary: string;
    quoteSecondaryLineOne: string;
    quoteSecondaryLineTwo: string;
    quoteSecondaryLineThree?: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessItem[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: PricingItem[];
  };
  testimonialBanner: {
    quote: string;
    author: string;
    role: string;
    reviewsText: string;
    image: string;
  };
  lead: {
    title: string;
    subtitle: string;
    bullets: string[];
    defaultService: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  footerDescription: string;
}

const serviceCardsBase = [
  {
    title: "Diseño web",
    description: "Sitios profesionales orientados a generar leads con mejor calidad comercial.",
    image: "https://www.figma.com/api/mcp/asset/4cafdd73-b8c3-470d-9bce-393d6ca84715",
    chips: ["Conversión", "Autoridad", "Mobile-first"],
    ctaLabel: "Solicitar propuesta",
    ctaHref: "#contact",
  },
  {
    title: "Landing pages",
    description: "Páginas de campaña para captación rápida con foco en intención de compra.",
    image: "https://www.figma.com/api/mcp/asset/6f9b6a7e-0d73-4cd7-953c-d23911cab9ff",
    chips: ["Campañas", "Leads", "Ads-ready"],
    ctaLabel: "Solicitar propuesta",
    ctaHref: "#contact",
  },
  {
    title: "Ecommerce",
    description: "Tiendas online con arquitectura clara para aumentar transacciones y ticket promedio.",
    image: "https://www.figma.com/api/mcp/asset/afa9ba56-58ed-4f04-98fd-66018f4021f3",
    chips: ["Catálogo", "Checkout", "Ventas"],
    ctaLabel: "Solicitar propuesta",
    ctaHref: "#contact",
  },
  {
    title: "Rediseño web",
    description: "Actualizamos sitios existentes para mejorar UX, velocidad y resultados de negocio.",
    image: "https://www.figma.com/api/mcp/asset/afe672a4-6741-4a98-9a17-d60212c3dc9d",
    chips: ["UX", "SEO", "Performance"],
    ctaLabel: "Solicitar propuesta",
    ctaHref: "#contact",
  },
  {
    title: "Soluciones personalizadas",
    description: "Integraciones, automatizaciones y flujos a medida según la etapa de tu empresa.",
    image: "https://www.figma.com/api/mcp/asset/4cafdd73-b8c3-470d-9bce-393d6ca84715",
    chips: ["Integraciones", "Automatización", "Escalable"],
    ctaLabel: "Solicitar propuesta",
    ctaHref: "#contact",
  },
];

function buildPlans(locationLabel: string): PricingItem[] {
  return [
    {
      plan: "Essential",
      price: "$49.99 USD / mes",
      audience: "350 USD de inscripción · Presencia profesional para comenzar a generar leads rápidamente.",
      features: [
        "Diseño web profesional y responsivo",
        "Dominio .com + hosting básico incluido",
        "Formulario de contactos y WhatsApp",
        "SSL + blog autogestionable",
      ],
      whatsappMessage: `Hola, estoy interesado en el plan Essential para ${locationLabel}.`,
    },
    {
      plan: "Business",
      price: "$74.99 USD / mes",
      audience: "450 USD de inscripción · Sitio completo para convertir más visitantes en clientes.",
      highlight: true,
      features: [
        "Incluye todo lo del Essential",
        "Catálogo de productos o servicios",
        "Formularios inteligentes y automatizaciones",
        "Hosting optimizado + hasta 10 cuentas de correo",
      ],
      whatsappMessage: `Hola, estoy interesado en el plan Business para ${locationLabel}.`,
    },
    {
      plan: "Ecommerce",
      price: "$145 USD / mes",
      audience: "1,200 USD de inscripción · Venta online con base técnica escalable.",
      features: [
        "Incluye todo lo del Business",
        "Tienda completa con panel autogestionable",
        "Integración con pasarelas de pago",
        "Hosting ultra veloz para performance y SEO",
      ],
      whatsappMessage: `Hola, estoy interesado en el plan Ecommerce para ${locationLabel}.`,
    },
  ];
}

function baseIndustries(): KeyIndustryItem[] {
  return [
    { icon: "real_estate", title: "Real Estate e inmobiliarias", description: "Páginas para captar compradores e inversionistas con mayor intención." },
    { icon: "villas", title: "Villas y rentas", description: "Estructura para mostrar propiedades, disponibilidad y solicitudes directas." },
    { icon: "restaurants", title: "Restaurantes", description: "Experiencias web enfocadas en reservas, menús y conversiones móviles." },
    { icon: "tours", title: "Tours y excursiones", description: "Flujos pensados para aumentar reservas y consultas de paquetes." },
    { icon: "wellness", title: "Spas y wellness", description: "Posicionamiento premium y captación de citas de alto valor." },
    { icon: "clinics", title: "Clínicas y salud", description: "Autoridad digital con secciones claras para servicios y contacto." },
  ];
}

const homeLikeStats = [
  { value: "95%", lineOne: "Satisfacción del cliente", lineTwo: "con enfoque en resultados" },
  { value: "15+", lineOne: "Industrias impulsadas", lineTwo: "en mercados competitivos" },
  { value: "2-4x", lineOne: "Mejora en leads", lineTwo: "según estructura y oferta" },
];

function locationContent({
  slug,
  locationLabel,
  heroLineTwo,
  heroSubtitle,
  trustSubtitleOne,
  trustSubtitleTwo,
  whyTitleOne,
  whyTitleTwo,
  serviceIntro,
  industriesSubtitle,
  outcomesTitleOne,
  outcomesTitleTwo,
  processTitle,
  processSubtitle,
  testimonialQuote,
  leadTitle,
  leadSubtitle,
  faqTitle,
  faqSubtitle,
  image,
  footerDescription,
}: {
  slug: LocationSlug;
  locationLabel: string;
  heroLineTwo: string;
  heroSubtitle: string;
  trustSubtitleOne: string;
  trustSubtitleTwo: string;
  whyTitleOne: string;
  whyTitleTwo: string;
  serviceIntro: string;
  industriesSubtitle: string;
  outcomesTitleOne: string;
  outcomesTitleTwo: string;
  processTitle: string;
  processSubtitle: string;
  testimonialQuote: string;
  leadTitle: string;
  leadSubtitle: string;
  faqTitle: string;
  faqSubtitle: string;
  image: string;
  footerDescription: string;
}): LocationPageContent {
  const path = `/ubicaciones/${slug}`;
  return {
    locale: "es",
    slug,
    path,
    metaTitle: `Diseño web en ${locationLabel} | Webuildmedia`,
    metaDescription: `Servicio de diseño web en ${locationLabel} orientado a conversión, leads calificados y crecimiento comercial.`,
    hero: {
      badgeText: `Diseño web en ${locationLabel}`,
      titleLineOne: `Diseño web en ${locationLabel}`,
      titleLineTwo: heroLineTwo,
      subtitle: heroSubtitle,
      supportPoints: [
        "Estructura orientada a conversión",
        "CTAs claros con WhatsApp y formulario",
        "Base SEO lista para posicionar localmente",
      ],
      image,
      whatsappMessage: `Hola, quiero una propuesta para mi negocio en ${locationLabel}.`,
    },
    trust: {
      titleLineOne: "Resultados reales para",
      titleLineTwo: `negocios en ${locationLabel}`,
      subtitleLineOne: trustSubtitleOne,
      subtitleLineTwo: trustSubtitleTwo,
      stats: homeLikeStats,
    },
    why: {
      titleLineOne: whyTitleOne,
      titleLineTwo: whyTitleTwo,
      subtitleLineOne: "Simple, escalable y enfocado en negocio.",
      subtitleLineTwo: "Diseñado para atraer mejores clientes y cerrar más ventas.",
      features: [
        {
          icon: "seo",
          title: "SEO local estratégico",
          lineOne: "Arquitectura técnica lista para rankear en",
          lineTwo: `búsquedas de alta intención en ${locationLabel}.`,
        },
        {
          icon: "integrations",
          title: "Integraciones comerciales",
          lineOne: "Conecta formularios, CRM y WhatsApp para",
          lineTwo: "acelerar seguimiento y cierre.",
        },
        {
          icon: "design",
          title: "Diseño que genera confianza",
          lineOne: "Jerarquía visual y mensajes claros para",
          lineTwo: "reducir fricción al solicitar servicio.",
        },
        {
          icon: "performance",
          title: "Rendimiento optimizado",
          lineOne: "Carga rápida en desktop y mobile para",
          lineTwo: "mejor experiencia y mejor conversión.",
        },
        {
          icon: "management",
          title: "Gestión simple",
          lineOne: "Actualiza secciones clave sin depender de",
          lineTwo: "procesos técnicos complejos.",
        },
        {
          icon: "mobile",
          title: "Experiencia mobile-first",
          lineOne: "Diseñado para usuarios que investigan y",
          lineTwo: "deciden desde el teléfono.",
        },
      ],
    },
    services: {
      titleLineOne: "Servicios web para",
      titleLineTwo: `crecer en ${locationLabel}`,
      intro: serviceIntro,
      items: [...serviceCardsBase],
    },
    industries: {
      titleLineOne: "Industrias que atendemos",
      titleLineTwo: `en ${locationLabel}`,
      subtitle: industriesSubtitle,
      items: baseIndustries(),
    },
    outcomes: {
      titleLineOne: outcomesTitleOne,
      titleLineTwo: outcomesTitleTwo,
      descriptionLines: [
        "Estrategia, diseño y tecnología alineados",
        "para generar más oportunidades comerciales",
        "con una ejecución rápida y medible.",
      ],
      features: [
        { icon: "collaboration", lineOne: "Estrategia enfocada en", lineTwo: "objetivos comerciales" },
        { icon: "layout", lineOne: "Diseño orientado a", lineTwo: "conversión y claridad" },
        { icon: "speed", lineOne: "Implementación rápida", lineTwo: "sin comprometer calidad" },
        { icon: "integration", lineOne: "Sistema integrado con", lineTwo: "WhatsApp y formularios" },
      ],
      stats: [
        { value: "2-4x", lineOne: "Mejoras en captación", lineTwo: "de leads calificados" },
        { value: "90+", lineOne: "Base técnica en SEO", lineTwo: "y rendimiento web" },
        { value: "15+", lineOne: "Industrias atendidas", lineTwo: "con enfoque en conversión" },
      ],
      quotePrimary: "“No diseñamos por estética.",
      quoteSecondaryLineOne: "Diseñamos para que tu web",
      quoteSecondaryLineTwo: "funcione como activo comercial",
      quoteSecondaryLineThree: "y genere resultados medibles.”",
    },
    process: {
      title: processTitle,
      subtitle: processSubtitle,
      steps: [
        { step: "Paso 01", title: "Diagnóstico", description: "Analizamos tu oferta, audiencia y oportunidad local." },
        { step: "Paso 02", title: "Estrategia", description: "Definimos estructura de secciones, mensajes y CTAs." },
        { step: "Paso 03", title: "Diseño + desarrollo", description: "Construimos una experiencia premium enfocada en conversión." },
        { step: "Paso 04", title: "Lanzamiento", description: "Publicamos, validamos métricas y optimizamos la captación." },
      ],
    },
    pricing: {
      title: "Planes claros, sin sorpresas",
      subtitle: "Elige el plan que mejor se adapta a la etapa y necesidades de tu negocio.",
      plans: buildPlans(locationLabel),
    },
    testimonialBanner: {
      quote: testimonialQuote,
      author: "Emma Johnson",
      role: "CEO & Co-Founder of Roundsite",
      reviewsText: "4.6 Rate by 16,000+ Reviews",
      image: "https://www.figma.com/api/mcp/asset/4f3985a6-d756-48a4-8db6-cd3dba920c9f",
    },
    lead: {
      title: leadTitle,
      subtitle: leadSubtitle,
      bullets: [
        "Arquitectura orientada a resultados",
        "SEO local listo para escalar",
        "CTAs estratégicos para captar mejores leads",
        "Propuesta clara para avanzar rápido",
      ],
      defaultService: `Web Design ${locationLabel}`,
    },
    faq: {
      title: faqTitle,
      subtitle: faqSubtitle,
      items: [
        {
          question: `¿Qué incluye el servicio de diseño web en ${locationLabel}?`,
          answer:
            "Incluye estrategia de conversión, diseño responsive, estructura SEO, formularios y CTAs con WhatsApp.",
        },
        {
          question: "¿Pueden adaptar la web a mi tipo de negocio?",
          answer:
            "Sí. Adaptamos estructura, mensajes y flujos a tu industria y a la forma en que tu cliente toma decisiones.",
        },
        {
          question: "¿En cuánto tiempo pueden lanzar mi web?",
          answer:
            "Depende del alcance, pero normalmente trabajamos en ciclos rápidos para lanzar una primera versión en pocas semanas.",
        },
      ],
    },
    footerDescription,
  };
}

export const locationPagesContentEs: Record<LocationSlug, LocationPageContent> = {
  "punta-cana": locationContent({
    slug: "punta-cana",
    locationLabel: "Punta Cana",
    heroLineTwo: "captar más clientes",
    heroSubtitle:
      "Diseñamos sitios para turismo, real estate, villas, restaurantes, excursiones y spas que necesitan convertir visitas en solicitudes reales.",
    trustSubtitleOne: "Estructura premium para mercados turísticos",
    trustSubtitleTwo: "que compiten por atención y confianza.",
    whyTitleOne: "Por qué un negocio en Punta Cana",
    whyTitleTwo: "necesita una web más fuerte",
    serviceIntro: "Servicios pensados para captar turistas, residentes e inversionistas con intención real de compra.",
    industriesSubtitle: "Trabajamos con negocios locales e internacionales que necesitan una presencia digital sólida.",
    outcomesTitleOne: "Convertimos presencia digital",
    outcomesTitleTwo: "en oportunidades reales",
    processTitle: "Un proceso claro para crecer en Punta Cana",
    processSubtitle: "Cada etapa se enfoca en atraer, convertir y cerrar más oportunidades comerciales.",
    testimonialQuote:
      "The team brought clarity to our vision and delivered beyond expectations. A seamless blend of strategy, execution, and ongoing support.",
    leadTitle: "Solicita una propuesta para tu negocio en Punta Cana",
    leadSubtitle: "Te enviamos una propuesta enfocada en captación, conversión y crecimiento comercial.",
    faqTitle: "Preguntas frecuentes sobre diseño web en Punta Cana",
    faqSubtitle: "Respuestas claras para ayudarte a tomar una decisión estratégica.",
    image: "https://images.unsplash.com/photo-1611784861446-9df7d9f2f6f3?auto=format&fit=crop&w=1600&q=80",
    footerDescription: "Diseño web orientado a conversión para negocios de Punta Cana y mercados turísticos de alto potencial.",
  }),
  "republica-dominicana": locationContent({
    slug: "republica-dominicana",
    locationLabel: "República Dominicana",
    heroLineTwo: "escalar a nivel nacional",
    heroSubtitle:
      "Creamos sitios para empresas y marcas en crecimiento que buscan posicionarse en múltiples ciudades con una estructura comercial consistente.",
    trustSubtitleOne: "Sistema web diseñado para presencia nacional",
    trustSubtitleTwo: "con foco en leads y autoridad de marca.",
    whyTitleOne: "Por qué una empresa en República Dominicana",
    whyTitleTwo: "debe profesionalizar su sitio web",
    serviceIntro: "Soluciones para negocios con visión de crecimiento en todo el país.",
    industriesSubtitle: "Ideal para agencias, clínicas, real estate, servicios profesionales y compañías en expansión.",
    outcomesTitleOne: "Diseño web nacional con",
    outcomesTitleTwo: "enfoque en resultados",
    processTitle: "Ejecución estratégica para negocios en expansión",
    processSubtitle: "Del diagnóstico a la optimización, priorizamos resultados medibles.",
    testimonialQuote:
      "El equipo le dio claridad a nuestra visión y entregó más allá de lo esperado. Una combinación impecable de estrategia, ejecución y soporte continuo.",
    leadTitle: "Solicita una propuesta para tu empresa en RD",
    leadSubtitle: "Diseñamos un plan de implementación claro según tus objetivos comerciales.",
    faqTitle: "Preguntas frecuentes sobre diseño web en República Dominicana",
    faqSubtitle: "Información clave para tomar decisiones con mayor confianza.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    footerDescription: "Webuildmedia impulsa negocios en República Dominicana con sitios diseñados para conversión y crecimiento sostenible.",
  }),
  santiago: locationContent({
    slug: "santiago",
    locationLabel: "Santiago",
    heroLineTwo: "fortalecer tu presencia local",
    heroSubtitle:
      "Desarrollamos webs para clínicas, restaurantes, servicios profesionales y empresas locales que necesitan captar mejores oportunidades.",
    trustSubtitleOne: "Diseño orientado a performance local",
    trustSubtitleTwo: "para negocios que compiten por intención.",
    whyTitleOne: "Por qué una empresa en Santiago",
    whyTitleTwo: "necesita una web que convierta",
    serviceIntro: "Te ayudamos a transformar tu web en una herramienta comercial activa.",
    industriesSubtitle: "Enfocado en negocios locales que quieren más visibilidad, confianza y conversiones.",
    outcomesTitleOne: "De presencia digital básica",
    outcomesTitleTwo: "a sistema comercial activo",
    processTitle: "Proceso enfocado en resultados para Santiago",
    processSubtitle: "Metodología simple, clara y orientada a captación de clientes.",
    testimonialQuote:
      "Trabajar con el equipo nos permitió mejorar la calidad de nuestros leads y tomar decisiones más rápidas con datos reales.",
    leadTitle: "Solicita una propuesta para tu negocio en Santiago",
    leadSubtitle: "Recibe una propuesta clara para mejorar tu conversión digital.",
    faqTitle: "Preguntas frecuentes sobre diseño web en Santiago",
    faqSubtitle: "Todo lo necesario para iniciar con una estrategia digital sólida.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    footerDescription: "Diseño web estratégico para empresas de Santiago que buscan crecer con una base digital más fuerte.",
  }),
  miami: locationContent({
    slug: "miami",
    locationLabel: "Miami",
    heroLineTwo: "compete in high-value markets",
    heroSubtitle:
      "Conversion-focused websites for real estate, premium services, and hospitality brands that need stronger trust and better lead quality.",
    trustSubtitleOne: "Built for competitive markets with",
    trustSubtitleTwo: "a strong focus on conversion outcomes.",
    whyTitleOne: "Why Miami businesses need",
    whyTitleTwo: "a stronger digital system",
    serviceIntro: "From premium positioning to lead-focused UX, we build for growth-oriented brands.",
    industriesSubtitle: "Ideal for real estate, hospitality, and premium service providers targeting high-intent clients.",
    outcomesTitleOne: "Premium positioning with",
    outcomesTitleTwo: "measurable conversion gains",
    processTitle: "A transparent process for Miami growth goals",
    processSubtitle: "Strategy, design, and execution aligned with measurable business outcomes.",
    testimonialQuote:
      "The team brought clarity to our vision and delivered beyond expectations. A seamless blend of strategy, execution, and ongoing support.",
    leadTitle: "Request a proposal for your Miami business",
    leadSubtitle: "We will send a conversion-focused roadmap tailored to your market and offer.",
    faqTitle: "Frequently asked questions about web design in Miami",
    faqSubtitle: "Practical answers to help you move forward with confidence.",
    image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=1600&q=80",
    footerDescription: "Web design for Miami businesses that need stronger authority, clearer positioning, and better conversion flow.",
  }),
  orlando: locationContent({
    slug: "orlando",
    locationLabel: "Orlando",
    heroLineTwo: "grow with a conversion-first website",
    heroSubtitle:
      "Web design for tourism-related businesses, restaurants, hospitality, and service brands that need more qualified inquiries.",
    trustSubtitleOne: "Designed for local service growth",
    trustSubtitleTwo: "with SEO and conversion as core priorities.",
    whyTitleOne: "Why Orlando companies need",
    whyTitleTwo: "web design built for outcomes",
    serviceIntro: "We build websites that help local and tourism brands turn traffic into booked conversations.",
    industriesSubtitle: "Perfect for hospitality, restaurants, and service businesses focused on sustainable growth.",
    outcomesTitleOne: "From visibility to",
    outcomesTitleTwo: "qualified lead generation",
    processTitle: "Execution framework for Orlando growth-focused brands",
    processSubtitle: "A practical system designed to improve trust, speed, and conversion behavior.",
    testimonialQuote:
      "Execution was clean from kickoff to launch. We finally have a website system our team can scale confidently.",
    leadTitle: "Request a proposal for your Orlando business",
    leadSubtitle: "Get a clear plan to improve lead quality and website-driven revenue opportunities.",
    faqTitle: "Frequently asked questions about web design in Orlando",
    faqSubtitle: "Clear guidance before starting your next website project.",
    image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?auto=format&fit=crop&w=1600&q=80",
    footerDescription: "Conversion-focused web design for Orlando businesses in tourism, hospitality, and local services.",
  }),
};

const enLocationLabelMap: Record<LocationSlug, string> = {
  "punta-cana": "Punta Cana",
  "republica-dominicana": "Dominican Republic",
  santiago: "Santiago",
  miami: "Miami",
  orlando: "Orlando",
};

export const locationPagesContentEn: Record<LocationSlug, LocationPageContent> = Object.fromEntries(
  (Object.entries(locationPagesContentEs) as Array<[LocationSlug, LocationPageContent]>).map(([slug, content]) => [
    slug,
    {
      ...content,
      locale: "en",
      path: `/en/locations/${slug}`,
      hero: {
        ...content.hero,
        badgeText: `Web design in ${enLocationLabelMap[slug]}`,
        titleLineOne: `Web design in ${enLocationLabelMap[slug]}`,
      },
    },
  ])
) as Record<LocationSlug, LocationPageContent>;

export const locationPagesContent = locationPagesContentEs;

export const locationSlugs: LocationSlug[] = [
  "punta-cana",
  "republica-dominicana",
  "santiago",
  "miami",
  "orlando",
];
