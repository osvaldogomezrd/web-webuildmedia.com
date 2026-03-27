import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const insights = [
  {
    category: "Web Strategy",
    date: "March 20, 2026",
    title: "How local businesses in Punta Cana can improve lead quality",
    description:
      "Practical ways to structure your website so serious prospects contact you faster.",
    gradient: "from-[#dfe3ff] via-[#f3f4ff] to-white",
  },
  {
    category: "Performance",
    date: "March 14, 2026",
    title: "Why website speed directly impacts WhatsApp inquiries",
    description:
      "A fast mobile experience increases trust and conversion before the first conversation.",
    gradient: "from-[#d9f2ff] via-[#eefaff] to-white",
  },
  {
    category: "Growth",
    date: "March 8, 2026",
    title: "From brochure site to sales channel: a practical roadmap",
    description:
      "The key sequence to turn an outdated website into a predictable source of opportunities.",
    gradient: "from-[#ffe4dd] via-[#fff2ed] to-white",
  },
];

export function Insights() {
  return (
    <section id="insights" className="section-padding bg-white">
      <Container>
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <SectionLabel>Insights</SectionLabel>
          <h2 className="below-hero-title">
            <span className="block">Take a look at our</span>
            <span className="block">latest insights</span>
          </h2>
          <p className="max-w-[620px] text-base leading-[22.4px] text-[#3d3d3d]">
            Explore articles, case studies, and practical resources designed to help
            your business grow online with more clarity.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[4px] border border-black/10 bg-[#f6f6f6] shadow-sm"
            >
              <div
                className={`h-[290px] w-full bg-gradient-to-br ${item.gradient}`}
                aria-hidden="true"
              />
              <div className="space-y-4 p-6">
                <p className="text-sm text-[#3d3d3d]">
                  {item.category} · {item.date}
                </p>
                <h3 className="text-[24px] leading-[34px] tracking-[-0.8px] font-medium text-[#1e1e1e]">
                  {item.title}
                </h3>
                <p className="text-base leading-[22.4px] text-[#3d3d3d]">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-base font-medium text-[#413df2]"
                >
                  Read more
                  <ArrowRight size={12} strokeWidth={2.5} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
