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
    <section className="section-padding relative overflow-hidden bg-[#f6f6f6]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SectionLabel>Built for Punta Cana</SectionLabel>
              <h2 className="below-hero-title leading-[70px]">
                <span className="block">We know what works for</span>
                <span className="block">businesses here</span>
              </h2>
              <p className="text-base leading-[22.4px] text-[#3d3d3d]">
                Punta Cana is one of the fastest-growing tourism and real estate
                markets in the Caribbean. Your clients — whether local or
                international — are online, and they&apos;re making decisions
                based on what they find on Google and Instagram.
              </p>
              <p className="text-base leading-[22.4px] text-[#3d3d3d]">
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
                  className="rounded-[4px] border border-black/10 bg-white p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-medium text-[#413df2]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-[#3d3d3d]">
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
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-[#3d3d3d]">
              Industries we work with
            </p>
            <div className="grid gap-3">
              {sectors.map((sector) => {
                const Icon = sector.icon;
                return (
                  <div
                    key={sector.label}
                    className="flex items-start gap-4 rounded-[4px] border border-black/10 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] border border-black/10 bg-[#f6f6f6]">
                      <Icon size={16} className="text-[#413df2]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[#1e1e1e]">{sector.label}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#3d3d3d]">
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
