import { XCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const problems = [
  {
    problem: "Your business depends only on Instagram",
    consequence:
      "When the algorithm changes or your account has issues, you lose all your visibility overnight. You don't own that audience.",
    fix: "A website is your owned channel — always visible, always working.",
  },
  {
    problem: "Your website looks outdated or unprofessional",
    consequence:
      "Visitors judge your business in under 3 seconds. An old site signals that your business may not be up to standard — and they leave.",
    fix: "A modern, premium design builds instant trust and credibility.",
  },
  {
    problem: "You get visits but no contacts or messages",
    consequence:
      "Traffic without conversion is wasted opportunity. If visitors don't know where to go, they leave without taking action.",
    fix: "Strategic CTAs and clear funnels guide visitors to contact you.",
  },
  {
    problem: "No clear system to capture leads",
    consequence:
      "Without a contact form or WhatsApp integration, potential clients have no easy way to reach you, so they don't.",
    fix: "We integrate WhatsApp + forms so every visitor has a reason to contact you.",
  },
  {
    problem: "Slow loading time on mobile",
    consequence:
      "53% of mobile users abandon a site that takes over 3 seconds to load. You're losing clients before they even see your offer.",
    fix: "Performance-optimized builds that load in under 2 seconds.",
  },
];

export function Problems() {
  return (
    <section className="section-padding bg-zinc-900/50 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-500/3 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>Sound familiar?</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            Problems we solve for{" "}
            <span className="gradient-text">local businesses</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl text-balance">
            These are the most common issues we fix for businesses in Punta
            Cana. If any of these sound familiar, we should talk.
          </p>
        </div>

        {/* Problem cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {problems.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="grid sm:grid-cols-[1fr_auto] gap-4 sm:gap-8 items-start">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <XCircle
                      size={18}
                      className="text-red-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <h3 className="font-bold text-white">{item.problem}</h3>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed pl-7">
                    {item.consequence}
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:max-w-[260px] bg-zinc-800/60 rounded-xl p-3 border border-zinc-700/40">
                  <CheckCircle2
                    size={16}
                    className="text-amber-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {item.fix}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
