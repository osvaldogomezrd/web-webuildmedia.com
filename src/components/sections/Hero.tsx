import { ArrowRight, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const heroBg =
  "https://www.figma.com/api/mcp/asset/1f165956-d470-43bd-93fb-2d62c7066234";

const avatars = [
  { initials: "CM", bg: "#f59e0b" },
  { initials: "AR", bg: "#06b6d4" },
  { initials: "JP", bg: "#8b5cf6" },
  { initials: "VS", bg: "#f43f5e" },
];

export function Hero() {
  return (
    <section className="hero-max-h relative overflow-hidden border-b border-white/30" aria-label="Hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(47deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%)",
        }}
        aria-hidden="true"
      />
      <div className="relative w-full px-6 pb-[206px] pt-[206px] md:px-10 lg:px-16">
        <div className="flex w-full max-w-[760px] flex-col gap-20 max-md:gap-12">
          <div className="flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-2 text-white/70">
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#413df2]">
                <Sparkles size={11} className="text-white" />
              </span>
              <span className="text-base font-medium leading-[22.4px]">
                Strategic websites built for Punta Cana businesses
              </span>
            </div>

            <h1 className="site-hero-title hero-title-clamp font-medium leading-[1.1] tracking-[-0.04em] text-white md:leading-[88px]">
              Websites that turn
              <br />
              visits into clients
            </h1>

            <p className="hero-copy-clamp max-w-[500px] text-[20px] leading-7 tracking-[-0.4px] text-white/70 max-md:text-[18px] max-md:leading-[26px]">
              We build strategic websites for real estate, tourism, restaurants,
              and premium businesses in Punta Cana. Built to sell, generate leads,
              and grow your business.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <a
                href="#contact"
                className="inline-flex h-[46px] items-center justify-center gap-3 rounded-[4px] bg-[#413df2] px-6 text-base font-medium text-white transition-opacity duration-200 hover:opacity-90"
              >
                Request a Proposal
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href={getWhatsAppUrl("Hi! I want to get a proposal for my business website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-base font-medium leading-[22.4px] text-white transition-opacity duration-200 hover:opacity-80"
              >
                Hablemos por WhatsApp
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-[18px]">
            <div className="flex items-start pr-[14px]">
              {avatars.map((avatar, i) => (
                <div
                  key={avatar.initials}
                  className="-mr-[14px] flex size-[54px] shrink-0 items-center justify-center rounded-full border-4 border-black/95 text-sm font-semibold text-white"
                  style={{ backgroundColor: avatar.bg, zIndex: avatars.length - i }}
                  aria-hidden="true"
                >
                  {avatar.initials}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-[7px]">
              <div className="text-xl tracking-[0.2em] text-white" aria-label="5 star rating">
                ★★★★★
              </div>
              <p className="text-base font-medium leading-[22.4px] text-white">
                4.9 Rate by 30+ Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
