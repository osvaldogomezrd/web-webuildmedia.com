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
    "bg-amber-500 text-white font-semibold hover:bg-amber-600 focus-visible:ring-amber-500 shadow-md shadow-amber-500/20",
  secondary:
    "bg-transparent text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-slate-400",
  ghost:
    "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400",
  whatsapp:
    "bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] focus-visible:ring-[#25D366] shadow-md shadow-green-500/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-[46px] px-5 text-sm gap-2",
  md: "h-[46px] px-6 text-base gap-2.5",
  lg: "h-[46px] px-6 text-base gap-3",
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
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

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
