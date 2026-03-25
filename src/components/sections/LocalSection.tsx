import { MapPin, Building2, Palmtree, UtensilsCrossed, Stethoscope, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/utils";

const sectors = [
  {
    icon: Home,
    label: "Real Estate",
    description: "Luxury property listings, virtual tours, and lead capture pages that close deals.",
  },
  {
    icon: Palmtree,
    label: "Villas & Vacation Rentals",
    description: "Booking-focused sites with galleries, availability, and direct reservation flows.",
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurants & Bars",
    description: "Menus, reservations, events, and location pages that drive foot traffic.",
  },
  {
    icon: Building2,
    label: "Tours & Excursions",
    description: "Activity listings, pricing pages, and WhatsApp booking for tourism businesses.",
  },
  {
    icon: Stethoscope,
    label: "Aesthetic Clinics & Spas",
    description: "Premium service pages with appointment booking and trust-building content.",
  },
  {
    icon: MapPin,
    label: "Local Premium Businesses",
    description: "Any business in Punta Cana that needs a professional, conversion-ready web presence.",
  },
];

const stats = [
  { value: "80%", label: "of clients search online before buying" },
  { value: "3s", label: "is all you have before a visitor leaves" },
  { value: "70%", label: "of traffic comes from mobile devices" },
];

export function LocalSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900/80 to-zinc-950">
      {/* Background */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SectionLabel>Built for Punta Cana</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                We know what works for{" "}
                <span className="gradient-text">businesses here</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Punta Cana is one of the fastest-growing tourism and real estate
                markets in the Caribbean. Your clients — whether local or
                international — are online, and they&apos;re making decisions
                based on what they find on Google and Instagram.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                We build websites specifically for businesses in Punta Cana that
                want to grow — not just have a digital presence. Our sites are
                designed to attract the right audience, build trust instantly,
                and convert visitors into paying clients.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center"
                >
                  <div className="text-2xl font-black text-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              size="lg"
              href={getWhatsAppUrl(
                "Hi! I'm a business in Punta Cana and I'd like to learn more about your web design services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              Talk to us about your business
            </Button>
          </div>

          {/* Right: sectors */}
          <div>
            <p className="text-sm text-zinc-500 font-semibold uppercase tracking-widest mb-6">
              Industries we work with
            </p>
            <div className="grid gap-3">
              {sectors.map((sector) => {
                const Icon = sector.icon;
                return (
                  <div
                    key={sector.label}
                    className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:border-zinc-700 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-amber-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{sector.label}</h3>
                      <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
