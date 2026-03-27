export type ServicePageSlug =
  | "diseno-web"
  | "landing-pages"
  | "ecommerce"
  | "rediseno-web"
  | "soluciones-personalizadas";

type KeyFeatureItem = {
  icon: "setup" | "framework" | "performance" | "ecosystem" | "scale" | "insights";
  title: string;
  description: string;
};

type ProcessItem = {
  step: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
  badge?: string;
};

type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

type PortfolioItem = {
  image: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  slug: ServicePageSlug;
  metaTitle: string;
  metaDescription: string;
  hero: {
    ratingText: string;
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    image: string;
  };
  includes: {
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    items: KeyFeatureItem[];
  };
  process: {
    title: string;
    subtitle: string;
    whatsappMessage: string;
    items: ProcessItem[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
    trustText: string;
    logos: string[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    ratingText: string;
    items: TestimonialItem[];
  };
  portfolio: {
    titleLineOne: string;
    titleLineTwo: string;
    items: PortfolioItem[];
  };
  banner: {
    quote: string;
    author: string;
    whatsappMessage: string;
    bgImage: string;
  };
  faq: {
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    items: FaqItem[];
  };
  lead: {
    title: string;
    subtitle: string;
    bullets: string[];
    whatsappMessage: string;
    formDefaultService: string;
  };
  footerDescription: string;
};

const processImages = [
  "https://www.figma.com/api/mcp/asset/4cafdd73-b8c3-470d-9bce-393d6ca84715",
  "https://www.figma.com/api/mcp/asset/6f9b6a7e-0d73-4cd7-953c-d23911cab9ff",
  "https://www.figma.com/api/mcp/asset/afa9ba56-58ed-4f04-98fd-66018f4021f3",
  "https://www.figma.com/api/mcp/asset/afe672a4-6741-4a98-9a17-d60212c3dc9d",
  "https://www.figma.com/api/mcp/asset/ca337080-94cb-422c-8be2-e4bb50ec6c44",
];

const sharedPortfolioImages = [
  "https://www.figma.com/api/mcp/asset/b3f5e911-84db-4362-902b-7cad4926a275",
  "https://www.figma.com/api/mcp/asset/1a8b8817-5608-4c8f-9bc3-5fe1c28f39e1",
  "https://www.figma.com/api/mcp/asset/880c7dc8-1d4a-42d7-9d8b-69c03eabe910",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
];

const sharedTestimonialAvatars = [
  "https://www.figma.com/api/mcp/asset/5840bd1f-3900-4cf9-8cc1-c31c11de32b3",
  "https://www.figma.com/api/mcp/asset/c403a76f-7cd6-41d4-ac60-c371e5ebc420",
  "https://www.figma.com/api/mcp/asset/b860798b-cdc4-44be-8353-3cddd5130012",
];

const sharedHeroImage = "https://www.figma.com/api/mcp/asset/eaf9e64e-7cc6-4116-97b0-8555d3cae1c5";
const sharedBannerImage = "https://www.figma.com/api/mcp/asset/d715dcca-d7ed-4487-9bd5-94a6753e5bbe";

export const servicePagesContent: Record<ServicePageSlug, ServicePageContent> = {
  "diseno-web": {
    slug: "diseno-web",
    metaTitle: "Diseño Web Profesional | Solicitar Propuesta",
    metaDescription:
      "Servicio de diseño web profesional con SEO, desarrollo y mantenimiento. Precios claros, proceso en 30 días y contacto directo por WhatsApp.",
    hero: {
      ratingText: "120+ proyectos · 30 días entrega · 5 mercados",
      titleLineOne: "Todo lo que tu web",
      titleLineTwo: "necesita para crecer",
      subtitle:
        "Desde el diseño visual hasta el posicionamiento en Google ofrecemos un servicio completo para que tu negocio tenga presencia digital profesional y genere resultados reales.",
      image: sharedHeroImage,
    },
    includes: {
      titleLineOne: "Servicios incluidos",
      titleLineTwo: "en diseño web",
      subtitle:
        "Un servicio integral para que tu web no solo se vea bien, sino que también convierta visitas en clientes.",
      items: [
        { icon: "framework", title: "Diseño web profesional", description: "Diseño alineado a tu marca, con estructura pensada para confianza y conversión." },
        { icon: "insights", title: "SEO & posicionamiento", description: "Arquitectura y contenido optimizados para búsquedas con intención comercial." },
        { icon: "setup", title: "Desarrollo a medida", description: "Implementación robusta y escalable según tus objetivos y flujo de negocio." },
        { icon: "ecosystem", title: "E-commerce", description: "Tiendas online orientadas a conversión, compra rápida y crecimiento sostenido." },
        { icon: "performance", title: "Hosting & dominio", description: "Base técnica estable para velocidad, seguridad y operación sin fricciones." },
        { icon: "scale", title: "Mantenimiento", description: "Soporte continuo para ajustes, mejoras y evolución constante del sitio." },
      ],
    },
    process: {
      title: "Del quiero una web al lanzamiento en solo 30 días",
      subtitle: "Un proceso claro, guiado y pensado para avanzar sin fricción.",
      whatsappMessage: "Hola, quiero iniciar mi proyecto de diseño web.",
      items: [
        { step: "Paso 01", title: "Consulta gratis", description: "Entendemos tu negocio, tu objetivo comercial y qué necesitas lograr online.", bullets: ["Reunión breve", "Objetivos claros", "Contexto de mercado"], image: processImages[0], imageAlt: "Consulta inicial de proyecto web" },
        { step: "Paso 02", title: "Propuesta", description: "Recibes alcance, tiempos y recomendación de plan con claridad total.", bullets: ["Alcance detallado", "Cronograma", "Inversión transparente"], image: processImages[1], imageAlt: "Propuesta estructurada de diseño web" },
        { step: "Paso 03", title: "Diseño", description: "Construimos una experiencia visual sólida, orientada a conversión y confianza.", bullets: ["Diseño UI", "Contenido estratégico", "Experiencia mobile-first"], image: processImages[2], imageAlt: "Fase de diseño web" },
        { step: "Paso 04", title: "Revisiones", description: "Ajustamos contigo para asegurar que el sitio represente tu negocio al 100%.", bullets: ["Feedback iterativo", "Ajustes visuales", "Validación final"], image: processImages[3], imageAlt: "Revisión colaborativa del sitio" },
        { step: "Paso 05", title: "Lanzamiento", description: "Publicamos tu web lista para captar contactos y oportunidades de negocio.", bullets: ["Salida a producción", "QA final", "Seguimiento inicial"], image: processImages[4], imageAlt: "Lanzamiento de sitio web" },
      ],
    },
    pricing: {
      title: "Precios claros, sin sorpresas",
      subtitle: "Sin costos ocultos. Elige el plan según tu etapa actual y objetivos de crecimiento.",
      plans: [
        { name: "Starter", price: "Desde $499 USD", description: "Para negocios que necesitan una web profesional para comenzar a captar clientes.", features: ["1-5 páginas", "Diseño personalizado", "Responsive", "WhatsApp integration", "2-3 semanas"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form" },
        { name: "Growth", price: "Desde $899 USD", description: "Ideal para negocios que necesitan más estructura y mejor conversión.", features: ["5-10 páginas", "SEO básico", "Formularios avanzados", "Animaciones", "Optimización de velocidad"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form", highlight: true, badge: "Más solicitado" },
        { name: "Pro / Custom", price: "Personalizado", description: "Para empresas con requerimientos avanzados, integraciones y operación más compleja.", features: ["Web a medida", "Integraciones avanzadas", "E-commerce o reservas", "SEO avanzado", "CRM + automatización"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form" },
      ],
      trustText: "Sin costos ocultos · enfoque en resultados · soporte directo",
      logos: ["Cubekit", "Acme Corp", "ContrastAI", "CoreOS"],
    },
    testimonials: {
      title: "Resultados que generan confianza",
      subtitle: "Empresas que necesitaban más leads y una presencia digital más sólida.",
      ratingText: "4.9 promedio en clientes activos",
      items: [
        { quote: "Nuestra nueva web mejoró la calidad de los contactos y aceleró cierres comerciales.", author: "Laura Méndez", role: "Directora Comercial", avatar: sharedTestimonialAvatars[0] },
        { quote: "El proceso fue claro y rápido. Pasamos de tener una web estática a una herramienta real de ventas.", author: "Andrés Pérez", role: "Fundador", avatar: sharedTestimonialAvatars[1] },
        { quote: "Ahora recibimos más consultas por WhatsApp con mejor intención de compra.", author: "María López", role: "Gerente de Marketing", avatar: sharedTestimonialAvatars[2] },
      ],
    },
    portfolio: {
      titleLineOne: "Portafolio",
      titleLineTwo: "proyectos recientes.",
      items: [
        { image: sharedPortfolioImages[0], title: "Sitio corporativo", description: "Estructura orientada a captación de leads y contacto directo por WhatsApp.", ctaLabel: "Ver proyecto", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[1], title: "Marca de servicios", description: "Presencia premium con mensajes claros para elevar confianza y conversión.", ctaLabel: "Ver proyecto", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[2], title: "Negocio local", description: "Contenido estratégico y llamadas a la acción enfocadas en resultados.", ctaLabel: "Ver proyecto", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[3], title: "Landing informativa", description: "Navegación simple y jerarquía visual para acelerar decisiones comerciales.", ctaLabel: "Ver proyecto", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[4], title: "Servicios premium", description: "Diseño moderno con enfoque en autoridad de marca y calidad de lead.", ctaLabel: "Ver proyecto", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[5], title: "Web de crecimiento", description: "Base escalable para sumar páginas, campañas y nuevas ofertas.", ctaLabel: "Ver proyecto", ctaHref: "#lead-form" },
      ],
    },
    banner: {
      quote: "¿Listo para tener una web\nque trabaje por ti?",
      author: "Recibe una propuesta en menos de 24h",
      whatsappMessage: "Hola, quiero hablar sobre mi proyecto de diseño web.",
      bgImage: sharedBannerImage,
    },
    faq: {
      titleLineOne: "Preguntas frecuentes",
      titleLineTwo: "sobre diseño web",
      subtitle: "Resolvemos las dudas más comunes antes de iniciar.",
      items: [
        { question: "¿Cuánto cuesta una web?", answer: "Depende del alcance. Tenemos planes desde Starter hasta soluciones personalizadas, con precios claros y sin costos ocultos." },
        { question: "¿En cuánto tiempo estará lista?", answer: "La mayoría de proyectos estándar se completan entre 2 y 4 semanas. En proyectos más amplios definimos cronograma desde la propuesta." },
        { question: "¿Incluyen SEO?", answer: "Sí. Incluimos una base SEO técnica y estructural para facilitar indexación y visibilidad orgánica desde el lanzamiento." },
        { question: "¿Incluye hosting y dominio?", answer: "Podemos incluir dominio y hosting según el plan. Te recomendamos la opción ideal según tráfico y objetivos." },
        { question: "¿Ofrecen soporte después del lanzamiento?", answer: "Sí. Ofrecemos soporte, ajustes y mantenimiento para que tu web siga rindiendo y se mantenga actualizada." },
        { question: "¿Puedo solicitar cambios?", answer: "Claro. Durante revisiones ajustamos diseño y contenido según feedback para asegurar que el resultado se alinee con tu negocio." },
      ],
    },
    lead: {
      title: "Solicita tu propuesta de diseño web",
      subtitle: "Respuesta en 24h, sin compromiso y con trato directo por WhatsApp.",
      bullets: ["Respuesta en 24h", "Sin compromiso", "Trato directo", "Enfoque en resultados reales"],
      whatsappMessage: "Hola, quiero una propuesta para mi proyecto de diseño web.",
      formDefaultService: "Diseño web profesional",
    },
    footerDescription:
      "Diseño web estratégico y desarrollo orientado a conversión para negocios que necesitan más leads y mejor presencia digital.",
  },
  "landing-pages": {
    slug: "landing-pages",
    metaTitle: "Landing Pages de Alta Conversión | Solicitar Propuesta",
    metaDescription:
      "Landing pages orientadas a campañas, tráfico pago y generación de leads. Enfocadas en un solo objetivo de conversión y mejor rendimiento de anuncios.",
    hero: {
      ratingText: "200+ campañas optimizadas · 4x más leads · mejor CPL",
      titleLineOne: "Landing pages para",
      titleLineTwo: "campañas que convierten",
      subtitle:
        "Diseñamos páginas de aterrizaje enfocadas en un solo objetivo: convertir tráfico pago en leads reales con claridad, velocidad y confianza.",
      image: sharedHeroImage,
    },
    includes: {
      titleLineOne: "Servicios incluidos",
      titleLineTwo: "en landing pages",
      subtitle:
        "Todo lo necesario para mejorar el rendimiento de campañas y aumentar conversiones desde el primer clic.",
      items: [
        { icon: "framework", title: "Arquitectura single-goal", description: "Estructura enfocada en una sola acción para maximizar la tasa de conversión." },
        { icon: "insights", title: "Copy para tráfico pago", description: "Mensajes alineados con intención de anuncio, oferta y objeciones del usuario." },
        { icon: "performance", title: "Velocidad para Ads", description: "Carga rápida en mobile para reducir rebote y mejorar Quality Score." },
        { icon: "setup", title: "Formularios optimizados", description: "Campos precisos para captar leads de calidad sin fricción innecesaria." },
        { icon: "ecosystem", title: "Integración con píxeles", description: "Preparación para Meta Pixel, Google Ads y eventos de conversión." },
        { icon: "scale", title: "Variantes por campaña", description: "Escalamos versiones por segmento, oferta o canal sin romper consistencia." },
      ],
    },
    process: {
      title: "De la campaña al lead en un flujo claro",
      subtitle: "Iteramos rápido para que tus anuncios generen más resultados con menos desperdicio.",
      whatsappMessage: "Hola, quiero una landing page para campañas.",
      items: [
        { step: "Paso 01", title: "Diagnóstico de campaña", description: "Revisamos oferta, audiencia y promesa para definir la estructura ideal.", bullets: ["Canal de tráfico", "Objetivo principal", "Oferta comercial"], image: processImages[0], imageAlt: "Diagnóstico de campaña" },
        { step: "Paso 02", title: "Wireframe de conversión", description: "Definimos jerarquía visual, bloques clave y CTA principal.", bullets: ["Hero orientado a acción", "Prueba social", "CTA dominante"], image: processImages[1], imageAlt: "Wireframe de landing page" },
        { step: "Paso 03", title: "Diseño y contenido", description: "Diseñamos una landing coherente con anuncios y mensaje de venta.", bullets: ["Consistencia visual", "Copy orientado a lead", "Enfoque mobile"], image: processImages[2], imageAlt: "Diseño de landing page" },
        { step: "Paso 04", title: "Tracking y QA", description: "Validamos eventos, formularios y comportamiento antes de publicar.", bullets: ["Eventos de conversión", "Pruebas funcionales", "Revisión de UX"], image: processImages[3], imageAlt: "Implementación de tracking" },
        { step: "Paso 05", title: "Lanzamiento", description: "Publicamos y dejamos lista la base para optimizaciones de rendimiento.", bullets: ["Publicación", "Monitoreo inicial", "Mejoras rápidas"], image: processImages[4], imageAlt: "Lanzamiento de landing page" },
      ],
    },
    pricing: {
      title: "Planes de landing pages",
      subtitle: "Elige el alcance según volumen de campañas y nivel de optimización que necesitas.",
      plans: [
        { name: "Launch", price: "Desde $399 USD", description: "Para validar una oferta con una landing enfocada en leads.", features: ["1 landing page", "Copy base", "Formulario + CTA", "Diseño responsive", "1 semana"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form" },
        { name: "Growth", price: "Desde $699 USD", description: "Ideal para equipos con tráfico pago y metas de conversión más agresivas.", features: ["Hasta 3 variantes", "Tracking de eventos", "A/B-ready structure", "Optimización mobile", "2 semanas"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form", highlight: true, badge: "Más solicitado" },
        { name: "Performance", price: "Personalizado", description: "Para operación multicanal con escalado continuo de campañas.", features: ["Sistema de landings", "Integraciones CRM", "Automatizaciones", "Optimización iterativa", "Soporte continuo"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form" },
      ],
      trustText: "Enfoque en CPL y calidad de lead · optimización continua · soporte directo",
      logos: ["Meta Ads", "Google Ads", "HubSpot", "Zapier"],
    },
    testimonials: {
      title: "Landing pages que mejoran campañas",
      subtitle: "Equipos que necesitaban más leads con el mismo presupuesto publicitario.",
      ratingText: "4.9 promedio en resultados de campañas",
      items: [
        { quote: "Con la nueva landing bajamos el costo por lead y aumentamos reuniones calificadas.", author: "Paola Díaz", role: "Paid Media Manager", avatar: sharedTestimonialAvatars[0] },
        { quote: "La estructura single-goal nos ayudó a convertir mejor el tráfico de Meta Ads.", author: "Carlos Núñez", role: "Growth Lead", avatar: sharedTestimonialAvatars[1] },
        { quote: "Pasamos de muchas visitas frías a formularios con intención real de compra.", author: "Elena Vargas", role: "Head of Marketing", avatar: sharedTestimonialAvatars[2] },
      ],
    },
    portfolio: {
      titleLineOne: "Portafolio",
      titleLineTwo: "landing pages.",
      items: [
        { image: sharedPortfolioImages[0], title: "Lead magnet", description: "Landing para captación de contactos con oferta de valor inmediata.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[1], title: "Campaña de servicios", description: "Página enfocada en solicitud de propuesta con copy persuasivo.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[2], title: "Registro de webinar", description: "Conversión orientada a eventos y secuencias de nurturing.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[3], title: "Oferta limitada", description: "Estructura de urgencia y claridad para campañas de corto plazo.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[4], title: "B2B acquisition", description: "Landing para captar leads empresariales con mejor calificación.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[5], title: "Captación local", description: "Página optimizada para anuncios geolocalizados y WhatsApp.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
      ],
    },
    banner: {
      quote: "Convierte mejor tu tráfico pago\ncon una landing enfocada",
      author: "Solicita estructura, copy y propuesta en menos de 24h",
      whatsappMessage: "Hola, quiero una landing page para mis campañas.",
      bgImage: sharedBannerImage,
    },
    faq: {
      titleLineOne: "Preguntas frecuentes",
      titleLineTwo: "sobre landing pages",
      subtitle: "Respuestas rápidas para decidir tu próxima campaña con más claridad.",
      items: [
        { question: "¿Una landing page sirve para cualquier campaña?", answer: "Sí, siempre que esté diseñada para un objetivo específico y una audiencia definida." },
        { question: "¿Incluyen integración con anuncios?", answer: "Sí. Dejamos lista la estructura para eventos de conversión y medición de resultados." },
        { question: "¿Puedo tener versiones por segmento?", answer: "Sí. Creamos variantes para diferentes audiencias, ofertas o etapas del funnel." },
        { question: "¿Se puede conectar con CRM?", answer: "Sí. Integramos formularios con herramientas de ventas y automatización según tu stack." },
        { question: "¿Cómo mejoran el rendimiento en móvil?", answer: "Priorizamos velocidad, jerarquía visual y CTA clara para sesiones mobile-first." },
        { question: "¿Cuánto tarda el proyecto?", answer: "Depende del alcance. Una landing base puede estar lista en 5-10 días hábiles." },
      ],
    },
    lead: {
      title: "Solicita tu propuesta de landing page",
      subtitle: "Te ayudamos a convertir tráfico en leads con una estructura enfocada en resultados.",
      bullets: ["Enfoque en campañas", "Mejor tasa de conversión", "Tracking listo", "Implementación rápida"],
      whatsappMessage: "Hola, quiero una propuesta para una landing page de campañas.",
      formDefaultService: "Landing Pages",
    },
    footerDescription:
      "Landing pages orientadas a campañas, generación de leads y mejora del rendimiento publicitario.",
  },
  ecommerce: {
    slug: "ecommerce",
    metaTitle: "Ecommerce para Vender Online | Solicitar Propuesta",
    metaDescription:
      "Desarrollo ecommerce con catálogo, checkout optimizado, pasarelas de pago y experiencia mobile para aumentar ventas online.",
    hero: {
      ratingText: "50+ tiendas lanzadas · mejor checkout · más ventas mobile",
      titleLineOne: "Ecommerce que impulsa",
      titleLineTwo: "ventas online reales",
      subtitle:
        "Creamos tiendas enfocadas en conversión, navegación clara y checkout eficiente para vender más desde cualquier dispositivo.",
      image: sharedHeroImage,
    },
    includes: {
      titleLineOne: "Servicios incluidos",
      titleLineTwo: "en ecommerce",
      subtitle:
        "Una estructura integral para aumentar ventas, ticket promedio y recompra en tu tienda online.",
      items: [
        { icon: "ecosystem", title: "Catálogo escalable", description: "Organización de productos por categorías, filtros y colecciones que facilitan la compra." },
        { icon: "framework", title: "Experiencia de compra", description: "Diseño orientado a confianza, claridad de producto y decisión rápida." },
        { icon: "performance", title: "Checkout optimizado", description: "Menos fricción en pago para reducir abandono de carrito." },
        { icon: "setup", title: "Pasarelas de pago", description: "Integración con Stripe, PayPal y opciones locales según mercado." },
        { icon: "insights", title: "Métricas e insights", description: "Eventos de compra y embudo listos para decisiones de crecimiento." },
        { icon: "scale", title: "Base para escalar", description: "Preparado para campañas, automatizaciones y expansión de catálogo." },
      ],
    },
    process: {
      title: "De catálogo a checkout sin fricción",
      subtitle: "Implementamos una tienda pensada para conversión y crecimiento sostenible.",
      whatsappMessage: "Hola, quiero una tienda ecommerce para vender online.",
      items: [
        { step: "Paso 01", title: "Estrategia comercial", description: "Definimos categorías, oferta y prioridades de conversión.", bullets: ["Segmentación de productos", "Oferta principal", "Flujo de compra"], image: processImages[0], imageAlt: "Estrategia ecommerce" },
        { step: "Paso 02", title: "Arquitectura de tienda", description: "Diseñamos navegación, fichas de producto y estructura de catálogo.", bullets: ["Categorías", "Filtros", "UX de producto"], image: processImages[1], imageAlt: "Arquitectura ecommerce" },
        { step: "Paso 03", title: "Diseño orientado a venta", description: "Aplicamos UI enfocada en confianza, claridad y decisión de compra.", bullets: ["Prueba social", "Beneficios visibles", "CTA de compra"], image: processImages[2], imageAlt: "Diseño de tienda online" },
        { step: "Paso 04", title: "Implementación de pagos", description: "Conectamos checkout, métodos de pago y validaciones clave.", bullets: ["Pasarelas", "Seguridad", "Pruebas de pago"], image: processImages[3], imageAlt: "Integración de pagos" },
        { step: "Paso 05", title: "Lanzamiento y medición", description: "Publicamos la tienda y dejamos trazabilidad para optimizar ventas.", bullets: ["Go-live", "Eventos ecommerce", "Monitoreo inicial"], image: processImages[4], imageAlt: "Lanzamiento ecommerce" },
      ],
    },
    pricing: {
      title: "Planes para ecommerce",
      subtitle: "Escoge la opción según volumen de productos y complejidad de operación.",
      plans: [
        { name: "Store Start", price: "Desde $799 USD", description: "Para lanzar una tienda funcional y empezar a vender online.", features: ["Hasta 30 productos", "Checkout básico", "Diseño responsive", "Pasarela principal", "2-3 semanas"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form" },
        { name: "Store Growth", price: "Desde $1,399 USD", description: "Para marcas en crecimiento que buscan mayor rendimiento y automatización.", features: ["Hasta 150 productos", "Filtros avanzados", "Múltiples pagos", "Optimización mobile", "4-6 semanas"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form", highlight: true, badge: "Más solicitado" },
        { name: "Store Pro", price: "Personalizado", description: "Para operaciones con catálogos amplios e integraciones complejas.", features: ["Catálogo escalable", "Integraciones ERP/CRM", "Automatizaciones", "Performance avanzado", "Soporte continuo"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form" },
      ],
      trustText: "Enfoque en conversión de carrito · pagos seguros · crecimiento sostenible",
      logos: ["Stripe", "PayPal", "WooCommerce", "Shopify"],
    },
    testimonials: {
      title: "Tiendas diseñadas para vender más",
      subtitle: "Marcas que necesitaban mejorar conversión y experiencia de compra.",
      ratingText: "4.8 promedio en desempeño ecommerce",
      items: [
        { quote: "Con la nueva tienda subimos la conversión móvil y bajamos abandono en checkout.", author: "Martha Rivera", role: "Ecommerce Manager", avatar: sharedTestimonialAvatars[0] },
        { quote: "La arquitectura de catálogo hizo más simple encontrar productos y cerrar compras.", author: "Daniel Acosta", role: "Founder", avatar: sharedTestimonialAvatars[1] },
        { quote: "Pasamos de una tienda lenta a una plataforma lista para campañas de escala.", author: "Lucía Herrera", role: "Head of Growth", avatar: sharedTestimonialAvatars[2] },
      ],
    },
    portfolio: {
      titleLineOne: "Portafolio",
      titleLineTwo: "ecommerce recientes.",
      items: [
        { image: sharedPortfolioImages[0], title: "Moda y accesorios", description: "Tienda con variaciones, filtros y checkout optimizado para compras rápidas.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[1], title: "Belleza y cuidado", description: "Experiencia mobile-first enfocada en recompra y ticket promedio.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[2], title: "Catálogo técnico", description: "Navegación clara para productos complejos con decisión de compra informada.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[3], title: "D2C brand", description: "Diseño de marca con funnel ecommerce orientado a performance.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[4], title: "Retail local", description: "Integración de pagos y logística para vender en múltiples zonas.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[5], title: "Marketplace niche", description: "Estructura escalable para crecer catálogo sin perder usabilidad.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
      ],
    },
    banner: {
      quote: "Tu tienda puede vender más\ncon una mejor experiencia",
      author: "Recibe una propuesta ecommerce en menos de 24h",
      whatsappMessage: "Hola, quiero una propuesta para mi ecommerce.",
      bgImage: sharedBannerImage,
    },
    faq: {
      titleLineOne: "Preguntas frecuentes",
      titleLineTwo: "sobre ecommerce",
      subtitle: "Las dudas clave antes de lanzar o escalar tu tienda online.",
      items: [
        { question: "¿Qué plataforma recomiendan?", answer: "Depende del modelo de negocio. Elegimos la opción que mejor soporte ventas, operación y escalabilidad." },
        { question: "¿Integran pasarelas de pago?", answer: "Sí. Configuramos métodos de pago según tu país, ticket promedio y flujo de compra." },
        { question: "¿Pueden migrar mi tienda actual?", answer: "Sí. Podemos migrar productos, estructura y contenidos minimizando impacto operativo." },
        { question: "¿Incluyen optimización móvil?", answer: "Sí. Prioridad total en experiencia mobile porque suele ser el canal con más tráfico." },
        { question: "¿Puedo conectar inventario y CRM?", answer: "Sí. Implementamos integraciones para centralizar ventas, inventario y seguimiento." },
        { question: "¿Cuánto tarda una tienda?", answer: "Un ecommerce base puede estar en 3-6 semanas según catálogo e integraciones." },
      ],
    },
    lead: {
      title: "Solicita tu propuesta ecommerce",
      subtitle: "Diseñamos una tienda lista para vender más y escalar sin fricción.",
      bullets: ["Catálogo escalable", "Checkout optimizado", "Pagos integrados", "Enfoque en ventas"],
      whatsappMessage: "Hola, quiero una propuesta para mi tienda ecommerce.",
      formDefaultService: "Ecommerce",
    },
    footerDescription:
      "Desarrollo ecommerce orientado a ventas, mejor conversión y crecimiento sostenible de tu canal online.",
  },
  "rediseno-web": {
    slug: "rediseno-web",
    metaTitle: "Rediseño Web Estratégico | Solicitar Propuesta",
    metaDescription:
      "Rediseño web para modernizar tu sitio, mejorar UX, velocidad y SEO, y convertir más visitas en oportunidades reales.",
    hero: {
      ratingText: "100+ sitios mejorados · UX moderna · mejor rendimiento SEO",
      titleLineOne: "Rediseña tu sitio para",
      titleLineTwo: "convertir mucho más",
      subtitle:
        "Transformamos webs desactualizadas en plataformas modernas, rápidas y orientadas a resultados comerciales.",
      image: sharedHeroImage,
    },
    includes: {
      titleLineOne: "Servicios incluidos",
      titleLineTwo: "en rediseño web",
      subtitle:
        "Optimizamos diseño, experiencia y base técnica para que tu sitio vuelva a generar confianza y leads.",
      items: [
        { icon: "framework", title: "Actualización visual", description: "Nuevo look profesional alineado a tu marca y estándar actual de mercado." },
        { icon: "setup", title: "Reestructura UX", description: "Mejoramos navegación y jerarquía para facilitar decisiones de contacto o compra." },
        { icon: "performance", title: "Velocidad y Core Web Vitals", description: "Reducimos tiempos de carga para mejorar experiencia y conversión." },
        { icon: "insights", title: "SEO técnico", description: "Reordenamos headings, metadata y estructura para mayor visibilidad orgánica." },
        { icon: "ecosystem", title: "Flujo de conversión", description: "Refinamos CTAs y formularios para elevar calidad y volumen de leads." },
        { icon: "scale", title: "Escalabilidad", description: "Dejamos el sitio listo para nuevas páginas, campañas y crecimiento." },
      ],
    },
    process: {
      title: "Del sitio actual al nuevo sistema de conversión",
      subtitle: "Rediseñamos con enfoque en negocio, no solo en apariencia.",
      whatsappMessage: "Hola, quiero rediseñar mi sitio web actual.",
      items: [
        { step: "Paso 01", title: "Auditoría inicial", description: "Evaluamos UX, velocidad, SEO y fricciones de conversión del sitio actual.", bullets: ["Diagnóstico técnico", "Análisis de contenido", "Puntos críticos"], image: processImages[0], imageAlt: "Auditoría de sitio web" },
        { step: "Paso 02", title: "Nueva estructura", description: "Diseñamos arquitectura de información y recorrido ideal por página.", bullets: ["Nuevo sitemap", "Jerarquía visual", "CTA strategy"], image: processImages[1], imageAlt: "Nueva estructura web" },
        { step: "Paso 03", title: "Diseño renovado", description: "Actualizamos interfaz para transmitir confianza y profesionalismo.", bullets: ["Diseño moderno", "Consistencia de marca", "UX optimizada"], image: processImages[2], imageAlt: "Rediseño visual" },
        { step: "Paso 04", title: "Implementación", description: "Desarrollamos el rediseño con foco en velocidad y estabilidad.", bullets: ["Desarrollo limpio", "Performance", "QA funcional"], image: processImages[3], imageAlt: "Implementación del rediseño" },
        { step: "Paso 05", title: "Migración y lanzamiento", description: "Publicamos sin perder visibilidad y con base para seguir creciendo.", bullets: ["Migración segura", "SEO continuity", "Monitoreo"], image: processImages[4], imageAlt: "Lanzamiento del rediseño" },
      ],
    },
    pricing: {
      title: "Planes de rediseño web",
      subtitle: "Selecciona el nivel de intervención según la complejidad de tu sitio actual.",
      plans: [
        { name: "Refresh", price: "Desde $599 USD", description: "Mejoras visuales y de estructura para sitios pequeños.", features: ["Hasta 5 páginas", "Nuevo diseño visual", "Mejoras UX base", "Optimización de velocidad", "2-3 semanas"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form" },
        { name: "Upgrade", price: "Desde $999 USD", description: "Rediseño completo para mejorar conversión y posicionamiento.", features: ["Hasta 12 páginas", "Arquitectura nueva", "SEO técnico base", "Formularios optimizados", "3-5 semanas"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form", highlight: true, badge: "Más solicitado" },
        { name: "Transform", price: "Personalizado", description: "Para plataformas con alto tráfico, integraciones y requerimientos avanzados.", features: ["Rediseño integral", "Migración compleja", "Integraciones", "Performance avanzado", "Roadmap evolutivo"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form" },
      ],
      trustText: "Mejor UX + mejor velocidad + mejor conversión",
      logos: ["Lighthouse", "GA4", "Search Console", "Hotjar"],
    },
    testimonials: {
      title: "Rediseños que recuperan resultados",
      subtitle: "Negocios que necesitaban dejar atrás un sitio desactualizado.",
      ratingText: "4.9 promedio en proyectos de rediseño",
      items: [
        { quote: "El rediseño mejoró la percepción de marca y aumentó formularios calificados.", author: "Karina Soto", role: "Directora General", avatar: sharedTestimonialAvatars[0] },
        { quote: "Pasamos de una web lenta y confusa a una experiencia clara que sí convierte.", author: "Iván Morales", role: "Founder", avatar: sharedTestimonialAvatars[1] },
        { quote: "Mejoramos SEO técnico y ahora recibimos leads más consistentes cada mes.", author: "Patricia León", role: "Marketing Manager", avatar: sharedTestimonialAvatars[2] },
      ],
    },
    portfolio: {
      titleLineOne: "Portafolio",
      titleLineTwo: "rediseños recientes.",
      items: [
        { image: sharedPortfolioImages[0], title: "Sitio corporativo renovado", description: "Nuevo diseño y estructura para elevar credibilidad y contacto comercial.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[1], title: "Portal de servicios", description: "Reorganización UX para facilitar navegación y solicitudes de propuesta.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[2], title: "Marca local", description: "Modernización completa con enfoque en velocidad y conversión móvil.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[3], title: "B2B website refresh", description: "Arquitectura orientada a calidad de lead y claridad de oferta.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[4], title: "Profesionales premium", description: "Rediseño visual y de contenido para mejorar posicionamiento de marca.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[5], title: "Sitio de crecimiento", description: "Base escalable para campañas y expansión de servicios.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
      ],
    },
    banner: {
      quote: "Tu sitio actual puede rendir\nmucho mejor con rediseño",
      author: "Recibe auditoría + propuesta en menos de 24h",
      whatsappMessage: "Hola, quiero una propuesta para rediseñar mi web.",
      bgImage: sharedBannerImage,
    },
    faq: {
      titleLineOne: "Preguntas frecuentes",
      titleLineTwo: "sobre rediseño web",
      subtitle: "Todo lo que debes saber antes de modernizar tu sitio actual.",
      items: [
        { question: "¿Pierdo contenido al rediseñar?", answer: "No necesariamente. Evaluamos qué mantener, optimizar o reemplazar según rendimiento." },
        { question: "¿Afecta mi posicionamiento en Google?", answer: "Lo gestionamos cuidadosamente para proteger y mejorar la base SEO durante la migración." },
        { question: "¿Pueden conservar mi dominio actual?", answer: "Sí. El rediseño puede lanzarse en tu mismo dominio sin problema." },
        { question: "¿Cuánto tarda un rediseño?", answer: "Depende del tamaño del sitio y nivel de cambios; normalmente entre 3 y 6 semanas." },
        { question: "¿Se puede rediseñar por fases?", answer: "Sí. Podemos priorizar páginas críticas y luego escalar por etapas." },
        { question: "¿Mejorará la conversión?", answer: "Ese es el objetivo principal: ordenar la experiencia para generar más contactos de calidad." },
      ],
    },
    lead: {
      title: "Solicita tu propuesta de rediseño web",
      subtitle: "Te mostramos cómo modernizar tu sitio para convertir más y cargar más rápido.",
      bullets: ["Auditoría inicial", "Nuevo diseño UX", "Mejor performance", "Más conversión"],
      whatsappMessage: "Hola, quiero una propuesta de rediseño web.",
      formDefaultService: "Website Redesign",
    },
    footerDescription:
      "Rediseño web estratégico para mejorar experiencia, velocidad, SEO y resultados comerciales.",
  },
  "soluciones-personalizadas": {
    slug: "soluciones-personalizadas",
    metaTitle: "Soluciones Web Personalizadas | Solicitar Propuesta",
    metaDescription:
      "Desarrollo de soluciones web personalizadas con funcionalidades avanzadas, integraciones, automatizaciones y arquitectura escalable.",
    hero: {
      ratingText: "Integraciones complejas · workflows a medida · arquitectura escalable",
      titleLineOne: "Soluciones web",
      titleLineTwo: "hechas a tu medida",
      subtitle:
        "Diseñamos e implementamos funcionalidades avanzadas para negocios que necesitan algo más que un sitio estándar.",
      image: sharedHeroImage,
    },
    includes: {
      titleLineOne: "Servicios incluidos",
      titleLineTwo: "en soluciones personalizadas",
      subtitle:
        "Combinamos estrategia, desarrollo y automatización para resolver necesidades complejas de operación y crecimiento.",
      items: [
        { icon: "setup", title: "Desarrollo a medida", description: "Funcionalidades específicas diseñadas según tu flujo real de negocio." },
        { icon: "ecosystem", title: "Integraciones", description: "Conectamos CRM, ERP, pasarelas, APIs y herramientas clave de tu operación." },
        { icon: "insights", title: "Automatizaciones", description: "Reducimos tareas manuales y mejoramos tiempos de respuesta comercial." },
        { icon: "framework", title: "Paneles y workflows", description: "Creamos módulos internos para gestionar procesos críticos con claridad." },
        { icon: "performance", title: "Arquitectura robusta", description: "Base técnica preparada para volumen, estabilidad y evolución continua." },
        { icon: "scale", title: "Escalabilidad", description: "Diseñamos para crecer por fases sin rehacer toda la solución." },
      ],
    },
    process: {
      title: "De necesidad compleja a solución funcional",
      subtitle: "Convertimos requerimientos técnicos en sistemas claros y accionables.",
      whatsappMessage: "Hola, necesito una solución web personalizada para mi negocio.",
      items: [
        { step: "Paso 01", title: "Discovery técnico", description: "Levantamos requerimientos, flujos y objetivos operativos.", bullets: ["Procesos actuales", "Bloqueos", "Objetivos de negocio"], image: processImages[0], imageAlt: "Discovery técnico" },
        { step: "Paso 02", title: "Arquitectura de solución", description: "Definimos módulos, integraciones y prioridades de implementación.", bullets: ["Mapa de sistema", "Dependencias", "Roadmap"], image: processImages[1], imageAlt: "Arquitectura personalizada" },
        { step: "Paso 03", title: "Diseño funcional", description: "Diseñamos interfaces y experiencia de uso para equipos y usuarios.", bullets: ["UX de flujo", "UI por módulo", "Validación funcional"], image: processImages[2], imageAlt: "Diseño funcional" },
        { step: "Paso 04", title: "Desarrollo e integración", description: "Construimos la solución y conectamos servicios externos necesarios.", bullets: ["APIs", "Automatizaciones", "Pruebas"], image: processImages[3], imageAlt: "Desarrollo e integración" },
        { step: "Paso 05", title: "Lanzamiento por fases", description: "Publicamos por etapas para minimizar riesgo y acelerar adopción.", bullets: ["Release controlado", "Soporte", "Iteración"], image: processImages[4], imageAlt: "Lanzamiento por fases" },
      ],
    },
    pricing: {
      title: "Modelos para desarrollo personalizado",
      subtitle: "Definimos alcance por fases para mantener control de inversión y resultados.",
      plans: [
        { name: "MVP", price: "Desde $1,200 USD", description: "Para validar una funcionalidad crítica en producción.", features: ["Módulo principal", "UI funcional", "Integración base", "QA", "2-4 semanas"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form" },
        { name: "Growth System", price: "Desde $2,500 USD", description: "Para operaciones que requieren múltiples módulos e integraciones.", features: ["Varios módulos", "APIs externas", "Automatizaciones", "Panel administrativo", "4-8 semanas"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form", highlight: true, badge: "Más solicitado" },
        { name: "Enterprise", price: "Personalizado", description: "Para soluciones complejas con alta criticidad y escalabilidad.", features: ["Arquitectura dedicada", "Integraciones avanzadas", "Seguridad reforzada", "Escalado por fases", "Soporte continuo"], ctaLabel: "Solicitar propuesta", ctaHref: "#lead-form" },
      ],
      trustText: "Soluciones a medida · integraciones robustas · visión de largo plazo",
      logos: ["HubSpot", "Salesforce", "Stripe", "Zapier"],
    },
    testimonials: {
      title: "Sistemas personalizados con impacto real",
      subtitle: "Equipos que necesitaban resolver procesos complejos y escalar su operación.",
      ratingText: "4.9 promedio en soluciones a medida",
      items: [
        { quote: "Automatizamos procesos clave y mejoramos tiempos de respuesta del equipo comercial.", author: "Sergio Peña", role: "COO", avatar: sharedTestimonialAvatars[0] },
        { quote: "La integración entre herramientas eliminó tareas manuales y errores de operación.", author: "Natalia Cruz", role: "Operations Manager", avatar: sharedTestimonialAvatars[1] },
        { quote: "Pasamos de hojas sueltas a un sistema centralizado listo para escalar.", author: "Ricardo Melo", role: "Director de Tecnología", avatar: sharedTestimonialAvatars[2] },
      ],
    },
    portfolio: {
      titleLineOne: "Portafolio",
      titleLineTwo: "soluciones a medida.",
      items: [
        { image: sharedPortfolioImages[0], title: "Portal de gestión interna", description: "Módulos personalizados para operación y seguimiento en tiempo real.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[1], title: "Integración CRM + Web", description: "Conexión completa para captación, segmentación y automatización de leads.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[2], title: "Sistema de reservas", description: "Flujo a medida con disponibilidad, pagos y confirmaciones automáticas.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[3], title: "Dashboard operativo", description: "Visualización de métricas clave para decisiones rápidas de negocio.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[4], title: "Automatización comercial", description: "Secuencias de seguimiento para reducir fricción en ventas.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
        { image: sharedPortfolioImages[5], title: "Plataforma escalable", description: "Arquitectura preparada para crecimiento y nuevos módulos.", ctaLabel: "Ver ejemplo", ctaHref: "#lead-form" },
      ],
    },
    banner: {
      quote: "Construye una solución que\nse adapte a tu negocio",
      author: "Solicita diagnóstico técnico y propuesta en 24h",
      whatsappMessage: "Hola, necesito una solución web personalizada.",
      bgImage: sharedBannerImage,
    },
    faq: {
      titleLineOne: "Preguntas frecuentes",
      titleLineTwo: "sobre soluciones personalizadas",
      subtitle: "Aclaramos lo esencial antes de iniciar un desarrollo a medida.",
      items: [
        { question: "¿Cómo definen el alcance?", answer: "Por fases y objetivos de negocio para mantener control técnico y financiero." },
        { question: "¿Pueden integrar mis herramientas actuales?", answer: "Sí. Evaluamos tu stack y conectamos los sistemas necesarios mediante APIs o middleware." },
        { question: "¿Incluyen automatizaciones?", answer: "Sí. Diseñamos automatizaciones para reducir tareas manuales y tiempos operativos." },
        { question: "¿Qué pasa si el alcance crece?", answer: "La arquitectura se planifica para escalar sin rehacer el sistema completo." },
        { question: "¿Trabajan con equipos internos?", answer: "Sí. Podemos colaborar con tu equipo técnico, comercial y operativo según necesidad." },
        { question: "¿Qué soporte ofrecen post-lanzamiento?", answer: "Ofrecemos soporte evolutivo para mejoras, mantenimiento y nuevas funcionalidades." },
      ],
    },
    lead: {
      title: "Solicita tu propuesta de solución personalizada",
      subtitle: "Diseñamos contigo un roadmap técnico y comercial alineado a tus objetivos.",
      bullets: ["Diagnóstico técnico", "Roadmap por fases", "Integraciones", "Escalabilidad real"],
      whatsappMessage: "Hola, quiero una propuesta para una solución personalizada.",
      formDefaultService: "Custom Solutions",
    },
    footerDescription:
      "Soluciones web personalizadas para operaciones complejas que requieren integración, automatización y escalabilidad.",
  },
};

