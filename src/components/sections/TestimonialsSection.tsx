import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { testimonials } from "../../data/testimonials";
import { fadeUp, smooth, viewport } from "../../motion/presets";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="pt-section">
      <Container>
        <motion.div
          className="section-shell px-5 py-10 md:px-10 md:py-12"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          transition={smooth}
        >
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading title="What Our Patient's Says" highlight="Patient's" />

            <div className="flex gap-2">
              <button
                type="button"
                onClick={showPrevious}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-100 text-neutral-900 transition hover:border-brand-700/40 hover:text-brand-700"
                aria-label="Show previous testimonial"
              >
                &lt;
              </button>
              <button
                type="button"
                onClick={showNext}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-100 text-neutral-900 transition hover:border-brand-700/40 hover:text-brand-700"
                aria-label="Show next testimonial"
              >
                &gt;
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={activeItem.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid gap-6 rounded-4xl bg-mint-100 p-4 md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-6"
            >
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className="h-[260px] w-full rounded-3xl object-cover md:h-[320px]"
              />
              <div className="rounded-3xl bg-white p-6 shadow-soft md:p-8">
                <p className="mb-4 text-4xl leading-none text-brand-700/40">"</p>
                <p className="text-base leading-7 text-neutral-700 md:text-lg">{activeItem.quote}</p>
                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <p className="text-lg font-semibold">{activeItem.name}</p>
                  <p className="text-sm body-muted">{activeItem.role}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
