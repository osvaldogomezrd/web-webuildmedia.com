import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a deep-dive session to understand your business, your target audience, your competitors, and your conversion goals. No assumptions — just clarity.",
    duration: "Day 1–2",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We map out the site structure, user journey, and conversion points. Every page has a purpose, every section has a goal. Strategy before design, always.",
    duration: "Day 3–4",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We craft the visual identity of your site — premium, on-brand, and built to convert. You review and approve before a single line of code is written.",
    duration: "Day 5–10",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We bring the design to life with clean, fast, and modern code. Built with Next.js for performance, mobile-first, and ready for SEO from day one.",
    duration: "Day 11–20",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy your site, configure SEO basics, test everything on all devices, and hand it over with a walkthrough. You're live and ready to convert.",
    duration: "Day 21–25",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-[#f6f6f6]">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>How we work</SectionLabel>
          <h2 className="below-hero-title text-center">
            <span className="block">From idea to live site in</span>
            <span className="block">under 30 days</span>
          </h2>
          <p className="max-w-2xl text-base leading-[22.4px] text-[#3d3d3d]">
            Our process is structured, transparent, and fast. You&apos;ll know
            exactly what&apos;s happening at every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="relative grid lg:grid-cols-2 gap-6 lg:gap-16 items-center"
                >
                  {/* Card */}
                  <div className={`rounded-[4px] border border-black/10 bg-white p-6 shadow-sm ${isEven ? "lg:text-right" : "lg:order-2"}`}>
                    <div className={`flex items-start gap-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                      <div className="shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[4px] border border-black/10 bg-[#f6f6f6]">
                          <span className="text-sm font-medium text-[#413df2]">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-[20px] leading-[28px] tracking-[-0.4px] font-medium text-[#1e1e1e]">
                            {step.title}
                          </h3>
                          <span className="rounded-full border border-black/15 bg-[#f6f6f6] px-2 py-0.5 text-[10px] font-medium text-[#3d3d3d]">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-base leading-[22.4px] text-[#3d3d3d]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                    <div className="h-4 w-4 rounded-full border-4 border-white bg-[#413df2] shadow-md shadow-[#413df2]/30" />
                  </div>

                  {/* Empty column spacer */}
                  <div className={`hidden lg:block ${isEven ? "" : "lg:order-1"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
