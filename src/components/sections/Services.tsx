import {
  Palette,
  Code2,
  Megaphone,
  MessageCircle,
  FileInput,
  Search,
  Smartphone,
  Gauge,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  {
    icon: Palette,
    title: "Strategic Web Design",
    description:
      "Every pixel is intentional. We design high-converting websites that look premium and are built around your business goals.",
    tag: "Design",
  },
  {
    icon: Code2,
    title: "Modern Web Development",
    description:
      "Clean, fast code built with Next.js and modern tech. No WordPress bloat — just performant, scalable websites.",
    tag: "Development",
  },
  {
    icon: Megaphone,
    title: "Conversion-Focused Landing Pages",
    description:
      "Dedicated pages engineered to convert visitors into leads, bookings, or sales. Perfect for campaigns and promotions.",
    tag: "Conversion",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description:
      "Seamless WhatsApp buttons, floating widgets, and pre-filled messages that make it effortless for clients to reach you.",
    tag: "Integration",
  },
  {
    icon: FileInput,
    title: "Lead Capture Forms",
    description:
      "Smart contact forms that qualify leads and send them directly to your inbox or CRM. Never miss a potential client.",
    tag: "Leads",
  },
  {
    icon: Search,
    title: "Local SEO Foundation",
    description:
      "Proper metadata, structured data, and local keywords to help your business rank for searches in Punta Cana.",
    tag: "SEO",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description:
      "Mobile-first builds that deliver flawless experiences across all devices — because most of your clients are on their phones.",
    tag: "Mobile",
  },
  {
    icon: Gauge,
    title: "Performance & Speed",
    description:
      "Optimized load times, Core Web Vitals compliance, and lightning-fast performance that keeps visitors engaged.",
    tag: "Performance",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>What we do</SectionLabel>
          <h2 className="below-hero-title text-center">
            <span className="block">Everything you need to</span>
            <span className="block">convert online</span>
          </h2>
          <p className="max-w-2xl text-base leading-[22.4px] text-[#3d3d3d]">
            A full-stack web presence built for results. From design and
            development to integrations and SEO — we handle it all.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-[4px] border border-black/10 bg-[#f6f6f6] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
              >
                {/* Tag */}
                <span className="absolute right-4 top-4 rounded-full border border-black/15 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#3d3d3d]">
                  {service.tag}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-black/10 bg-white transition-all duration-300 group-hover:border-[#413df2]/30">
                  <Icon
                    size={18}
                    className="text-[#413df2] transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-1 text-[20px] leading-[28px] tracking-[-0.4px] font-medium text-[#1e1e1e]">
                  {service.title}
                </h3>
                <p className="text-base leading-[22.4px] text-[#3d3d3d]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
