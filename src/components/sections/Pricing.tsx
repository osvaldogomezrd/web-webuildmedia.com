"use client";

import { Check, Zap, ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface PlanFeature {
  text: string;
  inherited?: boolean; // true = "Everything in X" line
}

interface Plan {
  id: string;
  name: string;
  price: number;
  setupFee: number;
  description: string;
  features: PlanFeature[];
  cta: string;
  highlighted: boolean;
  badge?: string;
  whatsappMessage: string;
}

const plans: Plan[] = [
  {
    id: "essential",
    name: "Essential",
    price: 49.99,
    setupFee: 350,
    description:
      "For entrepreneurs and small businesses that need a professional, credible web presence — fast.",
    features: [
      { text: "Custom modern website design" },
      { text: "Mobile-first responsive build" },
      { text: "Contact form + lead capture" },
      { text: "WhatsApp floating button" },
      { text: "Social media link integration" },
      { text: "SSL certificate included" },
      { text: "Basic local SEO setup" },
      { text: "2 professional email accounts" },
      { text: "Hosting included" },
    ],
    cta: "Get Started",
    highlighted: false,
    whatsappMessage:
      "Hi! I'm interested in the Essential plan ($49.99/mo). Can you tell me more?",
  },
  {
    id: "business",
    name: "Business",
    price: 74.99,
    setupFee: 450,
    description:
      "For businesses that want a complete website built to attract leads, build trust, and drive real sales.",
    features: [
      { text: "Everything in Essential", inherited: true },
      { text: "Services or product showcase sections" },
      { text: "Advanced multi-step contact forms" },
      { text: "Multiple WhatsApp entry points per page" },
      { text: "Up to 10 professional email accounts" },
      { text: "Priority high-speed hosting" },
      { text: "Performance & Core Web Vitals optimization" },
      { text: "Conversion-focused page structure" },
      { text: "Google Analytics integration" },
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
    whatsappMessage:
      "Hi! I'm interested in the Business plan ($74.99/mo). Can you send me a proposal?",
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    price: 99.99,
    setupFee: 550,
    description:
      "For businesses ready to sell online — a full store with payments, product management, and scale.",
    features: [
      { text: "Everything in Business", inherited: true },
      { text: "Full online store setup" },
      { text: "Payment gateway (Stripe, PayPal, etc.)" },
      { text: "Product & inventory management" },
      { text: "Admin panel for orders & sales" },
      { text: "High-performance dedicated hosting" },
      { text: "SEO-ready product & category pages" },
      { text: "Abandoned cart recovery setup" },
      { text: "Priority launch support" },
    ],
    cta: "Request Proposal",
    highlighted: false,
    whatsappMessage:
      "Hi! I'm interested in the Ecommerce plan ($99.99/mo). I'd like to discuss my project.",
  },
];

// ─── Subcomponents ────────────────────────────────────────────────────────────

function PriceDisplay({
  price,
  setupFee,
  highlighted,
}: {
  price: number;
  setupFee: number;
  highlighted: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-end gap-1">
        <span
          className={cn(
            "text-4xl font-black tracking-tight",
            highlighted ? "text-white" : "text-white"
          )}
        >
          ${price.toFixed(2)}
        </span>
        <span className="text-zinc-500 text-sm font-medium mb-1.5">/month</span>
      </div>
      <p className="text-xs text-zinc-500">
        + ${setupFee} one-time setup &amp; design fee
      </p>
    </div>
  );
}

function FeatureItem({
  feature,
  highlighted,
}: {
  feature: PlanFeature;
  highlighted: boolean;
}) {
  if (feature.inherited) {
    return (
      <li className="flex items-center gap-3 py-0.5">
        <div
          className={cn(
            "w-4 h-4 rounded flex items-center justify-center shrink-0",
            highlighted
              ? "bg-amber-500/20"
              : "bg-zinc-700/60"
          )}
        >
          <Zap
            size={10}
            className={highlighted ? "text-amber-400" : "text-zinc-400"}
            aria-hidden="true"
          />
        </div>
        <span className="text-xs font-semibold text-zinc-300 italic">
          {feature.text}
        </span>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3 py-0.5">
      <div
        className={cn(
          "w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5",
          highlighted
            ? "bg-amber-500/20"
            : "bg-zinc-800"
        )}
      >
        <Check
          size={10}
          className={highlighted ? "text-amber-400" : "text-zinc-500"}
          strokeWidth={3}
          aria-hidden="true"
        />
      </div>
      <span className="text-sm text-zinc-400 leading-snug">{feature.text}</span>
    </li>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  const { highlighted } = plan;

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border transition-all duration-300",
        highlighted
          ? "bg-zinc-900 border-amber-500/60 shadow-2xl shadow-amber-500/10 scale-[1.025] z-10"
          : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:-translate-y-1"
      )}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3.5 py-1 text-xs font-bold text-zinc-950 shadow-lg shadow-amber-500/30">
            <Zap size={10} strokeWidth={3} aria-hidden="true" />
            {plan.badge}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-7 gap-6">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3
              className={cn(
                "text-sm font-bold uppercase tracking-widest",
                highlighted ? "text-amber-400" : "text-zinc-400"
              )}
            >
              {plan.name}
            </h3>
          </div>

          <PriceDisplay
            price={plan.price}
            setupFee={plan.setupFee}
            highlighted={highlighted}
          />

          <p className="text-sm text-zinc-500 leading-relaxed">
            {plan.description}
          </p>
        </div>

        {/* Divider */}
        <div
          className={cn(
            "h-px w-full",
            highlighted ? "bg-amber-500/20" : "bg-zinc-800"
          )}
          aria-hidden="true"
        />

        {/* Features */}
        <ul className="flex flex-col gap-2.5 flex-1" aria-label={`${plan.name} features`}>
          {plan.features.map((feature) => (
            <FeatureItem
              key={feature.text}
              feature={feature}
              highlighted={highlighted}
            />
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col gap-2 pt-2">
          <Button
            variant={highlighted ? "primary" : "secondary"}
            size="md"
            href="#contact"
            className="w-full justify-center"
          >
            {plan.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>

          <a
            href={getWhatsAppUrl(plan.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 transition-colors py-1"
          >
            <MessageCircle size={11} aria-hidden="true" />
            Or chat with us on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding relative overflow-hidden bg-[#070707]"
      aria-labelledby="pricing-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <SectionLabel className="border-white/15 bg-white/10 text-white/80">Pricing</SectionLabel>
          <h2
            id="pricing-heading"
            className="text-[28px] leading-[44px] tracking-[-1.6px] font-medium text-white md:text-[48px] md:leading-[70px] md:tracking-[-2.6px]"
          >
            <span className="block">Simple pricing.</span>
            <span className="block">Powerful results.</span>
          </h2>
          <p className="max-w-2xl text-base leading-[22.4px] text-white/80">
            We build websites that help Punta Cana businesses get more
            clients — not just a pretty page, but a tool that works for you
            every day.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-3 gap-5 items-start max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Trust line */}
        <p className="text-center text-sm text-zinc-600 mt-10 flex items-center justify-center gap-2">
          <span
            className="w-4 h-4 rounded-full bg-green-500/20 border border-green-500/30 inline-flex items-center justify-center text-[9px] text-green-400"
            aria-hidden="true"
          >
            ✓
          </span>
          No hidden fees. Cancel anytime. Setup fee is a one-time charge.
        </p>
      </Container>
    </section>
  );
}
