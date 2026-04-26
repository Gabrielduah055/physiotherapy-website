import { motion } from "framer-motion";
import { partners } from "../../data/partners";
import { fadeUp, smooth, viewport } from "../../motion/presets";
import Container from "../ui/Container";

export default function LogoStripSection() {
  return (
    <section className="pt-12">
      <Container>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 border-y border-neutral-100 py-8"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          transition={smooth}
        >
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-700/75"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
