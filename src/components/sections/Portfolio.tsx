import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const projects = [
  {
    title: "Azure Villa Rentals",
    category: "Villa & Vacation Rental",
    description:
      "Luxury villa rental platform with availability calendar, gallery, and direct WhatsApp booking integration.",
    result: "+280% booking inquiries",
    gradient: "from-blue-100 via-cyan-50 to-slate-50",
    accentColor: "text-cyan-600",
    tags: ["Booking System", "WhatsApp", "Mobile-first"],
  },
  {
    title: "Coral Real Estate",
    category: "Real Estate",
    description:
      "Property showcase site with lead capture, virtual tours, and a CRM-connected contact form for a Punta Cana real estate firm.",
    result: "+190% qualified leads",
    gradient: "from-amber-100 via-orange-50 to-slate-50",
    accentColor: "text-amber-600",
    tags: ["Lead Gen", "Property Listings", "SEO"],
  },
  {
    title: "Oceano Restaurant",
    category: "Restaurant & Bar",
    description:
      "Premium restaurant site with online menu, reservation form, and event pages that drive direct bookings.",
    result: "3× more reservations",
    gradient: "from-purple-100 via-pink-50 to-slate-50",
    accentColor: "text-purple-600",
    tags: ["Reservations", "Menu Design", "Local SEO"],
  },
  {
    title: "Aventura Tours",
    category: "Tours & Excursions",
    description:
      "Excursion booking site with tour packages, pricing tables, and WhatsApp CTA on every page to capture tourist traffic.",
    result: "+400% WhatsApp contacts",
    gradient: "from-green-100 via-emerald-50 to-slate-50",
    accentColor: "text-green-600",
    tags: ["Tour Packages", "WhatsApp Funnel", "Conversion"],
  },
  {
    title: "Glow Aesthetic Clinic",
    category: "Aesthetic Clinic & Spa",
    description:
      "High-end medical aesthetic site with service pages, appointment booking, and trust-building testimonials.",
    result: "+150% appointment requests",
    gradient: "from-rose-100 via-pink-50 to-slate-50",
    accentColor: "text-rose-600",
    tags: ["Appointment Booking", "Premium Design", "Trust Building"],
  },
  {
    title: "Selva Beach Club",
    category: "Beach Club & Nightlife",
    description:
      "Immersive landing page for a beach club with event listings, table reservations, and social media integration.",
    result: "Fully sold-out events",
    gradient: "from-indigo-100 via-violet-50 to-slate-50",
    accentColor: "text-indigo-600",
    tags: ["Events", "Table Reservations", "Social Integration"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>Our work</SectionLabel>
          <h2 className="below-hero-title text-center">
            <span className="block">Results we&apos;ve built for</span>
            <span className="block">businesses like yours</span>
          </h2>
          <p className="max-w-2xl text-base leading-[22.4px] text-[#3d3d3d]">
            Every project starts with a clear business goal. Here&apos;s a look
            at what we&apos;ve built and what it achieved.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-[4px] border border-black/10 bg-[#f6f6f6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Visual preview */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                {/* Simulated browser mockup */}
                <div className="absolute inset-4 rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border-b border-slate-200">
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-2.5 w-3/4 rounded-full bg-slate-200" />
                    <div className="h-4 w-full rounded bg-slate-100" />
                    <div className="h-2.5 w-2/3 rounded-full bg-slate-100" />
                    <div className="flex gap-2 pt-1">
                      <div className="h-6 w-16 rounded-lg bg-amber-400/60" />
                      <div className="h-6 w-16 rounded-lg bg-slate-200" />
                    </div>
                  </div>
                </div>

                {/* Result badge */}
                <div className="absolute top-3 right-3 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-sm">
                  <span className={`text-xs font-bold ${project.accentColor}`}>
                    {project.result}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#3d3d3d]">
                    {project.category}
                  </span>
                  <h3 className="mt-1 flex items-center gap-1 text-[20px] leading-[28px] tracking-[-0.4px] font-medium text-[#1e1e1e] transition-colors duration-200 group-hover:text-[#413df2]">
                    {project.title}
                    <ArrowUpRight
                      size={16}
                      className="text-[#413df2] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h3>
                </div>
                <p className="flex-1 text-base leading-[22.4px] text-[#3d3d3d]">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/20 bg-white px-2.5 py-0.5 text-[10px] font-medium text-[#3d3d3d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-[#3d3d3d]">
          * Projects shown as representative examples. Real case studies available upon request.
        </p>
      </Container>
    </section>
  );
}
