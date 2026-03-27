export type IndustrySlug =
  | "real-estate"
  | "restaurantes"
  | "hoteles-villas"
  | "tours-excursiones"
  | "spas-wellness"
  | "clinicas-salud"
  | "abogados-servicios-premium"
  | "constructoras-desarrollos"
  | "negocios-turisticos";

type KV = { value: string; label: string };

type Item = { title: string; description: string };

type IncludeItem = { icon: "real_estate" | "villas" | "tourism" | "setup" | "performance" | "insights"; title: string; description: string };

type ProcessItem = { title: string; description: string; image: string; imageAlt: string };

export type IndustryPageContent = {
  slug: IndustrySlug;
  metaTitle: string;
  metaDescription: string;
  hero: {
    ratingText: string;
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    whatsappMessage: string;
    image: string;
  };
  trust: {
    logosTitle: string;
    logos: string[];
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    stats: KV[];
  };
  includes: {
    titleLineOne: string;
    titleLineTwo: string;
    subtitle: string;
    items: IncludeItem[];
  };
  who: {
    subtitle: string;
    items: Item[];
  };
  problem: {
    title: string;
    subtitle: string;
    items: Item[];
  };
  pricing: {
    title: string;
    subtitle: string;
    trustText: string;
    logos: string[];
  };
  process: {
    titleLineOne: string;
    titleLineTwo: string;
    subtitleLineOne: string;
    subtitleLineTwo: string;
    items: ProcessItem[];
  };
  banner: {
    quote: string;
    author: string;
    role: string;
    whatsappMessage: string;
    bgImage: string;
  };
  faq: {
    subtitle: string;
    items: { question: string; answer: string }[];
    askWhatsappMessage: string;
    followupWhatsappMessage: string;
  };
  form: {
    title: string;
    subtitle: string;
    bullets: string[];
    whatsappMessage: string;
    defaultService: string;
  };
};

export const defaultPricingPlans = [
  {
    name: "Essential",
    price: "$49.99 / mes",
    description: "$350 registro único. Ideal para emprendedores, marcas personales y negocios pequeños.",
    features: [
      "Diseño web moderno, profesional y responsive",
      "Dominio .com y hosting básico incluido",
      "Diseño 100% personalizado a tu marca",
      "Formulario de contacto básico",
      "Integración de redes sociales",
      "Botón de WhatsApp único",
      "Certificado SSL de seguridad",
      "Blog autogestionable",
      "2 cuentas de correo profesional",
      "Soporte técnico vía Helpdesk",
      "10 GB de espacio web",
    ],
    ctaLabel: "Empezar con Essential",
    ctaHref: "#lead-form",
  },
  {
    name: "Business",
    price: "$74.99 / mes",
    description: "$450 registro único. Perfecto para negocios que quieren un sitio completo que ayude a vender más.",
    features: [
      "Todo lo del plan Essential, más:",
      "Catálogo de productos o servicios dinámico",
      "Formularios inteligentes con validación y respuestas automáticas",
      "Múltiples botones WhatsApp o chat flotante en vivo",
      "Hasta 10 cuentas de correo profesional",
      "Hosting más rápido, servidores optimizados",
      "25 GB de espacio web",
    ],
    ctaLabel: "Empezar con Business",
    ctaHref: "#lead-form",
    highlight: true,
    badge: "Más popular",
  },
  {
    name: "Ecommerce",
    price: "$145 / mes",
    description: "$1,200 registro único. Para negocios que quieren vender online y operar a máxima velocidad.",
    features: [
      "Todo lo del plan Business, más:",
      "Tienda online completa",
      "Pasarela de pago: Stripe, Cardnet, Azul, Visanet, PayPal",
      "Panel de autoadministración",
      "Hosting ultrarrápido optimizado para SEO",
      "Más de 10 cuentas de correo (costo adicional por cuenta)",
      "Más de 25 GB de espacio (costo adicional por GB)",
    ],
    ctaLabel: "Empezar con Ecommerce",
    ctaHref: "#lead-form",
  },
] as const;

const techImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
];

const processBase = [
  {
    title: "Consulta gratis",
    description: "Conversamos sobre tu negocio, objetivos y oportunidades reales de captación.",
    image: techImages[0],
    imageAlt: "Consulta estratégica",
  },
  {
    title: "Propuesta",
    description: "Recibes plan, precio y cronograma claros antes de iniciar.",
    image: techImages[1],
    imageAlt: "Propuesta comercial",
  },
  {
    title: "Diseño",
    description: "Diseñamos una experiencia enfocada en confianza y conversión.",
    image: techImages[2],
    imageAlt: "Diseño UI",
  },
  {
    title: "Revisiones",
    description: "Ajustamos con feedback para dejar una versión lista para convertir.",
    image: techImages[3],
    imageAlt: "Revisiones",
  },
  {
    title: "Lanzamiento",
    description: "Publicamos con hosting, dominio y soporte desde día uno.",
    image: techImages[4],
    imageAlt: "Lanzamiento",
  },
];

