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
    <section id="process" className="section-padding bg-zinc-900/30">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>How we work</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            From idea to live site in{" "}
            <span className="gradient-text">under 30 days</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl text-balance">
            Our process is structured, transparent, and fast. You&apos;ll know
            exactly what&apos;s happening at every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700/50 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative grid lg:grid-cols-2 gap-6 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`card-dark p-6 rounded-2xl ${
                      isEven ? "lg:text-right" : "lg:order-2"
                    }`}
                  >
                    <div
                      className={`flex items-start gap-4 ${
                        isEven ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                          <span className="text-amber-400 font-black text-sm">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-lg font-bold text-white">
                            {step.title}
                          </h3>
                          <span className="text-[10px] font-semibold text-zinc-500 bg-zinc-800 border border-zinc-700/60 rounded-full px-2 py-0.5">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className={`hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 ${
                      isEven ? "" : ""
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full bg-amber-500 border-4 border-zinc-950 shadow-lg shadow-amber-500/30" />
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
