import {
  TrendingUp,
  Smartphone,
  MessageSquare,
  Shield,
  Zap,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const benefits = [
  {
    icon: TrendingUp,
    title: "More leads, more revenue",
    description:
      "A strategic website becomes your best salesperson — working 24/7, converting visitors into contacts, reservations, or sales while you sleep.",
  },
  {
    icon: Shield,
    title: "Instant credibility",
    description:
      "First impressions happen online. A premium, professional website tells your clients: this business is serious, trustworthy, and worth contacting.",
  },
  {
    icon: Smartphone,
    title: "Optimized for mobile",
    description:
      "Over 80% of your visitors arrive on mobile. We build mobile-first experiences that are fast, intuitive, and designed to convert on any screen.",
  },
  {
    icon: MessageSquare,
    title: "Direct connection via WhatsApp",
    description:
      "Every page is built to push visitors toward your WhatsApp or contact form — reducing friction and increasing the number of real conversations.",
  },
  {
    icon: Target,
    title: "Structure built to sell",
    description:
      "We don't just design pages. We design funnels. Every section, headline, and CTA is placed strategically to guide your visitor toward one action: contact you.",
  },
  {
    icon: Zap,
    title: "Speed that keeps visitors",
    description:
      "Slow websites lose clients. We optimize every project for performance, so your site loads fast, ranks better, and keeps people engaged.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-zinc-950">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>Why it matters</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            Your website is your{" "}
            <span className="gradient-text">best sales tool</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl text-balance">
            A good website doesn&apos;t just look great — it works hard for
            your business every single day. Here&apos;s what a strategic site
            does for you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="group card-dark card-hover p-6 flex flex-col gap-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500/20 group-hover:border-amber-500/40">
                  <Icon
                    size={22}
                    className="text-amber-400"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
