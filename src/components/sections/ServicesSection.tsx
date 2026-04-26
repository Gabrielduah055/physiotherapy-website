import { motion, useReducedMotion } from "framer-motion";
import { services } from "../../data/services";
import { fadeUp, smooth, stagger, viewport } from "../../motion/presets";
import { cn } from "../../lib/cn";
import { buttonClasses } from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="pt-section">
      <Container>
        <motion.div
          className="section-shell bg-mint-200 px-5 py-10 md:px-10 md:py-12"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          transition={smooth}
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Clinical Expertise"
              title="Physiotherapy Services"
              highlight="Services"
              description="Targeted programs designed to restore movement, manage pain, and prevent recurring injuries."
            />
            <a href="#" className={buttonClasses("ghost", "self-start md:self-auto")}>
              All Services
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <motion.div
            className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={smooth}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                        boxShadow: "0 26px 54px -30px rgba(14, 42, 32, 0.58)"
                      }
                }
                className={cn("h-full")}
              >
                <Card className="h-full p-4">
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="h-48 w-full object-cover transition duration-500 hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-neutral-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 body-muted">{service.description}</p>
                  <a
                    className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-100 text-brand-700 transition hover:border-brand-700/40 hover:bg-brand-700/10"
                    href="#"
                    aria-label={`Read more about ${service.title}`}
                  >
                    -&gt;
                  </a>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
