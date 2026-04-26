import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "../../data/process";
import { cn } from "../../lib/cn";
import { fadeUp, smooth, stagger, viewport } from "../../motion/presets";
import { buttonClasses } from "../ui/Button";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function ProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pt-section">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-5xl border border-neutral-100 bg-mint-100 px-5 py-10 md:px-10 md:py-12"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          transition={smooth}
        >
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sage-300/18 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 top-36 h-56 w-56 rounded-full bg-brand-700/10 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="How We Work"
                title="Our 3-Step Recovery Process"
                highlight="3-Step"
                description="Every plan starts with a full-body assessment and evolves with your progress so your recovery remains efficient and sustainable."
              />
              <a href="#" className={buttonClasses("primary", "mt-7")}>
                Start Your Recovery Journey
                <span aria-hidden="true">-&gt;</span>
              </a>
            </div>

            <motion.div
              className="grid gap-4 md:grid-cols-2"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={stagger}
            >
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  className={cn(
                    "overflow-hidden rounded-4xl border border-neutral-100 bg-white p-3 shadow-soft",
                    index === 1 ? "md:translate-y-10" : "",
                    index === 2 ? "md:col-span-2 md:w-2/3" : ""
                  )}
                  variants={fadeUp}
                  transition={smooth}
                  whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                    {step.number}
                  </p>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm body-muted">{step.description}</p>
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="mt-4 h-36 w-full rounded-3xl object-cover"
                  />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
