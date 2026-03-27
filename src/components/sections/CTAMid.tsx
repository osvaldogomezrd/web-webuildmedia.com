import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/utils";

export function CTAMid() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#070707]">
      {/* Subtle amber glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="md">
        <div className="relative flex flex-col items-center gap-8 rounded-[8px] border border-white/15 bg-black/30 p-10 text-center sm:p-14">
          {/* Badge */}
          <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
            <span className="text-2xl" role="img" aria-label="rocket">🚀</span>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] leading-[44px] tracking-[-1.6px] font-medium text-white md:text-[48px] md:leading-[70px] md:tracking-[-2.6px]">
              <span className="block">Ready to turn your website into</span>
              <span className="block">a client-generating machine?</span>
            </h2>
            <p className="max-w-xl text-base leading-[22.4px] text-white/80">
              Tell us about your business. We&apos;ll analyze your situation and
              send you a clear proposal — no pressure, no hidden fees.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Button variant="primary" size="lg" href="#contact">
              Request a Free Proposal
              <ArrowRight size={20} />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={getWhatsAppUrl(
                "Hi! I want to discuss a website for my business. Can we talk?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="border-slate-600 text-slate-300 hover:border-slate-400 hover:bg-slate-700/50"
            >
              <MessageCircle size={20} />
              Hablemos por WhatsApp
            </Button>
          </div>

          <p className="text-xs text-slate-500">
            Typically respond within 24 hours · No commitment required
          </p>
        </div>
      </Container>
    </section>
  );
}
