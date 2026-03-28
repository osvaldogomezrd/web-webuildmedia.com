import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

type SectionTone = "light" | "soft" | "dark";

const toneClass: Record<SectionTone, string> = {
  light: "bg-white text-[#1e1e1e]",
  soft: "bg-[#f6f7fb] text-[#1e1e1e]",
  dark: "bg-[#070707] text-white",
};

const buttonBase = "inline-flex h-[46px] items-center justify-center gap-3 rounded-[4px] px-6 text-base font-medium transition-colors";

export function V3Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("v3-container w-full px-6 md:px-10 lg:px-[74px]", className)}>{children}</div>;
}

export function V3Section({
  id,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-24 lg:py-28", toneClass[tone], className)}>
      <V3Container>{children}</V3Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = dark ? "text-white" : "text-[#1e1e1e]";
  const subtitleColor = dark ? "text-white/75" : "text-[#3d3d3d]";
  const eyebrowColor = dark ? "text-white/65 border-white/20 bg-white/10" : "text-[#3d3d3d] border-[color:var(--ds-border-color)] bg-[#f6f7fb]";

  return (
    <div className={cn("flex flex-col gap-4", alignClass)}>
      {eyebrow && (
        <span className={cn("ds-eyebrow rounded-[4px] border px-3 py-2", eyebrowColor)}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn("ds-h2 max-w-[980px] whitespace-pre-line", titleColor)}>
        {title}
      </h2>
      {subtitle && <p className={cn("max-w-[760px] text-base leading-7 md:text-lg", subtitleColor)}>{subtitle}</p>}
    </div>
  );
}

export function PrimaryCta({
  href,
  children,
  className,
  target,
  rel,
  leadingIcon,
  showArrow = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  leadingIcon?: React.ReactNode;
  showArrow?: boolean;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        `${buttonBase} bg-[#413df2] text-white transition-opacity hover:opacity-90`,
        className
      )}
    >
      {leadingIcon}
      {children}
      {showArrow ? <ArrowRight size={16} strokeWidth={2.5} /> : null}
    </a>
  );
}

export function PrimaryButton({
  type = "button",
  children,
  className,
  disabled,
}: {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        `${buttonBase} bg-[#413df2] text-white transition-opacity hover:opacity-90 disabled:opacity-60`,
        className
      )}
    >
      {children}
    </button>
  );
}

export function SecondaryCta({
  href,
  children,
  dark = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        `${buttonBase} border`,
        dark
          ? "border-white/25 text-white hover:bg-white/10"
          : "border-[color:var(--ds-border-color)] text-[#1e1e1e] hover:bg-[#f6f7fb]",
        className
      )}
    >
      {children}
    </a>
  );
}

export function WhatsAppCta({
  message,
  dark = false,
  label = "Hablemos por WhatsApp",
  variant = "text",
}: {
  message?: string;
  dark?: boolean;
  label?: string;
  variant?: "text" | "button";
}) {
  const isButton = variant === "button";
  return (
    <a
      href={getWhatsAppUrl(message ?? "Hola, quiero una propuesta para mi sitio web.")}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-[4px] font-medium transition-colors",
        isButton
          ? dark
            ? `${buttonBase} border border-white/25 text-white hover:bg-white/10`
            : `${buttonBase} border border-[color:var(--ds-border-color)] text-[#1e1e1e] hover:bg-[#f6f7fb]`
          : dark
            ? "px-2 py-2 text-base text-white hover:text-white/80"
            : "px-2 py-2 text-base text-[#1e1e1e] hover:text-[#413df2]"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={isButton ? "h-4 w-4" : "h-4 w-4"}
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      {label}
    </a>
  );
}

export function SurfaceCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article className={cn("rounded-[8px] border border-[color:var(--ds-border-color)] bg-white p-6 md:p-8", className)}>
      {children}
    </article>
  );
}
