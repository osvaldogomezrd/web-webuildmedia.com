import { HomeV3Footer, HomeV3Header } from "@/components/v3/site-chrome";
import {
  PrimaryCta,
  SecondaryCta,
  V3Container,
  V3Section,
  WhatsAppCta,
} from "@/components/v3/primitives";
import {
  BasicItem,
  FaqItem,
  LeadCaptureSection,
  ProblemSolutionSection,
  ProcessItem,
  ProcessSection,
  ProofSection,
  TestimonialItem,
  BenefitsSection,
} from "@/components/v3/sections";

export interface ServiceLandingContent {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  heroEyebrow: string;
  localIntentLine: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  problems: BasicItem[];
  benefits: BasicItem[];
  process: ProcessItem[];
  stats: { value: string; label: string }[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
}

const heroBg =
  "https://www.figma.com/api/mcp/asset/1f165956-d470-43bd-93fb-2d62c7066234";

export function ServiceLandingTemplate({ content }: { content: ServiceLandingContent }) {
  return (
    <>
      <div className="relative overflow-hidden border-b border-white/20 bg-[#070707] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(48deg, rgb(0 0 0 / 1) 0%, rgb(0 0 0 / 0.35) 45%, rgb(0 0 0 / 0) 70%)" }}
          aria-hidden="true"
        />

        <HomeV3Header dark />

        <V3Container className="relative py-[206px]">
          <div className="max-w-[860px] space-y-8">
            <span className="inline-flex rounded-[4px] border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white/80">
              {content.heroEyebrow}
            </span>
            <h1 className="site-hero-title ds-h1 text-white">
              {content.heroTitle}
            </h1>
            <p className="max-w-[760px] text-base leading-7 text-white/80 md:text-xl md:leading-8">
              {content.heroSubtitle}
            </p>
            <p className="text-sm uppercase tracking-[0.1em] text-white/65">{content.localIntentLine}</p>
            <div className="flex flex-wrap items-center gap-4">
              <PrimaryCta href="#lead-form">{content.primaryCtaLabel}</PrimaryCta>
              <SecondaryCta href="#lead-form" dark>
                {content.secondaryCtaLabel}
              </SecondaryCta>
              <WhatsAppCta dark message={`Hola, quiero una propuesta para ${content.heroTitle}.`} />
            </div>
          </div>
        </V3Container>
      </div>

      <ProblemSolutionSection
        id="problems"
        eyebrow="Problem / Solution"
        title="Why Most Service Websites Don’t Generate Consistent Leads"
        subtitle="These are the conversion and SEO gaps we fix first."
        items={content.problems}
      />

      <BenefitsSection
        id="services"
        eyebrow="Service Benefits"
        title="What You Get with Our Delivery Framework"
        subtitle="Built for ranking potential, trust building, and better lead quality."
        items={content.benefits}
      />

      <ProcessSection
        id="process"
        eyebrow="Execution"
        title="A Structured Process from Strategy to Launch"
        subtitle="Clear milestones, measurable outcomes, and no guesswork."
        steps={content.process}
        ctaHref="#lead-form"
        ctaLabel="Request Proposal"
        whatsappLabel="Hablemos por WhatsApp"
        whatsappMessage={`Hi, I want a proposal for ${content.heroTitle}.`}
      />

      <ProofSection
        id="proof"
        title="Results and Performance Signals"
        subtitle="We focus on visibility, speed, and conversion outcomes."
        stats={content.stats}
        testimonials={content.testimonials}
      />

      <V3Section tone="light" className="pt-0">
        <div className="rounded-[8px] border border-black/10 bg-[#f6f7fb] p-6 md:p-10">
          <h2 className="ds-h2 text-[#1e1e1e]">
            Related local services
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <SecondaryCta href="/web-design-punta-cana">Web Design Punta Cana</SecondaryCta>
            <SecondaryCta href="/web-development-punta-cana">Web Development Punta Cana</SecondaryCta>
            <SecondaryCta href="/web-design-orlando">Web Design Orlando</SecondaryCta>
            <SecondaryCta href="/web-development-orlando">Web Development Orlando</SecondaryCta>
          </div>
        </div>
      </V3Section>

      <V3Section id="faq" tone="soft">
        <div className="space-y-4">
          <h2 className="ds-h2 text-[#1e1e1e]">
            FAQs for this service
          </h2>
          <div className="space-y-3">
            {content.faqs.map((item, idx) => (
              <details key={item.question} open={idx === 0} className="rounded-[8px] border border-black/10 bg-white p-6">
                <summary className="ds-h6 cursor-pointer list-none text-[#1e1e1e]">
                  {item.question}
                </summary>
                <p className="mt-4 text-base leading-7 text-[#3d3d3d]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </V3Section>

      <LeadCaptureSection
        title="Need a Site That Actually Generates Qualified Inquiries?"
        subtitle="Request your proposal and get practical next steps based on your market, service, and goals."
        bullets={[
          "Conversion-focused page strategy",
          "Local SEO architecture and internal linking",
          "Modern UI system and scalable codebase",
          "Clear timeline and quote",
        ]}
      />

      <HomeV3Footer />
    </>
  );
}
