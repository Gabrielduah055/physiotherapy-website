import { motion } from "framer-motion";
import { brand } from "../../data/brand";
import { fadeUp, smooth, viewport } from "../../motion/presets";
import { buttonClasses } from "../ui/Button";
import Container from "../ui/Container";

export default function FooterCtaSection() {
  return (
    <section className="pt-section">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-4xl bg-brand-900 px-6 py-8 text-white shadow-glow md:px-10 md:py-10"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          transition={smooth}
        >
          <div className="pointer-events-none absolute -bottom-12 right-6 h-44 w-44 rounded-full bg-sage-300/20 blur-3xl" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
                Start Today
              </p>
              <h2 className="display-title mt-2 text-4xl md:text-5xl">
                Move Better With Guided Recovery
              </h2>
            </div>
            <a
              href={brand.phoneHref}
              className={buttonClasses(
                "ghost",
                "self-start border-white/35 bg-white/10 text-white hover:bg-white/18 md:self-auto"
              )}
            >
              Call {brand.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
