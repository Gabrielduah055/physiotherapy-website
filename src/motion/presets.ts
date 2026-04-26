import type { Transition, Variants } from "framer-motion";

export const viewport = { once: true, amount: 0.24 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.11
    }
  }
};

export const smooth: Transition = {
  duration: 0.64,
  ease: [0.2, 0.9, 0.22, 1]
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.45
};
