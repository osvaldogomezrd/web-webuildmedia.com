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
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    accentColor: "text-cyan-400",
    tags: ["Booking System", "WhatsApp", "Mobile-first"],
  },
  {
    title: "Coral Real Estate",
    category: "Real Estate",
    description:
      "Property showcase site with lead capture, virtual tours, and a CRM-connected contact form for a Punta Cana real estate firm.",
    result: "+190% qualified leads",
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    accentColor: "text-amber-400",
    tags: ["Lead Gen", "Property Listings", "SEO"],
  },
  {
    title: "Oceano Restaurant",
    category: "Restaurant & Bar",
    description:
      "Premium restaurant site with online menu, reservation form, and event pages that drive direct bookings.",
    result: "3× more reservations",
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    accentColor: "text-purple-400",
    tags: ["Reservations", "Menu Design", "Local SEO"],
  },
  {
    title: "Aventura Tours",
    category: "Tours & Excursions",
    description:
      "Excursion booking site with tour packages, pricing tables, and WhatsApp CTA on every page to capture tourist traffic.",
    result: "+400% WhatsApp contacts",
    gradient: "from-green-600/20 via-emerald-500/10 to-transparent",
    accentColor: "text-green-400",
    tags: ["Tour Packages", "WhatsApp Funnel", "Conversion"],
  },
  {
    title: "Glow Aesthetic Clinic",
    category: "Aesthetic Clinic & Spa",
    description:
      "High-end medical aesthetic site with service pages, appointment booking, and trust-building testimonials.",
    result: "+150% appointment requests",
    gradient: "from-rose-600/20 via-pink-500/10 to-transparent",
    accentColor: "text-rose-400",
    tags: ["Appointment Booking", "Premium Design", "Trust Building"],
  },
  {
    title: "Selva Beach Club",
    category: "Beach Club & Nightlife",
    description:
      "Immersive landing page for a beach club with event listings, table reservations, and social media integration.",
    result: "Fully sold-out events",
    gradient: "from-indigo-600/20 via-violet-500/10 to-transparent",
    accentColor: "text-indigo-400",
    tags: ["Events", "Table Reservations", "Social Integration"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-zinc-950">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>Our work</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            Results we&apos;ve built for{" "}
            <span className="gradient-text">businesses like yours</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl text-balance">
            Every project starts with a clear business goal. Here&apos;s a look
            at what we&apos;ve built and what it achieved.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group card-dark card-hover overflow-hidden flex flex-col"
            >
              {/* Visual preview */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} bg-zinc-900 overflow-hidden`}
              >
                {/* Simulated browser mockup inside card */}
                <div className="absolute inset-4 rounded-xl bg-zinc-900/80 border border-zinc-700/40 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800/80 border-b border-zinc-700/40">
                    <div className="w-2 h-2 rounded-full bg-zinc-600" />
                    <div className="w-2 h-2 rounded-full bg-zinc-600" />
                    <div className="w-2 h-2 rounded-full bg-zinc-600" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-2.5 w-3/4 rounded-full bg-zinc-700/60" />
                    <div className="h-4 w-full rounded bg-zinc-700/40" />
                    <div className="h-2.5 w-2/3 rounded-full bg-zinc-700/40" />
                    <div className="flex gap-2 pt-1">
                      <div className="h-6 w-16 rounded-lg bg-amber-500/50" />
                      <div className="h-6 w-16 rounded-lg bg-zinc-700/40" />
                    </div>
                  </div>
                </div>

                {/* Result badge */}
                <div className="absolute top-3 right-3 bg-zinc-950/90 backdrop-blur-sm border border-zinc-700/60 rounded-lg px-2.5 py-1.5">
                  <span className={`text-xs font-bold ${project.accentColor}`}>
                    {project.result}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-amber-400 transition-colors duration-200 flex items-center gap-1">
                    {project.title}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-amber-400"
                      aria-hidden="true"
                    />
                  </h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed flex-1">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium bg-zinc-800 border border-zinc-700/60 text-zinc-400 rounded-full px-2.5 py-0.5"
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
        <p className="text-center text-sm text-zinc-600 mt-10">
          * Projects shown as representative examples. Real case studies available upon request.
        </p>
      </Container>
    </section>
  );
}
