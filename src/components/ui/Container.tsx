import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export default function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-[min(1180px,92%)]", className)} {...rest}>
      {children}
    </div>
  );
}
