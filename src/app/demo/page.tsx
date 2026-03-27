import type { Metadata } from "next";
import {
  BelowTheFoldSection,
  AboutOverlayStatsSection,
  Banner1DarkQuoteSection,
  Banner2IntegrationSection,
  Banner3CtaSplitSection,
  Banner4SplitLightReviewSection,
  Banner5FutureReadySection,
  BlogSection,
  ClientLogosOutcomeSection,
  ClientVoicesCarouselSection,
  DarkOverlayHeroSection,
  FaqSplitActionSection,
  FeaturedSectionImageLeft,
  FeaturedBlackSection,
  FeaturedSectionImageRight,
  Hero2BlueSection,
  Hero3CenteredProofSection,
  Hero4FeatureSection,
  HoverRevealServicesSection,
  HowItWorksGridSection,
  KeyFeatureGridSection,
  LeadCaptureSection,
  PortfolioCardsSection,
  Pricing1DarkCardsSection,
  Pricing2DarkFlatSection,
  Section2MissionSplit,
  Section4ContactFormClassic,
  SimpleStepsSection,
  TestimonialBannerSection,
} from "@/components/v3/sections";
import { OurProcessScrollCardsSection, ScrollStepperSection, ScrollStepperSixSection } from "@/components/v3/scroll-stepper-section";
import { PrimaryCta, SecondaryCta } from "@/components/v3/primitives";
import { makePageMetadata } from "@/lib/seo";

export const metadata: Metadata = makePageMetadata({
  title: "Demo Storybook | Design System",
  description: "Component catalog for Home V3 patterns grouped by category.",
  path: "/demo",
});

const groups = [
  { id: "nav", label: "Navigation" },
  { id: "styleguide", label: "Style Guide" },
  { id: "heros", label: "Heros" },
  { id: "sections", label: "Sections" },
  { id: "portfolio", label: "Portfolio" },
  { id: "timeline", label: "Timeline" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "footer", label: "Footer/CTAs" },
];

const typographyScale = [
  { id: "h1", name: "Heading 1", sample: "H1", size: "64px / 4rem", lineHeight: "70px", className: "text-[64px] leading-[70px] font-medium tracking-[-0.03em]" },
  { id: "h2", name: "Heading 2", sample: "H2", size: "48px / 3rem", lineHeight: "56px", className: "text-[48px] leading-[56px] font-medium tracking-[-0.03em]" },
  { id: "h3", name: "Heading 3", sample: "H3", size: "40px / 2.5rem", lineHeight: "48px", className: "text-[40px] leading-[48px] font-medium tracking-[-0.03em]" },
  { id: "h4", name: "Heading 4", sample: "H4", size: "28px / 1.75rem", lineHeight: "36px", className: "text-[28px] leading-[36px] font-medium tracking-[-0.02em]" },
  { id: "h5", name: "Heading 5", sample: "H5", size: "24px / 1.5rem", lineHeight: "32px", className: "text-[24px] leading-[32px] font-medium tracking-[-0.02em]" },
  { id: "h6", name: "Heading 6", sample: "H6", size: "20px / 1.25rem", lineHeight: "28px", className: "text-[20px] leading-[28px] font-medium tracking-[-0.02em]" },
  { id: "p-lg", name: "Large Paragraph", sample: "Paragraph", size: "20px / 1.25rem", lineHeight: "30px", className: "text-[20px] leading-[30px] font-medium" },
  { id: "p-md", name: "Paragraph", sample: "Paragraph", size: "16px / 1rem", lineHeight: "26px", className: "text-[16px] leading-[26px] font-medium" },
  { id: "p-sm", name: "Small Paragraph", sample: "Paragraph", size: "14px / 0.875rem", lineHeight: "24px", className: "text-[14px] leading-[24px] font-medium" },
];

const colorTokens = [
  { name: "Dark / Primary", value: "#0D0D0D" },
  { name: "Dark / Soft", value: "#1E1E1E" },
  { name: "Gray / 900", value: "#3D3D3D" },
  { name: "Gray / 700", value: "#656565" },
  { name: "Gray / 500", value: "#9B9B9B" },
  { name: "Gray / 300", value: "#D9D9D9" },
  { name: "Light / 100", value: "#F4F4F4" },
  { name: "Light / 0", value: "#FFFFFF" },
  { name: "Brand / Blue", value: "#413DF2" },
  { name: "Brand / Purple", value: "#410797" },
  { name: "Accent / Coral", value: "#F74C3C" },
  { name: "Accent / Violet", value: "#613FFF" },
];

function StoryFrame({
  id,
  title,
  category,
  children,
}: {
  id: string;
  title: string;
  category: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 max-w-full overflow-hidden rounded-[10px] border border-black/10 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-black/45">{category}</p>
          <h2 className="ds-h6 text-[#1e1e1e]">{title}</h2>
        </div>
        <a href={`#${id}`} className="text-sm text-[#413df2] hover:opacity-80">
          #{id}
        </a>
      </div>
      <div className="max-w-full overflow-x-hidden p-3 md:p-4">{children}</div>
    </section>
  );
}

