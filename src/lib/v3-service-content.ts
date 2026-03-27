import type { ServiceLandingContent } from "@/components/v3/service-landing-template";

const commonProcess = [
  {
    step: "Step 01",
    title: "Strategy",
    description:
      "We define the offer, message, and local angle that attracts better-fit clients.",
  },
  {
    step: "Step 02",
    title: "Design",
    description:
      "We structure the page to build trust and guide users toward proposal or quote requests.",
  },
  {
    step: "Step 03",
    title: "Development",
    description:
      "We build a fast, clear website experience that helps users take action.",
  },
  {
    step: "Step 04",
    title: "Launch",
    description:
      "We launch, test the lead flow, and improve pages to increase qualified inquiries.",
  },
];

const sharedTestimonials = [
  {
    quote:
      "The new structure gave us better lead quality almost immediately, especially from local service searches.",
    author: "Ana R.",
    role: "Marketing Manager",
  },
  {
    quote:
      "They rebuilt our site around conversion intent and now inquiries are more qualified and easier to close.",
    author: "Luis M.",
    role: "Agency Founder",
  },
  {
    quote:
      "Great balance of design, speed, and SEO. The site finally supports sales instead of just showing information.",
    author: "Patricia G.",
    role: "Operations Lead",
  },
];

export const servicePages: Record<string, ServiceLandingContent> = {
  "web-design-punta-cana": {
    slug: "web-design-punta-cana",
    heroEyebrow: "Punta Cana Service Page",
    heroTitle: "Web Design Punta Cana for Businesses That Need More Qualified Leads",
    heroSubtitle:
      "Custom website design focused on trust, speed, and conversion for local businesses in Punta Cana.",
    localIntentLine: "Primary intent: web design Punta Cana / Punta Cana web design agency",
    primaryCtaLabel: "Request Proposal",
    secondaryCtaLabel: "Request Free Quote",
    problems: [
      {
        title: "Low trust from first-time visitors",
        description:
          "Outdated design and unclear messaging reduce confidence and hurt inquiry rates.",
      },
      {
        title: "No conversion hierarchy",
        description:
          "If users can’t find the next step quickly, they leave without contacting your team.",
      },
      {
        title: "Weak local positioning",
        description:
          "Without location-based service messaging, your site looks generic and loses local relevance.",
      },
    ],
    benefits: [
      {
        title: "Premium visual system",
        description:
          "A clean design language that builds credibility for local and international buyers.",
      },
      {
        title: "Service-page structure",
        description:
          "Page sections built around buyer questions to reduce friction and improve lead quality.",
      },
      {
        title: "Mobile-first UX",
        description:
          "Fast mobile journeys for users discovering your services through social or search.",
      },
      {
        title: "Trust blocks and proof",
        description:
          "Case snippets, process clarity, and testimonials to support decision-making.",
      },
      {
        title: "Reusable design components",
        description:
          "A scalable section system to launch future pages faster with visual consistency.",
      },
      {
        title: "CTA and form optimization",
        description:
          "Quote-focused CTAs and lead forms designed for qualified inbound requests.",
      },
    ],
    process: commonProcess,
    stats: [
      { value: "2.3x", label: "avg. inquiry increase after redesign" },
      { value: "62%", label: "more engagement from mobile users" },
      { value: "4.9/5", label: "client satisfaction rating" },
    ],
    testimonials: sharedTestimonials,
    faqs: [
      {
        question: "How much does web design in Punta Cana usually cost?",
        answer:
          "It depends on scope, number of pages, and conversion requirements. We provide a clear proposal based on business goals and growth stage.",
      },
      {
        question: "Can you redesign my current website?",
        answer:
          "Yes. We redesign websites with a conversion-first process while preserving important SEO foundations and key content.",
      },
      {
        question: "Do you include WhatsApp integration?",
        answer:
          "Yes. We include WhatsApp touchpoints where they improve conversion and response speed.",
      },
    ],
  },
  "web-development-punta-cana": {
    slug: "web-development-punta-cana",
    heroEyebrow: "Punta Cana Service Page",
    heroTitle: "Web Development Punta Cana for High-Performance Business Websites",
    heroSubtitle:
      "Custom development for Punta Cana businesses that need speed, scalability, and better conversion performance.",
    localIntentLine: "Primary intent: web development Punta Cana",
    primaryCtaLabel: "Request Proposal",
    secondaryCtaLabel: "Request Free Quote",
    problems: [
      {
        title: "Slow site performance",
        description:
          "Heavy code and poor implementation lower rankings and increase abandonment.",
      },
      {
        title: "Difficult to scale",
        description:
          "Legacy stacks make it hard to launch new pages or improve conversion flows.",
      },
      {
        title: "No technical SEO baseline",
        description:
          "Weak structure, headings, and metadata block long-term search growth.",
      },
    ],
    benefits: [
      {
        title: "Modern Next.js architecture",
        description:
          "Fast front-end performance and scalable structure for future marketing growth.",
      },
      {
        title: "Reusable component system",
        description:
          "Standardized section patterns for consistent delivery across pages.",
      },
      {
        title: "Technical SEO implementation",
        description:
          "Clean semantic HTML, metadata, internal links, and performance-first markup.",
      },
      {
        title: "Form and lead integrations",
        description:
          "Reliable lead capture setup with Request Proposal and WhatsApp pathways.",
      },
      {
        title: "Production-ready code",
        description:
          "Maintainable code structure suitable for Vercel deployment and ongoing iteration.",
      },
      {
        title: "Performance QA",
        description:
          "Testing and tuning for speed, responsiveness, and conversion-critical behavior.",
      },
    ],
    process: commonProcess,
    stats: [
      { value: "<2.2s", label: "target load time on key pages" },
      { value: "35%", label: "average bounce reduction" },
      { value: "99.9%", label: "deployment reliability goal" },
    ],
    testimonials: sharedTestimonials,
    faqs: [
      {
        question: "Can you work with our existing codebase?",
        answer:
          "Yes. We can refactor existing projects or rebuild where technical debt is blocking results.",
      },
      {
        question: "Do you handle Vercel deployment?",
        answer:
          "Yes. We set up production deployment, environment variables, and launch validation.",
      },
      {
        question: "Will development include SEO structure?",
        answer:
          "Yes. We implement technical SEO foundations during development, not as an afterthought.",
      },
    ],
  },
  "web-design-orlando": {
    slug: "web-design-orlando",
    heroEyebrow: "Orlando Service Page",
    heroTitle: "Web Design Orlando for Businesses Competing in Crowded Markets",
    heroSubtitle:
      "Strategic website design for Orlando companies that need stronger positioning and better lead conversion.",
    localIntentLine: "Primary intent: web design Orlando / Orlando web design agency",
    primaryCtaLabel: "Request Proposal",
    secondaryCtaLabel: "Request Free Quote",
    problems: [
      {
        title: "Generic messaging",
        description:
          "If your site looks like everyone else in Orlando, prospects won’t see a reason to choose you.",
      },
      {
        title: "Unclear service differentiation",
        description:
          "Without clear offer structure, users compare you only on price.",
      },
      {
        title: "Poor CTA placement",
        description:
          "Visitors consume content but never hit the right action point at the right time.",
      },
    ],
    benefits: [
      {
        title: "Positioning-first design",
        description:
          "Page narratives crafted to communicate value fast in competitive categories.",
      },
      {
        title: "Structured offer pages",
        description:
          "Service-specific sections designed around buyer objections and decision criteria.",
      },
      {
        title: "Visual trust system",
        description:
          "Consistent UI hierarchy and proof blocks that reduce perceived risk.",
      },
      {
        title: "CTA flow optimization",
        description:
          "Strategic placements for Request Proposal and Request Free Quote actions.",
      },
      {
        title: "Local SEO messaging",
        description:
          "Copy aligned with Orlando service intent while staying natural and conversion-focused.",
      },
      {
        title: "Scalable section library",
        description:
          "Reusable design patterns to launch new pages without design inconsistency.",
      },
    ],
    process: commonProcess,
    stats: [
      { value: "2.1x", label: "average increase in qualified inquiries" },
      { value: "43%", label: "higher CTA engagement" },
      { value: "5-7s", label: "faster path to first key action" },
    ],
    testimonials: sharedTestimonials,
    faqs: [
      {
        question: "Do you create websites specifically for Orlando businesses?",
        answer:
          "Yes. We tailor copy, structure, and local intent to Orlando audiences and service competition.",
      },
      {
        question: "Can this work for B2B and local services?",
        answer:
          "Yes. Our framework supports both B2B lead generation and local service acquisition.",
      },
      {
        question: "Will I be able to add pages later?",
        answer:
          "Yes. We design the system for scalable growth, so adding pages is straightforward.",
      },
    ],
  },
  "web-development-orlando": {
    slug: "web-development-orlando",
    heroEyebrow: "Orlando Service Page",
    heroTitle: "Web Development Orlando for Fast, Scalable, SEO-Ready Websites",
    heroSubtitle:
      "High-performance development for Orlando companies that need cleaner code, better UX, and stronger lead systems.",
    localIntentLine: "Primary intent: web development Orlando",
    primaryCtaLabel: "Request Proposal",
    secondaryCtaLabel: "Request Free Quote",
    problems: [
      {
        title: "Legacy stack limitations",
        description:
          "Old systems block marketing speed and increase costs for simple updates.",
      },
      {
        title: "Performance bottlenecks",
        description:
          "Slow pages reduce conversion rates and weaken SEO outcomes.",
      },
      {
        title: "Inconsistent front-end standards",
        description:
          "Without a reusable system, new pages drift in quality and visual logic.",
      },
    ],
    benefits: [
      {
        title: "Performance-first implementation",
        description:
          "Lightweight builds optimized for real user speed and conversion impact.",
      },
      {
        title: "App Router best practices",
        description:
          "Clean route architecture and modular structure ready for scale.",
      },
      {
        title: "Reusable design patterns",
        description:
          "Shared section logic that keeps future launches consistent and faster.",
      },
      {
        title: "Technical SEO from day one",
        description:
          "Semantic markup, metadata, and internal links built into development workflow.",
      },
      {
        title: "Lead capture integration",
        description:
          "Request Proposal, Request Free Quote, and WhatsApp paths connected to your funnel.",
      },
      {
        title: "Production deployment readiness",
        description:
          "Code quality and structure prepared for reliable Vercel deployments.",
      },
    ],
    process: commonProcess,
    stats: [
      { value: "30-45%", label: "common speed improvement after rebuild" },
      { value: "2x", label: "faster page deployment cycles" },
      { value: "90+", label: "target Lighthouse performance baseline" },
    ],
    testimonials: sharedTestimonials,
    faqs: [
      {
        question: "Do you only build new projects?",
        answer:
          "No. We also refactor existing projects when that path is more efficient and cost-effective.",
      },
      {
        question: "Can you improve our Core Web Vitals?",
        answer:
          "Yes. We analyze bottlenecks and prioritize practical fixes tied to user experience and SEO.",
      },
      {
        question: "Will development include a design system foundation?",
        answer:
          "Yes. We implement reusable components and section patterns to avoid visual and structural drift.",
      },
    ],
  },
  "seo-web-design-punta-cana": {
    slug: "seo-web-design-punta-cana",
    heroEyebrow: "Punta Cana SEO Page",
    heroTitle: "SEO Web Design Punta Cana for Better Rankings and Better Leads",
    heroSubtitle:
      "Web design that supports local search visibility while guiding visitors to Request Proposal and quote actions.",
    localIntentLine: "Primary intent: SEO web design Punta Cana",
    primaryCtaLabel: "Request Proposal",
    secondaryCtaLabel: "Request Free Quote",
    problems: [
      { title: "Design-first, SEO-last builds", description: "Many sites launch visually polished but technically weak for search growth." },
      { title: "Thin service content", description: "Generic pages fail to capture local search intent and buyer trust." },
      { title: "No internal linking strategy", description: "Without supporting pages, key services struggle to rank competitively." },
    ],
    benefits: [
      { title: "Local keyword architecture", description: "Service pages mapped to high-intent Punta Cana search demand." },
      { title: "Conversion-first content hierarchy", description: "SEO structure that still reads naturally for buyers." },
      { title: "Technical baseline setup", description: "Metadata, headings, semantic sections, and crawl-friendly structure." },
      { title: "Scalable content framework", description: "Reusable patterns for future service and location pages." },
      { title: "Trust and proof modules", description: "Proof blocks integrated where users need confidence to convert." },
      { title: "Lead path consistency", description: "Unified CTA language and request flow across the website." },
    ],
    process: commonProcess,
    stats: [
      { value: "3x", label: "potential increase in local visibility coverage" },
      { value: "28%", label: "average uplift in quote requests" },
      { value: "8-12", label: "weeks to meaningful SEO movement" },
    ],
    testimonials: sharedTestimonials,
    faqs: [
      { question: "Is SEO included from the start?", answer: "Yes. Our design and development process includes SEO foundations from planning through launch." },
      { question: "Do you write location-specific copy?", answer: "Yes. We write unique copy that matches Punta Cana service intent and buyer language." },
      { question: "Can this work for tourism and real estate niches?", answer: "Yes. We adapt the framework for tourism, hospitality, real estate, and professional services." },
    ],
  },
  "seo-web-design-orlando": {
    slug: "seo-web-design-orlando",
    heroEyebrow: "Orlando SEO Page",
    heroTitle: "SEO Web Design Orlando for Search Visibility and Lead Quality",
    heroSubtitle:
      "A structured SEO + conversion design system for Orlando service businesses that need predictable inbound opportunities.",
    localIntentLine: "Primary intent: SEO web design Orlando",
    primaryCtaLabel: "Request Proposal",
    secondaryCtaLabel: "Request Free Quote",
    problems: [
      { title: "Competitive SERPs", description: "Orlando service searches are crowded and require stronger page strategy." },
      { title: "Poor lead qualification", description: "Unstructured pages generate low-quality inquiries with low close rates." },
      { title: "Disconnected design and SEO", description: "When teams work in silos, performance suffers in both ranking and conversion." },
    ],
    benefits: [
      { title: "Intent-driven SEO pages", description: "Pages built around real queries and decision-stage needs." },
      { title: "Conversion-led structure", description: "Clear CTA path from first scroll to quote request." },
      { title: "Semantic heading hierarchy", description: "Readable information architecture for users and search engines." },
      { title: "Scalable linking model", description: "Service pages connected to improve discoverability and depth." },
      { title: "Performance-aware UI", description: "Fast interface patterns that support rankings and UX." },
      { title: "Conversion tracking readiness", description: "Analytics setup to measure lead behavior and optimize pages." },
    ],
    process: commonProcess,
    stats: [
      { value: "2-3x", label: "potential growth in qualified organic entries" },
      { value: "35%", label: "higher conversion with improved hierarchy" },
      { value: "4.9/5", label: "average project satisfaction" },
    ],
    testimonials: sharedTestimonials,
    faqs: [
      { question: "Do you optimize only for Google?", answer: "Google is primary, but we build robust UX and technical structure that performs across discovery channels." },
      { question: "Can we keep our existing brand style?", answer: "Yes. We preserve brand identity while improving conversion and SEO foundations." },
      { question: "How do you avoid keyword stuffing?", answer: "We prioritize natural language and intent relevance, not repetitive keyword usage." },
    ],
  },
  "website-redesign-punta-cana": {
    slug: "website-redesign-punta-cana",
    heroEyebrow: "Punta Cana Redesign Page",
    heroTitle: "Website Redesign Punta Cana to Improve Leads, Trust, and Speed",
    heroSubtitle:
      "Redesign your current site with a conversion-first structure and SEO-safe migration approach.",
    localIntentLine: "Primary intent: website redesign Punta Cana",
    primaryCtaLabel: "Request Proposal",
    secondaryCtaLabel: "Request Free Quote",
    problems: [
      { title: "Outdated visual trust", description: "Legacy design signals low credibility and hurts conversion from first impression." },
      { title: "Broken user flow", description: "Important service information and CTAs are hidden or hard to navigate." },
      { title: "Risky redesign migrations", description: "Many redesigns lose traffic due to weak SEO and URL migration planning." },
    ],
    benefits: [
      { title: "Conversion redesign strategy", description: "We rebuild page flow around service intent and trust triggers." },
      { title: "SEO-safe migration planning", description: "Redirect mapping and metadata continuity to protect visibility." },
      { title: "Speed and UX upgrades", description: "A cleaner front-end that improves engagement and lead actions." },
      { title: "Offer clarity improvements", description: "Service hierarchy rewritten for stronger buyer understanding." },
      { title: "Reusable section architecture", description: "A modular system that scales into future pages and campaigns." },
      { title: "Lead form optimization", description: "Request Proposal and quote actions improved for higher completion rates." },
    ],
    process: commonProcess,
    stats: [
      { value: "45%", label: "average improvement in CTA click-through" },
      { value: "2.6x", label: "common lead quality improvement" },
      { value: "0", label: "goal for avoidable SEO migration errors" },
    ],
    testimonials: sharedTestimonials,
    faqs: [
      { question: "Can you redesign without rebuilding everything?", answer: "Yes. We evaluate whether a focused refactor or full rebuild is the smarter path." },
      { question: "Will we lose Google rankings after redesign?", answer: "Our process includes safeguards to preserve ranking-critical structure and URLs." },
      { question: "Can redesign include new service pages?", answer: "Yes. We often add new local-intent pages during redesign to improve growth potential." },
    ],
  },
  "website-redesign-orlando": {
    slug: "website-redesign-orlando",
    heroEyebrow: "Orlando Redesign Page",
    heroTitle: "Website Redesign Orlando for Better Conversion and Better Positioning",
    heroSubtitle:
      "Modernize your Orlando business website with a structured redesign focused on sales-qualified inquiries.",
    localIntentLine: "Primary intent: website redesign Orlando",
    primaryCtaLabel: "Request Proposal",
    secondaryCtaLabel: "Request Free Quote",
    problems: [
      { title: "Message mismatch with buyer intent", description: "Your site may not answer the questions Orlando prospects ask before contacting." },
      { title: "Visual inconsistency across pages", description: "Patchwork design lowers trust and weakens decision confidence." },
      { title: "Weak conversion measurement", description: "Without proper setup, you can’t identify where leads are lost." },
    ],
    benefits: [
      { title: "Offer-focused redesign", description: "We rebuild sections around business outcomes and objections." },
      { title: "Consistent visual system", description: "A standardized UI language that scales with future content." },
      { title: "Funnel-aware CTA placement", description: "Clear action hierarchy for quote and proposal requests." },
      { title: "SEO and UX alignment", description: "Redesign decisions that support search visibility and usability." },
      { title: "Performance and accessibility", description: "Cleaner delivery for speed, readability, and broader usability." },
      { title: "Analytics-ready architecture", description: "Track meaningful conversion events and optimize with confidence." },
    ],
    process: commonProcess,
    stats: [
      { value: "3.1x", label: "potential lift in proposal submissions" },
      { value: "37%", label: "average drop in friction events" },
      { value: "90+", label: "target performance score baseline" },
    ],
    testimonials: sharedTestimonials,
    faqs: [
      { question: "How long does a redesign project take?", answer: "Most redesign projects run 3 to 6 weeks, depending on scope and migration complexity." },
      { question: "Can we keep parts of the current site?", answer: "Yes. We can preserve high-performing assets while redesigning weak areas." },
      { question: "Do you include copy improvements?", answer: "Yes. We rewrite service copy to align with local intent and conversion goals." },
    ],
  },
};
