import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Eye,
  LucideIcon,
  Globe2,
  Hammer,
  HeartPulse,
  Home,
  Landmark,
  Network,
  PieChart,
  Plane,
  Puzzle,
  Radio,
  Rocket,
  ShieldCheck,
  Sparkles,
  Smile,
  Star,
  Target,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import { LeadFormV3 } from "@/components/v3/lead-form";
import { BelowFoldCarousel } from "@/components/v3/below-fold-carousel";
import { AmbientParticlesBackground, type AmbientParticlesConfig } from "@/components/v3/ambient-particles-background";
import {
  PrimaryButton,
  PrimaryCta,
  SecondaryCta,
  SectionHeading,
  SurfaceCard,
  V3Section,
  WhatsAppCta,
} from "@/components/v3/primitives";
import { getWhatsAppUrl } from "@/lib/utils";

export interface BasicItem {
  title: string;
  description: string;
}

export interface ProcessItem extends BasicItem {
  step: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingItem {
  plan: string;
  price: string;
  audience: string;
  features: string[];
  highlight?: boolean;
  whatsappMessage?: string;
}

export interface ExploreServiceCard {
  image: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export interface HoverServiceItem {
  title: string;
  description: string;
  image: string;
  chips: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface CollaborationFeatureItem {
  icon: "collab" | "speed" | "results";
  text: string;
}

export interface TickerTestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface MissionStatItem {
  value: string;
  label: string;
}

export interface FeatureShowcaseItem {
  icon: "broadcast" | "framework" | "performance" | "ecosystem";
  title: string;
  description: string;
}

export interface AboutOverlayStatItem {
  icon: "satisfaction" | "industries" | "value" | "users";
  value: string;
  label: string;
}

export interface KeyFeatureGridItem {
  icon:
    | "setup"
    | "framework"
    | "performance"
    | "ecosystem"
    | "scale"
    | "insights"
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
  href?: string;
  ctaLabel?: string;
}

export interface ClientLogoStatItem {
  value: string;
  label: string;
}

export interface HowItWorksCardItem {
  icon: "vision" | "solution" | "launch";
  title: string;
  description: string;
  bullets: string[];
}

export interface SimpleStepItem {
  image: string;
  title: string;
  description: string;
  bullets: string[];
  imageAlt?: string;
}

export interface BelowTheFoldStatItem {
  value: string;
  lineOne: string;
  lineTwo: string;
}

export interface BelowTheFoldFeatureItem {
  icon?: "framework" | "seo" | "integrations" | "design" | "management" | "performance" | "mobile";
  title: string;
  lineOne: string;
  lineTwo: string;
}

export interface FeaturedBlackFeatureItem {
  icon: "collaboration" | "layout" | "speed" | "integration";
  lineOne: string;
  lineTwo: string;
}

export interface FeaturedBlackStatItem {
  value: string;
  lineOne: string;
  lineTwo: string;
  lineThree?: string;
}

export interface BlogSectionItem {
  image: string;
  title: string;
  lineOne: string;
  lineTwo: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface OurClient2LogoItem {
  label: string;
}

const featureIconMap: Record<FeatureShowcaseItem["icon"], LucideIcon> = {
  broadcast: Radio,
  framework: Sparkles,
  performance: ShieldCheck,
  ecosystem: Network,
};

const aboutStatIconMap: Record<AboutOverlayStatItem["icon"], LucideIcon> = {
  satisfaction: Smile,
  industries: Target,
  value: Users,
  users: Globe2,
};

const keyFeatureGridIconMap: Record<KeyFeatureGridItem["icon"], LucideIcon> = {
  setup: Radio,
  framework: Sparkles,
  performance: ShieldCheck,
  ecosystem: Network,
  scale: Target,
  insights: Globe2,
  real_estate: Building2,
  villas: Home,
  restaurants: UtensilsCrossed,
  tours: Plane,
  wellness: Sparkles,
  clinics: HeartPulse,
  lawyers: Landmark,
  construction: Hammer,
  tourism: Globe2,
};

const collaborationIconMap: Record<CollaborationFeatureItem["icon"], LucideIcon> = {
  collab: Users,
  speed: Sparkles,
  results: Target,
};

const howItWorksIconMap: Record<HowItWorksCardItem["icon"], LucideIcon> = {
  vision: Eye,
  solution: Puzzle,
  launch: Rocket,
};

const featuredBlackIconMap: Record<FeaturedBlackFeatureItem["icon"], LucideIcon> = {
  collaboration: Users,
  layout: Radio,
  speed: Rocket,
  integration: Network,
};

export function ProblemSolutionSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: BasicItem[];
}) {
  return (
    <V3Section id={id} tone="soft">
      <div className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <SurfaceCard key={`${item.title}-${idx}`} className="space-y-3">
              <h3 className="ds-h6 text-[#1e1e1e]">{item.title}</h3>
              <p className="text-base leading-7 text-[#3d3d3d]">{item.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </V3Section>
  );
}

export function BenefitsSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: BasicItem[];
}) {
  return (
    <V3Section id={id} tone="light">
      <div className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <SurfaceCard key={`${item.title}-${idx}`} className="space-y-4">
              <div className="inline-flex rounded-[4px] bg-[#413df2]/10 px-3 py-2 text-sm font-medium text-[#413df2]">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="ds-h6 text-[#1e1e1e]">{item.title}</h3>
              <p className="text-base leading-7 text-[#3d3d3d]">{item.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </V3Section>
  );
}

export function ExploreServicesSection({
  id,
  title,
  subtitle,
  ctaHref,
  ctaLabel,
  cards,
}: {
  id: string;
  title: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel: string;
  cards: ExploreServiceCard[];
}) {
  return (
    <V3Section id={id} tone="soft">
      <div className="space-y-10">
        <div className="max-w-[460px] space-y-5">
          <h2 className="ds-h2 text-[#1e1e1e]">
            {title}
          </h2>
          <p className="text-base leading-7 text-[#3d3d3d]">{subtitle}</p>
          <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {cards.map((card, cardIndex) => (
            <article key={`${card.title}-${cardIndex}`} className="space-y-5">
              <div className="overflow-hidden rounded-[8px] border border-black/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.image} alt={card.title} className="h-[333px] w-full object-cover" />
              </div>
              <div className="space-y-3">
                <h3 className="ds-h4 text-[#1e1e1e]">
                  {card.title}
                </h3>
                <p className="text-base leading-7 text-[#3d3d3d]">{card.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag, tagIndex) => (
                  <span
                    key={`${card.title}-${tag}-${tagIndex}`}
                    className="inline-flex rounded-full border border-black/20 bg-white px-4 py-2 text-base leading-6 text-[#3d3d3d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href={card.href ?? "#"} className="inline-flex items-center text-base font-medium text-[#413df2] hover:opacity-80">
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </V3Section>
  );
}

export function ClientLogosOutcomeSection({
  id,
  tone = "soft",
  logos,
  logosTitle,
  titleLineOne,
  titleLineTwo,
  subtitle,
  ctaLabel,
  ctaHref,
  stats,
}: {
  id: string;
  tone?: "light" | "soft";
  logos: string[];
  logosTitle: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  stats: ClientLogoStatItem[];
}) {
  return (
    <V3Section id={id} tone={tone}>
      <div className="space-y-20">
        <div className="grid gap-8 xl:grid-cols-[260px_1fr] xl:items-start">
          <h2 className="ds-h2 text-[#1e1e1e]">
            {logosTitle}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {logos.map((logo, idx) => (
              <div
                key={`${logo}-${idx}`}
                className="flex h-[120px] items-center justify-center bg-[#ededed] px-6 text-center text-[24px] font-medium leading-none text-black/45"
              >
                <span className="text-base font-medium text-black/50">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[760px] space-y-8 text-center">
          <h3 className="ds-h2 text-[#1e1e1e]">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
          </h3>
          <p className="mx-auto max-w-[540px] text-base leading-7 text-[#3d3d3d]">{subtitle}</p>
          <div className="flex justify-center">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {stats.map((stat, idx) => (
            <article key={`${stat.value}-${idx}`} className="flex items-center gap-4">
              <p className="text-[48px] font-medium leading-[1] tracking-[-0.03em] text-[#1e1e1e]">{stat.value}</p>
              <p className="max-w-[230px] text-base font-medium leading-7 text-[#3d3d3d]">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </V3Section>
  );
}

export function HowItWorksGridSection({
  id,
  eyebrowText,
  title,
  subtitle,
  cards,
  finalTitle,
  finalSubtitle,
  ctaLabel,
  ctaHref,
}: {
  id: string;
  eyebrowText: string;
  title: string;
  subtitle: string;
  cards: HowItWorksCardItem[];
  finalTitle: string;
  finalSubtitle: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <V3Section id={id} tone="soft" className="bg-[#f6f6f6]">
      <div className="space-y-16 md:space-y-20">
        <div className="mx-auto max-w-[760px] space-y-4 text-center">
          <p className="text-[20px] font-medium tracking-[-0.02em] text-[#3d3d3d]">{eyebrowText}</p>
          <h2 className="ds-h2 text-[#1e1e1e]">{title}</h2>
          <p className="mx-auto max-w-[460px] text-base leading-7 text-[#3d3d3d]">{subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, idx) => {
            const Icon = howItWorksIconMap[card.icon];
            return (
              <article key={`${card.title}-${idx}`} className="rounded-[4px] border border-[#e7e7e7] bg-white p-8">
                <Icon size={38} strokeWidth={1.9} className="text-[#1e1e1e]" />
                <h3 className="mt-10 ds-h4 text-[#1e1e1e]">{card.title}</h3>
                <p className="mt-4 max-w-[310px] text-base leading-7 text-[#3d3d3d]">{card.description}</p>
                <ul className="mt-8 space-y-3">
                  {card.bullets.map((bullet, bulletIdx) => (
                    <li key={`${card.title}-${bullet}-${bulletIdx}`} className="flex items-center gap-2 text-base text-[#1e1e1e]">
                      <CheckCircle2 size={16} strokeWidth={2.2} className="text-[#0f8c39]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mx-auto max-w-[760px] space-y-5 text-center">
          <h3 className="ds-h2 text-[#1e1e1e]">{finalTitle}</h3>
          <p className="mx-auto max-w-[560px] text-base leading-7 text-[#3d3d3d]">{finalSubtitle}</p>
          <div className="flex justify-center">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>
      </div>
    </V3Section>
  );
}

export function HoverRevealServicesSection({
  id,
  tone = "soft",
  eyebrow,
  titleLineOne,
  titleLineTwo,
  intro,
  ctaLabel,
  ctaHref,
  items,
}: {
  id: string;
  tone?: "light" | "soft";
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  intro: string;
  ctaLabel: string;
  ctaHref: string;
  items: HoverServiceItem[];
}) {
  return (
    <V3Section id={id} tone={tone} className="py-[112px]">
      <div className="space-y-20">
        <div className="grid gap-12 xl:grid-cols-[1fr_360px] xl:items-center">
          <div className="space-y-6">
            <p className="text-[20px] leading-7 tracking-[-0.02em] text-black/50">{eyebrow}</p>
            <h2 className="ds-h2 text-[#1e1e1e]">
              <span className="block">{titleLineOne}</span>
              <span className="block">{titleLineTwo}</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-[16px] font-medium leading-[22px] text-[#3d3d3d]">{intro}</p>
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>

        <div className="border-y border-black/20">
          {items.map((item, idx) => (
            <article
              key={`${item.title}-${idx}`}
              className="group grid gap-8 border-t border-black/20 py-8 first:border-t-0 lg:grid-cols-[1fr_192px] lg:items-start"
            >
              <div className="space-y-4">
                <h3 className="ds-h4 text-[#1e1e1e]">{item.title}</h3>
                <p className="max-w-[420px] text-[16px] font-medium leading-[22px] text-[#3d3d3d]">{item.description}</p>

                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-5 group-hover:max-h-28 group-hover:opacity-100">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {item.chips.map((chip, chipIdx) => (
                        <span
                          key={`${item.title}-${chip}-${chipIdx}`}
                          className="inline-flex rounded-full border border-black/20 bg-white px-4 py-2 text-sm leading-5 text-[#3d3d3d]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <a href={item.ctaHref} className="inline-flex items-center gap-2 text-base font-medium text-[#413df2] hover:opacity-80">
                      {item.ctaLabel}
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[8px] transition-all duration-300 group-hover:rounded-[10px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[121.78px] w-[192px] object-cover transition-all duration-300 group-hover:h-[146px] group-hover:w-[230px]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </V3Section>
  );
}

export function CollaborationHighlightSection({
  id,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  statLeft,
  statRight,
  mainImage,
  features,
  quote,
  author,
  role,
  authorImage,
  logoText = "Roundsite",
}: {
  id: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  statLeft: { value: string; description: string };
  statRight: { value: string; description: string };
  mainImage: string;
  features: CollaborationFeatureItem[];
  quote: string;
  author: string;
  role: string;
  authorImage: string;
  logoText?: string;
}) {
  return (
    <V3Section id={id} tone="soft" className="pb-[120px] pt-[119px]">
      <div className="mx-auto max-w-[1065px] space-y-16">
        <div className="space-y-8 text-center">
          <h2 className="ds-h2 text-[#1e1e1e]">{title}</h2>
          <p className="mx-auto max-w-[690px] text-[16px] font-medium leading-[22.4px] text-[#3d3d3d]">{subtitle}</p>
          <div className="flex justify-center">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[statLeft, statRight].map((stat, idx) => (
              <article key={`${stat.value}-${idx}`} className="flex items-center gap-8 rounded-[8px] bg-[#070707] px-8 py-8">
                <p className="text-[54px] font-medium leading-none tracking-[-0.03em] text-white">{stat.value}</p>
                <p className="max-w-[280px] text-[16px] font-medium leading-[22.4px] text-white/70">{stat.description}</p>
              </article>
            ))}
          </div>

          <div className="overflow-hidden rounded-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mainImage} alt="Collaboration in action" className="h-[590px] w-full object-cover" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = collaborationIconMap[feature.icon];
              return (
                <article key={`${feature.text}-${idx}`} className="rounded-[8px] border border-black/10 bg-white/20 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                  <Icon size={30} strokeWidth={1.8} className="text-[#413df2]" />
                  <p className="mt-4 max-w-[230px] text-[16px] font-medium leading-[22.4px] text-[#3d3d3d]">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="space-y-8 text-center">
          <p className="text-[20px] tracking-[0.2em] text-black/40">★★★★★</p>
          <blockquote className="mx-auto max-w-[726px] ds-h4 text-[#1e1e1e]">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={authorImage} alt={author} className="h-[50px] w-[50px] rounded-[4px] object-cover" />
              <div className="text-left">
                <p className="text-[16px] font-medium leading-[22.4px] text-[#3d3d3d]">{author}</p>
                <p className="text-[16px] font-medium leading-[22.4px] text-black/50">{role}</p>
              </div>
            </div>
            <p className="text-[28px] font-medium tracking-[-0.02em] text-black/10">{logoText}</p>
          </div>
        </div>
      </div>
    </V3Section>
  );
}

export function TestimonialBannerSection({
  id,
  quote,
  author,
  role,
  reviewsText,
  bgImage,
  light = false,
  showReviews = true,
  showStars = true,
  showQuoteMarks = true,
  sectionTone,
  solidBackground,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: {
  id: string;
  quote: string;
  author?: string;
  role?: string;
  reviewsText: string;
  bgImage: string;
  light?: boolean;
  showReviews?: boolean;
  showStars?: boolean;
  showQuoteMarks?: boolean;
  sectionTone?: "light" | "dark";
  solidBackground?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}) {
  const useLightContainer = sectionTone === "light" || light;

  return (
    <V3Section id={id} tone={sectionTone ?? (light ? "light" : "dark")} className="py-0">
      <div
        className={`relative overflow-hidden rounded-[8px] p-8 md:p-12 lg:p-20 ${
          useLightContainer ? "border border-black/10 bg-white" : "border border-white/10"
        }`}
      >
        {!light && (
          <>
            {solidBackground ? (
              <div
                className="absolute inset-0"
                style={{ backgroundColor: solidBackground }}
                aria-hidden="true"
              />
            ) : (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${bgImage})` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgb(0 0 0 / 0.9) 0%, rgb(0 0 0 / 0.55) 48%, rgb(0 0 0 / 0.15) 80%, rgb(0 0 0 / 0.05) 100%)",
                  }}
                  aria-hidden="true"
                />
              </>
            )}
          </>
        )}

        <div className="relative max-w-[740px] space-y-10">
          <div className="space-y-6">
            {showStars ? (
              <p className={`text-[22px] tracking-[0.2em] ${light ? "text-black/45" : "text-white/60"}`}>★★★★★</p>
            ) : null}
            <blockquote
              className={`text-[28px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[28px] md:leading-[1.2] ${
                light ? "text-[#1e1e1e]" : "text-white"
              } whitespace-pre-line`}
            >
              {showQuoteMarks ? `“${quote}”` : quote}
            </blockquote>
            {(author || role) && (
              <div className="space-y-1">
                {author && <p className={`text-base font-medium ${light ? "text-[#1e1e1e]" : "text-white"}`}>{author}</p>}
                {role && <p className={`text-base ${light ? "text-black/50" : "text-white/60"}`}>{role}</p>}
              </div>
            )}
          </div>

          {showReviews && (
            <div className="flex items-center gap-4">
              <div className="flex size-[55px] items-center justify-center rounded-[8px] bg-white shadow-[0_0_5px_rgba(0,0,0,0.12)]">
                <span className="size-7 rounded-[6px] bg-[#5925dc]" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <p className={`text-[18px] tracking-[0.2em] ${light ? "text-[#1e1e1e]" : "text-white"}`}>★★★★★</p>
                <p className={`text-base font-medium ${light ? "text-[#1e1e1e]" : "text-white"}`}>{reviewsText}</p>
              </div>
            </div>
          )}

          {(primaryCtaLabel && primaryCtaHref) || (secondaryCtaLabel && secondaryCtaHref) ? (
            <div className="flex flex-wrap items-center gap-3">
              {primaryCtaLabel && primaryCtaHref ? (
                <PrimaryCta href={primaryCtaHref}>{primaryCtaLabel}</PrimaryCta>
              ) : null}
              {secondaryCtaLabel && secondaryCtaHref ? (
                <SecondaryCta href={secondaryCtaHref} dark={!light}>
                  {secondaryCtaLabel}
                </SecondaryCta>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </V3Section>
  );
}

function TickerCard({ item }: { item: TickerTestimonialItem }) {
  return (
    <article className="w-[360px] shrink-0 rounded-[4px] border border-black/10 bg-white p-6">
      <div className="space-y-6">
        <p className="text-[18px] tracking-[0.2em] text-black/35">★★★★★</p>
        <p className="text-[22px] leading-[1.25] tracking-[-0.02em] text-[#3d3d3d] md:text-[20px]">
          &ldquo;{item.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.avatar}
            alt={item.author}
            className="size-10 rounded-[4px] object-cover"
          />
          <div className="space-y-0.5">
            <p className="text-sm font-medium text-[#3d3d3d]">{item.author}</p>
            <p className="text-sm text-black/50">{item.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function WideTestimonialCard({ item }: { item: TickerTestimonialItem }) {
  return (
    <article className="w-[520px] shrink-0 rounded-[4px] border border-black/10 bg-white p-10">
      <div className="flex h-full min-h-[250px] flex-col justify-between gap-8">
        <p className="text-[20px] tracking-[0.2em] text-black/35">★★★★★</p>
        <p className="text-[20px] leading-8 tracking-[-0.02em] text-[#3d3d3d]">
          &ldquo;{item.quote}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.avatar} alt={item.author} className="size-[50px] rounded-[4px] object-cover" />
          <div className="space-y-0.5">
            <p className="text-[22px] font-medium leading-7 tracking-[-0.02em] text-[#3d3d3d]">{item.author}</p>
            <p className="text-base leading-7 text-black/50">{item.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function TestimonialTickerSection({
  id,
  title,
  subtitle,
  rowLeft,
  rowRight,
}: {
  id: string;
  title: string;
  subtitle: string;
  rowLeft: TickerTestimonialItem[];
  rowRight: TickerTestimonialItem[];
}) {
  const leftItems = [...rowLeft, ...rowLeft];
  const rightItems = [...rowRight, ...rowRight];

  return (
    <V3Section id={id} tone="soft" className="overflow-hidden py-24 md:py-28">
      <div className="space-y-10">
        <SectionHeading title={title} subtitle={subtitle} align="center" />

        <div className="relative space-y-6">
          <div className="ticker-left flex w-max gap-6">
            {leftItems.map((item, idx) => (
              <TickerCard key={`ticker-left-${item.author}-${idx}`} item={item} />
            ))}
          </div>

          <div className="ticker-right flex w-max gap-6">
            {rightItems.map((item, idx) => (
              <TickerCard key={`ticker-right-${item.author}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </V3Section>
  );
}

export function ClientVoicesCarouselSection({
  id,
  title,
  subtitle,
  ratingText,
  items,
}: {
  id: string;
  title: string;
  subtitle: string;
  ratingText: string;
  items: TickerTestimonialItem[];
}) {
  const row = [...items, ...items];

  return (
    <V3Section id={id} tone="soft" className="overflow-hidden py-24 md:py-28">
      <div className="space-y-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-4 rounded-[4px] bg-white px-3 py-2 shadow-[0_0_5px_rgba(0,0,0,0.12)]">
            <div className="flex size-[40px] items-center justify-center rounded-[4px] bg-[#413df2] text-white">I</div>
            <div className="space-y-1 text-left">
              <p className="text-[12px] tracking-[0.2em] text-black/35">★★★★★</p>
              <p className="text-base text-[#1e1e1e]">{ratingText}</p>
            </div>
          </div>
          <h2 className="ds-h2 text-[#1e1e1e]">{title}</h2>
          <p className="max-w-[420px] text-base leading-7 text-[#3d3d3d]">{subtitle}</p>
        </div>

        <div className="relative">
          <div className="ticker-left flex w-max gap-6">
            {row.map((item, idx) => (
              <WideTestimonialCard key={`voices-${item.author}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </V3Section>
  );
}

export function InnovationSplitSection({
  id,
  title,
  subtitle,
  missionLabel,
  ctaLabel,
  ctaHref,
  image,
  stripItems,
  stats,
}: {
  id: string;
  title: string;
  subtitle: string;
  missionLabel: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  stripItems: { avatar: string; text: string; muted?: boolean }[];
  stats: MissionStatItem[];
}) {
  const marquee = [...stripItems, ...stripItems];

  return (
    <V3Section id={id} tone="soft">
      <div className="grid gap-[60px] lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-14">
          <div className="space-y-6">
            <h2 className="ds-h2 text-[#1e1e1e]">
              {title}
            </h2>
            <p className="max-w-[520px] text-base leading-7 text-[#3d3d3d]">{subtitle}</p>
            <p className="text-[24px] leading-[1.2] tracking-[-0.02em] text-black/50">{missionLabel}</p>
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {stats.map((stat, idx) => (
              <div key={`${stat.value}-${idx}`} className="space-y-2">
                <p className="text-[40px] leading-[1] tracking-[-0.03em] text-[#1e1e1e]">{stat.value}</p>
                <p className="text-base text-[#3d3d3d]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="overflow-hidden rounded-[8px] bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="Team member working" className="h-[610px] w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[8px] bg-[#070707] py-[18px]">
            <div className="ticker-left flex w-max items-center gap-[18px]">
              {marquee.map((item, idx) => (
                <div key={`${item.text}-${idx}`} className="flex items-center gap-[18px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.avatar} alt="" className="h-[50px] w-[72px] rounded-[3px] object-cover" />
                  <p className={`text-[24px] tracking-[-0.02em] ${item.muted ? "text-white/50" : "text-white"}`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </V3Section>
  );
}

export function DualColumnHeroSection({
  id,
  title,
  subtitle,
  ratingText,
  image,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: {
  id: string;
  title: string;
  subtitle: string;
  ratingText: string;
  image: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}) {
  return (
    <V3Section id={id} tone="dark" className="hero-max-h bg-[#19174f] !py-[206px]">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-[20px] tracking-[0.2em] text-[#f74c3c]">★★★★★</p>
            <p className="text-base text-white">{ratingText}</p>
          </div>

          <h2 className="site-hero-title hero-title-clamp max-w-[760px] ds-h2 text-white">
            {title}
          </h2>
          <p className="hero-copy-clamp max-w-[620px] text-[20px] leading-8 tracking-[-0.02em] text-white/75">{subtitle}</p>

          <div className="flex flex-wrap items-center gap-4">
            <PrimaryCta href={primaryCtaHref}>{primaryCtaLabel}</PrimaryCta>
            <SecondaryCta href={secondaryCtaHref} dark>
              {secondaryCtaLabel}
            </SecondaryCta>
          </div>
        </div>

        <div className="overflow-hidden rounded-[8px] border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="Hero visual" className="h-[470px] w-full object-cover" />
        </div>
      </div>
    </V3Section>
  );
}

export function Hero2BlueSection({
  id,
  ratingText,
  titleLineOne,
  titleLineTwo,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  image,
  backgroundClass = "bg-[#19174f]",
}: {
  id: string;
  ratingText: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  image: string;
  backgroundClass?: string;
}) {
  return (
    <section id={id} className={`hero-max-h ${backgroundClass} px-6 pb-[206px] pt-[206px] text-white md:px-10 lg:px-[74px]`}>
      <div className="grid items-center gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
        <div className="space-y-8">
          <div className="space-y-[7px]">
            <p className="text-[20px] leading-none tracking-[0.2em] text-[#f74c3c]">★★★★★</p>
            <p className="text-base leading-[22.4px] text-white">{ratingText}</p>
          </div>

          <h2 className="site-hero-title hero-title-clamp max-w-[760px] ds-h2 text-white">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
          </h2>

          <p className="hero-copy-clamp max-w-[500px] text-[20px] leading-7 tracking-[-0.4px] text-white/70">{subtitle}</p>

          <div className="flex flex-wrap items-center gap-8">
            <PrimaryCta href={primaryHref}>{primaryLabel}</PrimaryCta>
            <SecondaryCta href={secondaryHref} dark>
              {secondaryLabel}
            </SecondaryCta>
          </div>
        </div>

        <div className="overflow-hidden rounded-[8px] border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="Hero portrait" className="h-[468px] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function Hero4FeatureSection({
  id,
  eyebrow,
  titleLineOne,
  titleLineTwo,
  subtitle,
  primaryLabel,
  primaryHref,
  metricValue,
  metricLabel,
  developerTitleLineOne,
  developerTitleLineTwo,
  developerCtaLabel,
  developerCtaHref,
  metricImage,
  developerImage,
  sideImage,
  miniLogos,
}: {
  id: string;
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  metricValue: string;
  metricLabel: string;
  developerTitleLineOne: string;
  developerTitleLineTwo: string;
  developerCtaLabel: string;
  developerCtaHref: string;
  metricImage: string;
  developerImage: string;
  sideImage: string;
  miniLogos: string[];
}) {
  return (
    <section id={id} className="bg-[#f4f4f4] px-[74px] py-[206px]">
      <div className="mx-auto max-w-[1100px] space-y-20">
        <div className="mx-auto flex max-w-[650px] flex-col items-center gap-8 text-center">
          <p className="text-[20px] leading-7 tracking-[-0.02em] text-[#413df2]">{eyebrow}</p>
          <h2 className="site-hero-title ds-h2 text-[#1e1e1e]">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
          </h2>
          <p className="max-w-[520px] text-[20px] leading-7 tracking-[-0.4px] text-[#3d3d3d]">{subtitle}</p>
          <PrimaryCta href={primaryHref}>{primaryLabel}</PrimaryCta>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[8px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={metricImage} alt="" className="h-[120px] w-full object-cover" />
              <div className="absolute inset-0 flex items-center gap-8 bg-black/25 px-6">
                <p className="ds-h2 text-white">{metricValue}</p>
                <p className="max-w-[260px] text-base leading-[22.4px] text-white/70">{metricLabel}</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[8px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={developerImage} alt="" className="h-[497px] w-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-end gap-6 bg-black/40 p-8">
                <div className="flex items-center gap-3">
                  {miniLogos.map((logo, idx) => (
                    <div
                      key={`${logo}-${idx}`}
                      className="flex h-[55px] w-[55px] items-center justify-center rounded-[4px] bg-white shadow-[0px_0px_8.85px_0px_rgba(0,0,0,0.12)]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logo} alt="" className="h-[30px] w-[30px] object-contain" />
                    </div>
                  ))}
                </div>

                <h3 className="ds-h4 text-white">
                  <span className="block">{developerTitleLineOne}</span>
                  <span className="block">{developerTitleLineTwo}</span>
                </h3>

                <PrimaryCta href={developerCtaHref}>{developerCtaLabel}</PrimaryCta>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sideImage} alt="" className="h-full min-h-[641px] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero3CenteredProofSection({
  id,
  avatars,
  ratingText,
  titleLineOne,
  titleLineTwo,
  subtitle,
  ctaLabel,
  ctaHref,
  leftImage,
  centerImage,
  rightImage,
  quote,
  author,
  role,
  trustedText,
  logos,
}: {
  id: string;
  avatars: string[];
  ratingText: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  leftImage: string;
  centerImage: string;
  rightImage: string;
  quote: string;
  author: string;
  role: string;
  trustedText: string;
  logos: string[];
}) {
  return (
    <section id={id} className="bg-[#f4f4f4] px-[74px] py-[206px]">
      <div className="space-y-12 md:space-y-16">
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-[18px]">
            <div className="flex -space-x-[14px] pr-[14px]">
              {avatars.map((avatar, idx) => (
                <div key={`${avatar}-${idx}`} className="h-[54px] w-[54px] overflow-hidden rounded-full border-4 border-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={avatar} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="space-y-[7px] text-left">
              <div className="flex items-center gap-1 text-[#1e1e1e]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={`hero-3-rating-${idx}`} size={15} fill="currentColor" strokeWidth={1.8} />
                ))}
              </div>
              <p className="text-base leading-[22.4px] text-[#1e1e1e]">{ratingText}</p>
            </div>
          </div>

          <h2 className="site-hero-title ds-h2 text-[#1e1e1e]">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
          </h2>

          <p className="max-w-[450px] text-[20px] leading-7 tracking-[-0.4px] text-[#3d3d3d]">{subtitle}</p>
          <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="overflow-hidden rounded-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={leftImage} alt="" className="h-[547px] w-full object-cover" />
          </div>

          <article className="relative overflow-hidden rounded-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={centerImage} alt="" className="h-[547px] w-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-between bg-black/40 p-6 text-white">
              <div className="space-y-5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={`hero-3-card-star-${idx}`} size={15} fill="currentColor" strokeWidth={1.8} />
                  ))}
                </div>
                <p className="max-w-[340px] ds-h4">
                  {quote}
                </p>
                <div>
                  <p className="text-base leading-[22.4px] text-white">{author}</p>
                  <p className="text-base leading-[22.4px] text-white/50">{role}</p>
                </div>
              </div>
              <p className="text-[24px] font-medium tracking-[-0.03em] text-white/70">Roundsite</p>
            </div>
          </article>

          <div className="overflow-hidden rounded-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={rightImage} alt="" className="h-[547px] w-full object-cover" />
          </div>
        </div>

        <div className="space-y-8 text-center">
          <p className="text-[14px] font-medium uppercase leading-[19.6px] tracking-[0.01em] text-black/70">{trustedText}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-4">
            {logos.map((logo, idx) => (
              <span key={`${logo}-${idx}`} className="text-[28px] font-medium leading-none tracking-[-0.02em] text-black/45">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section2MissionSplit({
  id,
  titleLineOne,
  titleLineTwo,
  subtitle,
  missionLabel,
  ctaLabel,
  ctaHref,
  stats,
  image,
  tickerItems,
}: {
  id: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  missionLabel: string;
  ctaLabel: string;
  ctaHref: string;
  stats: { icon: "satisfaction" | "industries" | "value"; value: string; label: string }[];
  image: string;
  tickerItems: { avatar: string; text: string; muted?: boolean }[];
}) {
  const iconMap = {
    satisfaction: Smile,
    industries: Building2,
    value: PieChart,
  } as const;
  const marquee = [...tickerItems, ...tickerItems];

  return (
    <section id={id} className="bg-[#f4f4f4] px-[74px] py-28 md:py-[112px]">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14">
        <div className="flex flex-col justify-between gap-20">
          <div className="space-y-8">
            <h2 className="max-w-[700px] ds-h2 text-[#1e1e1e]">
              <span className="block">{titleLineOne}</span>
              <span className="block">{titleLineTwo}</span>
            </h2>
            <p className="max-w-[500px] text-base leading-[22.4px] text-[#3d3d3d]">{subtitle}</p>
            <p className="text-[24px] leading-[1.2] tracking-[-0.02em] text-black/50">{missionLabel}</p>
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {stats.map((stat, idx) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={`${stat.value}-${idx}`} className="space-y-3">
                  <Icon size={28} strokeWidth={1.8} className="text-[#413df2]" />
                  <p className="text-[40px] leading-[1] tracking-[-0.03em] text-[#1e1e1e]">{stat.value}</p>
                  <p className="text-base leading-[22.4px] text-[#3d3d3d]">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <div className="overflow-hidden rounded-[8px] bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" className="h-[610px] w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[8px] bg-[#070707] py-[18px]">
            <div className="ticker-left flex w-max items-center gap-[18px]">
              {marquee.map((item, idx) => (
                <div key={`${item.text}-${idx}`} className="flex items-center gap-[18px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.avatar} alt="" className="h-[50px] w-[72px] rounded-[3px] object-cover" />
                  <p className={`text-[28px] leading-none tracking-[-0.02em] ${item.muted ? "text-white/50" : "text-white"}`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BelowTheFoldSection({
  id,
  titleLineOne,
  titleLineTwo,
  subtitleLineOne,
  subtitleLineTwo,
  topCtaLabel,
  topCtaHref,
  stats,
  secondaryTitleLineOne,
  secondaryTitleLineTwo,
  secondarySubtitleLineOne,
  secondarySubtitleLineTwo,
  features,
  activeDot = 0,
  bottomCtaLabel,
  bottomCtaHref,
  showBottomCta = true,
}: {
  id: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitleLineOne: string;
  subtitleLineTwo: string;
  topCtaLabel?: string;
  topCtaHref?: string;
  stats: BelowTheFoldStatItem[];
  secondaryTitleLineOne: string;
  secondaryTitleLineTwo: string;
  secondarySubtitleLineOne: string;
  secondarySubtitleLineTwo: string;
  features: BelowTheFoldFeatureItem[];
  activeDot?: number;
  bottomCtaLabel?: string;
  bottomCtaHref?: string;
  showBottomCta?: boolean;
}) {
  const totalDots = 5;

  return (
    <section id={id} className="bg-white">
      <div className="px-5 py-[112px] md:px-8">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-20">
          <div className="mx-auto flex w-full max-w-[700px] flex-col items-center gap-8 text-center">
            <div className="space-y-6">
              <h2 className="text-[clamp(40px,5.4vw,64px)] font-medium leading-[1.1] tracking-[-0.04em] text-[#1e1e1e]">
                <span className="block md:whitespace-nowrap">{titleLineOne}</span>
                <span className="block md:whitespace-nowrap">{titleLineTwo}</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                <span className="block md:whitespace-nowrap">{subtitleLineOne}</span>
                <span className="block md:whitespace-nowrap">{subtitleLineTwo}</span>
              </p>
            </div>
            {topCtaLabel && topCtaHref ? <PrimaryCta href={topCtaHref}>{topCtaLabel}</PrimaryCta> : null}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-[60px] gap-y-8">
            {stats.map((stat, idx) => (
              <div key={`${stat.value}-${idx}`} className="flex min-w-[240px] items-center gap-[18px]">
                <p className="text-[clamp(36px,3.4vw,48px)] font-normal leading-[1.2] tracking-[-0.04em] text-[#1e1e1e]">{stat.value}</p>
                <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                  <span className="block">{stat.lineOne}</span>
                  <span className="block">{stat.lineTwo}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#f6f6f6] px-5 py-[120px] md:px-8">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-8">
          <div className="mx-auto flex w-full max-w-[600px] flex-col items-center gap-6 text-center">
            <h2 className="text-[clamp(40px,5.4vw,64px)] font-medium leading-[1.1] tracking-[-0.04em] text-[#1e1e1e]">
              <span className="block md:whitespace-nowrap">{secondaryTitleLineOne}</span>
              <span className="block md:whitespace-nowrap">{secondaryTitleLineTwo}</span>
            </h2>
            <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">
              <span className="block">{secondarySubtitleLineOne}</span>
              <span className="block">{secondarySubtitleLineTwo}</span>
            </p>
          </div>

          <BelowFoldCarousel features={features} initialDot={Math.min(activeDot, totalDots - 1)} pauseOnHover />

          {showBottomCta && bottomCtaLabel && bottomCtaHref ? (
            <PrimaryCta href={bottomCtaHref}>{bottomCtaLabel}</PrimaryCta>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function Section4ContactFormClassic({
  id,
  eyebrow,
  titleLineOne,
  titleLineTwo,
  subtitle,
  formTitle,
  formSubtitle,
}: {
  id: string;
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  formTitle: string;
  formSubtitle: string;
}) {
  return (
    <section id={id} className="bg-[#f4f4f4] px-[74px] py-28 md:py-[112px]">
      <div className="mx-auto max-w-[1040px] space-y-20">
        <div className="mx-auto max-w-[760px] space-y-8 text-center">
          <p className="text-[20px] leading-7 tracking-[-0.02em] text-[#413df2]">{eyebrow}</p>
          <h2 className="ds-h2 text-[#1e1e1e]">
            <span className="block">{titleLineOne}</span>
            <span className="block text-black/50">{titleLineTwo}</span>
          </h2>
          <p className="mx-auto max-w-[720px] text-[20px] leading-7 tracking-[-0.4px] text-[#3d3d3d]">{subtitle}</p>
        </div>

        <div className="mx-auto max-w-[750px] space-y-10">
          <div className="space-y-5 text-center">
            <h3 className="ds-h2 text-[#1e1e1e]">
              {formTitle}
            </h3>
            <p className="text-base leading-[22.4px] text-[#3d3d3d]">{formSubtitle}</p>
          </div>

          <form className="grid gap-x-8 gap-y-6 md:grid-cols-2">
            <label className="space-y-3">
              <span className="text-base font-medium text-[#1e1e1e]">Full Name*</span>
              <input className="h-11 w-full border-0 border-b border-black/20 bg-transparent text-[20px] tracking-[-0.02em] text-black/60 outline-none" placeholder="Rakesh Shah" />
            </label>

            <label className="space-y-3">
              <span className="text-base font-medium text-[#1e1e1e]">Email Address*</span>
              <input className="h-11 w-full border-0 border-b border-black/20 bg-transparent text-[20px] tracking-[-0.02em] text-black/60 outline-none" placeholder="your@email.com" />
            </label>

            <label className="space-y-3 md:col-span-2">
              <span className="text-base font-medium text-[#1e1e1e]">Company name</span>
              <input className="h-11 w-full border-0 border-b border-black/20 bg-transparent text-[20px] tracking-[-0.02em] text-black/60 outline-none" placeholder="ABC Private Limited" />
            </label>

            <label className="space-y-3 md:col-span-2">
              <span className="text-base font-medium text-[#1e1e1e]">Phone Number*</span>
              <input className="h-11 w-full border-0 border-b border-black/20 bg-transparent text-[20px] tracking-[-0.02em] text-black/60 outline-none" placeholder="+91 01234 56789" />
            </label>

            <label className="space-y-3 md:col-span-2">
              <span className="text-base font-medium text-[#1e1e1e]">Services*</span>
              <select className="h-11 w-full border-0 border-b border-black/20 bg-transparent text-[20px] tracking-[-0.02em] text-[#1e1e1e] outline-none">
                <option>Select one...</option>
              </select>
            </label>

            <label className="space-y-3 md:col-span-2">
              <span className="text-base font-medium text-[#1e1e1e]">How did you hear about Roundsite?</span>
              <select className="h-11 w-full border-0 border-b border-black/20 bg-transparent text-[20px] tracking-[-0.02em] text-[#1e1e1e] outline-none">
                <option>Select one...</option>
              </select>
            </label>

            <label className="space-y-3 md:col-span-2">
              <span className="text-base font-medium text-[#1e1e1e]">Message</span>
              <textarea className="min-h-[74px] w-full resize-y border-0 border-b border-black/20 bg-transparent text-[20px] tracking-[-0.02em] text-black/60 outline-none" placeholder="tell us what you need and we’ll get back quickly" />
            </label>

            <div className="md:col-span-2">
              <PrimaryButton>Submit message</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Banner1DarkQuoteSection({
  id,
  backgroundImage,
  quoteLineOne,
  quoteLineTwo,
  quoteAccent,
  quoteLineThree,
  author,
  role,
  ratingText,
}: {
  id: string;
  backgroundImage: string;
  quoteLineOne: string;
  quoteLineTwo: string;
  quoteAccent: string;
  quoteLineThree: string;
  author: string;
  role: string;
  ratingText: string;
}) {
  return (
    <section id={id} className="relative overflow-hidden px-[74px] py-[120px] text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={backgroundImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_30%,rgba(0,0,0,0)_100%)]" />

      <div className="relative z-10 max-w-[715px] space-y-20">
        <div className="space-y-8">
          <div className="flex items-center gap-1 text-white/65">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={`banner-1-star-${idx}`} size={16} fill="currentColor" strokeWidth={1.8} />
            ))}
          </div>

          <div className="space-y-1 text-[28px] font-medium leading-[48px] tracking-[-1.6px]">
            <p>{quoteLineOne}</p>
            <p>{quoteLineTwo} <span className="text-[#5925dc]">{quoteAccent}</span></p>
            <p className="text-[#5925dc]">{quoteLineThree}</p>
          </div>

          <div className="space-y-1">
            <p className="text-base leading-[22.4px]">{author}</p>
            <p className="text-base leading-[22.4px] text-white/50">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-[18px]">
          <div className="flex h-[55px] w-[55px] items-center justify-center rounded-[8px] bg-white shadow-[0px_0px_5.21px_0px_rgba(0,0,0,0.12)]">
            <div className="h-6 w-6 rounded-[6px] bg-[#5925dc]" />
          </div>
          <div className="space-y-[7px]">
            <div className="flex items-center gap-1 text-white">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={`banner-1-rating-star-${idx}`} size={15} fill="currentColor" strokeWidth={1.8} />
              ))}
            </div>
            <p className="text-base leading-[22.4px] text-white">{ratingText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Banner2IntegrationSection({
  id,
  topImage,
  titleLineOne,
  titleLineTwo,
  subtitle,
  ctaLabel,
  ctaHref,
}: {
  id: string;
  topImage: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section id={id} className="bg-[#f4f4f4] px-[74px] py-[120px]">
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-[79px] text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={topImage} alt="" className="h-[103px] w-[321px] object-contain" />

        <div className="space-y-8">
          <h2 className="ds-h2 text-[#1e1e1e]">
            <span className="block">{titleLineOne}</span>
            <span className="block">
              <span className="text-[#1e1e1e]">tools </span>
              <span className="text-black/50">{titleLineTwo}</span>
            </span>
          </h2>
          <p className="mx-auto max-w-[435px] text-base leading-[22.4px] text-[#3d3d3d]">{subtitle}</p>
          <div className="flex justify-center">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Banner3CtaSplitSection({
  id,
  ratingText,
  titleLineOne,
  titleLineTwo,
  subtitle,
  ctaLabel,
  ctaHref,
  image,
}: {
  id: string;
  ratingText: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
}) {
  return (
    <section id={id} className="bg-[#f4f4f4] px-[74px] py-[112px]">
      <div className="grid items-center gap-6 lg:grid-cols-2">
        <div className="space-y-10">
          <div className="flex items-center gap-[18px]">
            <div className="flex h-[55px] w-[55px] items-center justify-center rounded-[8px] bg-white shadow-[0px_0px_5.21px_0px_rgba(0,0,0,0.12)]">
              <div className="h-6 w-6 rounded-[6px] bg-[#5925dc]" />
            </div>
            <div className="space-y-[7px]">
              <div className="flex items-center gap-1 text-black/45">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={`banner-3-star-${idx}`} size={15} fill="currentColor" strokeWidth={1.8} />
                ))}
              </div>
              <p className="text-base leading-[22.4px] text-[#1e1e1e]">{ratingText}</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="ds-h2">
              <span className="block text-[#413df2]">{titleLineOne}</span>
              <span className="block text-[#1e1e1e]">{titleLineTwo}</span>
            </h2>
            <p className="max-w-[360px] text-base leading-[22.4px] text-[#3d3d3d]">{subtitle}</p>
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>

        <div className="overflow-hidden rounded-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" className="h-[526px] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function Banner4SplitLightReviewSection({
  id,
  image,
  quoteLineOne,
  quoteLineTwo,
  quoteLineThree,
  author,
  role,
  ratingText,
}: {
  id: string;
  image: string;
  quoteLineOne: string;
  quoteLineTwo: string;
  quoteLineThree: string;
  author: string;
  role: string;
  ratingText: string;
}) {
  return (
    <section id={id} className="bg-[#cdd0dc]">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="h-full min-h-[560px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="flex items-center py-[73px] pr-[74px]">
          <div className="max-w-[692px] space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-1 text-black/35">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={`banner-4-star-${idx}`} size={16} fill="currentColor" strokeWidth={1.8} />
                ))}
              </div>

              <div className="space-y-1 text-[28px] font-medium leading-[48px] tracking-[-1.6px]">
                <p className="text-[#1e1e1e]">{quoteLineOne}</p>
                <p className="text-[#1e1e1e]">{quoteLineTwo}</p>
                <p>
                  <span className="text-[#1e1e1e]">expectation’s. </span>
                  <span className="text-[#413df2]">{quoteLineThree}</span>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-base leading-[22.4px] text-[#1e1e1e]">{author}</p>
                <p className="text-base leading-[22.4px] text-black/50">{role}</p>
              </div>
            </div>

            <div className="flex items-center gap-[18px]">
              <div className="flex h-[55px] w-[55px] items-center justify-center rounded-[8px] bg-white shadow-[0px_0px_5.21px_0px_rgba(0,0,0,0.12)]">
                <div className="h-6 w-6 rounded-[6px] bg-[#5925dc]" />
              </div>
              <div className="space-y-[7px]">
                <div className="flex items-center gap-1 text-black/45">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={`banner-4-rating-star-${idx}`} size={15} fill="currentColor" strokeWidth={1.8} />
                  ))}
                </div>
                <p className="text-base leading-[22.4px] text-[#1e1e1e]">{ratingText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Banner5FutureReadySection({
  id,
  backgroundImage,
  avatars,
  ratingText,
  titleLineOne,
  titleLineTwo,
  subtitleLineOne,
  subtitleLineTwo,
  ctaLabel,
  ctaHref,
}: {
  id: string;
  backgroundImage: string;
  avatars: string[];
  ratingText: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitleLineOne: string;
  subtitleLineTwo: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section id={id} className="bg-[#f4f4f4] px-[74px] py-[112px]">
      <div className="relative overflow-hidden rounded-[24px] px-8 py-10 text-white md:px-12 md:py-14 lg:px-[80px] lg:py-[80px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={backgroundImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(70.96deg,#000_35%,rgba(0,0,0,0)_60%)]" />

        <div className="relative z-10 flex min-h-[360px] max-w-[430px] flex-col gap-[80px]">
          <div className="space-y-8">
            <div className="flex items-center gap-[18px]">
              <div className="flex -space-x-[14px] pr-[14px]">
                {avatars.map((avatar, idx) => (
                  <div key={`banner-5-avatar-${idx}`} className="h-[54px] w-[54px] overflow-hidden rounded-full border-4 border-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={avatar} alt="" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="space-y-[7px]">
                <div className="flex items-center gap-1 text-white">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={`banner-5-star-${idx}`} size={15} fill="currentColor" strokeWidth={1.8} />
                  ))}
                </div>
                <p className="text-base font-medium leading-[22.4px] text-white">{ratingText}</p>
              </div>
            </div>

            <div className="space-y-[31px]">
              <h2 className="ds-h2 text-white">
                <span className="block">{titleLineOne}</span>
                <span className="block">{titleLineTwo}</span>
              </h2>
              <p className="max-w-[320px] text-base font-medium leading-[22.4px] text-white">
                <span className="block">{subtitleLineOne}</span>
                <span className="block">{subtitleLineTwo}</span>
              </p>
              <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioCardsSection({
  id,
  titleLineOne,
  titleLineTwo,
  subtitle,
  items,
}: {
  id: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle?: string;
  items: Array<{
    image: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  }>;
}) {
  return (
    <section id={id} className="bg-[#f6f6f6] px-[74px] py-[112px]">
      <div className="space-y-20">
        <div className="space-y-5">
          <h2 className="ds-h2">
            <span className="block text-black/50">{titleLineOne}</span>
            <span className="block text-[#1e1e1e]">{titleLineTwo}</span>
          </h2>
          {subtitle ? <p className="max-w-[780px] text-base leading-[22.4px] text-[#3d3d3d]">{subtitle}</p> : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, idx) => (
            <article key={`${item.title}-${idx}`} className="overflow-hidden rounded-[8px] bg-white ds-border">
              <div className="h-[290px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-8 p-10">
                <div className="space-y-6">
                  <h3 className="ds-h5 text-[#1e1e1e]">{item.title}</h3>
                  <p className="max-w-[300px] text-[14px] leading-[19.6px] text-[#3d3d3d]">{item.description}</p>
                </div>
                <SecondaryCta href={item.ctaHref}>{item.ctaLabel}</SecondaryCta>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedSectionImageRight({
  id,
  eyebrow,
  titleLineOne,
  titleLineTwo,
  ctaLabel,
  ctaHref,
  paragraphOne,
  paragraphTwo,
  backgroundImage,
  featureImage,
}: {
  id: string;
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  ctaLabel: string;
  ctaHref: string;
  paragraphOne: string;
  paragraphTwo: string;
  backgroundImage: string;
  featureImage: string;
}) {
  return (
    <section id={id} className="bg-white px-[74px] py-[112px]">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-[20px] leading-7 tracking-[-0.02em] text-[#3d3d3d]">{eyebrow}</p>
              <h2 className="ds-h2">
                <span className="block text-[#1e1e1e]">{titleLineOne}</span>
                <span className="block text-black/50">{titleLineTwo}</span>
              </h2>
            </div>

            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>

            <div className="max-w-[380px] space-y-6 pt-1">
              <p className="text-base leading-[22.4px] text-[#3d3d3d]">{paragraphOne}</p>
              <p className="text-base leading-[22.4px] text-[#3d3d3d]">{paragraphTwo}</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[8px] p-6" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="overflow-hidden rounded-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featureImage} alt="Featured section visual" className="h-[664px] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedSectionImageLeft({
  id,
  eyebrow,
  titleLineOne,
  titleLineTwo,
  ctaLabel,
  ctaHref,
  paragraphOne,
  paragraphTwo,
  backgroundImage,
  featureImage,
}: {
  id: string;
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  ctaLabel: string;
  ctaHref: string;
  paragraphOne: string;
  paragraphTwo: string;
  backgroundImage: string;
  featureImage: string;
}) {
  return (
    <section id={id} className="bg-white px-[74px] py-[112px]">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-[8px] p-6" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="overflow-hidden rounded-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featureImage} alt="Featured section visual" className="h-[664px] w-full object-cover" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-[20px] leading-7 tracking-[-0.02em] text-[#3d3d3d]">{eyebrow}</p>
              <h2 className="ds-h2">
                <span className="block text-[#1e1e1e]">{titleLineOne}</span>
                <span className="block text-black/50">{titleLineTwo}</span>
              </h2>
            </div>

            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>

            <div className="max-w-[380px] space-y-6 pt-1">
              <p className="text-base leading-[22.4px] text-[#3d3d3d]">{paragraphOne}</p>
              <p className="text-base leading-[22.4px] text-[#3d3d3d]">{paragraphTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing1DarkCardsSection({
  id,
  backgroundImage,
  plans,
  trustText,
  logos,
}: {
  id: string;
  backgroundImage: string;
  plans: Array<{
    name: string;
    price: string;
    description: string;
    features: string[];
    ctaLabel: string;
    ctaHref: string;
    highlight?: boolean;
    badge?: string;
  }>;
  trustText: string;
  logos: string[];
}) {
  return (
    <section id={id} className="relative overflow-hidden px-[74px] py-[120px] text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={backgroundImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 space-y-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <article
              key={`${plan.name}-${idx}`}
              className={`relative rounded-[4px] border p-10 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.16)] backdrop-blur-[20px] ${
                plan.highlight ? "border-[#19174f] bg-[#19174f]/55" : "border-white/5 bg-black/50"
              }`}
            >
              {plan.highlight && plan.badge && (
                <span className="absolute right-10 top-8 rounded-[4px] bg-[#413df2] px-3 py-1 text-xs font-medium text-white">
                  {plan.badge}
                </span>
              )}

              <div className="space-y-4">
                <p className="text-[20px] tracking-[-0.02em] text-white/70">{plan.name}</p>
                <p className="text-[48px] leading-none tracking-[-0.03em] text-white">{plan.price}</p>
                <p className="max-w-[260px] text-sm leading-[19.6px] tracking-[0.2px] text-white/40">{plan.description}</p>
              </div>

              <div className="my-8 h-px bg-white/10" />

              <ul className="space-y-3">
                {plan.features.map((feature, featureIdx) => (
                  <li key={`${plan.name}-feature-${featureIdx}`} className="flex items-start gap-2 text-[24px]">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#00d26a]" />
                    <span className="text-base leading-[22.4px] text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.highlight ? (
                <PrimaryCta href={plan.ctaHref} className="mt-8 w-fit">
                  {plan.ctaLabel}
                </PrimaryCta>
              ) : (
                <SecondaryCta href={plan.ctaHref} dark className="mt-8 border-white/20 text-[#7789ff] hover:bg-white/5">
                  {plan.ctaLabel}
                </SecondaryCta>
              )}
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-1 text-white/80">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={`pricing-1-star-${idx}`} size={15} fill="currentColor" strokeWidth={1.8} />
              ))}
            </div>
            <p className="max-w-[240px] text-sm leading-[19.6px] text-white">{trustText}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-14 gap-y-4">
            {logos.map((logo, idx) => (
              <span key={`${logo}-${idx}`} className="text-[28px] leading-none tracking-[-0.02em] text-white/25">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing2DarkFlatSection({
  id,
  title,
  subtitle,
  plans,
  trustText,
  logos,
}: {
  id: string;
  title: string;
  subtitle: string;
  plans: Array<{
    name: string;
    price: string;
    description: string;
    features: string[];
    ctaLabel: string;
    ctaHref: string;
    highlight?: boolean;
    badge?: string;
  }>;
  trustText: string;
  logos: string[];
}) {
  return (
    <section id={id} className="bg-[#070707] px-[74px] py-[112px] text-white">
      <div className="space-y-16">
        <div className="mx-auto max-w-[600px] space-y-6 text-center">
          <h2 className="whitespace-pre-line ds-h2">{title}</h2>
          <p className="text-base leading-[22.4px] text-white">{subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <article
              key={`${plan.name}-${idx}`}
              className={`rounded-[4px] border p-[41px] ${
                plan.highlight ? "border-[#413df2] bg-[#413df2]" : "border-white/5 bg-white/10"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[24px] leading-7 tracking-[-0.02em] text-white/70">{plan.name}</p>
                  {plan.highlight && plan.badge && (
                    <span className="rounded-[4px] bg-[#f97066] px-3 py-1 text-xs font-medium text-white">{plan.badge}</span>
                  )}
                </div>
                <p className="text-[48px] leading-none tracking-[-0.03em] text-white">{plan.price}</p>
                <p className="max-w-[260px] text-sm leading-[19.6px] tracking-[0.2px] text-white/50">{plan.description}</p>
              </div>

              <div className="my-8 h-px bg-white/10" />

              <ul className="space-y-3">
                {plan.features.map((feature, featureIdx) => (
                  <li key={`${plan.name}-${featureIdx}`} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#00d26a]" />
                    <span className="text-base leading-[22.4px] text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <PrimaryCta href={plan.ctaHref} className="mt-8 w-full justify-center bg-white text-[#1e1e1e] hover:opacity-90">
                {plan.ctaLabel}
              </PrimaryCta>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-1 text-white/80">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={`pricing-2-star-${idx}`} size={15} fill="currentColor" strokeWidth={1.8} />
              ))}
            </div>
            <p className="max-w-[240px] text-sm leading-[19.6px] text-white">{trustText}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-14 gap-y-4">
            {logos.map((logo, idx) => (
              <span key={`${logo}-${idx}`} className="text-[28px] leading-none tracking-[-0.02em] text-white/25">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({
  id,
  eyebrow,
  title,
  subtitle,
  steps,
  ctaHref,
  ctaLabel,
  whatsappMessage,
  whatsappLabel,
  tone = "soft",
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: ProcessItem[];
  ctaHref?: string;
  ctaLabel?: string;
  whatsappMessage?: string;
  whatsappLabel?: string;
  tone?: "light" | "soft";
}) {
  return (
    <V3Section id={id} tone={tone} className="!py-[206px]">
      <div className="space-y-12">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <SurfaceCard key={`${step.step}-${idx}`} className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#413df2]">{step.step}</p>
              <h3 className="ds-h6 text-[#1e1e1e]">{step.title}</h3>
              <p className="text-base leading-7 text-[#3d3d3d]">{step.description}</p>
            </SurfaceCard>
          ))}
        </div>
        {ctaHref && ctaLabel && (
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
            <WhatsAppCta message={whatsappMessage} label={whatsappLabel ?? "Hablemos por WhatsApp"} />
          </div>
        )}
      </div>
    </V3Section>
  );
}

export function SimpleStepsSection({
  id,
  titleLineOne,
  titleLineTwo,
  subtitleLineOne,
  subtitleLineTwo,
  items,
}: {
  id: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitleLineOne: string;
  subtitleLineTwo: string;
  items: SimpleStepItem[];
}) {
  return (
    <V3Section id={id} tone="light">
      <div className="space-y-12">
        <div className="mx-auto max-w-[620px] space-y-6 text-center">
          <h2 className="whitespace-pre-line ds-h2 text-[#1e1e1e]">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
          </h2>
          <p className="mx-auto max-w-[460px] whitespace-pre-line text-base font-medium leading-[22.4px] text-[#3d3d3d]">
            <span className="block">{subtitleLineOne}</span>
            <span className="block">{subtitleLineTwo}</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, idx) => (
            <article key={`${item.title}-${idx}`} className="space-y-6">
              <div className="overflow-hidden border border-black/10">
                <img
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  className="aspect-[332/221] w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-3">
                <h3 className="ds-h6 text-[#1e1e1e]">
                  {item.title}
                </h3>
                <p className="max-w-[260px] whitespace-pre-line text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                  {item.description}
                </p>
              </div>

              <ul className="space-y-2.5">
                {item.bullets.map((bullet, bulletIdx) => (
                  <li key={`${item.title}-bullet-${bulletIdx}`} className="flex items-center gap-2 text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                    <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#413df2] text-[11px] font-semibold leading-none text-white">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </V3Section>
  );
}

export function KeyFeatureGridSection({
  id,
  eyebrow,
  titleLineOne,
  titleLineTwo,
  subtitle,
  ctaLabel,
  ctaHref,
  items,
}: {
  id: string;
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  items: KeyFeatureGridItem[];
}) {
  return (
    <V3Section id={id} tone="soft">
      <div className="space-y-12 md:space-y-16">
        <div className="mx-auto max-w-[760px] space-y-6 text-center">
          <p className="text-[20px] leading-7 tracking-[-0.02em] text-black/50">{eyebrow}</p>
          <h2 className="site-hero-title ds-h2 text-[#1e1e1e]">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
          </h2>
          <p className="mx-auto max-w-[660px] text-base leading-7 text-[#3d3d3d]">{subtitle}</p>
          <div className="flex justify-center">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, idx) => {
            const Icon = keyFeatureGridIconMap[item.icon];
            return (
              <SurfaceCard key={`${item.title}-${idx}`} className="space-y-4 p-8">
                <div className="flex h-[45px] w-[45px] items-center justify-center text-[#413df2]">
                  <Icon size={34} strokeWidth={1.8} />
                </div>
                <h3 className="ds-h6 text-[#1e1e1e]">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-[#3d3d3d]">{item.description}</p>
                {item.href && (
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-base font-medium text-[#413df2] hover:opacity-80"
                  >
                    {item.ctaLabel ?? "Ver industria"}
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </a>
                )}
              </SurfaceCard>
            );
          })}
        </div>
      </div>
    </V3Section>
  );
}

export function SocialProofHeroSection({
  id,
  ratingText,
  titleLineOne,
  titleLineTwo,
  subtitle,
  ctaLabel,
  ctaHref,
  avatars,
  leftImage,
  centerImage,
  rightImage,
  testimonialQuote,
  testimonialAuthor,
  testimonialRole,
  trustedText,
  logos,
}: {
  id: string;
  ratingText: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  avatars: string[];
  leftImage: string;
  centerImage: string;
  rightImage: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  trustedText: string;
  logos: string[];
}) {
  return (
    <V3Section id={id} tone="soft">
      <div className="space-y-14 md:space-y-20">
        <div className="mx-auto max-w-[760px] space-y-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar, idx) => (
                <div key={`${avatar}-${idx}`} className="h-[48px] w-[48px] overflow-hidden rounded-full border-2 border-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={avatar} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-1 text-[#1e1e1e]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" strokeWidth={1.8} />
                ))}
              </div>
              <p className="text-base text-[#1e1e1e]">{ratingText}</p>
            </div>
          </div>

          <h2 className="site-hero-title ds-h2 text-[#1e1e1e]">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
          </h2>
          <p className="mx-auto max-w-[560px] text-[20px] leading-8 tracking-[-0.02em] text-[#3d3d3d]">{subtitle}</p>
          <div className="flex justify-center">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="overflow-hidden rounded-[8px] border border-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={leftImage} alt="Client portrait" className="h-[546px] w-full object-cover" />
          </div>

          <article className="relative overflow-hidden rounded-[8px] border border-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={centerImage} alt="Client feedback" className="h-[546px] w-full object-cover" />
            <div className="absolute inset-0 bg-black/50 p-6 text-white">
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={`card-star-${idx}`} size={16} fill="currentColor" strokeWidth={1.8} />
                ))}
              </div>
              <p className="max-w-[320px] text-[28px] font-medium leading-[1.12] tracking-[-0.03em]">{testimonialQuote}</p>
              <div className="mt-6">
                <p className="text-base font-medium">{testimonialAuthor}</p>
                <p className="text-base text-white/70">{testimonialRole}</p>
              </div>
            </div>
          </article>

          <div className="overflow-hidden rounded-[8px] border border-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={rightImage} alt="Client portrait" className="h-[546px] w-full object-cover" />
          </div>
        </div>

        <div className="space-y-8 text-center">
          <p className="text-[14px] font-medium uppercase tracking-[0.08em] text-black/70">{trustedText}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4">
            {logos.map((logo, idx) => (
              <span key={`${logo}-${idx}`} className="text-[28px] font-medium leading-none tracking-[-0.02em] text-black/50">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </V3Section>
  );
}

export function DarkOverlayHeroSection({
  id,
  backgroundImage,
  badgeText,
  titleLineOne,
  titleLineTwo,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  supportPoints,
  contentMaxWidthClass,
  avatars,
  ratingText,
  maxHeightClass,
  showParticles = false,
  particleConfig,
}: {
  id: string;
  backgroundImage: string;
  badgeText: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  supportPoints?: string[];
  contentMaxWidthClass?: string;
  avatars?: string[];
  ratingText?: string;
  maxHeightClass?: string;
  showParticles?: boolean;
  particleConfig?: AmbientParticlesConfig;
}) {
  const hasSocialProof = (avatars?.length ?? 0) > 0 && Boolean(ratingText);

  return (
    <section
      id={id}
      className={`hero-max-h relative overflow-hidden bg-black px-6 pb-[206px] pt-[206px] text-white md:px-10 lg:px-[74px] ${maxHeightClass ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={backgroundImage} alt="Hero background" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(47deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.28)_52%)]" />
      {showParticles ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(65,61,242,0.12),transparent_55%)]" />
          <AmbientParticlesBackground {...particleConfig} />
        </>
      ) : null}

      <div className="relative z-10 flex flex-col gap-16 lg:gap-20">
        <div className={`${contentMaxWidthClass ?? "max-w-[640px]"} space-y-8`}>
          <div className="inline-flex items-center gap-2">
            <Sparkles size={16} className="text-[#413df2]" />
            <p className="text-base text-white/70">{badgeText}</p>
          </div>

          <h2 className="site-hero-title hero-title-clamp ds-h2 text-white">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
          </h2>

          <p className="hero-copy-clamp max-w-[500px] text-[20px] leading-8 tracking-[-0.02em] text-white/70">{subtitle}</p>
          {supportPoints && supportPoints.length > 0 && (
            <ul className="space-y-2">
              {supportPoints.map((point, idx) => (
                <li key={`${point}-${idx}`} className="flex items-start gap-2 text-base text-white/85">
                  <span className="mt-2 inline-flex h-[6px] w-[6px] rounded-full bg-[#413df2]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap items-center gap-8">
            <PrimaryCta href={primaryHref}>{primaryLabel}</PrimaryCta>
            <a href={secondaryHref} className="text-base font-medium text-white hover:text-white/80">
              {secondaryLabel}
            </a>
          </div>
        </div>

        {hasSocialProof ? (
          <div className="flex flex-wrap items-center gap-[18px]">
            <div className="flex -space-x-[14px] pr-[14px]">
              {avatars!.map((avatar, idx) => (
                <div key={`${avatar}-${idx}`} className="h-[54px] w-[54px] overflow-hidden rounded-full border-4 border-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={avatar} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>

            <div className="space-y-[7px]">
              <div className="flex items-center gap-1 text-white">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={`hero-dark-star-${idx}`} size={15} fill="currentColor" strokeWidth={1.8} />
                ))}
              </div>
              <p className="text-base leading-[22.4px] text-white">{ratingText}</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function FeatureShowcaseSection({
  id,
  eyebrow,
  titleLineOne,
  titleLineTwo,
  subtitle,
  ctaLabel,
  ctaHref,
  image,
  items,
}: {
  id: string;
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  items: FeatureShowcaseItem[];
}) {
  return (
    <V3Section id={id} tone="soft">
      <div className="space-y-12 md:space-y-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="space-y-4">
            <p className="text-[20px] leading-7 tracking-[-0.02em] text-black/50">{eyebrow}</p>
            <h2 className="ds-h2 text-[#1e1e1e]">
              <span className="block text-[#1e1e1e]">{titleLineOne}</span>
              <span className="block text-black/50">{titleLineTwo}</span>
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-base leading-7 text-[#3d3d3d]">{subtitle}</p>
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[416px_1fr] lg:gap-20">
          <div className="space-y-0">
            {items.map((item, idx) => {
              const Icon = featureIconMap[item.icon];
              return (
                <article key={`${item.title}-${idx}`} className="border-l border-black/10 py-6 pl-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[4px] bg-[#413df2] text-white">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <h3 className="ds-h4 text-[#1e1e1e]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#3d3d3d]">{item.description}</p>
                </article>
              );
            })}
          </div>
          <div className="overflow-hidden rounded-[8px] border border-black/10 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="Feature showcase" className="h-full min-h-[560px] w-full object-cover" />
          </div>
        </div>
      </div>
    </V3Section>
  );
}

export function FeaturedBlackSection({
  id,
  titleLineOne,
  titleLineTwo,
  descriptionLines,
  features,
  featureImage,
  stats,
  quotePrimary,
  quoteSecondaryLineOne,
  quoteSecondaryLineTwo,
  quoteSecondaryLineThree,
}: {
  id: string;
  titleLineOne: string;
  titleLineTwo: string;
  descriptionLines: string[];
  features: FeaturedBlackFeatureItem[];
  featureImage: string;
  stats: FeaturedBlackStatItem[];
  quotePrimary: string;
  quoteSecondaryLineOne: string;
  quoteSecondaryLineTwo: string;
  quoteSecondaryLineThree?: string;
}) {
  return (
    <section id={id} className="bg-[#070707] px-6 py-[112px] text-white md:px-10 lg:px-[74px]">
      <div className="mx-auto max-w-[1400px] space-y-16">
        <div className="mx-auto max-w-[520px] space-y-6 text-center">
          <h2 className="ds-h2 text-white">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
          </h2>
          <div className="space-y-[2px] text-base font-medium leading-[22.4px] text-white/70">
            {descriptionLines.map((line, idx) => (
              <p key={`${line}-${idx}`}>{line}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-16 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = featuredBlackIconMap[feature.icon];
            return (
              <article key={`${feature.lineOne}-${idx}`} className="space-y-4">
                <div className="flex h-[45px] w-[45px] items-center justify-center text-white">
                  <Icon size={28} strokeWidth={1.9} />
                </div>
                <p className="text-base font-medium leading-[22.4px] text-white">
                  <span className="block">{feature.lineOne}</span>
                  <span className="block">{feature.lineTwo}</span>
                </p>
              </article>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featureImage} alt="Featured black section visual" className="h-[360px] w-full object-cover md:h-[560px] lg:h-[708px]" />
        </div>

        <div className="grid gap-16 lg:grid-cols-3">
          {stats.map((stat, idx) => (
            <article key={`${stat.value}-${idx}`} className="rounded-[8px] bg-[#070707] px-8 py-9">
              <div className="flex items-center gap-8">
                <p className="text-[48px] font-medium leading-[57.6px] tracking-[-1.9px] text-white">{stat.value}</p>
                <p className="text-base font-medium leading-[22.4px] text-white">
                  <span className="block">{stat.lineOne}</span>
                  <span className="block">{stat.lineTwo}</span>
                  {stat.lineThree ? <span className="block">{stat.lineThree}</span> : null}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-6 pt-2 text-center">
          <p className="text-[20px] tracking-[0.2em] text-white/30">★★★★★</p>
          <blockquote className="mx-auto max-w-[760px] text-[40px] font-medium leading-[40px] tracking-[-1.6px] text-white">
            <span className="block">{quotePrimary}</span>
            <span className="block text-white/50">{quoteSecondaryLineOne}</span>
            <span className="block text-white/50">{quoteSecondaryLineTwo}</span>
            {quoteSecondaryLineThree ? <span className="block text-white/50">{quoteSecondaryLineThree}</span> : null}
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function BlogSection({
  id,
  titleLineOne,
  titleLineTwo,
  subtitleLineOne,
  subtitleLineTwo,
  ctaLabel,
  ctaHref,
  items,
}: {
  id: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitleLineOne: string;
  subtitleLineTwo: string;
  ctaLabel: string;
  ctaHref: string;
  items: BlogSectionItem[];
}) {
  return (
    <section id={id} className="bg-[#f4f4f4] px-6 py-[112px] md:px-10 lg:px-[74px]">
      <div className="mx-auto max-w-[1400px] space-y-20">
        <div className="mx-auto max-w-[600px] space-y-8 text-center">
          <div className="space-y-6">
            <h2 className="ds-h2 text-[#1e1e1e]">
              <span className="block">{titleLineOne}</span>
              <span className="block">{titleLineTwo}</span>
            </h2>
            <p className="mx-auto max-w-[350px] text-base font-medium leading-[22.4px] text-[#3d3d3d]">
              <span className="block">{subtitleLineOne}</span>
              <span className="block">{subtitleLineTwo}</span>
            </p>
          </div>
          <div className="flex justify-center">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, idx) => (
            <article key={`${item.title}-${idx}`} className="space-y-6">
              <div className="overflow-hidden rounded-[8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className="h-[290px] w-full object-cover" />
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-[24px] font-medium leading-[28.8px] tracking-[-0.5px] text-[#1e1e1e]">{item.title}</h3>
                  <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                    <span className="block">{item.lineOne}</span>
                    <span className="block">{item.lineTwo}</span>
                  </p>
                </div>
                <a href={item.ctaHref} className="inline-flex items-center gap-3 text-base font-medium text-[#413df2] hover:opacity-80">
                  {item.ctaLabel}
                  <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OurClient2Section({
  id,
  title = "Our Clients",
  topLogos,
  bottomLogos,
}: {
  id: string;
  title?: string;
  topLogos: OurClient2LogoItem[];
  bottomLogos: OurClient2LogoItem[];
}) {
  return (
    <section id={id} className="bg-white py-4">
      <div className="mx-auto max-w-[1520px] space-y-7">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:items-start">
          <h2 className="pl-0 text-[48px] font-medium leading-[57.6px] tracking-[-1.9px] text-[#1e1e1e]">{title}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topLogos.map((logo, idx) => (
              <div key={`${logo.label}-${idx}`} className="flex h-[120px] items-center justify-center bg-[#f6f6f6] px-8">
                <span className="text-[34px] font-medium tracking-[-0.02em] text-black/50">{logo.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {bottomLogos.map((logo, idx) => (
            <div key={`${logo.label}-${idx}`} className="flex h-[120px] items-center justify-center bg-[#f6f6f6] px-8">
              <span className="text-[34px] font-medium tracking-[-0.02em] text-black/50">{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutOverlayStatsSection({
  id,
  eyebrow,
  titleLineOne,
  titleLineTwo,
  titleLineThree,
  subtitle,
  bullets,
  ctaLabel,
  ctaHref,
  image,
  stats,
}: {
  id: string;
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  titleLineThree: string;
  subtitle: string;
  bullets?: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  stats: AboutOverlayStatItem[];
}) {
  return (
    <V3Section id={id} tone="soft">
      <div className="space-y-12 md:space-y-16">
        <div className="max-w-[920px] space-y-6">
          <p className="text-[20px] leading-7 tracking-[-0.02em] text-black/50">{eyebrow}</p>
          <h2 className="ds-h2 text-[#1e1e1e]">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
            <span className="block text-black/50">{titleLineThree}</span>
          </h2>
          <p className="max-w-[560px] text-base leading-7 text-[#3d3d3d]">{subtitle}</p>
          {bullets && bullets.length > 0 && (
            <ul className="grid gap-3 pt-1 md:grid-cols-2">
              {bullets.map((bullet, idx) => (
                <li key={`${bullet}-${idx}`} className="flex items-center gap-2 text-base text-[#1e1e1e]">
                  <CheckCircle2 size={16} strokeWidth={2.2} className="text-[#0f8c39]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
        </div>

        <div className="relative overflow-hidden rounded-[8px] border border-black/10 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="Team collaboration" className="h-[720px] w-full object-cover" />

          <div className="absolute inset-x-6 bottom-6 rounded-[6px] border border-black/10 bg-white p-4 md:inset-x-10 md:bottom-8 md:p-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
              {stats.map((stat, idx) => {
                const Icon = aboutStatIconMap[stat.icon];
                return (
                  <article key={`${stat.value}-${idx}`} className="space-y-3 xl:border-l xl:border-[#413df2] xl:px-5 xl:first:border-l-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-[#413df2] text-white">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <p className="text-[40px] font-medium leading-[1] tracking-[-0.03em] text-[#1e1e1e]">{stat.value}</p>
                    <p className="max-w-[220px] text-base leading-7 text-[#3d3d3d]">{stat.label}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </V3Section>
  );
}

export function ProofSection({
  id,
  title,
  subtitle,
  stats,
  testimonials,
}: {
  id: string;
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  testimonials: TestimonialItem[];
}) {
  return (
    <V3Section id={id} tone="light">
      <div className="space-y-12">
        <SectionHeading eyebrow="Proof" title={title} subtitle={subtitle} />
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <SurfaceCard key={`${stat.label}-${idx}`} className="space-y-2">
              <p className="ds-h4 text-[#1e1e1e]">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.08em] text-[#3d3d3d]">{stat.label}</p>
            </SurfaceCard>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <SurfaceCard key={`${item.author}-${idx}`} className="space-y-4">
              <p className="text-base leading-7 text-[#3d3d3d]">&ldquo;{item.quote}&rdquo;</p>
              <div>
                <p className="text-base font-medium text-[#1e1e1e]">{item.author}</p>
                <p className="text-sm text-[#3d3d3d]">{item.role}</p>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </V3Section>
  );
}

export function PricingSection({
  id,
  title,
  subtitle,
  plans,
  proposalHref = "#lead-form",
  cardButtonLabel = "Solicitar servicio",
  showSecondaryWhatsAppButton = false,
  whatsappLabel = "Hablemos por WhatsApp",
  whatsappMessage,
  helpText = "",
  helpCtaText = "Request a free quote for your business",
  helpCtaHref = "#lead-form",
}: {
  id: string;
  title: string;
  subtitle: string;
  plans: PricingItem[];
  proposalHref?: string;
  cardButtonLabel?: string;
  showSecondaryWhatsAppButton?: boolean;
  whatsappLabel?: string;
  whatsappMessage?: string;
  helpText?: string;
  helpCtaText?: string;
  helpCtaHref?: string;
}) {
  return (
    <V3Section id={id} tone="dark">
      <div className="space-y-12">
        <SectionHeading eyebrow="Pricing" title={title} subtitle={subtitle} align="center" dark />
        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan, planIndex) => (
            <article
              key={`${plan.plan}-${planIndex}`}
              className={`w-full max-w-[360px] rounded-[8px] border p-6 md:p-8 ${
                plan.highlight || plan.plan.toLowerCase() === "business"
                  ? "border-[#413df2] bg-white/10"
                  : "border-white/15 bg-white/5"
              }`}
            >
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.12em] text-white/70">{plan.plan}</p>
                  {(plan.highlight || plan.plan.toLowerCase() === "business") && (
                    <p className="mt-2 inline-flex rounded-[4px] bg-[#413df2] px-2 py-1 text-xs font-medium uppercase tracking-[0.08em] text-white">
                      Most Popular
                    </p>
                  )}
                  <p className="mt-2 text-[40px] font-medium leading-[1] tracking-[-0.03em] text-white">{plan.price}</p>
                  <p className="mt-2 text-sm text-white/75">{plan.audience}</p>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={`${plan.plan}-${feature}-${featureIndex}`} className="flex items-start gap-2 text-sm text-white/85">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#413df2]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <PrimaryCta
                    href={getWhatsAppUrl(
                      plan.whatsappMessage ?? whatsappMessage ?? `Hola, quiero una propuesta para el plan ${plan.plan}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cardButtonLabel}
                  </PrimaryCta>
                  {showSecondaryWhatsAppButton ? (
                    <WhatsAppCta
                      dark
                      label={whatsappLabel}
                      message={plan.whatsappMessage ?? whatsappMessage ?? `Hola, quiero una propuesta para el plan ${plan.plan}.`}
                    />
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
        {(helpText || helpCtaText) && (
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[8px] border border-white/15 bg-white/5 p-4 md:p-6">
            <p className="text-sm text-white/75">{helpText}</p>
            {helpCtaText ? (
              <SecondaryCta href={helpCtaHref} dark>
                {helpCtaText}
              </SecondaryCta>
            ) : null}
          </div>
        )}
      </div>
    </V3Section>
  );
}

export function FaqSection({
  id,
  title,
  subtitle,
  items,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: FaqItem[];
}) {
  return (
    <V3Section id={id} tone="soft">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading eyebrow="FAQ" title={title} subtitle={subtitle} />
        <div className="space-y-3">
          {items.map((item, idx) => (
            <details
              key={`${item.question}-${idx}`}
              open={idx === 0}
              className="rounded-[8px] border border-black/10 bg-white p-6"
            >
              <summary className="cursor-pointer list-none ds-h6 text-[#1e1e1e]">
                {item.question}
              </summary>
              <p className="mt-4 text-base leading-7 text-[#3d3d3d]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </V3Section>
  );
}

export function FaqSplitActionSection({
  id,
  titleLineOne,
  titleLineTwo,
  subtitle,
  ctaLabel,
  ctaHref,
  items,
}: {
  id: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  items: FaqItem[];
}) {
  return (
    <section id={id} className="bg-[#f4f4f4] px-[74px] py-[112px]">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-8">
          <h2 className="ds-h2 text-[#1e1e1e]">
            <span className="block">{titleLineOne}</span>
            <span className="block">{titleLineTwo}</span>
          </h2>
          <p className="max-w-[320px] text-base leading-[22.4px] text-[#3d3d3d]">{subtitle}</p>
          <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <details
              key={`${item.question}-${idx}`}
              open={idx === 0}
              className="group rounded-[4px] border border-black/10 bg-white p-[25px] open:border-[#413df2] open:bg-[#f3f5ff] open:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.16)]"
            >
              <summary className="ds-h5 flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-[20px] tracking-[-0.4px] text-[#1e1e1e] group-open:text-[#413df2]">
                  {item.question}
                </span>
                <span className="relative h-6 w-6 shrink-0 text-[#1e1e1e]">
                  <ChevronDown size={20} className="absolute inset-0 group-open:hidden" />
                  <ChevronUp size={20} className="absolute inset-0 hidden group-open:block" />
                </span>
              </summary>
              <p className="mt-[23px] max-w-[539px] text-base leading-[22.4px] text-[#3d3d3d]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadCaptureSection({
  title,
  subtitle,
  bullets,
  eyebrow = "Next Step",
  showPrimaryCta = false,
  primaryCtaLabel = "Request Free Quote",
  quoteHref = "#lead-form",
  showProposalCta = false,
  proposalHref = "/contact",
  proposalCtaLabel = "Request Proposal",
  whatsappLabel = "Hablemos por WhatsApp",
  whatsappMessage,
  formSubmitLabel = "Request Free Quote",
  formShowWhatsAppLink = false,
  formShowBudgetField = true,
  formShowWhatsAppField = false,
  formDefaultService = "",
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  eyebrow?: string;
  showPrimaryCta?: boolean;
  primaryCtaLabel?: string;
  quoteHref?: string;
  showProposalCta?: boolean;
  proposalHref?: string;
  proposalCtaLabel?: string;
  whatsappLabel?: string;
  whatsappMessage?: string;
  formSubmitLabel?: string;
  formShowWhatsAppLink?: boolean;
  formShowBudgetField?: boolean;
  formShowWhatsAppField?: boolean;
  formDefaultService?: string;
}) {
  return (
    <V3Section id="contact" tone="light">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
          <ul className="space-y-3">
            {bullets.map((bullet, idx) => (
              <li key={`${bullet}-${idx}`} className="flex items-start gap-3 text-base leading-7 text-[#3d3d3d]">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#413df2]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <WhatsAppCta variant="button" label={whatsappLabel} message={whatsappMessage} />
          </div>
        </div>
        <LeadFormV3
          submitLabel={formSubmitLabel}
          showWhatsAppLink={formShowWhatsAppLink}
          showBudgetField={formShowBudgetField}
          showWhatsAppField={formShowWhatsAppField}
          defaultService={formDefaultService}
        />
      </div>
    </V3Section>
  );
}
