import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

type BadgeProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>;

export default function Badge({ className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