export const industryPageContent: Record<IndustrySlug, IndustryPageContent> = {
  "real-estate": {
    slug: "real-estate",
    metaTitle: "Diseño web para Real Estate - Punta Cana & RD",
    metaDescription:
      "Diseño web para inmobiliarias en Punta Cana, Cap Cana, Bávaro y La Romana. Captura leads internacionales con catálogo dinámico, SEO y WhatsApp.",
    hero: {
      ratingText: "40+ Inmobiliarias atendidas · 3x Más leads vs web genérica · Bilingüe ES/EN",
      titleLineOne: "Páginas web para Inmobiliarias",
      titleLineTwo: "& Real Estate en Punta Cana",
      subtitle:
        "Webs profesionales para agencias inmobiliarias, agentes independientes y desarrolladores en Cap Cana, Bávaro, La Romana y toda la Costa Este. Catálogo de propiedades, búsqueda avanzada y formularios que capturan compradores internacionales.",
      whatsappMessage: "Hola, quiero una propuesta para mi inmobiliaria en Punta Cana.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1500&q=80",
    },
    trust: {
      logosTitle: "Confiado por equipos inmobiliarios",
      logos: ["Real Estate Teams", "Developers", "Vacation Rentals", "Investment Advisors", "Brokers", "Builders"],
      titleLineOne: "Resultados reales para real estate",
      titleLineTwo: "en Punta Cana y RD",
      subtitle: "Sitios diseñados para posicionar propiedades, capturar compradores internacionales y acelerar conversaciones por WhatsApp.",
      stats: [
        { value: "40+", label: "Inmobiliarias atendidas" },
        { value: "3x", label: "Más leads vs web genérica" },
        { value: "ES/EN", label: "Bilingüe para captar extranjeros" },
      ],
    },
    includes: {
      titleLineOne: "Todo lo que tu inmobiliaria",
      titleLineTwo: "necesita para vender online",
      subtitle: "Estructura comercial + SEO + experiencia premium para compradores de alto valor.",
      items: [
        { icon: "real_estate", title: "Catálogo de propiedades dinámico", description: "Listado con filtros por precio, tipo, zona, habitaciones y m² con actualización simple." },
        { icon: "villas", title: "Fichas de propiedad completas", description: "Galería HD, video tour, mapa y formulario directo al agente en cada propiedad." },
        { icon: "tourism", title: "Bilingüe español/inglés", description: "Capta compradores de USA, Europa y Canadá con páginas orientadas a intención." },
        { icon: "setup", title: "Solicitud de visita", description: "CTA para agendar visitas o pedir información por formulario y WhatsApp." },
        { icon: "performance", title: "SEO local + internacional", description: "Optimización para búsquedas de Punta Cana, Cap Cana y términos en inglés." },
        { icon: "insights", title: "WhatsApp Business", description: "Botón en puntos clave para respuestas rápidas y mayor tasa de contacto." },
      ],
    },
    who: {
      subtitle: "Diseñado para empresas y profesionales que venden propiedades y necesitan presencia digital seria.",
      items: [
        { title: "Agencias inmobiliarias", description: "Equipos en Punta Cana, Cap Cana y Bávaro con necesidad de captar más leads calificados." },
        { title: "Agentes independientes", description: "Profesionales que quieren diferenciarse y posicionar su marca en un mercado competitivo." },
        { title: "Desarrolladores", description: "Proyectos residenciales y turísticos que necesitan visibilidad y embudo comercial claro." },
        { title: "Constructoras", description: "Empresas que venden directo al cliente final y necesitan estructura digital de confianza." },
        { title: "Agencias internacionales", description: "Equipos que atienden compradores de USA, Europa y Canadá con experiencia bilingüe." },
        { title: "Rentals y property managers", description: "Administración de propiedades vacacionales con foco en reservas y consultas constantes." },
        { title: "Asesores de inversión", description: "Consultores inmobiliarios del Caribe que requieren autoridad digital y generación de oportunidades." },
      ],
    },
    problem: {
      title: "El comprador busca en Google\n¿apareces tú hoy?",
      subtitle:
        "El 92% de los compradores de propiedades empiezan su búsqueda en Google. Si no apareces en búsquedas clave, ese lead se lo lleva tu competencia.",
      items: [
        { title: "Compradores internacionales", description: "Versión en inglés para captar mercado americano y europeo." },
        { title: "Leads calificados", description: "Formularios con filtros de presupuesto y zona para prospectos más serios." },
        { title: "Presencia 24/7", description: "Tu catálogo siempre disponible desde cualquier dispositivo." },
      ],
    },
    pricing: {
      title: "¿Cuánto cuesta\nuna web inmobiliaria?",
      subtitle: "Precios fijos desde el primer mensaje. Dominio + hosting + SSL gratis en todos los planes.",
      trustText: "Precios en USD. Aceptamos tarjeta, transferencia RD$ y PayPal.",
      logos: ["Punta Cana", "Cap Cana", "Bávaro", "La Romana"],
    },
    process: {
      titleLineOne: "Del quiero una web",
      titleLineTwo: "al lanzamiento en 30 días",
      subtitleLineOne: "Sin reuniones interminables, sin tecnicismos y sin sorpresas.",
      subtitleLineTwo: "Tú nos dices qué quieres y nosotros lo construimos. Así de simple.",
      items: processBase,
    },
    banner: {
      quote: "¿Tu inmobiliaria no aparece cuando buscan propiedades en Punta Cana?",
      author: "Escríbeme hoy. Te muestro cómo tu competencia aparece arriba y cómo lo cambiamos.",
      role: "o llena el formulario de contacto",
      whatsappMessage: "Hola, quiero mejorar mi posicionamiento real estate en Punta Cana.",
      bgImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1500&q=80",
    },
    faq: {
      subtitle: "Resolvemos las dudas más comunes. Si tu pregunta no está aquí, escríbenos por WhatsApp y respondemos el mismo día.",
      askWhatsappMessage: "Hola, tengo una pregunta sobre la web para inmobiliarias.",
      followupWhatsappMessage: "Hola, tengo una pregunta sobre mi caso de real estate.",
      items: [
        { question: "¿Puedo actualizar las propiedades yo mismo?", answer: "Sí. Entregamos panel simple para gestionar propiedades sin depender de programadores." },
        { question: "¿La web puede ser bilingüe español/inglés?", answer: "Sí. Podemos lanzar versión ES/EN para captar compradores internacionales." },
        { question: "¿Cuánto tiempo tarda en estar lista?", answer: "Normalmente entre 2 y 4 semanas según alcance y volumen de contenido." },
        { question: "¿Incluye integración con WhatsApp?", answer: "Sí, en home, páginas de propiedad y formularios estratégicos." },
        { question: "¿La web va a aparecer en Google?", answer: "Trabajamos base SEO técnica y estructura de contenido para posicionamiento." },
        { question: "¿Puedo conectar Instagram, Facebook o TikTok?", answer: "Sí. Integramos redes sociales y CTAs para apoyar captación multicanal." },
      ],
    },
    form: {
      title: "Cuéntame tu negocio\ny te respondo hoy mismo",
      subtitle: "Consulta gratis, sin costo ni compromiso. Operamos en Punta Cana, RD y conocemos tu mercado.",
      bullets: [
        "Consulta gratis, sin costo ni compromiso",
        "Precio claro en 24 horas",
        "Hablas con quien hace tu web, no con un intermediario",
        "Operamos en Punta Cana, RD y conocemos tu mercado",
      ],
      whatsappMessage: "Hola, quiero una propuesta para mi negocio inmobiliario.",
      defaultService: "Real Estate / Inmobiliaria",
    },
  },
  restaurantes: {
    slug: "restaurantes",
    metaTitle: "Diseño web para Restaurantes y Bares - Punta Cana & RD",
    metaDescription: "Web para restaurantes y bares con menú digital, reservas, WhatsApp y SEO local para atraer clientes y turistas.",
    hero: {
      ratingText: "60+ negocios gastronómicos · más reservas directas · enfoque local + turistas",
      titleLineOne: "Páginas web para",
      titleLineTwo: "Restaurantes & Bares",
      subtitle: "Menú digital, reservas, WhatsApp y presencia en Google para que tu restaurante deje de depender solo de Instagram.",
      whatsappMessage: "Hola, quiero una propuesta para mi restaurante.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1500&q=80",
    },
    trust: {
      logosTitle: "Confiado por negocios gastronómicos",
      logos: ["Restaurantes", "Bares", "Cafés", "Food Courts", "Rooftops", "Bistrós"],
      titleLineOne: "Más reservas y pedidos",
      titleLineTwo: "con una web que convierte",
      subtitle: "Webs enfocadas en reservas, pedidos y contacto inmediato por WhatsApp.",
      stats: [
        { value: "2.8x", label: "Más reservas directas" },
        { value: "24/7", label: "Menú y contacto siempre activos" },
        { value: "Local + turistas", label: "Captación desde Google" },
      ],
    },
    includes: {
      titleLineOne: "Todo lo que un restaurante",
      titleLineTwo: "necesita para vender más",
      subtitle: "Menú, reservas y visibilidad para convertir búsquedas en mesas ocupadas.",
      items: [
        { icon: "setup", title: "Menú digital actualizado", description: "Publica platos, precios y especiales sin depender de terceros." },
        { icon: "tourism", title: "Reservas online", description: "Formulario y CTA para confirmar reservas en segundos." },
        { icon: "insights", title: "WhatsApp directo", description: "Atiende consultas rápidas y confirma pedidos o reservas al instante." },
        { icon: "performance", title: "SEO local", description: "Optimización para búsquedas como “restaurante en Punta Cana”." },
        { icon: "villas", title: "Galería de comida", description: "Fotos premium para elevar percepción de marca y confianza." },
        { icon: "real_estate", title: "Mapa y ubicación", description: "Integración de maps para facilitar visitas y aumentar tráfico físico." },
      ],
    },
    who: {
      subtitle: "Ideal para marcas gastronómicas que quieren atraer más clientes recurrentes y turistas.",
      items: [
        { title: "Restaurantes locales", description: "Negocios que necesitan más reservas y visibilidad en Google." },
        { title: "Bares y rooftops", description: "Marcas que quieren fortalecer imagen y aumentar ocupación nocturna." },
        { title: "Cafeterías", description: "Locales que buscan pedidos y tráfico constante." },
        { title: "Cadenas pequeñas", description: "Negocios con varias sucursales y necesidad de estructura digital." },
        { title: "Conceptos gourmet", description: "Marcas premium que necesitan una web a la altura de su propuesta." },
        { title: "Delivery-first", description: "Operaciones que dependen de pedidos rápidos y contacto directo." },
        { title: "Restaurantes turísticos", description: "Negocios que atienden públicos internacionales." },
      ],
    },
    problem: {
      title: "Si no te encuentran en Google,\nla mesa se queda vacía",
      subtitle: "Muchos restaurantes dependen solo de Instagram. Eso limita reservas directas, pedidos y posicionamiento frente a competencia local.",
      items: [
        { title: "Reservas sin fricción", description: "Formularios y botones claros para convertir visitas en reservas reales." },
        { title: "Más pedidos directos", description: "WhatsApp y CTAs para reducir dependencia de plataformas externas." },
        { title: "Visibilidad local", description: "Estructura SEO para atraer búsquedas con intención de visita." },
      ],
    },
    pricing: {
      title: "¿Cuánto cuesta\nuna web para restaurantes?",
      subtitle: "Precios claros desde el primer mensaje. Sin sorpresas.",
      trustText: "Precios en USD. Aceptamos tarjeta, transferencia RD$ y PayPal.",
      logos: ["Punta Cana", "Bávaro", "Santo Domingo", "Santiago"],
    },
    process: {
      titleLineOne: "Del menú en Instagram",
      titleLineTwo: "a una web que reserva mesas",
      subtitleLineOne: "Proceso simple y rápido para lanzar con foco comercial.",
      subtitleLineTwo: "Sin fricción, con guía en cada paso.",
      items: processBase,
    },
    banner: {
      quote: "¿Tu restaurante depende solo de redes para vender?",
      author: "Te ayudamos a captar reservas y pedidos directos con una web pensada para conversión.",
      role: "o llena el formulario de contacto",
      whatsappMessage: "Hola, quiero una propuesta para mi restaurante o bar.",
      bgImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1500&q=80",
    },
    faq: {
      subtitle: "Todo lo que necesitas saber para lanzar una web que realmente genere reservas y ventas.",
      askWhatsappMessage: "Hola, tengo una pregunta sobre la web para restaurantes.",
      followupWhatsappMessage: "Hola, quiero validar mi caso para restaurante.",
      items: [
        { question: "¿Puedo actualizar el menú yo mismo?", answer: "Sí, dejamos el panel listo para cambios rápidos de menú y precios." },
        { question: "¿Incluye reservas por WhatsApp?", answer: "Sí, diseñamos el flujo para reservas y contacto inmediato." },
        { question: "¿La web aparece en Google Maps?", answer: "Conectamos ubicación y SEO local para mejorar visibilidad." },
        { question: "¿Funciona bien en celular?", answer: "Sí, el enfoque es mobile-first para conversión rápida." },
        { question: "¿Cuánto tarda el proyecto?", answer: "Entre 2 y 4 semanas según alcance y contenido." },
        { question: "¿Puedo integrar delivery?", answer: "Sí, podemos enlazar pedidos y canales de delivery existentes." },
      ],
    },
    form: {
      title: "Cuéntame de tu restaurante\ny te respondo hoy",
      subtitle: "Propuesta clara en 24h para aumentar reservas, pedidos y presencia local.",
      bullets: [
        "Consulta gratis y sin compromiso",
        "Enfoque comercial, no solo visual",
        "Respuesta en menos de 24 horas",
        "Soporte directo por WhatsApp",
      ],
      whatsappMessage: "Hola, quiero una propuesta para mi restaurante.",
      defaultService: "Restaurantes & Bares",
    },
  },
  "hoteles-villas": {
    slug: "hoteles-villas",
    metaTitle: "Diseño web para Hoteles y Villas - Punta Cana & RD",
    metaDescription: "Web para hoteles y villas con experiencia visual premium, reservas, versión en inglés y captación directa de huéspedes.",
    hero: {
      ratingText: "Marcas hospitality premium · más solicitudes directas · menos dependencia de OTAs",
      titleLineOne: "Páginas web para",
      titleLineTwo: "Hoteles & Villas",
      subtitle: "Sitios visuales y rápidos para captar huéspedes directos, mostrar habitaciones y aumentar solicitudes sin depender de Airbnb o Booking.",
      whatsappMessage: "Hola, quiero una propuesta para mi hotel o villa.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1500&q=80",
    },
    trust: {
      logosTitle: "Confiado por marcas de hospitalidad",
      logos: ["Boutique Hotels", "Villas", "Vacation Rentals", "Resorts", "Property Managers", "Luxury Stays"],
      titleLineOne: "Más reservas directas",
      titleLineTwo: "con marca propia",
      subtitle: "Webs diseñadas para convertir interés en solicitudes de reserva de alto valor.",
      stats: [
        { value: "2.5x", label: "Más solicitudes directas" },
        { value: "ES/EN", label: "Captación internacional" },
        { value: "Menos OTAs", label: "Mayor control de marca" },
      ],
    },
    includes: {
      titleLineOne: "Todo lo que hoteles y villas",
      titleLineTwo: "necesitan para convertir visitas",
      subtitle: "Experiencia visual, confianza y flujo de reserva claro.",
      items: [
        { icon: "villas", title: "Catálogo de habitaciones/villas", description: "Presentación premium por tipo, capacidad, amenidades y temporada." },
        { icon: "tourism", title: "Galería visual de alto impacto", description: "Fotos y video orientados a decisión de compra." },
        { icon: "setup", title: "Solicitud de reserva", description: "Formularios listos para captar fechas, huéspedes y preferencias." },
        { icon: "insights", title: "WhatsApp para reservas", description: "Respuesta rápida para acelerar cierres." },
        { icon: "real_estate", title: "Multi-idioma", description: "Versión en inglés para turistas y mercado internacional." },
        { icon: "performance", title: "SEO para hospitality", description: "Optimización para búsquedas de estancia en Punta Cana y RD." },
      ],
    },
    who: {
      subtitle: "Para operaciones hospitality que quieren más reservas directas y mejor posicionamiento de marca.",
      items: [
        { title: "Hoteles boutique", description: "Marcas que necesitan una web premium alineada a su experiencia." },
        { title: "Villas de alquiler", description: "Propiedades que buscan solicitudes directas y menos comisiones." },
        { title: "Property managers", description: "Equipos que administran múltiples unidades." },
        { title: "Resorts pequeños", description: "Negocios que necesitan presencia digital profesional." },
        { title: "Alojamientos de lujo", description: "Marcas orientadas a público internacional y ticket alto." },
        { title: "Operadores turísticos", description: "Modelos que combinan alojamiento con experiencias." },
        { title: "Host de alto nivel", description: "Propietarios que quieren fortalecer su marca propia." },
      ],
    },
    problem: {
      title: "Sin marca propia,\nlas reservas se quedan en plataformas",
      subtitle: "Depender de OTAs reduce control comercial, margen y fidelización. Una web propia convierte tráfico en solicitudes directas.",
      items: [
        { title: "Reserva directa", description: "Flujo claro para captar huéspedes sin intermediarios." },
        { title: "Confianza visual", description: "Presentación premium que mejora percepción y conversión." },
        { title: "Audiencia internacional", description: "Contenido bilingüe para ampliar mercado." },
      ],
    },
    pricing: {
      title: "¿Cuánto cuesta\nuna web para hoteles y villas?",
      subtitle: "Planes claros para operaciones hospitality de diferentes tamaños.",
      trustText: "Precios en USD. Aceptamos tarjeta, transferencia RD$ y PayPal.",
      logos: ["Punta Cana", "Cap Cana", "Bávaro", "La Romana"],
    },
    process: {
      titleLineOne: "De depender de plataformas",
      titleLineTwo: "a captar reservas directas",
      subtitleLineOne: "Implementación guiada para hoteles y villas.",
      subtitleLineTwo: "Rápido, claro y orientado a resultados.",
      items: processBase,
    },
    banner: {
      quote: "¿Quieres más reservas directas para tu hotel o villa?",
      author: "Te mostramos cómo mejorar conversión y reducir dependencia de plataformas externas.",
      role: "o llena el formulario de contacto",
      whatsappMessage: "Hola, quiero una propuesta para mi hotel o villa.",
      bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1500&q=80",
    },
    faq: {
      subtitle: "Respuestas rápidas para tomar decisión con claridad.",
      askWhatsappMessage: "Hola, tengo una pregunta sobre la web para hoteles y villas.",
      followupWhatsappMessage: "Hola, quiero resolver una duda sobre mi hotel/villa.",
      items: [
        { question: "¿La web puede ser bilingüe?", answer: "Sí, recomendamos ES/EN para captar turistas internacionales." },
        { question: "¿Puedo mostrar disponibilidad?", answer: "Sí, podemos estructurar calendario o solicitudes por fecha." },
        { question: "¿Incluye WhatsApp?", answer: "Sí, con accesos estratégicos para solicitudes rápidas." },
        { question: "¿Puedo usar mi dominio actual?", answer: "Sí, migramos y configuramos dominio/hosting." },
        { question: "¿Cuánto tarda el proyecto?", answer: "Entre 2 y 4 semanas según alcance." },
        { question: "¿Incluye SEO?", answer: "Sí, base SEO técnica y estructura para búsquedas de intención." },
      ],
    },
    form: {
      title: "Cuéntame de tu hotel o villa\ny te respondemos hoy",
      subtitle: "Propuesta clara para atraer más reservas directas y elevar tu marca.",
      bullets: [
        "Consulta gratuita",
        "Plan y precio claros",
        "Enfoque en reservas directas",
        "Contacto directo por WhatsApp",
      ],
      whatsappMessage: "Hola, quiero una propuesta para hotel/villa.",
      defaultService: "Hoteles & Villas",
    },
  },
  "tours-excursiones": {
    slug: "tours-excursiones",
    metaTitle: "Diseño web para Tours y Excursiones - Punta Cana & RD",
    metaDescription: "Web para tours y excursiones con paquetes, itinerarios, reservas, testimonios y WhatsApp para captar más leads directos.",
    hero: {
      ratingText: "Operadores turísticos activos · más reservas directas · menos dependencia de agencias",
      titleLineOne: "Páginas web para",
      titleLineTwo: "Tours & Excursiones",
      subtitle: "Catálogo de paquetes, itinerarios y reservas con un flujo pensado para convertir interesados en clientes reales.",
      whatsappMessage: "Hola, quiero una propuesta para tours y excursiones.",
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1500&q=80",
    },
    trust: {
      logosTitle: "Confiado por operadores turísticos",
      logos: ["Adventure Tours", "Boat Tours", "Excursions", "Local Guides", "Travel Operators", "Experiences"],
      titleLineOne: "Más leads directos",
      titleLineTwo: "para experiencias turísticas",
      subtitle: "Una web sólida reduce dependencia de intermediarios y mejora margen por reserva.",
      stats: [
        { value: "3x", label: "Más consultas calificadas" },
        { value: "24/7", label: "Ventas y consultas activas" },
        { value: "Global", label: "Captación de turistas" },
      ],
    },
    includes: {
      titleLineOne: "Todo lo que tu operación",
      titleLineTwo: "de tours necesita online",
      subtitle: "Presentación clara de paquetes, confianza y cierres por WhatsApp.",
      items: [
        { icon: "tourism", title: "Catálogo de paquetes", description: "Muestra tours por categoría, duración, precio y disponibilidad." },
        { icon: "setup", title: "Itinerarios claros", description: "Detalle por actividad para aumentar confianza antes de reservar." },
        { icon: "insights", title: "Reservas y WhatsApp", description: "Contacta y confirma reservas más rápido." },
        { icon: "villas", title: "Galería de experiencias", description: "Fotos y videos reales para mejorar conversión." },
        { icon: "performance", title: "SEO turístico", description: "Optimización para búsquedas locales e internacionales." },
        { icon: "real_estate", title: "Testimonios", description: "Bloques de prueba social para reforzar credibilidad." },
      ],
    },
    who: {
      subtitle: "Para operadores que quieren más ventas directas y mejor control de su marca turística.",
      items: [
        { title: "Operadores de excursiones", description: "Empresas con paquetes diarios y necesidad de flujo constante." },
        { title: "Tour providers premium", description: "Servicios de ticket alto que requieren presentación profesional." },
        { title: "Guías locales", description: "Profesionales que necesitan presencia propia y reputación." },
        { title: "Empresas de aventura", description: "Operaciones que dependen de reservas continuas." },
        { title: "Tours marítimos", description: "Negocios que venden experiencias de barco/catamarán." },
        { title: "Operadores multi-idioma", description: "Equipos que atienden turistas internacionales." },
        { title: "Agencias receptivas", description: "Empresas que venden actividades en destino." },
      ],
    },
    problem: {
      title: "Si no vendes directo,\npierdes margen y control",
      subtitle: "Muchos operadores dependen de agencias externas. Una web optimizada permite captar más leads directos y acelerar cierres.",
      items: [
        { title: "Leads de mejor calidad", description: "Formularios claros para recibir intención real." },
        { title: "Más cierres por WhatsApp", description: "Canal rápido para convertir consultas en reservas." },
        { title: "Menos intermediarios", description: "Más control sobre precio, marca y experiencia." },
      ],
    },
    pricing: {
      title: "¿Cuánto cuesta\nuna web para tours?",
      subtitle: "Precios claros para operadores pequeños, medianos y escalables.",
      trustText: "Precios en USD. Aceptamos tarjeta, transferencia RD$ y PayPal.",
      logos: ["Punta Cana", "Bayahibe", "Samaná", "Santo Domingo"],
    },
    process: {
      titleLineOne: "De vender por terceros",
      titleLineTwo: "a vender directo en tu web",
      subtitleLineOne: "Proceso práctico para lanzar sin fricción.",
      subtitleLineTwo: "Con enfoque en reservas y conversiones.",
      items: processBase,
    },
    banner: {
      quote: "¿Quieres más reservas directas para tus tours?",
      author: "Creamos una web enfocada en paquetes, confianza y cierre rápido por WhatsApp.",
      role: "o llena el formulario de contacto",
      whatsappMessage: "Hola, quiero una propuesta para mi negocio de tours.",
      bgImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1500&q=80",
    },
    faq: {
      subtitle: "Preguntas frecuentes para operadores turísticos.",
      askWhatsappMessage: "Hola, tengo una pregunta sobre la web para tours.",
      followupWhatsappMessage: "Hola, quiero resolver una duda para mi negocio de excursiones.",
      items: [
        { question: "¿Puedo mostrar varios paquetes?", answer: "Sí, organizamos por categorías, duración y tipo de tour." },
        { question: "¿La web permite reservas?", answer: "Sí, por formulario y WhatsApp según tu flujo." },
        { question: "¿Incluye testimonios?", answer: "Sí, para reforzar confianza y decisión de compra." },
        { question: "¿Funciona para turistas internacionales?", answer: "Sí, podemos estructurar contenido bilingüe." },
        { question: "¿Cuánto tarda?", answer: "Entre 2 y 4 semanas según alcance." },
        { question: "¿Incluye SEO?", answer: "Sí, base técnica y estructura para búsquedas de tours." },
      ],
    },
    form: {
      title: "Cuéntame tu operación de tours\ny te respondemos hoy",
      subtitle: "Propuesta clara para captar más reservas directas y reducir dependencia externa.",
      bullets: ["Consulta gratuita", "Respuesta en 24h", "Estrategia orientada a reservas", "Contacto directo por WhatsApp"],
      whatsappMessage: "Hola, quiero una propuesta para tours y excursiones.",
      defaultService: "Tours & Excursiones",
    },
  },
  "spas-wellness": {
    slug: "spas-wellness",
    metaTitle: "Diseño web para Spas y Wellness - Punta Cana & RD",
    metaDescription: "Web para spas y centros wellness con branding premium, citas, WhatsApp y enfoque en captación de clientes.",
    hero: {
      ratingText: "Marcas wellness premium · más citas directas · mejor percepción de marca",
      titleLineOne: "Páginas web para",
      titleLineTwo: "Spas & Wellness",
      subtitle: "Una web elegante y estratégica para mostrar servicios, captar citas y posicionar tu marca en un mercado cada vez más competitivo.",
      whatsappMessage: "Hola, quiero una propuesta para mi spa o wellness.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1500&q=80",
    },
    trust: {
      logosTitle: "Confiado por marcas wellness",
      logos: ["Spas", "Wellness Centers", "Beauty Studios", "Massage Clinics", "Holistic Brands", "Premium Care"],
      titleLineOne: "Más citas y confianza",
      titleLineTwo: "con una presencia premium",
      subtitle: "Diseño y estructura orientados a convertir visitas en citas reales.",
      stats: [
        { value: "2.6x", label: "Más solicitudes de cita" },
        { value: "Premium", label: "Percepción de marca" },
        { value: "Mobile-first", label: "Conversión desde celular" },
      ],
    },
    includes: {
      titleLineOne: "Todo lo que tu spa",
      titleLineTwo: "necesita para captar citas",
      subtitle: "Servicios, confianza visual y contacto rápido en un solo sistema.",
      items: [
        { icon: "villas", title: "Catálogo de servicios", description: "Presenta tratamientos con beneficios y precios claros." },
        { icon: "setup", title: "Solicitud de citas", description: "Formulario optimizado para captar intención real." },
        { icon: "insights", title: "WhatsApp integrado", description: "Canal directo para seguimiento rápido." },
        { icon: "real_estate", title: "Branding premium", description: "Diseño visual alineado a una propuesta de alto valor." },
        { icon: "performance", title: "SEO local", description: "Aparece en búsquedas de servicios wellness cercanos." },
        { icon: "tourism", title: "Contenido para turistas", description: "Capta clientes temporales en zonas turísticas." },
      ],
    },
    who: {
      subtitle: "Para marcas de bienestar que quieren diferenciarse y vender más citas.",
      items: [
        { title: "Spas boutique", description: "Marcas que buscan elevar su presencia digital." },
        { title: "Centros wellness", description: "Negocios con múltiples servicios y necesidad de estructura clara." },
        { title: "Estudios de belleza", description: "Operaciones que requieren flujo de citas constante." },
        { title: "Servicios holísticos", description: "Marcas con enfoque en experiencia y confianza." },
        { title: "Franquicias pequeñas", description: "Equipos que necesitan consistencia de marca." },
        { title: "Negocios premium", description: "Propuestas con ticket alto y audiencia exigente." },
        { title: "Wellness turístico", description: "Centros ubicados en zonas de alto flujo internacional." },
      ],
    },
    problem: {
      title: "Una imagen digital débil\nreduce tus citas",
      subtitle: "Si tu web no transmite confianza ni claridad, el cliente se va con otra marca. La primera impresión sí convierte.",
      items: [
        { title: "Más citas", description: "Flujos simples de contacto y reserva." },
        { title: "Marca diferenciada", description: "Diseño premium para destacar frente a la competencia." },
        { title: "Conversión móvil", description: "Optimización para captar desde celular." },
      ],
    },
    pricing: {
      title: "¿Cuánto cuesta\nuna web para spa/wellness?",
      subtitle: "Planes claros para negocios wellness en distintas etapas.",
      trustText: "Precios en USD. Aceptamos tarjeta, transferencia RD$ y PayPal.",
      logos: ["Punta Cana", "Santo Domingo", "Santiago", "La Romana"],
    },
    process: {
      titleLineOne: "De una web genérica",
      titleLineTwo: "a una marca que convierte",
      subtitleLineOne: "Proceso ágil para lanzar con enfoque comercial.",
      subtitleLineTwo: "Con soporte directo en cada etapa.",
      items: processBase,
    },
    banner: {
      quote: "¿Tu spa transmite el nivel de experiencia que vendes?",
      author: "Diseñamos una web premium para aumentar citas y elevar confianza desde el primer vistazo.",
      role: "o llena el formulario de contacto",
      whatsappMessage: "Hola, quiero una propuesta para mi spa/wellness.",
      bgImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1500&q=80",
    },
    faq: {
      subtitle: "Dudas comunes antes de lanzar tu web wellness.",
      askWhatsappMessage: "Hola, tengo una pregunta sobre la web para spa/wellness.",
      followupWhatsappMessage: "Hola, quiero resolver una duda sobre mi spa.",
      items: [
        { question: "¿Puedo mostrar todos mis servicios?", answer: "Sí, organizamos tratamientos por categorías y objetivos." },
        { question: "¿La web permite solicitar citas?", answer: "Sí, con formularios claros y WhatsApp." },
        { question: "¿Puedo actualizar contenido?", answer: "Sí, entregamos panel para cambios internos." },
        { question: "¿Incluye SEO local?", answer: "Sí, para búsquedas de servicios cercanos." },
        { question: "¿Cuánto tarda?", answer: "2 a 4 semanas según alcance." },
        { question: "¿Incluye soporte?", answer: "Sí, según plan contratado." },
      ],
    },
    form: {
      title: "Cuéntame de tu marca wellness\ny te respondemos hoy",
      subtitle: "Te enviamos propuesta clara para aumentar citas y posicionar tu marca.",
      bullets: ["Consulta sin costo", "Plan claro en 24h", "Enfoque en conversión", "WhatsApp directo"],
      whatsappMessage: "Hola, quiero una propuesta para mi spa/wellness.",
      defaultService: "Spas & Wellness",
    },
  },
  "clinicas-salud": {
    slug: "clinicas-salud",
    metaTitle: "Diseño web para Clínicas y Salud - Punta Cana & RD",
    metaDescription: "Web para clínicas y centros de salud con enfoque en confianza, citas, servicios médicos y captación de pacientes.",
    hero: {
      ratingText: "Clínicas y consultorios activos · más citas · mayor credibilidad digital",
      titleLineOne: "Páginas web para",
      titleLineTwo: "Clínicas & Salud",
      subtitle: "Diseñamos sitios para clínicas, centros médicos y consultorios que necesitan transmitir confianza y captar pacientes de forma constante.",
      whatsappMessage: "Hola, quiero una propuesta para mi clínica.",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1500&q=80",
    },
    trust: {
      logosTitle: "Confiado por equipos de salud",
      logos: ["Clínicas", "Consultorios", "Centros Dentales", "Medicina Estética", "Especialistas", "Salud Privada"],
      titleLineOne: "Más confianza,",
      titleLineTwo: "más citas confirmadas",
      subtitle: "Estructura digital pensada para credibilidad, claridad de servicios y captación de pacientes.",
      stats: [
        { value: "2.4x", label: "Más solicitudes de cita" },
        { value: "Alta confianza", label: "Mejor percepción médica" },
        { value: "Mobile", label: "Experiencia rápida en celular" },
      ],
    },
    includes: {
      titleLineOne: "Todo lo que tu clínica",
      titleLineTwo: "necesita para captar pacientes",
      subtitle: "Servicios, autoridad médica y contacto directo para convertir visitas en citas.",
      items: [
        { icon: "real_estate", title: "Servicios médicos claros", description: "Presentación por especialidad para facilitar decisión del paciente." },
        { icon: "setup", title: "Solicitud de citas", description: "Flujo simple de contacto para nuevos pacientes." },
        { icon: "insights", title: "WhatsApp para atención", description: "Canal inmediato para seguimiento de consultas." },
        { icon: "villas", title: "Equipo médico", description: "Perfiles para reforzar autoridad y confianza." },
        { icon: "performance", title: "SEO para salud", description: "Optimización para búsquedas locales de tratamientos y especialidades." },
        { icon: "tourism", title: "Testimonios", description: "Bloques de prueba social para reducir objeciones." },
      ],
    },
    who: {
      subtitle: "Para clínicas y profesionales de salud que buscan más pacientes y una imagen médica confiable.",
      items: [
        { title: "Clínicas generales", description: "Centros que necesitan captar nuevos pacientes regularmente." },
        { title: "Centros dentales", description: "Consultorios con enfoque en citas y tratamientos." },
        { title: "Medicina estética", description: "Marcas que requieren confianza y posicionamiento premium." },
        { title: "Especialistas", description: "Profesionales que buscan autoridad digital." },
        { title: "Centros diagnósticos", description: "Operaciones con múltiples servicios." },
        { title: "Consultorios privados", description: "Negocios que dependen de referencias y presencia online." },
        { title: "Health services", description: "Equipos que atienden también mercado internacional." },
      ],
    },
    problem: {
      title: "Sin credibilidad digital,\nse pierden pacientes",
      subtitle: "En salud, confianza y claridad son clave. Una web débil afecta percepción profesional y reduce conversiones.",
      items: [
        { title: "Más confianza", description: "Diseño y contenido que respaldan tu autoridad médica." },
        { title: "Más citas", description: "Estructura clara para convertir visitas en solicitudes." },
        { title: "Mejor experiencia móvil", description: "Pacientes contactan rápido desde celular." },
      ],
    },
    pricing: {
      title: "¿Cuánto cuesta\nuna web para clínicas?",
      subtitle: "Planes claros para clínicas y consultorios de todos los tamaños.",
      trustText: "Precios en USD. Aceptamos tarjeta, transferencia RD$ y PayPal.",
      logos: ["Punta Cana", "Santo Domingo", "Santiago", "La Romana"],
    },
    process: {
      titleLineOne: "De una presencia débil",
      titleLineTwo: "a una clínica que inspira confianza",
      subtitleLineOne: "Proceso directo con foco en captación de pacientes.",
      subtitleLineTwo: "Sin fricción ni complejidad técnica.",
      items: processBase,
    },
    banner: {
      quote: "¿Tu clínica transmite la confianza que un paciente espera?",
      author: "Creamos una web médica clara, profesional y enfocada en más citas.",
      role: "o llena el formulario de contacto",
      whatsappMessage: "Hola, quiero una propuesta para mi clínica.",
      bgImage: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1500&q=80",
    },
    faq: {
      subtitle: "Respuestas rápidas para clínicas y consultorios.",
      askWhatsappMessage: "Hola, tengo una pregunta sobre la web para clínicas.",
      followupWhatsappMessage: "Hola, quiero resolver una duda sobre mi clínica.",
      items: [
        { question: "¿Puedo mostrar servicios por especialidad?", answer: "Sí, estructuramos por especialidad para mejor comprensión." },
        { question: "¿Incluye solicitud de citas?", answer: "Sí, con formularios y WhatsApp." },
        { question: "¿Podemos mostrar médicos/equipo?", answer: "Sí, para reforzar confianza y credibilidad." },
        { question: "¿La web funciona en móvil?", answer: "Sí, es mobile-first." },
        { question: "¿Incluye SEO?", answer: "Sí, base SEO para búsquedas médicas locales." },
        { question: "¿En cuánto tiempo está lista?", answer: "Entre 2 y 4 semanas." },
      ],
    },
    form: {
      title: "Cuéntame de tu clínica\ny te respondemos hoy",
      subtitle: "Propuesta enfocada en credibilidad, captación de pacientes y contacto directo.",
      bullets: ["Consulta gratuita", "Precio claro", "Proceso guiado", "Respuesta en 24h"],
      whatsappMessage: "Hola, quiero una propuesta para mi clínica.",
      defaultService: "Clínicas & Salud",
    },
  },
  "abogados-servicios-premium": {
    slug: "abogados-servicios-premium",
    metaTitle: "Diseño web para Abogados y Servicios Premium - Punta Cana & RD",
    metaDescription: "Web para abogados y servicios premium con autoridad, confianza y estructura de conversión para captar clientes calificados.",
    hero: {
      ratingText: "Firmas y servicios premium · más autoridad digital · más consultas calificadas",
      titleLineOne: "Páginas web para",
      titleLineTwo: "Abogados & Servicios Premium",
      subtitle: "Diseño estratégico para firmas legales y marcas premium que necesitan proyectar autoridad, confianza y resultados.",
      whatsappMessage: "Hola, quiero una propuesta para mi firma/servicio premium.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1500&q=80",
    },
    trust: {
      logosTitle: "Confiado por firmas y marcas premium",
      logos: ["Legal Firms", "Advisors", "Private Services", "Consultants", "Boutique Firms", "High-ticket Brands"],
      titleLineOne: "Más autoridad y",
      titleLineTwo: "más consultas calificadas",
      subtitle: "Webs con estructura comercial para servicios de alto valor.",
      stats: [
        { value: "2.7x", label: "Más leads calificados" },
        { value: "Premium", label: "Percepción de marca" },
        { value: "Directo", label: "Contacto por WhatsApp" },
      ],
    },
    includes: {
      titleLineOne: "Todo lo que una firma",
      titleLineTwo: "necesita para convertir mejor",
      subtitle: "Autoridad visual, mensajes claros y contacto directo para cerrar más casos/proyectos.",
      items: [
        { icon: "real_estate", title: "Presentación de servicios", description: "Estructura clara por áreas de práctica o servicios." },
        { icon: "villas", title: "Perfil de equipo", description: "Refuerza credibilidad y experiencia profesional." },
        { icon: "insights", title: "WhatsApp y formularios", description: "Captura rápida de consultas relevantes." },
        { icon: "setup", title: "Flujos de contacto", description: "CTAs estratégicos para aumentar conversiones." },
        { icon: "performance", title: "SEO de intención", description: "Optimizado para búsquedas de servicios legales/premium." },
        { icon: "tourism", title: "Contenido de confianza", description: "Casos, testimonios y pruebas de autoridad." },
      ],
    },
    who: {
      subtitle: "Ideal para profesionales y firmas que venden confianza y resultados.",
      items: [
        { title: "Firmas legales", description: "Bufetes que quieren más consultas calificadas." },
        { title: "Abogados independientes", description: "Profesionales que buscan posicionar su marca personal." },
        { title: "Consultores premium", description: "Servicios de alto valor con ciclos de venta más exigentes." },
        { title: "Asesores corporativos", description: "Marcas orientadas a clientes empresariales." },
        { title: "Despachos especializados", description: "Prácticas nicho con necesidad de autoridad digital." },
        { title: "Servicios privados", description: "Negocios que requieren imagen sólida y discreta." },
        { title: "Marcas boutique", description: "Equipos premium con enfoque en confianza." },
      ],
    },
    problem: {
      title: "Sin autoridad online,\nla consulta se va con otro",
      subtitle: "En servicios premium, la web es parte de la decisión de compra. Si no transmite confianza, pierdes oportunidades de alto valor.",
      items: [
        { title: "Autoridad", description: "Estructura y diseño que respaldan experiencia profesional." },
        { title: "Consultas calificadas", description: "Mejor filtro de leads desde formularios y mensajes." },
        { title: "Imagen premium", description: "Percepción coherente con tu nivel de servicio." },
      ],
    },
    pricing: {
      title: "¿Cuánto cuesta\nuna web para servicios premium?",
      subtitle: "Planes claros para firmas y marcas de alto valor.",
      trustText: "Precios en USD. Aceptamos tarjeta, transferencia RD$ y PayPal.",
      logos: ["Punta Cana", "Santo Domingo", "Santiago", "Miami"],
    },
    process: {
      titleLineOne: "De una web desactualizada",
      titleLineTwo: "a una presencia de autoridad",
      subtitleLineOne: "Proceso claro, estratégico y orientado a conversión.",
      subtitleLineTwo: "Sin fricción y con seguimiento directo.",
      items: processBase,
    },
    banner: {
      quote: "¿Tu web refleja realmente el nivel de tu servicio?",
      author: "Diseñamos una presencia digital premium para captar mejores clientes.",
      role: "o llena el formulario de contacto",
      whatsappMessage: "Hola, quiero una propuesta para mi firma o servicio premium.",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=80",
    },
    faq: {
      subtitle: "Preguntas frecuentes para servicios legales y premium.",
      askWhatsappMessage: "Hola, tengo una pregunta sobre la web para servicios premium.",
      followupWhatsappMessage: "Hola, quiero resolver una duda para mi firma.",
      items: [
        { question: "¿La web puede verse más corporativa/premium?", answer: "Sí, adaptamos estilo y tono a tu posicionamiento." },
        { question: "¿Incluye formularios para consultas?", answer: "Sí, con estructura orientada a filtrar leads." },
        { question: "¿Puedo mostrar áreas de práctica?", answer: "Sí, creamos arquitectura clara por servicio." },
        { question: "¿Incluye SEO?", answer: "Sí, base técnica y contenidos para búsquedas de intención." },
        { question: "¿Cuánto tarda?", answer: "2 a 4 semanas según alcance." },
        { question: "¿Incluye soporte?", answer: "Sí, de acuerdo con el plan contratado." },
      ],
    },
    form: {
      title: "Cuéntame sobre tu firma\ny te respondemos hoy",
      subtitle: "Recibe una propuesta enfocada en autoridad, confianza y conversión.",
      bullets: ["Consulta gratuita", "Respuesta en 24h", "Estrategia premium", "Contacto directo por WhatsApp"],
      whatsappMessage: "Hola, quiero una propuesta para mi firma/servicio premium.",
      defaultService: "Abogados & Servicios Premium",
    },
  },
  "constructoras-desarrollos": {
    slug: "constructoras-desarrollos",
    metaTitle: "Diseño web para Constructoras y Desarrollos - Punta Cana & RD",
    metaDescription: "Web para constructoras y desarrollos con portafolio de proyectos, confianza para inversionistas y captación de leads.",
    hero: {
      ratingText: "Constructoras y desarrollos activos · más leads de inversión · mejor presentación de proyectos",
      titleLineOne: "Páginas web para",
      titleLineTwo: "Constructoras & Desarrollos",
      subtitle: "Mostramos tus proyectos con una estructura profesional para atraer inversionistas, compradores y socios estratégicos.",
      whatsappMessage: "Hola, quiero una propuesta para mi constructora/desarrollo.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1500&q=80",
    },
    trust: {
      logosTitle: "Confiado por constructoras y promotores",
      logos: ["Constructors", "Developers", "Real Estate Projects", "Engineering Firms", "Investment Teams", "Infrastructure"],
      titleLineOne: "Proyectos mejor presentados,",
      titleLineTwo: "más oportunidades comerciales",
      subtitle: "Webs pensadas para exhibir portafolio y captar leads de valor.",
      stats: [
        { value: "2.9x", label: "Más consultas de proyectos" },
        { value: "Alta confianza", label: "Mejor percepción corporativa" },
        { value: "Investor-ready", label: "Comunicación más clara" },
      ],
    },
    includes: {
      titleLineOne: "Todo lo que una constructora",
      titleLineTwo: "necesita para vender mejor",
      subtitle: "Portafolio, confianza y contacto para transformar interés en oportunidades.",
      items: [
        { icon: "real_estate", title: "Portafolio de proyectos", description: "Muestra avances, entregados y proyectos en comercialización." },
        { icon: "villas", title: "Fichas técnicas", description: "Información clave para compradores e inversionistas." },
        { icon: "setup", title: "Formularios de interés", description: "Captura prospectos por proyecto y etapa." },
        { icon: "insights", title: "WhatsApp comercial", description: "Contacto inmediato con equipo de ventas." },
        { icon: "performance", title: "SEO por proyecto", description: "Optimización para búsquedas de desarrollos locales." },
        { icon: "tourism", title: "Contenido corporativo", description: "Refuerza trayectoria, solvencia y confianza." },
      ],
    },
    who: {
      subtitle: "Para constructoras y desarrollos que necesitan presencia digital sólida para vender y escalar.",
      items: [
        { title: "Constructoras", description: "Empresas que quieren presentar proyectos con nivel profesional." },
        { title: "Desarrolladores", description: "Equipos que necesitan captar inversión y compradores." },
        { title: "Promotores", description: "Marcas con múltiples proyectos y campañas activas." },
        { title: "Ingenierías", description: "Firmas que requieren autoridad corporativa." },
        { title: "Equipos comerciales", description: "Ventas inmobiliarias que dependen de leads calificados." },
        { title: "Proyectos turísticos", description: "Desarrollos en zonas de alta demanda internacional." },
        { title: "Marcas regionales", description: "Empresas en expansión a nuevas plazas." },
      ],
    },
    problem: {
      title: "Si tu proyecto se presenta mal,\npierdes inversionistas",
      subtitle: "Una web débil afecta confianza y ventas. Tu presencia digital debe comunicar solidez técnica y comercial.",
      items: [
        { title: "Presentación profesional", description: "Mejor percepción para compradores e inversionistas." },
        { title: "Leads por proyecto", description: "Captación más ordenada por desarrollo." },
        { title: "Autoridad corporativa", description: "Marca alineada al nivel de tus obras." },
      ],
    },
    pricing: {
      title: "¿Cuánto cuesta\nuna web para constructoras?",
      subtitle: "Planes escalables para constructoras y desarrollos con distintos niveles de complejidad.",
      trustText: "Precios en USD. Aceptamos tarjeta, transferencia RD$ y PayPal.",
      logos: ["Punta Cana", "Santo Domingo", "Santiago", "La Romana"],
    },
    process: {
      titleLineOne: "De una presentación básica",
      titleLineTwo: "a una plataforma comercial sólida",
      subtitleLineOne: "Proceso claro para lanzar con enfoque en ventas e inversión.",
      subtitleLineTwo: "Sin desorden y con dirección estratégica.",
      items: processBase,
    },
    banner: {
      quote: "¿Tus proyectos se ven tan sólidos online como en obra?",
      author: "Construimos webs que elevan confianza y generan oportunidades comerciales reales.",
      role: "o llena el formulario de contacto",
      whatsappMessage: "Hola, quiero una propuesta para mi constructora/desarrollo.",
      bgImage: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1500&q=80",
    },
    faq: {
      subtitle: "Preguntas frecuentes para constructoras y desarrollos.",
      askWhatsappMessage: "Hola, tengo una pregunta sobre la web para constructoras.",
      followupWhatsappMessage: "Hola, quiero resolver una duda sobre mi desarrollo.",
      items: [
        { question: "¿Puedo mostrar varios proyectos?", answer: "Sí, con estructura por estado, ubicación y tipo." },
        { question: "¿Incluye formularios por proyecto?", answer: "Sí, para segmentar leads desde el inicio." },
        { question: "¿Puedo agregar fichas técnicas?", answer: "Sí, totalmente." },
        { question: "¿Incluye WhatsApp?", answer: "Sí, integrado en puntos estratégicos." },
        { question: "¿Incluye SEO?", answer: "Sí, base para búsquedas de proyectos y marca." },
        { question: "¿Tiempo de entrega?", answer: "2 a 4 semanas según alcance." },
      ],
    },
    form: {
      title: "Cuéntame de tu proyecto\ny te respondemos hoy",
      subtitle: "Propuesta para mejorar presentación, confianza y captación comercial.",
      bullets: ["Consulta gratis", "Propuesta en 24h", "Enfoque comercial", "WhatsApp directo"],
      whatsappMessage: "Hola, quiero una propuesta para mi constructora/desarrollo.",
      defaultService: "Constructoras & Desarrollos",
    },
  },
  "negocios-turisticos": {
    slug: "negocios-turisticos",
    metaTitle: "Diseño web para Negocios Turísticos - Punta Cana & RD",
    metaDescription: "Web para negocios turísticos con enfoque visual, multilenguaje, reservas, WhatsApp y captación internacional.",
    hero: {
      ratingText: "Negocios turísticos activos · más leads directos · mayor alcance internacional",
      titleLineOne: "Páginas web para",
      titleLineTwo: "Negocios Turísticos",
      subtitle: "Diseño y desarrollo para marcas turísticas que quieren atraer visitantes, convertir consultas y vender más experiencias.",
      whatsappMessage: "Hola, quiero una propuesta para mi negocio turístico.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80",
    },
    trust: {
      logosTitle: "Confiado por marcas de turismo",
      logos: ["Tourism Brands", "Experiences", "Travel Services", "Hospitality", "Activity Operators", "Local Attractions"],
      titleLineOne: "Más alcance y",
      titleLineTwo: "más conversiones turísticas",
      subtitle: "Sitios multilenguaje y orientados a reservas/contacto directo.",
      stats: [
        { value: "3x", label: "Más consultas internacionales" },
        { value: "ES/EN", label: "Experiencia multilenguaje" },
        { value: "Directo", label: "Más leads por WhatsApp" },
      ],
    },
    includes: {
      titleLineOne: "Todo lo que un negocio",
      titleLineTwo: "turístico necesita online",
      subtitle: "Contenido visual, reservas y captación internacional en una sola estructura.",
      items: [
        { icon: "tourism", title: "Presentación de experiencias", description: "Secciones por actividad, destino o servicio." },
        { icon: "villas", title: "Galerías visuales", description: "Fotos y video para aumentar interés y confianza." },
        { icon: "setup", title: "Solicitudes y reservas", description: "Formularios para captar intención real de compra." },
        { icon: "insights", title: "WhatsApp comercial", description: "Canal directo para cerrar más rápido." },
        { icon: "real_estate", title: "Versión bilingüe", description: "Contenido para turistas internacionales." },
        { icon: "performance", title: "SEO turístico", description: "Optimización para búsquedas de destino y actividades." },
      ],
    },
    who: {
      subtitle: "Ideal para marcas que venden servicios y experiencias al mercado local e internacional.",
      items: [
        { title: "Operadores turísticos", description: "Negocios que venden actividades y experiencias." },
        { title: "Marcas de hospitalidad", description: "Empresas con servicios complementarios al turismo." },
        { title: "Agencias receptivas", description: "Equipos que necesitan más leads propios." },
        { title: "Experiencias premium", description: "Marcas de ticket alto y clientes exigentes." },
        { title: "Servicios para viajeros", description: "Negocios que dependen del flujo turístico." },
        { title: "Empresas multi-mercado", description: "Marcas que captan tráfico local e internacional." },
        { title: "Negocios en expansión", description: "Operaciones que quieren escalar ventas online." },
      ],
    },
    problem: {
      title: "Sin presencia digital fuerte,\nla demanda te pasa por delante",
      subtitle: "Una web estratégica te permite captar turistas con intención real y convertir más consultas sin depender de terceros.",
      items: [
        { title: "Mayor alcance", description: "Atrae audiencias locales e internacionales." },
        { title: "Mejor conversión", description: "Flujos claros para reservas y contacto." },
        { title: "Marca sólida", description: "Percepción profesional y consistente." },
      ],
    },
    pricing: {
      title: "¿Cuánto cuesta\nuna web para turismo?",
      subtitle: "Planes escalables para negocios turísticos en crecimiento.",
      trustText: "Precios en USD. Aceptamos tarjeta, transferencia RD$ y PayPal.",
      logos: ["Punta Cana", "Bayahibe", "Samaná", "La Romana"],
    },
    process: {
      titleLineOne: "De presencia dispersa",
      titleLineTwo: "a sistema de captación digital",
      subtitleLineOne: "Proceso ágil y orientado a resultados.",
      subtitleLineTwo: "Con foco en leads y crecimiento comercial.",
      items: processBase,
    },
    banner: {
      quote: "¿Tu negocio turístico está captando todo su potencial online?",
      author: "Creamos una web que convierte interés en consultas y reservas reales.",
      role: "o llena el formulario de contacto",
      whatsappMessage: "Hola, quiero una propuesta para mi negocio turístico.",
      bgImage: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1500&q=80",
    },
    faq: {
      subtitle: "Preguntas frecuentes para marcas turísticas.",
      askWhatsappMessage: "Hola, tengo una pregunta sobre la web para turismo.",
      followupWhatsappMessage: "Hola, quiero resolver una duda para mi negocio turístico.",
      items: [
        { question: "¿Puedo tener versión en inglés?", answer: "Sí, recomendamos ES/EN para captar turistas." },
        { question: "¿Incluye formularios de reserva?", answer: "Sí, con campos adaptados al tipo de servicio." },
        { question: "¿Incluye WhatsApp?", answer: "Sí, en secciones clave para conversión." },
        { question: "¿Incluye SEO?", answer: "Sí, base técnica y estructura para búsquedas turísticas." },
        { question: "¿Cuánto tiempo toma?", answer: "2 a 4 semanas según alcance." },
        { question: "¿Puedo actualizar contenido luego?", answer: "Sí, con panel autogestionable." },
      ],
    },
    form: {
      title: "Cuéntame de tu negocio turístico\ny te respondemos hoy",
      subtitle: "Propuesta enfocada en captación internacional y conversión real.",
      bullets: ["Consulta gratis", "Respuesta en 24h", "Enfoque en resultados", "WhatsApp directo"],
      whatsappMessage: "Hola, quiero una propuesta para mi negocio turístico.",
      defaultService: "Negocios Turísticos",
    },
  },
};
