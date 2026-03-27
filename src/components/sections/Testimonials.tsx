import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "Before working with Webuildmedia, we were relying entirely on Instagram. Now our website generates 3–4 serious inquiries per week on autopilot. The ROI was immediate.",
    author: "Carlos M.",
    role: "Owner, Coral Real Estate",
    initials: "CM",
    color: "bg-amber-500",
  },
  {
    quote:
      "We launched our new villa rental site and within the first month had more direct bookings than we'd had in the previous 6. The WhatsApp integration alone was worth it.",
    author: "Ana Rodriguez",
    role: "Manager, Azure Villa Rentals",
    initials: "AR",
    color: "bg-cyan-500",
  },
  {
    quote:
      "They understood exactly what our restaurant needed — not just a pretty website, but a tool to fill tables. Reservations are up and the site looks incredible on mobile.",
    author: "Jean-Pierre D.",
    role: "Director, Oceano Restaurant",
    initials: "JP",
    color: "bg-purple-500",
  },
  {
    quote:
      "Our old website was embarrassing. The new one feels like a real luxury brand. Clients mention it when they arrive. It sets expectations and builds trust before we even meet.",
    author: "Valentina S.",
    role: "Founder, Glow Aesthetic Clinic",
    initials: "VS",
    color: "bg-rose-500",
  },
];

const metrics = [
  { value: "30", label: "days avg. delivery", suffix: "" },
  { value: "100", label: "% mobile-optimized", suffix: "%" },
  { value: "40", label: "avg. lead increase", suffix: "%+" },
  { value: "4.9", label: "client satisfaction", suffix: "★" },
];

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>Client results</SectionLabel>
          <h2 className="below-hero-title text-center">
            <span className="block">Real businesses,</span>
            <span className="block">real results</span>
          </h2>
          <p className="max-w-2xl text-base leading-[22.4px] text-[#3d3d3d]">
            Don&apos;t take our word for it. Here&apos;s what our clients say
            after working with us.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col gap-5 rounded-[4px] border border-black/10 bg-[#f6f6f6] p-6 shadow-sm"
            >
              <Quote size={28} className="text-[#413df2]/40" aria-hidden="true" />
              <blockquote className="flex-1 text-base leading-[22.4px] text-[#3d3d3d]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-black/10 pt-4">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}
                >
                  <span className="text-white font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <div className="text-base font-medium text-[#1e1e1e]">{t.author}</div>
                  <div className="text-sm text-[#3d3d3d]">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[4px] border border-black/10 bg-[#f6f6f6] p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-medium text-[#1e1e1e] sm:text-4xl">
                {metric.value}
                <span className="text-[#413df2]">{metric.suffix}</span>
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-[#3d3d3d]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
