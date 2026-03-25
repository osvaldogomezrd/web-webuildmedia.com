import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl } from "@/lib/utils";

const trustBadges = [
  "Conversion-focused design",
  "Mobile-first build",
  "Local SEO ready",
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950 pt-20"
      aria-label="Hero"
    >
      {/* Background glow effects */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Web Design Agency · Punta Cana
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white text-balance">
                Websites that turn{" "}
                <span className="relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
                    visits into clients
                  </span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                    aria-hidden="true"
                  />
                </span>{" "}
                — for businesses in Punta Cana.
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-xl">
              We build strategic websites for real estate, tourism, restaurants,
              and premium businesses in Punta Cana. Not just beautiful — built
              to sell, generate leads, and grow your business.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" href="#contact">
                Request a Proposal
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={getWhatsAppUrl(
                  "Hi! I want to get a proposal for my business website."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
                Write on WhatsApp
              </Button>
            </div>

            {/* Trust badges */}
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-2 text-sm text-zinc-400">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual mockup */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl"
                aria-hidden="true"
              />

              {/* Browser mockup */}
              <div className="relative rounded-2xl border border-zinc-700/60 bg-zinc-900 shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/80 border-b border-zinc-700/60">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-600" />
                    <div className="w-3 h-3 rounded-full bg-zinc-600" />
                    <div className="w-3 h-3 rounded-full bg-zinc-600" />
                  </div>
                  <div className="flex-1 mx-3 h-5 rounded bg-zinc-700/60 flex items-center px-3">
                    <span className="text-[10px] text-zinc-400 font-mono">
                      yourbusiness.com
                    </span>
                  </div>
                </div>

                {/* Page preview content */}
                <div className="p-6 space-y-4 min-h-[280px]">
                  {/* Hero area placeholder */}
                  <div className="rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/40 p-5 space-y-3">
                    <div className="h-3 w-3/4 bg-amber-500/40 rounded-full" />
                    <div className="h-5 w-full bg-zinc-600/50 rounded-full" />
                    <div className="h-5 w-5/6 bg-zinc-600/50 rounded-full" />
                    <div className="h-3 w-2/3 bg-zinc-700/60 rounded-full" />
                    <div className="flex gap-2 pt-1">
                      <div className="h-8 w-28 rounded-lg bg-amber-500/70" />
                      <div className="h-8 w-28 rounded-lg bg-zinc-600/50 border border-zinc-500/30" />
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {["+340%", "+89", "4.9★"].map((stat) => (
                      <div
                        key={stat}
                        className="rounded-lg bg-zinc-800/60 border border-zinc-700/40 p-3 text-center"
                      >
                        <div className="text-sm font-bold text-amber-400">
                          {stat}
                        </div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">
                          {stat === "+340%"
                            ? "More leads"
                            : stat === "+89"
                            ? "Bookings"
                            : "Rating"}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Content rows */}
                  <div className="space-y-2">
                    {[80, 65, 90].map((w, i) => (
                      <div
                        key={i}
                        className="h-2.5 rounded-full bg-zinc-700/50"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <span className="text-amber-400 text-base">📈</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    +340% more leads
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    avg. client result
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -top-4 -right-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 text-base">✓</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    Mobile-first
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    100/100 performance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
