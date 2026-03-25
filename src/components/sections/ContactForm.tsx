"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  business: z.string().min(2, "Please enter your business name"),
  email: z.string().email("Please enter a valid email"),
  whatsapp: z.string().min(7, "Please enter your WhatsApp number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  "New website from scratch",
  "Redesign of existing website",
  "Landing page",
  "E-commerce / Online store",
  "Real estate website",
  "Villa / Vacation rental site",
  "Restaurant or bar website",
  "Tours & excursions site",
  "Clinic or spa website",
  "Other",
];

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, error, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-zinc-300">
        {label}
        {required && <span className="text-amber-400 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1">{error}</p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-zinc-700/60 bg-zinc-800/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-colors duration-200";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formspreeId) {
      // Fallback: simulate success when no Formspree ID is configured
      await new Promise((r) => setTimeout(r, 1000));
      setStatus("success");
      reset();
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding bg-zinc-950 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div className="flex flex-col gap-6 lg:pt-4">
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Tell us about{" "}
              <span className="gradient-text">your business</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Fill out the form and we&apos;ll review your project. You&apos;ll
              receive a clear, personalized proposal within 24 hours — no vague
              quotes, no pressure.
            </p>

            {/* What to expect */}
            <div className="space-y-3">
              {[
                "Free project analysis",
                "Clear proposal with scope and pricing",
                "No hidden fees, no long contracts",
                "Response within 24 business hours",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <span className="text-amber-400 text-[10px] font-bold">✓</span>
                  </div>
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                Prefer to talk directly?
              </p>
              <div className="space-y-2">
                <a
                  href="https://wa.me/18491234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-amber-400 transition-colors"
                >
                  <span aria-hidden="true">📱</span>
                  WhatsApp: +1 (849) 123-4567
                </a>
                <a
                  href="mailto:hello@webuildmedia.com"
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-amber-400 transition-colors"
                >
                  <span aria-hidden="true">✉️</span>
                  hello@webuildmedia.com
                </a>
                <p className="flex items-center gap-2 text-sm text-zinc-500">
                  <span aria-hidden="true">📍</span>
                  Punta Cana, Dominican Republic
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card-dark rounded-2xl p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Proposal request received!
                </h3>
                <p className="text-zinc-400 text-sm max-w-xs">
                  We&apos;ll review your project and get back to you within 24
                  hours with a personalized proposal.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setStatus("idle")}
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" error={errors.name?.message} required>
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      className={cn(inputClass, errors.name && "border-red-500/60")}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Business name" error={errors.business?.message} required>
                    <input
                      {...register("business")}
                      placeholder="Your business"
                      className={cn(inputClass, errors.business && "border-red-500/60")}
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email address" error={errors.email?.message} required>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@email.com"
                      className={cn(inputClass, errors.email && "border-red-500/60")}
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="WhatsApp number" error={errors.whatsapp?.message} required>
                    <input
                      {...register("whatsapp")}
                      type="tel"
                      placeholder="+1 849 000 0000"
                      className={cn(inputClass, errors.whatsapp && "border-red-500/60")}
                      autoComplete="tel"
                    />
                  </Field>
                </div>

                <Field label="Type of project" error={errors.projectType?.message} required>
                  <select
                    {...register("projectType")}
                    className={cn(
                      inputClass,
                      "appearance-none cursor-pointer",
                      errors.projectType && "border-red-500/60"
                    )}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-zinc-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Tell us more (optional)">
                  <textarea
                    {...register("message")}
                    placeholder="Describe your project, your goals, or any questions you have..."
                    rows={4}
                    className={cn(inputClass, "resize-none")}
                  />
                </Field>

                {status === "error" && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    Something went wrong. Please try again or write to us on WhatsApp.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request a Free Proposal
                      <Send size={18} />
                    </>
                  )}
                </Button>

                <p className="text-[11px] text-zinc-600 text-center">
                  By submitting this form you agree to be contacted about our services.
                  No spam. No commitment.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
