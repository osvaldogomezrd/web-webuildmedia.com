"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, MessageCircle } from "lucide-react";
import { PrimaryButton } from "@/components/v3/primitives";
import { getWhatsAppUrl } from "@/lib/utils";

type LeadFormData = {
  name: string;
  business: string;
  email: string;
  service: string;
  budget?: string;
  whatsapp?: string;
  message?: string;
};

const services = [
  "Web Design Punta Cana",
  "Web Development Punta Cana",
  "Web Design Orlando",
  "Web Development Orlando",
  "Website Redesign",
  "SEO-Friendly Website",
];

const budgets = [
  "Under $1,500",
  "$1,500 - $3,500",
  "$3,500 - $7,500",
  "$7,500 - $15,000",
  "$15,000+",
];

function getServiceOptions(defaultService: string) {
  if (!defaultService) return services;
  return services.includes(defaultService) ? services : [defaultService, ...services];
}

export function LeadFormV3({
  submitLabel = "Request Free Quote",
  showWhatsAppLink = true,
  showBudgetField = true,
  showWhatsAppField = false,
  defaultService = "",
}: {
  submitLabel?: string;
  showWhatsAppLink?: boolean;
  showBudgetField?: boolean;
  showWhatsAppField?: boolean;
  defaultService?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const serviceOptions = useMemo(() => getServiceOptions(defaultService), [defaultService]);
  const leadSchema = useMemo(
    () =>
      z
        .object({
          name: z.string().min(2, "Please enter your name"),
          business: z.string().min(2, "Please enter your business name"),
          email: z.string().email("Please enter a valid email"),
          service: z.string().min(1, "Please select a service"),
          budget: z.string().optional(),
          whatsapp: z.string().optional(),
          message: z.string().optional(),
        })
        .superRefine((values, ctx) => {
          if (showBudgetField && !values.budget) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ["budget"],
              message: "Please select an estimated budget",
            });
          }
          if (showWhatsAppField && (!values.whatsapp || values.whatsapp.trim().length < 7)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ["whatsapp"],
              message: "Please enter a valid WhatsApp number",
            });
          }
        }),
    [showBudgetField, showWhatsAppField]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      service: defaultService,
    },
  });

  async function onSubmit(data: LeadFormData) {
    setStatus("loading");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      reset();
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit lead form.");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-[6px] border border-black/10 bg-white px-4 py-3 text-sm text-[#1e1e1e] placeholder:text-[#656565] outline-none transition-colors focus:border-[#413df2]/70 focus:ring-2 focus:ring-[#413df2]/20";
  const selectClass =
    `${inputClass} appearance-none pr-12 bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23656565' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")] bg-[right_14px_center] bg-no-repeat`;

  return (
    <div id="lead-form" className="rounded-[8px] border border-black/10 bg-white p-6 md:p-8">
      <div className="mb-6 space-y-2">
        <h3 className="ds-h5 text-[#1e1e1e]">
          Request Proposal
        </h3>
        <p className="text-base leading-7 text-[#3d3d3d]">
          Tell us about your project. You&apos;ll receive a clear scope and quote.
        </p>
      </div>

      {status === "success" ? (
        <div className="space-y-3 rounded-[6px] border border-[#413df2]/20 bg-[#413df2]/5 p-5">
          <p className="text-base font-medium text-[#1e1e1e]">Thanks. We received your request.</p>
          <p className="text-sm text-[#3d3d3d]">If you want faster help, message us directly on WhatsApp.</p>
          <a
            href={getWhatsAppUrl("Hola, acabo de enviar el formulario y quiero avanzar con mi propuesta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#413df2]"
          >
            <MessageCircle size={14} />
            Hablemos por WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1e1e1e]">
                Name <span className="text-[#413df2]">*</span>
              </label>
              <input {...register("name")} className={inputClass} placeholder="Your name" />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1e1e1e]">
                Business <span className="text-[#413df2]">*</span>
              </label>
              <input {...register("business")} className={inputClass} placeholder="Business name" />
              {errors.business && <p className="text-xs text-red-500">{errors.business.message}</p>}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1e1e1e]">
                Email <span className="text-[#413df2]">*</span>
              </label>
              <input {...register("email")} type="email" className={inputClass} placeholder="you@company.com" />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1e1e1e]">
                Service <span className="text-[#413df2]">*</span>
              </label>
              <select {...register("service")} className={selectClass}>
                <option value="" disabled={defaultService !== ""}>
                  Select service
                </option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1e1e1e]">
                {showBudgetField ? (
                  <>
                    Estimated budget <span className="text-[#413df2]">*</span>
                  </>
                ) : showWhatsAppField ? (
                  <>
                    WhatsApp <span className="text-[#413df2]">*</span>
                  </>
                ) : (
                  "Additional info"
                )}
              </label>
              {showBudgetField ? (
                <>
                  <select {...register("budget")} className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Select budget
                    </option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                  {errors.budget && <p className="text-xs text-red-500">{errors.budget.message}</p>}
                </>
              ) : showWhatsAppField ? (
                <>
                  <input
                    {...register("whatsapp")}
                    className={inputClass}
                    placeholder="+1 829 482 2222"
                  />
                  {errors.whatsapp && <p className="text-xs text-red-500">{errors.whatsapp.message}</p>}
                </>
              ) : (
                <input disabled className={`${inputClass} opacity-50`} placeholder="Optional" />
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1e1e1e]">Project details</label>
              <textarea
                {...register("message")}
                rows={3}
                className={inputClass}
                placeholder="What do you need? Timeline, goals, current website URL..."
              />
            </div>
          </div>

          {showBudgetField && showWhatsAppField && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1e1e1e]">
                WhatsApp <span className="text-[#413df2]">*</span>
              </label>
              <input
                {...register("whatsapp")}
                className={inputClass}
                placeholder="+1 829 482 2222"
              />
              {errors.whatsapp && <p className="text-xs text-red-500">{errors.whatsapp.message}</p>}
            </div>
          )}

          {status === "error" && (
            <p className="rounded-[6px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              We couldn&apos;t submit the form. Please try again or use WhatsApp.
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton type="submit" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                submitLabel
              )}
            </PrimaryButton>
            {showWhatsAppLink ? (
              <a
                href={getWhatsAppUrl("Hola, quiero una cotización gratis para mi proyecto web.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1e1e1e] hover:text-[#413df2]"
              >
                <MessageCircle size={14} />
                Hablemos por WhatsApp
              </a>
            ) : null}
          </div>
        </form>
      )}
    </div>
  );
}
