import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export default function Card({ className, children, ...rest }: CardProps) {
  return (
    <article
      className={cn("rounded-4xl border border-neutral-100 bg-white p-5 shadow-card", className)}
      {...rest}
    >
      {children}
    </article>
  );
}
