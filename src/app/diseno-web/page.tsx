import type { Metadata } from "next";
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
import { makeLanguageAlternates } from "@/lib/i18n-routing";
import { makePageMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = makePageMetadata({
  title: "Diseño Web Profesional | Solicitar Propuesta",
  description:
    "Servicio de diseño web profesional con SEO, desarrollo y mantenimiento. Precios claros, proceso en 30 días y contacto directo por WhatsApp.",
  path: "/diseno-web",
  languages: makeLanguageAlternates("/diseno-web", "/en/web-design"),
});

export default function DisenoWebPage() {
  return (
    <>
      <div className="relative bg-[#070707]">
        <HomeV3Header dark homeHref="/" ctaHref="#lead-form" ctaLabel="Solicitar cotizacion gratis" />
        <Hero2BlueSection
          id="hero"
          ratingText="120+ proyectos · 30 días entrega · 5 mercados"
          titleLineOne="Todo lo que tu web"
          titleLineTwo="necesita para crecer"
          subtitle="Desde el diseño visual hasta el posicionamiento en Google ofrecemos un servicio completo para que tu negocio tenga presencia digital profesional y genere resultados reales."
          primaryLabel="Solicitar propuesta"
          primaryHref="#lead-form"
          secondaryLabel="Ver precios"
          secondaryHref="#precios"
          image="https://www.figma.com/api/mcp/asset/eaf9e64e-7cc6-4116-97b0-8555d3cae1c5"
          backgroundClass="bg-[#070707]"
        />
      </div>

      <KeyFeatureGridSection
        id="servicios-incluidos"
        eyebrow="Servicio"
        titleLineOne="Servicios incluidos"
        titleLineTwo="en diseño web"
        subtitle="Un servicio integral para que tu web no solo se vea bien, sino que también convierta visitas en clientes."
        ctaLabel="Solicitar propuesta"
        ctaHref="#lead-form"
        items={[
          {
            icon: "framework",
            title: "Diseño web profesional",
            description: "Diseño alineado a tu marca, con estructura pensada para confianza y conversión.",
          },
          {
            icon: "insights",
            title: "SEO & posicionamiento",
            description: "Arquitectura y contenido optimizados para búsquedas con intención comercial.",
          },
          {
            icon: "setup",
            title: "Desarrollo a medida",
            description: "Implementación robusta y escalable según tus objetivos y flujo de negocio.",
          },
          {
            icon: "ecosystem",
            title: "E-commerce",
            description: "Tiendas online orientadas a conversión, compra rápida y crecimiento sostenido.",
          },
          {
            icon: "performance",
            title: "Hosting & dominio",
            description: "Base técnica estable para velocidad, seguridad y operación sin fricciones.",
          },
          {
            icon: "scale",
            title: "Mantenimiento",
            description: "Soporte continuo para ajustes, mejoras y evolución constante del sitio.",
          },
        ]}
      />

      <ScrollStepperSection
        id="proceso"
        eyebrow="Proceso"
        title="Del quiero una web al lanzamiento en solo 30 días"
        subtitle="Un proceso claro, guiado y pensado para avanzar sin fricción."
        ctaHref="#lead-form"
        ctaLabel="Solicitar propuesta"
        whatsappLabel="Conversar con un agente vía WhatsApp"
        whatsappMessage="Hola, quiero iniciar mi proyecto de diseño web."
        items={[
          {
            step: "Paso 01",
            title: "Consulta gratis",
            description: "Entendemos tu negocio, tu objetivo comercial y qué necesitas lograr online.",
            bullets: ["Reunión breve", "Objetivos claros", "Contexto de mercado"],
            image: "https://www.figma.com/api/mcp/asset/4cafdd73-b8c3-470d-9bce-393d6ca84715",
            imageAlt: "Consulta inicial de proyecto web",
          },
          {
            step: "Paso 02",
            title: "Propuesta",
            description: "Recibes alcance, tiempos y recomendación de plan con claridad total.",
            bullets: ["Alcance detallado", "Cronograma", "Inversión transparente"],
            image: "https://www.figma.com/api/mcp/asset/6f9b6a7e-0d73-4cd7-953c-d23911cab9ff",
            imageAlt: "Propuesta estructurada de diseño web",
          },
          {
            step: "Paso 03",
            title: "Diseño",
            description: "Construimos una experiencia visual sólida, orientada a conversión y confianza.",
            bullets: ["Diseño UI", "Contenido estratégico", "Experiencia mobile-first"],
            image: "https://www.figma.com/api/mcp/asset/afa9ba56-58ed-4f04-98fd-66018f4021f3",
            imageAlt: "Fase de diseño web",
          },
          {
            step: "Paso 04",
            title: "Revisiones",
            description: "Ajustamos contigo para asegurar que el sitio represente tu negocio al 100%.",
            bullets: ["Feedback iterativo", "Ajustes visuales", "Validación final"],
            image: "https://www.figma.com/api/mcp/asset/afe672a4-6741-4a98-9a17-d60212c3dc9d",
            imageAlt: "Revisión colaborativa del sitio",
          },
          {
            step: "Paso 05",
            title: "Lanzamiento",
            description: "Publicamos tu web lista para captar contactos y oportunidades de negocio.",
            bullets: ["Salida a producción", "QA final", "Seguimiento inicial"],
            image: "https://www.figma.com/api/mcp/asset/ca337080-94cb-422c-8be2-e4bb50ec6c44",
            imageAlt: "Lanzamiento de sitio web",
          },
        ]}
      />

      <Pricing2DarkFlatSection
        id="precios"
        title="Precios claros, sin sorpresas"
        subtitle="Sin costos ocultos. Elige el plan según tu etapa actual y objetivos de crecimiento."
        plans={[
          {
            name: "Starter",
            price: "Desde $499 USD",
            description: "Para negocios que necesitan una web profesional para comenzar a captar clientes.",
            features: ["1-5 páginas", "Diseño personalizado", "Responsive", "WhatsApp integration", "2-3 semanas"],
            ctaLabel: "Solicitar propuesta",
            ctaHref: "#lead-form",
          },
          {
            name: "Growth",
            price: "Desde $899 USD",
            description: "Ideal para negocios que necesitan más estructura y mejor conversión.",
            features: [
              "5-10 páginas",
              "SEO básico",
              "Formularios avanzados",
              "Animaciones",
              "Optimización de velocidad",
            ],
            ctaLabel: "Solicitar propuesta",
            ctaHref: "#lead-form",
            highlight: true,
            badge: "Más solicitado",
          },
          {
            name: "Pro / Custom",
            price: "Personalizado",
            description: "Para empresas con requerimientos avanzados, integraciones y operación más compleja.",
            features: [
              "Web a medida",
              "Integraciones avanzadas",
              "E-commerce o reservas",
              "SEO avanzado",
              "CRM + automatización",
            ],
            ctaLabel: "Solicitar propuesta",
            ctaHref: "#lead-form",
          },
        ]}
        trustText="Sin costos ocultos · enfoque en resultados · soporte directo"
        logos={["Cubekit", "Acme Corp", "ContrastAI", "CoreOS"]}
      />

      <ClientVoicesCarouselSection
        id="testimonios"
        title="Resultados que generan confianza"
        subtitle="Empresas que necesitaban más leads y una presencia digital más sólida."
        ratingText="4.9 promedio en clientes activos"
        items={[
          {
            quote: "Nuestra nueva web mejoró la calidad de los contactos y aceleró cierres comerciales.",
            author: "Laura Méndez",
            role: "Directora Comercial",
            avatar: "https://www.figma.com/api/mcp/asset/5840bd1f-3900-4cf9-8cc1-c31c11de32b3",
          },
          {
            quote: "El proceso fue claro y rápido. Pasamos de tener una web estática a una herramienta real de ventas.",
            author: "Andrés Pérez",
            role: "Fundador",
            avatar: "https://www.figma.com/api/mcp/asset/c403a76f-7cd6-41d4-ac60-c371e5ebc420",
          },
          {
            quote: "Ahora recibimos más consultas por WhatsApp con mejor intención de compra.",
            author: "María López",
            role: "Gerente de Marketing",
            avatar: "https://www.figma.com/api/mcp/asset/b860798b-cdc4-44be-8353-3cddd5130012",
          },
        ]}
      />

      <PortfolioCardsSection
        id="portafolio"
        titleLineOne="Portafolio"
        titleLineTwo="proyectos recientes."
        items={[
          {
            image: "https://www.figma.com/api/mcp/asset/b3f5e911-84db-4362-902b-7cad4926a275",
            title: "Real Estate & Inmobiliaria",
            description: "Sitio orientado a captación de leads con propiedades destacadas y contacto directo por WhatsApp.",
            ctaLabel: "Ver proyecto",
            ctaHref: "#lead-form",
          },
          {
            image: "https://www.figma.com/api/mcp/asset/1a8b8817-5608-4c8f-9bc3-5fe1c28f39e1",
            title: "Villas & Vacation Rentals",
            description: "Experiencia visual premium con flujo de consulta y reservas para clientes locales e internacionales.",
            ctaLabel: "Ver proyecto",
            ctaHref: "#lead-form",
          },
          {
            image: "https://www.figma.com/api/mcp/asset/880c7dc8-1d4a-42d7-9d8b-69c03eabe910",
            title: "Restaurante & Bar",
            description: "Web optimizada para menú, ubicación y conversiones rápidas desde mobile con CTA claras.",
            ctaLabel: "Ver proyecto",
            ctaHref: "#lead-form",
          },
          {
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
            title: "Tours & Excursiones",
            description: "Páginas de paquetes con estructura de confianza para mejorar consultas y ventas por temporada.",
            ctaLabel: "Ver proyecto",
            ctaHref: "#lead-form",
          },
          {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
            title: "Clínica estética",
            description: "Sitio profesional con enfoque en credibilidad, servicios y generación de citas cualificadas.",
            ctaLabel: "Ver proyecto",
            ctaHref: "#lead-form",
          },
          {
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
            title: "Servicios premium",
            description: "Presencia digital estratégica para elevar percepción de marca y aumentar solicitudes de propuesta.",
            ctaLabel: "Ver proyecto",
            ctaHref: "#lead-form",
          },
        ]}
      />

      <TestimonialBannerSection
        id="cta-final"
        quote={"¿Listo para tener una web\nque trabaje por ti?"}
        author="Recibe una propuesta en menos de 24h"
        reviewsText=""
        bgImage="https://www.figma.com/api/mcp/asset/d715dcca-d7ed-4487-9bd5-94a6753e5bbe"
        sectionTone="light"
        showStars={false}
        showReviews={false}
        showQuoteMarks={false}
        primaryCtaLabel="Hablar por WhatsApp"
        primaryCtaHref={getWhatsAppUrl("Hola, quiero hablar sobre mi proyecto de diseño web.")}
        secondaryCtaLabel="Solicitar presupuesto"
        secondaryCtaHref="#lead-form"
      />

      <FaqSplitActionSection
        id="faq"
        titleLineOne="Preguntas frecuentes"
        titleLineTwo="sobre diseño web"
        subtitle="Resolvemos las dudas más comunes antes de iniciar."
        ctaLabel="Solicitar propuesta"
        ctaHref="#lead-form"
        items={[
          {
            question: "¿Cuánto cuesta una web?",
            answer:
              "Depende del alcance. Tenemos planes desde Starter hasta soluciones personalizadas, con precios claros y sin costos ocultos.",
          },
          {
            question: "¿En cuánto tiempo estará lista?",
            answer:
              "La mayoría de proyectos estándar se completan entre 2 y 4 semanas. En proyectos más amplios definimos cronograma desde la propuesta.",
          },
          {
            question: "¿Incluyen SEO?",
            answer:
              "Sí. Incluimos una base SEO técnica y estructural para facilitar indexación y visibilidad orgánica desde el lanzamiento.",
          },
          {
            question: "¿Incluye hosting y dominio?",
            answer:
              "Podemos incluir dominio y hosting según el plan. Te recomendamos la opción ideal según tráfico y objetivos.",
          },
          {
            question: "¿Ofrecen soporte después del lanzamiento?",
            answer:
              "Sí. Ofrecemos soporte, ajustes y mantenimiento para que tu web siga rindiendo y se mantenga actualizada.",
          },
          {
            question: "¿Puedo solicitar cambios?",
            answer:
              "Claro. Durante revisiones ajustamos diseño y contenido según feedback para asegurar que el resultado se alinee con tu negocio.",
          },
        ]}
      />

      <LeadCaptureSection
        title="Solicita tu propuesta de diseño web"
        subtitle="Respuesta en 24h, sin compromiso y con trato directo por WhatsApp."
        bullets={["Respuesta en 24h", "Sin compromiso", "Trato directo", "Enfoque en resultados reales"]}
        eyebrow=""
        showPrimaryCta={false}
        primaryCtaLabel="Solicitar cotización gratis"
        quoteHref="#lead-form"
        showProposalCta={false}
        proposalHref="#lead-form"
        whatsappLabel="Conversar con un agente vía WhatsApp"
        whatsappMessage="Hola, quiero una propuesta para mi proyecto de diseño web."
        formSubmitLabel="Solicitar cotización gratis"
        formShowWhatsAppLink={false}
      />

      <HomeV3Footer
        homeHref="/"
        locale="es"
        description="Diseño web estratégico y desarrollo orientado a conversión para negocios que necesitan más leads y mejor presencia digital."
        whatsappLabel="Conversar con un agente vía WhatsApp"
      />
    </>
  );
}
