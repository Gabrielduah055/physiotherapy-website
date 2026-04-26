import { motion } from "framer-motion";
import aboutImage from "../../assets/care-assure-Zx4ddAfk0Ck-unsplash.jpg";
import { fadeUp, smooth, viewport } from "../../motion/presets";
import { buttonClasses } from "../ui/Button";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="pt-section">
      <Container>
        <p className="display-title mb-8 text-[clamp(2rem,6vw,5rem)] leading-none text-sage-300/60">
          Breathe Better. Move Better. Live Better.
        </p>

        <motion.div
          className="section-shell bg-white px-5 py-8 md:px-10 md:py-10"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          transition={smooth}
        >
          <div className="grid gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative overflow-hidden rounded-4xl">
              <img
                src={aboutImage}
                alt="A therapist supporting a patient through gentle rehabilitation"
                className="h-[360px] w-full object-cover md:h-[420px]"
              />
              <div className="absolute bottom-5 left-5 rounded-3xl bg-brand-900/90 px-4 py-3 text-white shadow-soft">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-xs uppercase tracking-[0.18em] text-sage-300">Years Experience</p>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="About Velora"
                title="Expert Physiotherapy for a Healthier, Pain-Free Life"
                highlight="Physiotherapy"
                description="We believe recovery is more than pain relief. Our certified physiotherapists combine clinical precision with personalized care to help you recover from injuries, manage chronic pain, and prevent future setbacks."
              />
              <div className="mt-6">
                <a href="#" className={buttonClasses("secondary")}>
                  Read More
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
