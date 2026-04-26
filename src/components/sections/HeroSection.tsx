import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "../../assets/pexels-worldsikhorg-14797760.jpg";
import { brand } from "../../data/brand";
import { fadeUp, smooth, viewport } from "../../motion/presets";
import Navbar from "../layout/Navbar";
import Button from "../ui/Button";
import { InputField, SelectField, TextareaField } from "../ui/FormField";

const appointmentTypes = [
  { label: "Select appointment type", value: "" },
  { label: "Initial assessment", value: "assessment" },
  { label: "Post-surgery rehab", value: "rehab" },
  { label: "Pain management", value: "pain-management" }
];

export default function HeroSection() {
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imageWrapperRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section id="home" className="relative overflow-hidden pt-6 md:pt-8">
      <div className="relative mx-auto w-[min(1220px,95%)] overflow-hidden rounded-5xl bg-brand-900 pb-5 text-white shadow-glow">
        <div className="pointer-events-none absolute -left-10 top-16 h-48 w-48 rounded-full bg-brand-700/30 blur-3xl" />
        <div className="pointer-events-none absolute right-20 top-24 h-56 w-56 rounded-full bg-sage-300/20 blur-3xl" />

        <Navbar />

        <motion.div
          className="grid gap-6 px-6 pb-6 pt-12 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:pb-10"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          transition={smooth}
        >
          <div>
            <p className="mb-5 max-w-md text-sm leading-7 text-white/74 md:text-base">
              Personalized physiotherapy with an editorial touch. We restore mobility, confidence,
              and strength through precise care plans.
            </p>
            <h1 className="display-title max-w-xl text-5xl md:text-7xl">
              Recover. Rebuild. Rise Again.
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/78 md:text-base">{brand.tagline}</p>
          </div>
          <div className="flex items-start justify-start lg:justify-end">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sage-300">
              Premium Physio Care
            </span>
          </div>
        </motion.div>

        <div ref={imageWrapperRef} className="relative px-4 pb-5 md:px-7 md:pb-8">
          <motion.img
            src={heroImage}
            alt="Physiotherapist guiding a patient through a strength recovery session"
            className="h-[410px] w-full rounded-4xl object-cover object-center md:h-[520px] lg:ml-[22rem] lg:h-[540px] lg:w-[calc(100%-22rem)]"
            style={{ y: shouldReduceMotion ? 0 : imageY }}
          />

          <motion.form
            action="#"
            className="mt-5 rounded-4xl bg-white p-4 text-neutral-900 shadow-card md:p-5 lg:absolute lg:left-9 lg:top-1/2 lg:mt-0 lg:w-[23.5rem] lg:-translate-y-1/2"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-4 text-lg font-semibold">Book your appointment</p>
            <div className="grid gap-3">
              <InputField id="hero-name" name="name" label="Your name" placeholder="John Smile" />
              <div className="grid gap-3 md:grid-cols-2">
                <InputField
                  id="hero-email"
                  name="email"
                  type="email"
                  label="Your email"
                  placeholder="name@example.com"
                />
                <InputField
                  id="hero-phone"
                  name="phone"
                  type="tel"
                  label="Phone"
                  placeholder="(123) 456 789"
                />
              </div>
              <SelectField
                id="hero-service"
                name="service"
                label="Date & Time"
                options={appointmentTypes}
                defaultValue=""
              />
              <TextareaField
                id="hero-message"
                name="message"
                label="Your message"
                placeholder="Write your goals or any current pain points..."
              />
              <Button type="submit" className="w-full justify-center">
                Book Appointment
              </Button>
            </div>
          </motion.form>

          <motion.div
            className="absolute bottom-10 right-8 hidden w-56 items-center gap-3 rounded-full border border-white/20 bg-white px-3 py-2 text-neutral-900 shadow-soft md:flex"
            animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 4.6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
            }
          >
            <div className="flex -space-x-2">
              {["A", "M", "R"].map((item) => (
                <span
                  key={item}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-mint-200 text-xs font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs">
              Trusted by
              <span className="mx-1 font-semibold">1000+</span>
              happy patients
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
