import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/utils";

export function CTAMid() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 via-amber-950/10 to-zinc-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="md">
        <div className="relative rounded-3xl border border-amber-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 sm:p-14 text-center flex flex-col items-center gap-8">
          {/* Badge */}
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
            <span className="text-2xl" role="img" aria-label="rocket">🚀</span>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance">
              Ready to turn your website into{" "}
              <span className="gradient-text">a client-generating machine?</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl text-balance">
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
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </Button>
          </div>

          <p className="text-xs text-zinc-600">
            Typically respond within 24 hours · No commitment required
          </p>
        </div>
      </Container>
    </section>
  );
}
