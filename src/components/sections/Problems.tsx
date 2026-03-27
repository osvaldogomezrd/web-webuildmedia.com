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
    <section className="section-padding relative overflow-hidden bg-[#f6f6f6]">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>Sound familiar?</SectionLabel>
          <h2 className="below-hero-title text-center">
            <span className="block">Problems we solve for</span>
            <span className="block">local businesses</span>
          </h2>
          <p className="max-w-2xl text-base leading-[22.4px] text-[#3d3d3d]">
            These are the most common issues we fix for businesses in Punta
            Cana. If any of these sound familiar, we should talk.
          </p>
        </div>

        {/* Problem cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {problems.map((item, index) => (
            <div
              key={index}
              className="group rounded-[4px] border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="grid sm:grid-cols-[1fr_auto] gap-4 sm:gap-8 items-start">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <XCircle
                      size={18}
                      className="shrink-0 mt-0.5 text-[#f74c3c]"
                      aria-hidden="true"
                    />
                    <h3 className="text-[20px] leading-[28px] tracking-[-0.4px] font-medium text-[#1e1e1e]">
                      {item.problem}
                    </h3>
                  </div>
                  <p className="pl-7 text-base leading-[22.4px] text-[#3d3d3d]">
                    {item.consequence}
                  </p>
                </div>
                <div className="flex items-start gap-2 rounded-[4px] border border-black/10 bg-[#f6f6f6] p-4 sm:max-w-[280px]">
                  <CheckCircle2
                    size={16}
                    className="shrink-0 mt-0.5 text-[#413df2]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-[20px] text-[#1e1e1e]">
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
