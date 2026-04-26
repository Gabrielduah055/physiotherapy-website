import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-ring";

  const variantClass =
    variant === "primary"
      ? "bg-brand-800 text-white hover:-translate-y-0.5 hover:bg-brand-700"
      : variant === "secondary"
        ? "border border-neutral-100 bg-white text-neutral-900 hover:-translate-y-0.5 hover:border-brand-700/40 hover:text-brand-800"
        : "border border-brand-700/30 bg-brand-700/5 text-brand-800 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700/10";

  return cn(base, variantClass, className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, className)} {...rest}>
      {children}
    </button>
  );
}
