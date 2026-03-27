import type { BasicItem, FaqItem, PricingItem, ProcessItem, TestimonialItem, TickerTestimonialItem } from "@/components/v3/sections";

export type SiteLocale = "en" | "es";
export type ServiceCity = "punta-cana" | "miami" | "orlando";

export interface NavLinkItem {
  label: string;
  href: string;
}

interface LocationCard {
  image: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export interface MultiLocationHomeContent {
  locale: SiteLocale;
  homePath: string;
  heroTitle: string;
  heroSubtitle: string;
  heroRatingText: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  chooseLocationTitle: string;
  chooseLocationSubtitle: string;
  chooseLocationCta: string;
  locationCards: LocationCard[];
  problemsTitle: string;
  problemsSubtitle: string;
  problems: BasicItem[];
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: BasicItem[];
  processTitle: string;
  processSubtitle: string;
  process: ProcessItem[];
  pricingTitle: string;
  pricingSubtitle: string;
  plans: PricingItem[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  tickerLeft: TickerTestimonialItem[];
  tickerRight: TickerTestimonialItem[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
  leadTitle: string;
  leadSubtitle: string;
  leadBullets: string[];
  footerDescription: string;
}

export interface LocationPageContent {
  locale: SiteLocale;
  city: ServiceCity;
  path: string;
  homePath: string;
  metadataTitle: string;
  metadataDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroRatingText: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  problemsTitle: string;
  problemsSubtitle: string;
  problems: BasicItem[];
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: BasicItem[];
  processTitle: string;
  processSubtitle: string;
  process: ProcessItem[];
  pricingTitle: string;
  pricingSubtitle: string;
  plans: PricingItem[];
  proofTitle: string;
  proofSubtitle: string;
  stats: { value: string; label: string }[];
  testimonials: TestimonialItem[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
  relatedTitle: string;
  relatedSubtitle: string;
  relatedCta: string;
  relatedCards: LocationCard[];
  leadTitle: string;
  leadSubtitle: string;
  leadBullets: string[];
  footerDescription: string;
}

const locationImages = {
  puntaCana: "https://www.figma.com/api/mcp/asset/bf706c23-7980-40ad-bdde-cc07889049d7",
  miami: "https://www.figma.com/api/mcp/asset/893d0773-3792-4b30-ac20-536e15a6d304",
  orlando: "https://www.figma.com/api/mcp/asset/25e2ad1f-ac04-45b5-8c28-25e7f86ad754",
};

const heroImage = "https://www.figma.com/api/mcp/asset/dcd613ff-b269-4ed0-8027-5155270c3c88";

const baseProcessEn: ProcessItem[] = [
  {
    step: "Step 01",
    title: "Strategy",
    description: "We define the offer and message that attracts the right clients in your city.",
  },
  {
    step: "Step 02",
    title: "Design",
    description: "We create clear page sections that build trust and guide users to contact you.",
  },
  {
    step: "Step 03",
    title: "Development",
    description: "We build a fast website that is easy to use on mobile and ready for local SEO.",
  },
  {
    step: "Step 04",
    title: "Launch",
    description: "We publish, test the lead flow, and optimize for more proposals and WhatsApp inquiries.",
  },
];

const baseProcessEs: ProcessItem[] = [
  {
    step: "Paso 01",
    title: "Estrategia",
    description: "Definimos el mensaje y la oferta para atraer clientes ideales en tu ciudad.",
  },
  {
    step: "Paso 02",
    title: "Diseño",
    description: "Creamos una estructura clara que genera confianza y lleva al usuario a contactarte.",
  },
  {
    step: "Paso 03",
    title: "Desarrollo",
    description: "Construimos un sitio rápido, fácil de usar y listo para posicionarse en búsquedas locales.",
  },
  {
    step: "Paso 04",
    title: "Lanzamiento",
    description: "Publicamos, validamos el flujo de leads y optimizamos para más propuestas y mensajes por WhatsApp.",
  },
];

const tickerLeft: TickerTestimonialItem[] = [
  {
    quote: "Our new site now brings qualified WhatsApp inquiries every week.",
    author: "Daniel Roberts",
    role: "Founder, Apex Labs",
    avatar: "https://www.figma.com/api/mcp/asset/1d7558ca-2051-49a1-ab4e-13591d049485",
  },
  {
    quote: "The structure is clear, conversion-focused, and easy for our team to scale.",
    author: "Leila Chen",
    role: "Marketing Director",
    avatar: "https://www.figma.com/api/mcp/asset/1487506d-061f-44f0-aabe-62904bd0e0d5",
  },
  {
    quote: "We started receiving better leads in less than a month.",
    author: "James Patel",
    role: "COO, BrightPath",
    avatar: "https://www.figma.com/api/mcp/asset/e9d0cc37-201b-4feb-8067-0b554445fb22",
  },
];

const tickerRight: TickerTestimonialItem[] = [
  {
    quote: "Fast execution, clear strategy, and stronger local visibility.",
    author: "Nora Williams",
    role: "Operations Lead",
    avatar: "https://www.figma.com/api/mcp/asset/1a550cf2-3402-4863-b298-7c2858761220",
  },
  {
    quote: "The website finally supports sales instead of just looking pretty.",
    author: "Carlos Mendez",
    role: "Head of Operations",
    avatar: "https://www.figma.com/api/mcp/asset/5ad05a15-0468-4d09-a4cf-8de6edeb06f6",
  },
  {
    quote: "We now get more quote requests from users ready to buy.",
    author: "Diana Scott",
    role: "Growth Manager",
    avatar: "https://www.figma.com/api/mcp/asset/1d7558ca-2051-49a1-ab4e-13591d049485",
  },
];

const testimonialsEn: TestimonialItem[] = [
  {
    quote: "They built a lead generation website that increased qualified inquiries in under 30 days.",
    author: "Camila P.",
    role: "Real Estate Advisor",
  },
  {
    quote: "We moved from random traffic to consistent proposal requests from local buyers.",
    author: "Jordan W.",
    role: "Clinic Director",
  },
  {
    quote: "Our WhatsApp leads improved because the pages now guide users to the right action.",
    author: "Miguel T.",
    role: "Hospitality Operator",
  },
];

const testimonialsEs: TestimonialItem[] = [
  {
    quote: "Pasamos de tener visitas sin intención a recibir solicitudes calificadas cada semana.",
    author: "Carla M.",
    role: "Gerente Comercial",
  },
  {
    quote: "Ahora nuestros leads por WhatsApp llegan con mejor contexto y mayor intención de compra.",
    author: "Rafael G.",
    role: "Director de Operaciones",
  },
  {
    quote: "El sitio quedó claro, rápido y orientado a convertir tráfico en clientes reales.",
    author: "Laura P.",
    role: "Fundadora",
  },
];

const agencyPlansEn: PricingItem[] = [
  {
    plan: "Essential",
    price: "$49.99 / month",
    audience: "$350 registration fee. For businesses that need a professional website and clear lead capture.",
    features: [
      "Modern, professional, and responsive website design and development",
      ".com domain and basic hosting included",
      "100% design customized to your brand",
      "Basic contact form",
      "Social media integration",
      "Unique WhatsApp button",
      "SSL security certificate",
      "Self-managed blog to share content",
      "2 professional email accounts with your domain",
      "Technical support via Helpdesk",
      "10 GB of web space",
    ],
  },
  {
    plan: "Business",
    price: "$74.99 USD / month",
    audience: "$450 registration fee. Built for teams that need stronger lead flow and better conversion support.",
    highlight: true,
    features: [
      "Everything in the Essential Plan",
      "Product or service catalog: Dynamically show what you can do",
      "Smart contact forms: With dynamic fields, validations, and automatic responses",
      "Multiple WhatsApp button or live floating chat",
      "Up to 10 professional email accounts: More space for your team",
      "Faster Hosting: Servers optimized for better loading times and performance",
      "25 GB of web space: Greater storage capacity",
    ],
  },
  {
    plan: "Ecommerce",
    price: "$99.99 USD / month",
    audience: "$550 registration fee. For businesses ready to sell online with a complete conversion-focused store.",
    features: [
      "Everything in the Business Plan",
      "Complete online store: Showcase your products and services and get people to buy from you right away",
      "Payment gateway integration: Stripe, Cardnet, Azul, Visanet, PayPal, and others. Receive payments online securely",
      "Self-management admin panel: Manage your texts, products, and publications without relying on anyone",
      "Ultra-fast hosting: Servers optimized for maximum speed and improved SEO performance",
      "More than 10 email accounts (Additional cost per account)",
      "More than 25 GB of web space (Additional cost per GB)",
    ],
  },
];

const agencyPlansEs: PricingItem[] = [
  {
    plan: "Essential",
    price: "$49.99 / mes",
    audience: "Matrícula de $350. Para negocios que necesitan presencia profesional y captación clara de leads.",
    features: agencyPlansEn[0].features,
  },
  {
    plan: "Business",
    price: "$74.99 USD / mes",
    audience: "Matrícula de $450. Pensado para equipos que necesitan más conversiones y mejor flujo comercial.",
    highlight: true,
    features: agencyPlansEn[1].features,
  },
  {
    plan: "Ecommerce",
    price: "$99.99 USD / mes",
    audience: "Matrícula de $550. Para empresas que quieren vender online con una estructura enfocada en resultados.",
    features: agencyPlansEn[2].features,
  },
];

export const homeByLocale: Record<SiteLocale, MultiLocationHomeContent> = {
  en: {
    locale: "en",
    homePath: "/en",
    heroTitle: "Websites that turn visitors into clients",
    heroSubtitle: "We help businesses in Punta Cana, Miami, and Orlando grow with high-converting websites built for SEO and lead generation.",
    heroRatingText: "4.9 average rating from active clients",
    heroPrimaryCta: "Request Proposal",
    heroSecondaryCta: "Request Free Quote",
    chooseLocationTitle: "Choose your location",
    chooseLocationSubtitle: "Select your market to see a local web design page built for your city and customer profile.",
    chooseLocationCta: "Explore Locations",
    locationCards: [
      {
        image: locationImages.puntaCana,
        title: "Punta Cana",
        description: "Web design for tourism brands, villa rentals, real estate teams, and WhatsApp-first sales.",
        tags: ["Tourism", "Villas", "Real Estate", "WhatsApp leads"],
        href: "/en/web-design-punta-cana",
      },
      {
        image: locationImages.miami,
        title: "Miami",
        description: "Premium web design for competitive businesses that need brand authority and performance.",
        tags: ["Premium brands", "Performance", "Positioning", "Lead quality"],
        href: "/en/web-design-miami",
      },
      {
        image: locationImages.orlando,
        title: "Orlando",
        description: "Lead generation websites for local services, law firms, clinics, and contractors.",
        tags: ["Local services", "Law firms", "Clinics", "Contractors"],
        href: "/en/web-design-orlando",
      },
    ],
    problemsTitle: "Why businesses struggle to convert website traffic",
    problemsSubtitle: "Most sites are built like brochures. We build lead generation systems with clear conversion intent.",
    problems: [
      {
        title: "Traffic arrives but inquiries stay low",
        description: "Users land on the site but don’t see a clear next step to request a proposal or quote.",
      },
      {
        title: "The website feels generic",
        description: "If your copy doesn’t reflect your city and audience, prospects lose trust and leave.",
      },
      {
        title: "WhatsApp flow is disconnected",
        description: "Without strategic WhatsApp placements, high-intent users drop before contacting your team.",
      },
    ],
    benefitsTitle: "Everything your business needs to generate more leads online",
    benefitsSubtitle: "We combine design, development, conversion strategy, and local SEO in one delivery system.",
    benefits: [
      { title: "Conversion-focused web design", description: "Page structures that guide users toward proposal and quote actions." },
      { title: "SEO-ready development", description: "Fast technical builds with clean headings, metadata, and internal links." },
      { title: "Local market messaging", description: "Copy adapted to Punta Cana, Miami, and Orlando buyer intent." },
      { title: "WhatsApp-first journeys", description: "Strategic WhatsApp touchpoints for faster conversations and qualified leads." },
      { title: "Scalable design system", description: "Reusable section patterns to launch new pages with visual consistency." },
      { title: "Performance and ROI mindset", description: "Every decision is tied to conversion rate, lead quality, and business growth." },
    ],
    processTitle: "From strategy to launch in four focused steps",
    processSubtitle: "Clear execution that balances speed, conversion quality, and long-term SEO growth.",
    process: baseProcessEn,
    pricingTitle: "Simple pricing. Measurable ROI.",
    pricingSubtitle: "Packages designed to generate more leads, better conversion rates, and stronger pipeline outcomes.",
    plans: agencyPlansEn,
    testimonialsTitle: "What our clients say",
    testimonialsSubtitle: "Teams in service-driven markets trust us to deliver websites that produce real inquiries.",
    tickerLeft,
    tickerRight,
    faqTitle: "FAQ",
    faqSubtitle: "Everything decision-makers ask before requesting a proposal.",
    faqs: [
      {
        question: "Can you build city-specific pages without duplicating content?",
        answer: "Yes. We create unique copy and positioning per location while keeping a consistent design system.",
      },
      {
        question: "Do you include SEO setup on every page?",
        answer: "Yes. We implement title tags, meta descriptions, heading structure, and internal linking from day one.",
      },
      {
        question: "Can you prioritize WhatsApp as a lead channel?",
        answer: "Absolutely. We place WhatsApp CTAs where user intent is highest to increase qualified conversations.",
      },
      {
        question: "How fast can we launch?",
        answer: "Most projects launch in 3 to 6 weeks depending on content and page volume.",
      },
    ],
    leadTitle: "Ready to grow leads in Punta Cana, Miami, or Orlando?",
    leadSubtitle: "Tell us your city and service goals. We will send a practical roadmap, timeline, and quote.",
    leadBullets: [
      "Conversion strategy aligned with your city",
      "SEO foundations and internal linking",
      "Lead form clarity + WhatsApp visibility",
      "Actionable proposal with ROI focus",
    ],
    footerDescription:
      "Lead generation web design and development for Punta Cana, Miami, and Orlando businesses. Built for conversion, speed, and long-term SEO growth.",
  },
  es: {
    locale: "es",
    homePath: "/",
    heroTitle: "Sitios web que convierten visitas en clientes",
    heroSubtitle: "Ayudamos a negocios en Punta Cana, Miami y Orlando a crecer con sitios de alta conversión, enfocados en leads reales.",
    heroRatingText: "4.9 de calificación promedio en proyectos activos",
    heroPrimaryCta: "Request Proposal",
    heroSecondaryCta: "Request Free Quote",
    chooseLocationTitle: "Elige tu ubicación",
    chooseLocationSubtitle: "Selecciona tu ciudad para ver una propuesta de web design adaptada al mercado local.",
    chooseLocationCta: "Explorar ubicaciones",
    locationCards: [
      {
        image: locationImages.puntaCana,
        title: "Punta Cana",
        description: "Web design para turismo, villas, bienes raíces y negocios que venden por WhatsApp.",
        tags: ["Turismo", "Villas", "Real estate", "Leads por WhatsApp"],
        href: "/diseno-web-punta-cana",
      },
      {
        image: locationImages.miami,
        title: "Miami",
        description: "Sitios premium para empresas competitivas que necesitan marca fuerte y resultados.",
        tags: ["Marca premium", "Performance", "Posicionamiento", "Leads calificados"],
        href: "/diseno-web-miami",
      },
      {
        image: locationImages.orlando,
        title: "Orlando",
        description: "Sitios orientados a leads para servicios locales, abogados, clínicas y contratistas.",
        tags: ["Servicios locales", "Abogados", "Clínicas", "Contratistas"],
        href: "/diseno-web-orlando",
      },
    ],
    problemsTitle: "Por qué muchas webs no convierten tráfico en clientes",
    problemsSubtitle: "La mayoría se diseña como brochure. Nosotros construimos sistemas de conversión con intención comercial.",
    problems: [
      {
        title: "Llega tráfico, pero no llegan solicitudes",
        description: "El usuario entra, pero no encuentra una acción clara para cotizar o pedir propuesta.",
      },
      {
        title: "El mensaje se siente genérico",
        description: "Si tu contenido no refleja tu ciudad y cliente ideal, la confianza cae y el lead se pierde.",
      },
      {
        title: "WhatsApp no está bien integrado",
        description: "Sin puntos de contacto estratégicos, los usuarios con intención alta abandonan antes de escribir.",
      },
    ],
    benefitsTitle: "Todo lo que necesitas para generar más leads online",
    benefitsSubtitle: "Unimos diseño, desarrollo, estrategia de conversión y SEO local en un solo sistema.",
    benefits: [
      { title: "Diseño orientado a conversión", description: "Estructuras de página que guían al usuario a pedir propuesta o cotización." },
      { title: "Desarrollo SEO-ready", description: "Sitios rápidos con headings limpios, metadata correcta e interlinking." },
      { title: "Mensajería adaptada por ciudad", description: "Copy ajustado a la intención de búsqueda de Punta Cana, Miami y Orlando." },
      { title: "Rutas de WhatsApp", description: "Puntos de contacto estratégicos para aumentar conversaciones calificadas." },
      { title: "Design System escalable", description: "Patrones reutilizables para lanzar nuevas páginas con consistencia visual." },
      { title: "Enfoque en ROI", description: "Cada decisión está alineada con conversion rate, calidad del lead y crecimiento comercial." },
    ],
    processTitle: "De la estrategia al lanzamiento en 4 pasos",
    processSubtitle: "Ejecución clara que combina velocidad, conversión y crecimiento SEO a largo plazo.",
    process: baseProcessEs,
    pricingTitle: "Precios simples. Resultados medibles.",
    pricingSubtitle: "Planes diseñados para aumentar leads, mejorar la conversión y fortalecer tu pipeline.",
    plans: agencyPlansEs,
    testimonialsTitle: "Lo que dicen nuestros clientes",
    testimonialsSubtitle: "Empresas de servicios confían en nosotros para construir webs que sí generan consultas.",
    tickerLeft,
    tickerRight,
    faqTitle: "Preguntas frecuentes",
    faqSubtitle: "Respuestas clave antes de solicitar una propuesta.",
    faqs: [
      {
        question: "¿Pueden crear páginas por ciudad sin duplicar contenido?",
        answer: "Sí. Desarrollamos copy y enfoque único por ubicación manteniendo un sistema visual consistente.",
      },
      {
        question: "¿Incluyen SEO en cada página?",
        answer: "Sí. Implementamos titles, meta descriptions, headings e interlinking desde el inicio.",
      },
      {
        question: "¿Se puede priorizar WhatsApp como canal de leads?",
        answer: "Sí. Colocamos CTAs de WhatsApp en los puntos de mayor intención para aumentar conversaciones útiles.",
      },
      {
        question: "¿En cuánto tiempo pueden lanzar?",
        answer: "Normalmente entre 3 y 6 semanas según contenido y cantidad de páginas.",
      },
    ],
    leadTitle: "¿Listo para crecer en Punta Cana, Miami u Orlando?",
    leadSubtitle: "Cuéntanos tu objetivo comercial y te enviamos una propuesta con alcance, timeline y presupuesto estimado.",
    leadBullets: [
      "Estrategia de conversión por ciudad",
      "Base SEO y enlaces internos",
      "Mayor visibilidad de CTAs y WhatsApp",
      "Propuesta accionable enfocada en ROI",
    ],
    footerDescription:
      "Web design y desarrollo orientado a generación de leads para negocios en Punta Cana, Miami y Orlando.",
  },
};

function cityLabel(city: ServiceCity, locale: SiteLocale) {
  const labels = {
    "punta-cana": locale === "es" ? "Punta Cana" : "Punta Cana",
    miami: locale === "es" ? "Miami" : "Miami",
    orlando: locale === "es" ? "Orlando" : "Orlando",
  };
  return labels[city];
}

export function cityPageHref(locale: SiteLocale, city: ServiceCity) {
  if (locale === "es") {
    return `/diseno-web-${city}`;
  }
  return `/en/web-design-${city}`;
}

export function localePaths(locale: SiteLocale) {
  return locale === "es"
    ? {
        home: "/",
        pricing: "/precios",
        about: "/nosotros",
        contact: "/contacto",
      }
    : {
        home: "/en",
        pricing: "/en/pricing",
        about: "/en/about",
        contact: "/en/contact",
      };
}

export function localeNavLinks(locale: SiteLocale): NavLinkItem[] {
  const paths = localePaths(locale);
  return locale === "es"
    ? [
        { label: "Inicio", href: paths.home },
        { label: "Punta Cana", href: cityPageHref("es", "punta-cana") },
        { label: "Miami", href: cityPageHref("es", "miami") },
        { label: "Orlando", href: cityPageHref("es", "orlando") },
        { label: "Precios", href: paths.pricing },
        { label: "Nosotros", href: paths.about },
        { label: "Contacto", href: paths.contact },
      ]
    : [
        { label: "Home", href: paths.home },
        { label: "Punta Cana", href: cityPageHref("en", "punta-cana") },
        { label: "Miami", href: cityPageHref("en", "miami") },
        { label: "Orlando", href: cityPageHref("en", "orlando") },
        { label: "Pricing", href: paths.pricing },
        { label: "About", href: paths.about },
        { label: "Contact", href: paths.contact },
      ];
}

function relatedCards(locale: SiteLocale, current: ServiceCity): LocationCard[] {
  const all: Record<ServiceCity, LocationCard> = {
    "punta-cana": {
      image: locationImages.puntaCana,
      title: "Punta Cana",
      description: locale === "es" ? "Turismo, villas, real estate y leads por WhatsApp." : "Tourism, villas, real estate, and WhatsApp-driven leads.",
      tags: locale === "es" ? ["Turismo", "Villas", "Leads"] : ["Tourism", "Villas", "Leads"],
      href: cityPageHref(locale, "punta-cana"),
    },
    miami: {
      image: locationImages.miami,
      title: "Miami",
      description: locale === "es" ? "Negocios premium que necesitan branding + performance." : "Premium businesses that need branding + performance.",
      tags: locale === "es" ? ["Premium", "Branding", "Performance"] : ["Premium", "Branding", "Performance"],
      href: cityPageHref(locale, "miami"),
    },
    orlando: {
      image: locationImages.orlando,
      title: "Orlando",
      description: locale === "es" ? "Servicios locales: abogados, clínicas y contratistas." : "Local services: lawyers, clinics, and contractors.",
      tags: locale === "es" ? ["Servicios", "Legal", "Clínicas"] : ["Services", "Legal", "Clinics"],
      href: cityPageHref(locale, "orlando"),
    },
  };

  return ["punta-cana", "miami", "orlando"].filter((city) => city !== current).map((city) => all[city as ServiceCity]);
}

const citySpecificEn: Record<ServiceCity, { audience: string; angle: string; problems: BasicItem[]; benefits: BasicItem[]; faqs: FaqItem[] }> = {
  "punta-cana": {
    audience: "Tourism operators, villas, real estate teams, and service businesses",
    angle: "Web design Punta Cana",
    problems: [
      { title: "Leads depend only on Instagram DMs", description: "Without a proper website funnel, high-intent tourists and investors drop off." },
      { title: "No trust for international buyers", description: "If the site looks outdated, foreign clients hesitate before contacting you." },
      { title: "WhatsApp flow is unclear", description: "Visitors want instant contact, but your current pages don't guide them." },
    ],
    benefits: [
      { title: "Tourism-ready page structure", description: "Service flows designed for travelers, renters, and international clients." },
      { title: "Real estate conversion pages", description: "Listing and inquiry pages optimized for serious buyer intent." },
      { title: "WhatsApp-first CTA strategy", description: "Strategic WhatsApp placements to increase quote-ready conversations." },
      { title: "Bilingual-ready architecture", description: "Built to support both Spanish and English market segments." },
      { title: "Fast mobile experience", description: "Optimized for users searching while traveling or on the move." },
      { title: "Local SEO foundations", description: "Built to compete for web design Punta Cana and related high-intent queries." },
    ],
    faqs: [
      { question: "Do you optimize for tourists and international clients?", answer: "Yes. We structure messaging and CTAs for users booking from abroad and local residents." },
      { question: "Can you connect WhatsApp and lead forms together?", answer: "Yes. We map both channels so your team can capture and follow up without friction." },
      { question: "Do you support real estate and villa rental flows?", answer: "Yes. We design page paths that prioritize inquiries, availability requests, and trust signals." },
    ],
  },
  miami: {
    audience: "Premium and growth-stage brands in competitive sectors",
    angle: "Web design Miami",
    problems: [
      { title: "Brand looks premium but doesn't convert", description: "Many Miami sites look good but fail to generate qualified leads consistently." },
      { title: "High traffic, low sales conversations", description: "Users browse but don't move to proposal or quote requests." },
      { title: "Weak differentiation in competitive markets", description: "Without positioning clarity, prospects compare you only by price." },
    ],
    benefits: [
      { title: "Premium visual authority", description: "Design language aligned with high-value buyers and strong first impressions." },
      { title: "Performance-driven UX", description: "Fast pages and strategic flows that reduce drop-off and increase lead quality." },
      { title: "Positioning-first copy", description: "Messaging crafted to separate you from crowded competitor sets." },
      { title: "Lead qualification by design", description: "Sections designed to attract better-fit clients and reduce noise." },
      { title: "SEO and conversion alignment", description: "Rankability and persuasive content working together, not against each other." },
      { title: "Scalable expansion model", description: "Reusable components to launch new offers without losing consistency." },
    ],
    faqs: [
      { question: "Can you build a premium brand style without hurting conversion?", answer: "Yes. We balance visual quality with clear CTA architecture and lead intent." },
      { question: "Do you work with high-ticket services in Miami?", answer: "Yes. We design around trust, authority, and proposal-qualified lead flow." },
      { question: "How do you improve ROI from website traffic?", answer: "We optimize copy, CTA placement, and funnel structure to increase qualified inquiries." },
    ],
  },
  orlando: {
    audience: "Local service companies, law firms, clinics, and contractors",
    angle: "Web design Orlando",
    problems: [
      { title: "Website doesn't generate calls or quote requests", description: "Service businesses lose opportunities when pages don't answer buyer urgency." },
      { title: "No local trust signals", description: "Users need clear proof, outcomes, and next steps before contacting." },
      { title: "Slow site hurts local discovery", description: "Performance and weak structure reduce both ranking and conversion chances." },
    ],
    benefits: [
      { title: "Local service conversion paths", description: "Built for users who need legal, medical, or contractor services quickly." },
      { title: "Clear offer hierarchy", description: "Visitors can immediately identify services, pricing context, and next action." },
      { title: "Quote and proposal-first CTAs", description: "Request actions integrated across key sections to increase lead volume." },
      { title: "Speed and mobile optimization", description: "Improved performance for local searches and urgent decision journeys." },
      { title: "Structured trust elements", description: "Testimonials, outcomes, and process clarity to reduce hesitation." },
      { title: "SEO-ready service pages", description: "Targeted to rank for web design Orlando and local high-intent terms." },
    ],
    faqs: [
      { question: "Do you work with law firms, clinics, and contractors?", answer: "Yes. We tailor page flows to local service categories where urgency drives decisions." },
      { question: "Can the site improve both SEO and lead quality?", answer: "Yes. Our framework is built to improve visibility and conversion at the same time." },
      { question: "Do you include WhatsApp for local service teams?", answer: "Yes. We implement WhatsApp touchpoints where they support faster lead capture." },
    ],
  },
};

const citySpecificEs: Record<ServiceCity, { audience: string; angle: string; problems: BasicItem[]; benefits: BasicItem[]; faqs: FaqItem[] }> = {
  "punta-cana": {
    audience: "Turismo, villas, equipos de real estate y negocios de servicios",
    angle: "web design Punta Cana",
    problems: [
      { title: "Los leads dependen solo de Instagram", description: "Sin una web con funnel claro, se pierden turistas e inversionistas listos para contactar." },
      { title: "Poca confianza para clientes internacionales", description: "Si el sitio se ve desactualizado, el usuario no avanza a solicitar propuesta." },
      { title: "Flujo de WhatsApp desordenado", description: "El visitante quiere contacto inmediato, pero la web no guía la acción correcta." },
    ],
    benefits: [
      { title: "Estructura orientada a turismo", description: "Flujos de página pensados para viajeros, rentas y compradores internacionales." },
      { title: "Páginas para real estate", description: "Secciones optimizadas para captar solicitudes de propiedades y visitas." },
      { title: "CTAs de WhatsApp estratégicos", description: "Mayor volumen de conversaciones con intención real de compra." },
      { title: "Arquitectura bilingüe", description: "Preparado para audiencias en español e inglés." },
      { title: "Experiencia móvil rápida", description: "Rendimiento optimizado para usuarios que buscan desde el teléfono." },
      { title: "Base SEO local", description: "Diseñado para competir en búsquedas de alta intención en Punta Cana." },
    ],
    faqs: [
      { question: "¿Optimizan para clientes internacionales y turistas?", answer: "Sí. Diseñamos mensajes y CTAs para usuarios que compran desde fuera y público local." },
      { question: "¿Pueden integrar formulario y WhatsApp?", answer: "Sí. Conectamos ambos canales para mejorar captura y seguimiento de leads." },
      { question: "¿Trabajan con real estate y villas?", answer: "Sí. Creamos flujos de página orientados a consultas y solicitudes de disponibilidad." },
    ],
  },
  miami: {
    audience: "Empresas premium y en crecimiento dentro de mercados competitivos",
    angle: "web design Miami",
    problems: [
      { title: "La marca se ve premium, pero no convierte", description: "Muchas webs en Miami lucen bien, pero no generan solicitudes calificadas." },
      { title: "Hay tráfico, pero pocas conversaciones de venta", description: "El usuario navega, pero no avanza a cotizar o pedir propuesta." },
      { title: "Poca diferenciación frente a competencia", description: "Sin posicionamiento claro, el cliente compara solo por precio." },
    ],
    benefits: [
      { title: "Autoridad visual premium", description: "Diseño alineado a compradores de alto valor y primera impresión sólida." },
      { title: "UX orientada a performance", description: "Páginas rápidas y flujos estratégicos para reducir rebote." },
      { title: "Copy de posicionamiento", description: "Mensajes diseñados para destacar frente a competidores directos." },
      { title: "Filtrado de leads por diseño", description: "Secciones pensadas para atraer clientes mejor calificados." },
      { title: "SEO + conversión en una sola estrategia", description: "Contenido persuasivo con estructura técnica lista para rankear." },
      { title: "Escalabilidad por componentes", description: "Patrones reutilizables para lanzar nuevas páginas sin perder consistencia." },
    ],
    faqs: [
      { question: "¿Pueden lograr un estilo premium sin bajar conversiones?", answer: "Sí. Balanceamos diseño de alto nivel con arquitectura de CTAs clara." },
      { question: "¿Trabajan con servicios high-ticket en Miami?", answer: "Sí. Diseñamos para generar confianza y solicitudes de propuesta calificadas." },
      { question: "¿Cómo mejoran el ROI del tráfico web?", answer: "Optimizamos copy, jerarquía y flujo para aumentar leads de mayor calidad." },
    ],
  },
  orlando: {
    audience: "Servicios locales, abogados, clínicas y contratistas",
    angle: "web design Orlando",
    problems: [
      { title: "La web no genera llamadas ni cotizaciones", description: "Se pierden oportunidades cuando la página no responde la urgencia del usuario." },
      { title: "No hay señales claras de confianza local", description: "Sin prueba social y claridad de oferta, el usuario no contacta." },
      { title: "Sitio lento con estructura débil", description: "Afecta tanto visibilidad orgánica como conversión comercial." },
    ],
    benefits: [
      { title: "Flujos para servicios locales", description: "Diseñado para usuarios que necesitan respuesta rápida." },
      { title: "Jerarquía de oferta clara", description: "El usuario identifica servicio, valor y siguiente paso en segundos." },
      { title: "CTAs de cotización y propuesta", description: "Acciones comerciales visibles en todo el recorrido." },
      { title: "Optimización móvil y velocidad", description: "Mejor rendimiento para búsquedas locales en tiempo real." },
      { title: "Bloques de confianza", description: "Testimonios, proceso y resultados para reducir fricción." },
      { title: "Páginas SEO-ready", description: "Enfocadas en búsquedas de alta intención para Orlando." },
    ],
    faqs: [
      { question: "¿Trabajan con abogados, clínicas y contratistas?", answer: "Sí. Adaptamos el flujo a categorías donde la urgencia define la decisión." },
      { question: "¿Puede mejorar SEO y calidad de lead al mismo tiempo?", answer: "Sí. Nuestro framework busca visibilidad y conversión en paralelo." },
      { question: "¿Incluyen WhatsApp para servicios locales?", answer: "Sí. Activamos puntos de contacto estratégicos para acelerar la captación." },
    ],
  },
};

function buildLocationContent(locale: SiteLocale, city: ServiceCity): LocationPageContent {
  const cityData = locale === "es" ? citySpecificEs[city] : citySpecificEn[city];
  const cityName = cityLabel(city, locale);
  const isEs = locale === "es";

  return {
    locale,
    city,
    path: cityPageHref(locale, city),
    homePath: `/${locale}`,
    metadataTitle: isEs
      ? `Web Design ${cityName} | Sitios que generan más clientes`
      : `Web Design ${cityName} | High-Converting Lead Generation Websites`,
    metadataDescription: isEs
      ? `Servicio de web design en ${cityName} para convertir visitas en solicitudes, cotizaciones y conversaciones por WhatsApp.`
      : `Web design in ${cityName} for businesses that need more qualified leads, quote requests, and WhatsApp conversations.`,
    heroTitle: isEs
      ? `Web Design ${cityName} para conseguir más clientes calificados`
      : `Web Design ${cityName} for businesses that need more qualified clients`,
    heroSubtitle: isEs
      ? `Diseñamos sitios enfocados en conversión para ${cityData.audience.toLowerCase()}, priorizando propuestas, cotizaciones y WhatsApp.`
      : `We build conversion-focused websites for ${cityData.audience.toLowerCase()}, with clear paths to proposals, quotes, and WhatsApp inquiries.`,
    heroRatingText: isEs ? "4.9 promedio en proyectos activos" : "4.9 average rating from active projects",
    heroPrimaryCta: "Request Proposal",
    heroSecondaryCta: "Request Free Quote",
    problemsTitle: isEs ? `Problemas que frenan tus resultados en ${cityName}` : `What blocks lead generation performance in ${cityName}`,
    problemsSubtitle: isEs
      ? `Corregimos los puntos críticos que impiden convertir tráfico en clientes.`
      : `We fix the friction points that keep your website from converting high-intent traffic.`,
    problems: cityData.problems,
    benefitsTitle: isEs ? `Qué incluye nuestro servicio de ${cityData.angle}` : `What you get with our ${cityData.angle} service`,
    benefitsSubtitle: isEs
      ? `Un sistema completo para atraer leads calificados y mejorar el retorno de tu inversión web.`
      : `A complete system to improve qualified lead volume and maximize website ROI.`,
    benefits: cityData.benefits,
    processTitle: isEs ? "Proceso de ejecución orientado a resultados" : "Execution process focused on measurable outcomes",
    processSubtitle: isEs
      ? "Sin pasos innecesarios: estrategia, implementación y optimización continua."
      : "No wasted steps: strategy, implementation, and ongoing optimization.",
    process: isEs ? baseProcessEs : baseProcessEn,
    pricingTitle: isEs ? "Planes orientados a conversiones y ROI" : "Pricing built around lead generation and ROI",
    pricingSubtitle: isEs
      ? "Mantenemos el mismo sistema de diseño y ajustamos el alcance según objetivos comerciales."
      : "Same design system, adjusted scope based on your sales goals and market complexity.",
    plans: isEs ? agencyPlansEs : agencyPlansEn,
    proofTitle: isEs ? "Resultados que importan para tu negocio" : "Performance signals that matter to your business",
    proofSubtitle: isEs
      ? "Nos enfocamos en visibilidad, conversión y calidad del lead."
      : "We optimize for visibility, conversion quality, and sales-ready inquiries.",
    stats: isEs
      ? [
          { value: "2-4x", label: "aumento típico en leads calificados" },
          { value: "<3s", label: "tiempo objetivo de carga móvil" },
          { value: "4.9/5", label: "satisfacción promedio de clientes" },
        ]
      : [
          { value: "2-4x", label: "typical lift in qualified leads" },
          { value: "<3s", label: "target mobile load time" },
          { value: "4.9/5", label: "average client satisfaction" },
        ],
    testimonials: isEs ? testimonialsEs : testimonialsEn,
    faqTitle: isEs ? "FAQ" : "FAQ",
    faqSubtitle: isEs
      ? `Preguntas frecuentes sobre ${cityData.angle} para ${cityName}.`
      : `Common questions about ${cityData.angle} services in ${cityName}.`,
    faqs: cityData.faqs,
    relatedTitle: isEs ? "También trabajamos otras ciudades" : "Also serving other locations",
    relatedSubtitle: isEs
      ? "Explora nuestras páginas locales para comparar enfoque por mercado."
      : "Explore our city pages to compare local strategy and messaging by market.",
    relatedCta: isEs ? "Ver ubicaciones" : "View locations",
    relatedCards: relatedCards(locale, city),
    leadTitle: isEs
      ? `Cuéntanos sobre tu negocio en ${cityName}`
      : `Tell us about your business in ${cityName}`,
    leadSubtitle: isEs
      ? "Te enviaremos una propuesta enfocada en generar más clientes y mejorar tu retorno."
      : "We will send a proposal focused on getting more clients and stronger ROI.",
    leadBullets: isEs
      ? [
          "Plan de conversión por ciudad",
          "Estructura SEO lista para crecer",
          "Mayor visibilidad de WhatsApp y formularios",
          "Propuesta clara con próximos pasos",
        ]
      : [
          "City-specific conversion strategy",
          "SEO-ready structure for long-term growth",
          "High-visibility WhatsApp and form touchpoints",
          "Clear proposal with practical next steps",
        ],
    footerDescription: isEs
      ? `Web design en ${cityName} orientado a conversión, leads calificados y crecimiento sostenible.`
      : `Web design in ${cityName} focused on qualified leads, conversion growth, and long-term performance.`,
  };
}

export const locationPagesByLocale: Record<SiteLocale, Record<ServiceCity, LocationPageContent>> = {
  en: {
    "punta-cana": buildLocationContent("en", "punta-cana"),
    miami: buildLocationContent("en", "miami"),
    orlando: buildLocationContent("en", "orlando"),
  },
  es: {
    "punta-cana": buildLocationContent("es", "punta-cana"),
    miami: buildLocationContent("es", "miami"),
    orlando: buildLocationContent("es", "orlando"),
  },
};

export const sharedHeroImage = heroImage;

export function footerServiceLinks(locale: SiteLocale) {
  const labels = {
    en: [
      { label: "Web Design Punta Cana", href: "/en/web-design-punta-cana" },
      { label: "Web Design Miami", href: "/en/web-design-miami" },
      { label: "Web Design Orlando", href: "/en/web-design-orlando" },
    ],
    es: [
      { label: "Diseño Web Punta Cana", href: "/diseno-web-punta-cana" },
      { label: "Diseño Web Miami", href: "/diseno-web-miami" },
      { label: "Diseño Web Orlando", href: "/diseno-web-orlando" },
    ],
  };

  return labels[locale];
}

export function footerExtraLinks(locale: SiteLocale) {
  return locale === "es"
    ? [
        { label: "Inicio Español", href: "/" },
        { label: "Precios", href: "/precios" },
        { label: "Contacto", href: "/contacto" },
        { label: "Demo Design System", href: "/demo" },
      ]
    : [
        { label: "English Home", href: "/en" },
        { label: "Pricing", href: "/en/pricing" },
        { label: "Contact", href: "/en/contact" },
        { label: "Demo Design System", href: "/demo" },
      ];
}
