import { cn } from "@/lib/utils";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400 focus-visible:ring-amber-500 shadow-lg shadow-amber-500/20",
  secondary:
    "bg-transparent text-white border border-zinc-600 hover:border-zinc-400 hover:bg-zinc-800/50 focus-visible:ring-zinc-500",
  ghost:
    "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/40 focus-visible:ring-zinc-500",
  whatsapp:
    "bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] focus-visible:ring-[#25D366] shadow-lg shadow-green-500/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
