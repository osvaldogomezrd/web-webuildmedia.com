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
    <section id="services" className="section-padding bg-zinc-950">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>What we do</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            Everything you need to{" "}
            <span className="gradient-text">convert online</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl text-balance">
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
                className="group card-dark card-hover p-5 flex flex-col gap-3 relative overflow-hidden"
              >
                {/* Tag */}
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
                  {service.tag}
                </span>

                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500/15 group-hover:border-amber-500/30">
                  <Icon
                    size={18}
                    className="text-zinc-400 transition-colors duration-300 group-hover:text-amber-400"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-sm font-bold text-white leading-snug mt-1">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
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