export default function DemoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f7fb] text-[#1e1e1e]">
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-[74px]">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-black/45">Design System</p>
            <h1 className="text-2xl font-medium tracking-[-0.02em]">Demo Storybook</h1>
          </div>
          <div className="flex items-center gap-3">
            <SecondaryCta href="/">Ir al Home</SecondaryCta>
            <PrimaryCta href="#story-hero-dark">Ver componentes</PrimaryCta>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-6 px-6 py-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-[74px]">
        <aside className="sticky top-24 h-fit rounded-[10px] border border-black/10 bg-white p-4">
          <p className="mb-3 text-xs uppercase tracking-[0.12em] text-black/45">Categories</p>
          <nav className="space-y-1">
            {groups.map((group) => (
              <a
                key={group.id}
                href={`#group-${group.id}`}
                className="block rounded-[6px] px-3 py-2 text-sm font-medium text-[#3d3d3d] transition-colors hover:bg-[#f2f3fd] hover:text-[#413df2]"
              >
                {group.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 rounded-[8px] border border-black/10 bg-[#f6f7fb] p-3 text-xs text-[#3d3d3d]">
            This page works as a storybook-like catalog for DS components.
          </div>
        </aside>

        <div className="storybook-canvas min-w-0 space-y-6">
          <section id="group-nav" className="scroll-mt-24 rounded-[10px] border border-black/10 bg-white px-5 py-4">
            <p className="text-xs uppercase tracking-[0.12em] text-black/45">Navigation</p>
            <h2 className="text-xl font-medium">Navbar patterns are rendered in Home</h2>
            <p className="mt-2 text-sm text-[#3d3d3d]">
              The interactive nav (desktop dropdown + mobile accordions) is active in the real page to avoid nesting fixed headers here.
            </p>
          </section>

          <section id="group-styleguide" className="scroll-mt-24 space-y-6">
            <StoryFrame id="story-styleguide-foundation" title="Style Guide (17:1591)" category="Style Guide">
              <div className="space-y-8 rounded-[8px] border border-black/10 bg-[#f8f8f8] p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="ds-h4 text-[#1e1e1e]">Styleguide</h3>
                  <SecondaryCta href="/">Back to Homepage</SecondaryCta>
                </div>

                <div className="rounded-[8px] border border-black/10 bg-white p-5 md:p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-black/55">Typography</h4>
                  <div className="mt-5 space-y-3">
                    {typographyScale.map((row) => (
                      <div key={row.id} className="grid items-center gap-3 rounded-[6px] border border-black/10 bg-white p-3 md:grid-cols-[220px_minmax(0,1fr)_140px_120px]">
                        <p className="text-sm font-medium text-[#3d3d3d]">{row.name}</p>
                        <p className={`text-[#1e1e1e] ${row.className}`}>{row.sample}</p>
                        <p className="text-xs text-[#656565]">{row.size}</p>
                        <p className="text-xs text-[#656565]">{row.lineHeight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[8px] border border-black/10 bg-white p-5 md:p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-black/55">Buttons & Links</h4>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <PrimaryCta href="#">Primary button</PrimaryCta>
                    <SecondaryCta href="#">Secondary button</SecondaryCta>
                    <a href="#" className="text-base font-medium text-[#413df2] hover:opacity-80">
                      Text Link 1
                    </a>
                    <a href="#" className="text-base font-medium text-[#1e1e1e] underline decoration-black/40 underline-offset-4 hover:decoration-black">
                      Text Link 2
                    </a>
                  </div>
                </div>

                <div className="rounded-[8px] border border-black/10 bg-white p-5 md:p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-black/55">Color Palette</h4>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {colorTokens.map((token) => (
                      <div key={token.name} className="rounded-[8px] border border-black/10 p-2">
                        <div className="h-16 rounded-[6px] border border-black/10" style={{ backgroundColor: token.value }} />
                        <p className="mt-2 text-sm font-medium text-[#1e1e1e]">{token.name}</p>
                        <p className="text-xs text-[#656565]">{token.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StoryFrame>
          </section>

          <section id="group-heros" className="demo-hero-font-style scroll-mt-24 space-y-6">
            <StoryFrame id="story-hero-dark" title="Hero Dark Overlay" category="Heros">
              <DarkOverlayHeroSection
                id="demo-hero-dark"
                backgroundImage="https://www.figma.com/api/mcp/asset/eaf9e64e-7cc6-4116-97b0-8555d3cae1c5"
                badgeText="Hero Pattern 27:5439"
                titleLineOne="Where design meets"
                titleLineTwo="real growth"
                subtitle="Use as the main conversion hero with dual CTA and social proof."
                primaryLabel="Request Proposal"
                primaryHref="#"
                secondaryLabel="View Plans"
                secondaryHref="#"
                avatars={[
                  "https://www.figma.com/api/mcp/asset/8542e6a8-7b4f-42ba-9775-865183e92d21",
                  "https://www.figma.com/api/mcp/asset/e2a55614-25fc-4430-952a-29d2c57e5e93",
                  "https://www.figma.com/api/mcp/asset/4124ac31-e9b7-4aca-bcc8-d7d15be82457",
                  "https://www.figma.com/api/mcp/asset/2f1e43fd-5718-45bd-b498-4f8f977f6026",
                ]}
                ratingText="4.9 average client rating"
              />
            </StoryFrame>

            <StoryFrame id="story-hero-2-blue" title="Hero 2 Blue (52:7607)" category="Heros">
              <Hero2BlueSection
                id="demo-hero-2-blue"
                ratingText="4.6 Rate by 16,000+ Reviews"
                titleLineOne="We’re innovation"
                titleLineTwo="powered 4X growth."
                subtitle="A platform designed to adapt, evolve, and empower businesses of every shape and size."
                primaryLabel="Book a 1:1 meeting"
                primaryHref="#"
                secondaryLabel="Buy template"
                secondaryHref="#"
                image="https://www.figma.com/api/mcp/asset/b621608b-dd53-40f5-b2e0-bdf9e3cdbc7c"
              />
            </StoryFrame>

            <StoryFrame id="story-hero-3-centered-proof" title="Hero 3 Centered Proof (33:4354)" category="Heros">
              <Hero3CenteredProofSection
                id="demo-hero-3-centered-proof"
                avatars={[
                  "https://www.figma.com/api/mcp/asset/0b1ea408-87e6-4e61-b9ce-7edc9f271f7c",
                  "https://www.figma.com/api/mcp/asset/abd951a1-4390-4813-95f4-a5964d8041f3",
                  "https://www.figma.com/api/mcp/asset/f068dd9d-cb0a-4d69-a885-5e34517d49eb",
                  "https://www.figma.com/api/mcp/asset/a7b00737-1c8b-4c3c-8374-75c8e1b3b047",
                ]}
                ratingText="4.6 Rate by 16,000+ Reviews"
                titleLineOne="Where innovation"
                titleLineTwo="meets 4x growth"
                subtitle="A platform designed to adapt, evolve, and empower businesses of every shape and size."
                ctaLabel="Book a 1:1 meeting"
                ctaHref="#"
                leftImage="https://www.figma.com/api/mcp/asset/5e11eec6-d819-4d04-aa83-b1187b510793"
                centerImage="https://www.figma.com/api/mcp/asset/fe7974d1-f3c0-402b-9b35-eeb67eb58c07"
                rightImage="https://www.figma.com/api/mcp/asset/e631f2c6-b07f-4c94-ae5b-2f61c36c0dcd"
                quote="“The team brought clarity to our vision and delivered beyond expectation’s. A seamless blend of strategy, execution, and ongoing support.”"
                author="Emma Johnson"
                role="CEO & Co-Founder of Roundsite"
                trustedText="TRUSTED BY 1,00,000+ CUSTOMERS AROUND WORLDS"
                logos={["Acme Corp", "Cubekit", "ContrastAI", "Eightball", "CoreOS", "Command+R"]}
              />
            </StoryFrame>

            <StoryFrame id="story-hero-4-feature" title="Hero 4 Feature (52:8829)" category="Heros">
              <Hero4FeatureSection
                id="demo-hero-4-feature"
                eyebrow="Features"
                titleLineOne="Powering growth"
                titleLineTwo="with innovation"
                subtitle="Explore the capabilities that make our platform smarter, faster, and built to scale with your business."
                primaryLabel="Book a 1:1 meeting"
                primaryHref="#"
                metricValue="50M+"
                metricLabel="Users empowered worldwide with scalable solutions"
                developerTitleLineOne="Get API access"
                developerTitleLineTwo="for developers"
                developerCtaLabel="Explore Integration"
                developerCtaHref="#"
                metricImage="https://www.figma.com/api/mcp/asset/e0d8764f-93ac-4a58-9b43-d17a0dbe7d1a"
                developerImage="https://www.figma.com/api/mcp/asset/a2f58a04-b3af-4fc6-a78b-1db36b0b6421"
                sideImage="https://www.figma.com/api/mcp/asset/9a0aeb6c-fb43-4047-bd02-948ecd1ef72f"
                miniLogos={[
                  "https://www.figma.com/api/mcp/asset/f558dd03-da0e-458a-8d30-1347d91cead3",
                  "https://www.figma.com/api/mcp/asset/83a00856-911e-41ff-b160-14866580680e",
                  "https://www.figma.com/api/mcp/asset/fbb82343-f0fa-4812-bb8e-14ce8f4666c0",
                ]}
              />
            </StoryFrame>
          </section>

          <section id="group-sections" className="scroll-mt-24 space-y-6">
            <StoryFrame id="story-client-logos" title="Client Logos + Outcomes (46:6198)" category="Sections">
              <ClientLogosOutcomeSection
                id="demo-client-logos"
                logosTitle="Our Clients"
                logos={["Cubekit", "Acme Corp", "Alt+Shift", "ContrastAI", "Eightball", "CoreOS", "Command+R", "ennLabs"]}
                titleLineOne="Websites built to generate"
                titleLineTwo="real business results"
                subtitle="Designed to attract clients, convert leads, and support growth across different industries."
                ctaLabel="Request Proposal"
                ctaHref="#"
                stats={[
                  { value: "95%", label: "Clients satisfied" },
                  { value: "15+", label: "Industries served" },
                  { value: "$25M+", label: "Revenue influenced" },
                ]}
              />
            </StoryFrame>

            <StoryFrame id="story-below-the-fold" title="Below the Fold (77:4915)" category="Sections">
              <BelowTheFoldSection
                id="demo-below-the-fold"
                titleLineOne="We deliver Innovation"
                titleLineTwo="that drives results"
                subtitleLineOne="With years of expertise, we craft solutions that drive growth,"
                subtitleLineTwo="simplify challenges, and create lasting impact."
                topCtaLabel="Meet the Team"
                topCtaHref="#"
                stats={[
                  { value: "95%", lineOne: "Customer satisfaction", lineTwo: "built on trust and results" },
                  { value: "15+", lineOne: "Industries empowered", lineTwo: "with tailored solutions" },
                  { value: "$25M+", lineOne: "Business value generated", lineTwo: "through strategic insights" },
                ]}
                secondaryTitleLineOne="Todo lo que necesitas"
                secondaryTitleLineTwo="para empezar hoy"
                secondarySubtitleLineOne="Simple, escalable y listo para cualquier industria."
                secondarySubtitleLineTwo="Lanza más rápido y crece sin fricción."
                features={[
                  {
                    title: "Flexible framework",
                    lineOne: "Adapt workflows, tools, and integrations to fit",
                    lineTwo: "your business model without extra complexity.",
                  },
                  {
                    title: "SEO-ready growth",
                    lineOne: "Technical structure optimized to rank and attract",
                    lineTwo: "high-intent organic traffic.",
                  },
                  {
                    title: "Smart integrations",
                    lineOne: "Connect forms, CRM, and automations to run",
                    lineTwo: "faster with less manual effort.",
                  },
                  {
                    title: "Adaptive design",
                    lineOne: "Consistent visual experience across desktop, tablet, and",
                    lineTwo: "mobile to improve trust and action.",
                  },
                  {
                    title: "Simple management",
                    lineOne: "Update key content and sections without depending on",
                    lineTwo: "complex technical workflows.",
                  },
                  {
                    title: "Optimized performance",
                    lineOne: "Fast loading and clean architecture to reduce bounce",
                    lineTwo: "and increase conversion rates.",
                  },
                  {
                    title: "Mobile-first experience",
                    lineOne: "Designed for mobile users where most discovery and",
                    lineTwo: "lead capture actually happens.",
                  },
                ]}
                activeDot={0}
                bottomCtaLabel="Explore feature"
                bottomCtaHref="#"
              />
            </StoryFrame>

            <StoryFrame id="story-featured-black" title="featured black (80:5095)" category="Sections">
              <FeaturedBlackSection
                id="demo-featured-black"
                titleLineOne="Not just support"
                titleLineTwo="- A True Partner"
                descriptionLines={[
                  "Our dedicated support team is available 24/7 to help you",
                  "with any questions, issues, or setup needs. We believe in",
                  "collaboration that drives real impact, not delays.",
                ]}
                features={[
                  { icon: "collaboration", lineOne: "Built-in collaboration tools", lineTwo: "for seamless teamwork" },
                  { icon: "layout", lineOne: "Smart layouts that cut", lineTwo: "project time in half" },
                  { icon: "speed", lineOne: "Faster results with less", lineTwo: "complexity" },
                  { icon: "integration", lineOne: "One-click integrations", lineTwo: "with your favorite tools" },
                ]}
                featureImage="https://www.figma.com/api/mcp/asset/ca337080-94cb-422c-8be2-e4bb50ec6c44"
                stats={[
                  { value: "4x", lineOne: "Faster project delivery compared", lineTwo: "to traditional workflows" },
                  { value: "72%", lineOne: "Reduction in support requests", lineTwo: "after onboarding" },
                  { value: "50M+", lineOne: "Users empowered", lineTwo: "worldwide with scalable", lineThree: "solutions" },
                ]}
                quotePrimary="“The team brought clarity to our vision"
                quoteSecondaryLineOne="and delivered beyond expectation’s. A"
                quoteSecondaryLineTwo="seamless blend of strategy, execution,"
                quoteSecondaryLineThree="and ongoing support.”"
              />
            </StoryFrame>

            <StoryFrame id="story-blog-section" title="blog section (81:5179)" category="Sections">
              <BlogSection
                id="demo-blog-section"
                titleLineOne="Take a look at our"
                titleLineTwo="latest insights"
                subtitleLineOne="Explore articles, case studies, and"
                subtitleLineTwo="resources - crafted to keep you ahead."
                ctaLabel="See all blogs"
                ctaHref="#"
                items={[
                  {
                    image: "https://www.figma.com/api/mcp/asset/92d5a8f8-138e-402a-aa83-ed5d58375682",
                    title: "The Future of scalable tech",
                    lineOne: "How businesses can stay agile in a",
                    lineTwo: "rapidly changing digital world.",
                    ctaLabel: "Read article",
                    ctaHref: "#",
                  },
                  {
                    image: "https://www.figma.com/api/mcp/asset/400b99c0-5a77-44a5-b455-788002c1c42e",
                    title: "Design thinking for growth",
                    lineOne: "Practical strategies to merge creativity",
                    lineTwo: "with performance.",
                    ctaLabel: "Read article",
                    ctaHref: "#",
                  },
                  {
                    image: "https://www.figma.com/api/mcp/asset/30bfc0f2-2bae-480e-bc15-e4bdbe744d12",
                    title: "AI, SaaS & innovation beyond",
                    lineOne: "Why innovation is the core driver for the",
                    lineTwo: "next generation of companies.",
                    ctaLabel: "Read article",
                    ctaHref: "#",
                  },
                ]}
              />
            </StoryFrame>

            <StoryFrame id="story-how-it-works" title="Section 1 · How It Works Grid (48:7341)" category="Sections">
              <HowItWorksGridSection
                id="demo-how-it-works"
                eyebrowText="Simple steps to get started"
                title="Here’s how it works"
                subtitle="Set up and scale your digital presence with a clear process."
                cards={[
                  {
                    icon: "vision",
                    title: "Share your vision",
                    description: "We start by understanding your goals and what success looks like.",
                    bullets: ["Discovery session", "Define objectives", "Align strategy"],
                  },
                  {
                    icon: "solution",
                    title: "Create the solution",
                    description: "We design and build a conversion-focused execution plan.",
                    bullets: ["Custom roadmap", "Design & development", "Scalable structure"],
                  },
                  {
                    icon: "launch",
                    title: "Launch & support",
                    description: "We deploy, optimize, and support your growth.",
                    bullets: ["Smooth launch", "Iteration loop", "Dedicated support"],
                  },
                ]}
                finalTitle="Ready to make the switch?"
                finalSubtitle="Future-proof your business with a platform built to adapt and scale."
                ctaLabel="Request Proposal"
                ctaHref="#"
              />
            </StoryFrame>

            <StoryFrame id="story-simple-steps" title="Simple Steps (69:4566)" category="Sections">
              <SimpleStepsSection
                id="demo-simple-steps"
                titleLineOne="Simple steps for"
                titleLineTwo="lasting impact"
                subtitleLineOne="Discovery to delivery, we follow a proven framework"
                subtitleLineTwo="that ensures clarity, precision, and growth."
                items={[
                  {
                    image: "https://www.figma.com/api/mcp/asset/a2fe9724-ad37-4a72-971f-3affd15dcdf0",
                    imageAlt: "Discover and define phase",
                    title: "Discover & Define",
                    description: "Uncover insights that matter\nmost to your business.",
                    bullets: ["Market research", "Brand & audience mapping", "Goal alignment", "Competitive analysis"],
                  },
                  {
                    image: "https://www.figma.com/api/mcp/asset/190ac4a4-3b74-4b80-9e9c-ac384158a90f",
                    imageAlt: "Strategy and direction phase",
                    title: "Strategy & Direction",
                    description: "Translate insights into action\nwith a clear growth path.",
                    bullets: ["Innovation roadmap", "Strategic positioning", "Business transformation", "Digital adoption"],
                  },
                  {
                    image: "https://www.figma.com/api/mcp/asset/abb8fddb-4248-419a-988f-61d98adea82d",
                    imageAlt: "Build and execute phase",
                    title: "Build & Execute",
                    description: "Bring ideas to life with\nprecision and scalability.",
                    bullets: ["Web & digital solutions", "Product development", "Campaign execution", "User experience design"],
                  },
                  {
                    image: "https://www.figma.com/api/mcp/asset/6c929710-d86c-4551-a8db-324efc239a71",
                    imageAlt: "Test and refine phase",
                    title: "Test & Refine",
                    description: "Validate detail to ensure\nseamless performance.",
                    bullets: ["Usability testing", "Feedback-driven adjustments", "Scalable improvements", "Iterative design processes"],
                  },
                ]}
              />
            </StoryFrame>

            <StoryFrame id="story-section-2-mission" title="Section 2 · Mission Split (52:8549)" category="Sections">
              <Section2MissionSplit
                id="demo-section-2-mission"
                titleLineOne="We deliver Innovation"
                titleLineTwo="that drives results"
                subtitle="With years of expertise, we craft solutions that drive growth, simplify challenges, and create lasting impact."
                missionLabel="Our Mission"
                ctaLabel="Meet the Team"
                ctaHref="#"
                stats={[
                  { icon: "satisfaction", value: "95%", label: "Customer satisfaction" },
                  { icon: "industries", value: "15+", label: "Industries empowered" },
                  { icon: "value", value: "$25M+", label: "Business value" },
                ]}
                image="https://www.figma.com/api/mcp/asset/5e3c5fcc-7dd9-4593-93e0-8f22d832a5ff"
                tickerItems={[
                  { avatar: "https://www.figma.com/api/mcp/asset/67e69833-166b-4dab-a9e2-af026886dcbf", text: "Scale faster." },
                  { avatar: "https://www.figma.com/api/mcp/asset/f88755f0-a828-4ccd-9b27-26ec4f73fe1e", text: "Innovate smarter.", muted: true },
                  { avatar: "https://www.figma.com/api/mcp/asset/029da60a-5d25-4bcf-b45f-f892f5e3c744", text: "Lead stronger." },
                  { avatar: "https://www.figma.com/api/mcp/asset/67661f33-ae8b-43a3-8f3f-37a2c3f435ed", text: "Build trust.", muted: true },
                  { avatar: "https://www.figma.com/api/mcp/asset/55853970-6da0-45a4-9fee-d613ad3a90f5", text: "Grow smarter." },
                  { avatar: "https://www.figma.com/api/mcp/asset/c9744061-c924-4aeb-8282-21202468bb7e", text: "Move faster.", muted: true },
                ]}
              />
            </StoryFrame>

            <StoryFrame id="story-section-3-mission" title="Section 3 · Mission Split (52:8549)" category="Sections">
              <Section2MissionSplit
                id="demo-section-3-mission"
                titleLineOne="We deliver Innovation"
                titleLineTwo="that drives results"
                subtitle="With years of expertise, we craft solutions that drive growth, simplify challenges, and create lasting impact."
                missionLabel="Our Mission"
                ctaLabel="Meet the Team"
                ctaHref="#"
                stats={[
                  { icon: "satisfaction", value: "95%", label: "Customer satisfaction" },
                  { icon: "industries", value: "15+", label: "Industries empowered" },
                  { icon: "value", value: "$25M+", label: "Business value" },
                ]}
                image="https://www.figma.com/api/mcp/asset/5e3c5fcc-7dd9-4593-93e0-8f22d832a5ff"
                tickerItems={[
                  { avatar: "https://www.figma.com/api/mcp/asset/67e69833-166b-4dab-a9e2-af026886dcbf", text: "Scale faster." },
                  { avatar: "https://www.figma.com/api/mcp/asset/f88755f0-a828-4ccd-9b27-26ec4f73fe1e", text: "Innovate smarter.", muted: true },
                  { avatar: "https://www.figma.com/api/mcp/asset/029da60a-5d25-4bcf-b45f-f892f5e3c744", text: "Lead stronger." },
                  { avatar: "https://www.figma.com/api/mcp/asset/67661f33-ae8b-43a3-8f3f-37a2c3f435ed", text: "Build trust.", muted: true },
                  { avatar: "https://www.figma.com/api/mcp/asset/55853970-6da0-45a4-9fee-d613ad3a90f5", text: "Grow smarter." },
                  { avatar: "https://www.figma.com/api/mcp/asset/c9744061-c924-4aeb-8282-21202468bb7e", text: "Move faster.", muted: true },
                ]}
              />
            </StoryFrame>

            <StoryFrame id="story-section-4-contact" title="Section 4 · Contact Form (52:8548)" category="Sections">
              <Section4ContactFormClassic
                id="demo-section-4-contact"
                eyebrow="Contact Roundsite"
                titleLineOne="We’d love to"
                titleLineTwo="hear from you."
                subtitle="Have a question, looking for support, or curious about how Roundsite can help your business? Our team is always here to guide you."
                formTitle="Send a Message"
                formSubtitle="Our support team is available 24/7 to assist with any issues."
              />
            </StoryFrame>

            <StoryFrame id="story-featured-image-right" title="Featured Section Image Right (58:10676)" category="Sections">
              <FeaturedSectionImageRight
                id="demo-featured-image-right"
                eyebrow="Smart, scalable, and built for modern teams."
                titleLineOne="Innovation, without"
                titleLineTwo="the complexity"
                ctaLabel="Get Started"
                ctaHref="#"
                paragraphOne="Our platform brings clarity to your operations by syncing data across systems and surfacing real-time insights."
                paragraphTwo="No extra complexity - just adaptive intelligence that grows with you."
                backgroundImage="https://www.figma.com/api/mcp/asset/101c412e-6de8-449b-bb88-61b3567fd0ea"
                featureImage="https://www.figma.com/api/mcp/asset/cdad0003-c03e-4dcb-a658-e5ce68ec6462"
              />
            </StoryFrame>

            <StoryFrame id="story-featured-image-left" title="feactured section image left (58:10700)" category="Sections">
              <FeaturedSectionImageLeft
                id="demo-featured-image-left"
                eyebrow="Smart, scalable, and built for modern teams."
                titleLineOne="Innovation, without"
                titleLineTwo="the complexity"
                ctaLabel="Get Started"
                ctaHref="#"
                paragraphOne="Our platform brings clarity to your operations by syncing data across systems and surfacing real-time insights."
                paragraphTwo="No extra complexity - just adaptive intelligence that grows with you."
                backgroundImage="https://www.figma.com/api/mcp/asset/9893cf4d-14ef-4458-b7b1-c862ff8c6480"
                featureImage="https://www.figma.com/api/mcp/asset/8fde3eea-4c9d-4972-831c-957332898829"
              />
            </StoryFrame>

            <StoryFrame id="story-key-feature" title="Key Feature Grid" category="Sections">
              <KeyFeatureGridSection
                id="demo-key-feature-grid"
                eyebrow="Key Feature"
                titleLineOne="Everything you"
                titleLineTwo="need to get started"
                subtitle="Simple, scalable, and ready for any industry."
                ctaLabel="Explore"
                ctaHref="#"
                items={[
                  { icon: "setup", title: "Seamless setup", description: "Launch faster with clear implementation." },
                  { icon: "framework", title: "Flexible framework", description: "Adapt to your business stage." },
                  { icon: "performance", title: "Trusted performance", description: "Built for speed and conversion." },
                  { icon: "ecosystem", title: "Connected ecosystem", description: "Integrate with your tools." },
                  { icon: "scale", title: "Scalable growth", description: "Expand without rebuilding everything." },
                  { icon: "insights", title: "Real-time insights", description: "Measure behavior and optimize." },
                ]}
              />
            </StoryFrame>

            <StoryFrame id="story-hover-services" title="Our Services / Hover Reveal" category="Sections">
              <HoverRevealServicesSection
                id="demo-hover-services"
                eyebrow="Our Services"
                titleLineOne="Explore what"
                titleLineTwo="we do best"
                intro="Service hierarchy with hover reveal chips and CTA."
                ctaLabel="Request Proposal"
                ctaHref="#"
                items={[
                  {
                    title: "Strategy",
                    description: "Frameworks and positioning for growth decisions.",
                    image: "https://www.figma.com/api/mcp/asset/4cafdd73-b8c3-470d-9bce-393d6ca84715",
                    chips: ["Roadmap", "Research", "Positioning"],
                    ctaLabel: "Learn more",
                    ctaHref: "#",
                  },
                  {
                    title: "Technology",
                    description: "Conversion-focused development and integrations.",
                    image: "https://www.figma.com/api/mcp/asset/6f9b6a7e-0d73-4cd7-953c-d23911cab9ff",
                    chips: ["Build", "Integrations", "Automation"],
                    ctaLabel: "Learn more",
                    ctaHref: "#",
                  },
                  {
                    title: "Support",
                    description: "Post-launch optimization and maintenance.",
                    image: "https://www.figma.com/api/mcp/asset/afe672a4-6741-4a98-9a17-d60212c3dc9d",
                    chips: ["Maintenance", "Performance", "Iteration"],
                    ctaLabel: "Learn more",
                    ctaHref: "#",
                  },
                ]}
              />
            </StoryFrame>

            <StoryFrame id="story-pattern-i" title="Pattern I / About Overlay" category="Sections">
              <AboutOverlayStatsSection
                id="demo-about-overlay"
                eyebrow="Pattern I"
                titleLineOne="Our focus is on delivering"
                titleLineTwo="measurable results through"
                titleLineThree="strategy, execution, and collaboration."
                subtitle="Use this section for benefits narrative + KPI overlay."
                ctaLabel="Meet the Team"
                ctaHref="#"
                image="https://www.figma.com/api/mcp/asset/ca337080-94cb-422c-8be2-e4bb50ec6c44"
                stats={[
                  { icon: "satisfaction", value: "95%", label: "Customer satisfaction" },
                  { icon: "industries", value: "15+", label: "Industries served" },
                  { icon: "value", value: "$25M+", label: "Business value generated" },
                  { icon: "users", value: "60M+", label: "Users reached" },
                ]}
              />
            </StoryFrame>
          </section>

          <section id="group-testimonials" className="scroll-mt-24 space-y-6">
            <StoryFrame id="story-pattern-j" title="Pattern J / What our clients say" category="Testimonials">
              <ClientVoicesCarouselSection
                id="demo-pattern-j"
                title="Pattern J: What our clients say"
                subtitle="One-row testimonial carousel for social proof."
                ratingText="4.9 average rating"
                items={[
                  {
                    quote: "Their process gave us clarity and measurable growth in lead quality.",
                    author: "Daniel Roberts",
                    role: "Founder",
                    avatar: "https://www.figma.com/api/mcp/asset/5840bd1f-3900-4cf9-8cc1-c31c11de32b3",
                  },
                  {
                    quote: "Execution was fast, structured, and aligned to our goals.",
                    author: "Leila Chen",
                    role: "Marketing Director",
                    avatar: "https://www.figma.com/api/mcp/asset/c403a76f-7cd6-41d4-ac60-c371e5ebc420",
                  },
                  {
                    quote: "We now have a website that supports sales conversations.",
                    author: "James Patel",
                    role: "COO",
                    avatar: "https://www.figma.com/api/mcp/asset/b860798b-cdc4-44be-8353-3cddd5130012",
                  },
                ]}
              />
            </StoryFrame>

            <StoryFrame id="story-testimonial-banner" title="Testimonial Banner" category="Testimonials">
              <TestimonialBannerSection
                id="demo-banner"
                quote="The team brought clarity to our vision and delivered beyond expectations. A seamless blend of strategy, execution, and ongoing support."
                author="Emma Johnson"
                role="CEO & Co-Founder"
                reviewsText="4.6 Rate by 16,000+ Reviews"
                bgImage="https://www.figma.com/api/mcp/asset/4f3985a6-d756-48a4-8db6-cd3dba920c9f"
              />
            </StoryFrame>

            <StoryFrame id="story-banner-1-dark-quote" title="Banner 1 (52:8616)" category="Testimonials">
              <Banner1DarkQuoteSection
                id="demo-banner-1-dark-quote"
                backgroundImage="https://www.figma.com/api/mcp/asset/7e5a3767-71c3-439a-8ba0-16007c23b707"
                quoteLineOne="“The team brought clarity to our vision"
                quoteLineTwo="and delivered beyond expectation’s."
                quoteAccent="A seamless blend of strategy, execution,"
                quoteLineThree="and ongoing support.”"
                author="Emm Johnson"
                role="CEO & Co-Founder of Roundsite"
                ratingText="4.6 Rate by 16,000+ Reviews"
              />
            </StoryFrame>

            <StoryFrame id="story-banner-2-integration" title="Banner 2 (48:7452)" category="Testimonials">
              <Banner2IntegrationSection
                id="demo-banner-2-integration"
                topImage="https://www.figma.com/api/mcp/asset/4ebeebd9-07c4-4cb5-a231-e19b2d71aa9e"
                titleLineOne="Connect favorite"
                titleLineTwo="with effortless"
                subtitle="Connect apps, sync workflows, and turn scattered data into actionable outcomes - without needing deep technical knowledge."
                ctaLabel="Explore Integration"
                ctaHref="#"
              />
            </StoryFrame>

            <StoryFrame id="story-banner-3-cta-split" title="Banner 3 (53:8889)" category="Testimonials">
              <Banner3CtaSplitSection
                id="demo-banner-3-cta-split"
                ratingText="4.6 Rate by 16,000+ Reviews"
                titleLineOne="Future-ready."
                titleLineTwo="starting today."
                subtitle="Join thousands of businesses already transforming with our solutions."
                ctaLabel="Book a strategy call"
                ctaHref="#"
                image="https://www.figma.com/api/mcp/asset/d715dcca-d7ed-4487-9bd5-94a6753e5bbe"
              />
            </StoryFrame>

            <StoryFrame id="story-banner-4-split-light" title="Banner 4 (55:8959)" category="Testimonials">
              <Banner4SplitLightReviewSection
                id="demo-banner-4-split-light"
                image="https://www.figma.com/api/mcp/asset/822d0726-9483-4a24-9282-452193eb8e9a"
                quoteLineOne="“The team brought clarity to our"
                quoteLineTwo="vision and delivered beyond"
                quoteLineThree="A seamless blend of strategy, execution, and ongoing support.”"
                author="Emm Johnson"
                role="CEO & Co-Founder of Roundsite"
                ratingText="4.6 Rate by 16,000+ Reviews"
              />
            </StoryFrame>

            <StoryFrame id="story-banner-5-future-ready" title="Banner 5 (26:4996)" category="Testimonials">
              <Banner5FutureReadySection
                id="demo-banner-5-future-ready"
                backgroundImage="https://www.figma.com/api/mcp/asset/fb4a38c2-978c-4aa7-8663-a5cc1b1abd78"
                avatars={[
                  "https://www.figma.com/api/mcp/asset/52855ad6-84f3-4805-b17f-b61af24fdd61",
                  "https://www.figma.com/api/mcp/asset/111dd6b3-f87a-4f46-9790-0e30e0648fab",
                  "https://www.figma.com/api/mcp/asset/2b4c81f7-0a19-4193-941a-30aabcfe37d7",
                  "https://www.figma.com/api/mcp/asset/62822419-c8ba-462c-a560-0c5e2f3215f5",
                ]}
                ratingText="4.6 Rate by 16,000+ Reviews"
                titleLineOne="Future-ready."
                titleLineTwo="starting today."
                subtitleLineOne="Join thousands of businesses already"
                subtitleLineTwo="transforming with our solutions."
                ctaLabel="Book a strategy call"
                ctaHref="#"
              />
            </StoryFrame>
          </section>

          <section id="group-pricing" className="scroll-mt-24 space-y-6">
            <StoryFrame id="story-pricing-1-dark-cards" title="Pricing 1 (52:7939)" category="Pricing">
              <Pricing1DarkCardsSection
                id="demo-pricing-1-dark-cards"
                backgroundImage="https://www.figma.com/api/mcp/asset/1e994923-6c4c-498f-96db-717be23e68af"
                plans={[
                  {
                    name: "Basic",
                    price: "$15/mo",
                    description: "The essential toolkit for small teams and new businesses.",
                    features: [
                      "Unlimited automation",
                      "Basic integrations",
                      "Advanced analytics",
                      "Custom workflows",
                      "Real-time notifications",
                      "Dedicated support",
                      "Multi-platform accessibility",
                    ],
                    ctaLabel: "Start for free",
                    ctaHref: "#",
                  },
                  {
                    name: "Growth",
                    price: "$30/mo",
                    description: "Advanced tools to help scaling businesses move faster.",
                    features: [
                      "Everything in Basic",
                      "Premium integrations",
                      "AI-powered efficiency",
                      "Custom reporting",
                      "Collaboration tools",
                      "Analytics dashboard",
                      "Mobile accessibility",
                      "Dedicated support",
                    ],
                    ctaLabel: "Get started",
                    ctaHref: "#",
                    highlight: true,
                    badge: "Most Popular",
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    description: "Custom solutions for large teams and complex operations.",
                    features: [
                      "Everything in Growth",
                      "Dedicated account manage",
                      "Advanced security controls",
                      "API access & custom Solution",
                      "Real-time analytics reporting",
                      "24/7 customer support",
                      "Integration with third-party tools",
                    ],
                    ctaLabel: "Talk to sales",
                    ctaHref: "#",
                  },
                ]}
                trustText="TRUSTED BY 1,00,000+ CUSTOMERS AROUND WORLDS"
                logos={["Cubekit", "ContrastAI", "CoreOS"]}
              />
            </StoryFrame>

            <StoryFrame id="story-pricing-2-dark-flat" title="Pricing 2 (52:8210)" category="Pricing">
              <Pricing2DarkFlatSection
                id="demo-pricing-2-dark-flat"
                title="Flexible pricing that scales with you"
                subtitle="Choose a plan that fits your needs — from early stage startups to growing enterprises."
                plans={[
                  {
                    name: "Basic",
                    price: "$15/mo",
                    description: "The essential toolkit for small teams and new businesses.",
                    features: [
                      "Unlimited automation",
                      "Basic integrations",
                      "Advanced analytics",
                      "Custom workflows",
                      "Real-time notifications",
                      "Dedicated support",
                      "Multi-platform accessibility",
                    ],
                    ctaLabel: "Start for free",
                    ctaHref: "#",
                  },
                  {
                    name: "Growth",
                    price: "$30/mo",
                    description: "Advanced tools to help scaling businesses move faster.",
                    features: [
                      "Everything in Basic",
                      "Premium integrations",
                      "AI-powered efficiency",
                      "Custom reporting",
                      "Collaboration tools",
                      "Analytics dashboard",
                      "Mobile accessibility",
                      "Dedicated support",
                    ],
                    ctaLabel: "Get started",
                    ctaHref: "#",
                    highlight: true,
                    badge: "Most Popular",
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    description: "Custom solutions for large teams and complex operations.",
                    features: [
                      "Everything in Growth",
                      "Dedicated account manage",
                      "Advanced security controls",
                      "API access & custom Solution",
                      "Real-time analytics reporting",
                      "24/7 customer support",
                      "Integration with third-party tools",
                    ],
                    ctaLabel: "Talk to sales",
                    ctaHref: "#",
                  },
                ]}
                trustText="TRUSTED BY 1,00,000+ CUSTOMERS AROUND WORLDS"
                logos={["Acme Corp", "Cubekit", "ContrastAI", "CoreOS"]}
              />
            </StoryFrame>
          </section>

          <section id="group-portfolio" className="scroll-mt-24 space-y-6">
            <StoryFrame id="story-portfolio-cards" title="Portfolio Section (58:10620)" category="Portfolio">
              <PortfolioCardsSection
                id="demo-portfolio-cards"
                titleLineOne="Our"
                titleLineTwo="Portfolio pages."
                items={[
                  {
                    image: "https://www.figma.com/api/mcp/asset/b3f5e911-84db-4362-902b-7cad4926a275",
                    title: "20+ Pages",
                    description: "A full set of polished pages tailored for multiple industries and business needs.",
                    ctaLabel: "See pages",
                    ctaHref: "#",
                  },
                  {
                    image: "https://www.figma.com/api/mcp/asset/1a8b8817-5608-4c8f-9bc3-5fe1c28f39e1",
                    title: "40+ Sections",
                    description: "Custom-crafted layouts you can mix, match, and scale effortlessly.",
                    ctaLabel: "Buy template",
                    ctaHref: "#",
                  },
                  {
                    image: "https://www.figma.com/api/mcp/asset/880c7dc8-1d4a-42d7-9d8b-69c03eabe910",
                    title: "Global styles",
                    description: "Update fonts, colors, and design tokens once—see changes reflect site-wide.",
                    ctaLabel: "Preview in Webflow",
                    ctaHref: "#",
                  },
                ]}
              />
            </StoryFrame>
          </section>

          <section id="group-timeline" className="scroll-mt-24 space-y-6">
            <StoryFrame id="story-timeline-stepper" title="Timeline / Stepper (Requested)" category="Timeline">
              <ScrollStepperSection
                id="demo-timeline-stepper"
                eyebrow="Timeline"
                title="Simple steps for lasting impact"
                subtitle="A visual process timeline with progress fill on scroll, alternating image/content layout, and conversion-focused steps."
                ctaHref="#"
                ctaLabel="Request Proposal"
                whatsappLabel="Hablemos por WhatsApp"
                whatsappMessage="Hola, quiero implementar este timeline en mi sitio."
                items={[
                  {
                    step: "Step 01",
                    title: "Discovery & goals",
                    description: "We align your business goals, offer, and target audience before design starts.",
                    bullets: ["Business audit", "Audience mapping", "Offer definition"],
                    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
                    imageAlt: "Strategy and planning session",
                  },
                  {
                    step: "Step 02",
                    title: "Design for conversion",
                    description: "We structure pages to improve trust, clarity, and lead capture from first visit.",
                    bullets: ["Wireframes", "Visual system", "CTA hierarchy"],
                    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=80",
                    imageAlt: "UI design process",
                  },
                  {
                    step: "Step 03",
                    title: "Build & integration",
                    description: "We develop a fast, responsive site and connect forms, WhatsApp, and tracking.",
                    bullets: ["Responsive build", "Form integration", "Analytics setup"],
                    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
                    imageAlt: "Website development",
                  },
                  {
                    step: "Step 04",
                    title: "Launch & optimize",
                    description: "We launch, validate performance, and keep improving based on real user behavior.",
                    bullets: ["QA and launch", "Performance tuning", "Iteration plan"],
                    image: "https://images.unsplash.com/photo-1551281044-8f9f7f7f75b5?auto=format&fit=crop&w=900&q=80",
                    imageAlt: "Performance dashboard and optimization",
                  },
                ]}
              />
            </StoryFrame>

            <StoryFrame id="story-timeline-stepper-6" title="Timeline / Stepper 6 (70:5121)" category="Timeline">
              <ScrollStepperSixSection
                id="demo-timeline-stepper-6"
                eyebrow="How we work"
                titleLineOne="Simple steps"
                titleLineTwo="for lasting impact"
                subtitleLineOne="A premium stepper that fills as you scroll and keeps users focused"
                subtitleLineTwo="until every step is completed."
                items={[
                  {
                    step: "Step 01",
                    title: "Discovery & strategy",
                    description: "We map your goals, offer, and audience so the website starts with a clear commercial direction.",
                    bullets: ["Business diagnosis", "Lead goals", "Message clarity"],
                    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
                    imageAlt: "Real estate strategy discussion",
                    imageOnTop: true,
                  },
                  {
                    step: "Step 02",
                    title: "Structure & UX flow",
                    description: "We design pages that guide visitors toward inquiries, WhatsApp conversations, and proposal requests.",
                    bullets: ["Content structure", "Conversion paths", "CTA hierarchy"],
                    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
                    imageAlt: "User experience wireframe layout",
                    imageOnTop: false,
                  },
                  {
                    step: "Step 03",
                    title: "Build & launch",
                    description: "We develop a fast, modern, and responsive site, then launch with tracking and quality checks in place.",
                    bullets: ["Responsive development", "Performance setup", "Launch QA"],
                    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
                    imageAlt: "Website development process",
                    imageOnTop: true,
                  },
                  {
                    step: "Step 04",
                    title: "Optimization loop",
                    description: "After launch, we refine key pages and forms based on user behavior to increase qualified leads.",
                    bullets: ["Behavior analysis", "Copy refinements", "Conversion improvements"],
                    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80",
                    imageAlt: "Analytics and optimization dashboard",
                    imageOnTop: false,
                  },
                ]}
              />
            </StoryFrame>

            <StoryFrame id="story-our-process-scroll-cards" title="Our Process Scroll Cards (69:4974)" category="Timeline">
              <OurProcessScrollCardsSection
                id="demo-our-process-scroll-cards"
                eyebrow="Our Services"
                titleLineOne="Explore our"
                titleLineTwo="process"
                subtitleLineOne="Explore solutions for help your business scale smarter,"
                subtitleLineTwo="operate efficiently, and stay ahead of change."
                ctaLabel="CTA"
                ctaHref="#"
                items={[
                  {
                    title: "Growth Enablement",
                    description: "Tailored programs that optimize performance, enhance customer experience, and accelerate measurable outcomes.",
                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
                    imageAlt: "Team strategy and growth",
                  },
                  {
                    title: "Operations Strategy",
                    description: "Process-driven improvements that reduce friction, boost execution, and keep teams aligned with business goals.",
                    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80",
                    imageAlt: "Operations strategy session",
                  },
                  {
                    title: "Performance Acceleration",
                    description: "A practical framework to improve speed, conversion, and outcomes across your digital touchpoints.",
                    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
                    imageAlt: "Performance and analytics review",
                  },
                  {
                    title: "Conversion Architecture",
                    description: "Clear structure for user journeys, offer positioning, and high-intent calls to action that drive leads.",
                    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1600&q=80",
                    imageAlt: "Conversion-focused layout",
                  },
                  {
                    title: "Scale Readiness",
                    description: "Foundational systems prepared for growth, with modular pages and content strategy ready to expand.",
                    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
                    imageAlt: "Business scaling planning",
                  },
                ]}
              />
            </StoryFrame>
          </section>

          <section id="group-faq" className="scroll-mt-24 space-y-6">
            <StoryFrame id="story-faq-split-action" title="FAQ (52:8479)" category="FAQ">
              <FaqSplitActionSection
                id="demo-faq-split-action"
                titleLineOne="Frequently"
                titleLineTwo="asked questions"
                subtitle="Answers to common questions about our platform and services."
                ctaLabel="Ask a question"
                ctaHref="#"
                items={[
                  {
                    question: "What is this platform?",
                    answer:
                      "It’s a flexible solution designed to help teams of all sizes streamline operations, boost collaboration, and scale with confidence.",
                  },
                  { question: "Who can use it?", answer: "Startups, agencies, in-house teams, and growing companies can use it effectively." },
                  {
                    question: "Does it integrate with existing tools?",
                    answer: "Yes. It connects with popular business tools and can be extended with custom integrations.",
                  },
                  { question: "How does it improve efficiency?", answer: "It automates repetitive tasks, centralizes workflows, and makes team collaboration faster." },
                  { question: "Is it secure?", answer: "Yes. Security controls and access management are built in as part of the core platform." },
                  { question: "What kind of support is available?", answer: "You get onboarding guidance plus continuous support for setup, usage, and scaling." },
                  { question: "Is there a free trial?", answer: "Yes. You can start with a free trial to evaluate fit before committing to a paid plan." },
                ]}
              />
            </StoryFrame>
          </section>

          <section id="group-footer" className="scroll-mt-24 space-y-6">
            <StoryFrame id="story-lead-capture-service-cta" title="Lead Capture / Service CTA Variant" category="Footer/CTAs">
              <LeadCaptureSection
                title="Solicita tu propuesta de diseño web"
                subtitle="Respuesta en 24h, sin compromiso y con trato directo por WhatsApp."
                bullets={["Respuesta en 24h", "Sin compromiso", "Trato directo", "Enfoque en resultados reales"]}
                eyebrow=""
                showPrimaryCta={false}
                primaryCtaLabel="Solicitar cotización gratis"
                quoteHref="#"
                showProposalCta={false}
                proposalHref="#"
                whatsappLabel="Hablemos por WhatsApp"
                whatsappMessage="Hola, quiero una propuesta para mi proyecto de diseño web."
                formSubmitLabel="Solicitar cotización gratis"
                formShowWhatsAppLink={false}
              />
            </StoryFrame>

            <section className="rounded-[10px] border border-black/10 bg-white px-5 py-4">
              <p className="text-xs uppercase tracking-[0.12em] text-black/45">Footer/CTAs</p>
              <h2 className="text-xl font-medium">Use Home footer in production pages</h2>
              <p className="mt-2 text-sm text-[#3d3d3d]">
                Footer component is available globally and currently rendered in the Home page flow.
              </p>
            </section>
          </section>
        </div>
      </div>

    </main>
  );
}
