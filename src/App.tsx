import { AnimatePresence, motion } from "framer-motion";
import type { MouseEvent } from "react";
import { useState } from "react";
import heroImage from "./assets/pexels-gustavo-fring-5888130.jpg";
import processHeroImage from "./assets/pexels-worldsikhorg-14797760.jpg";
import serviceOne from "./assets/pexels-funkcines-terapijos-centras-927573878-20860577.jpg";
import serviceTwo from "./assets/care-assure-Zx4ddAfk0Ck-unsplash.jpg";
import serviceThree from "./assets/sincerely-media-qzmPDJJOz4c-unsplash.jpg";
import aboutImage from "./assets/raj-tuladhar-HscUZd52tQk-unsplash.jpg";

const services = [
  {
    title: "Manual Therapy",
    copy: "Hands-on techniques to relieve muscle tension and restore mobility.",
    image: serviceOne,
    alt: "Therapist supporting a patient during manual therapy"
  },
  {
    title: "Injury Rehabilitation",
    copy: "Tailored programs to help athletes recover faster and stronger.",
    image: serviceTwo,
    alt: "Physiotherapist helping a patient with strength rehabilitation"
  },
  {
    title: "Pain Management",
    copy: "Evidence-based treatments for chronic neck, back, and joint pain.",
    image: serviceThree,
    alt: "Close up of a therapist treating a patient's wrist"
  }
];

const process = [
  {
    step: "01",
    title: "Assessment",
    copy: "Understanding your condition through detailed consultation and diagnosis.",
    image: processHeroImage,
    alt: "Therapist consulting with a patient"
  },
  {
    step: "02",
    title: "Treatment Plan",
    copy: "Customized exercises, therapies, and recovery goals.",
    image: serviceOne,
    alt: "Therapist guiding a treatment session"
  },
  {
    step: "03",
    title: "Continuous Support",
    copy: "Regular progress tracking and post-recovery guidance.",
    image: aboutImage,
    alt: "Patient receiving support during recovery"
  }
];

const testimonials = [
  {
    name: "Joseph David",
    role: "CEO at ABC Company",
    quote:
      "After my knee surgery, I could barely walk, and the recovery felt daunting. However, within just a few weeks of working with the amazing team at Therapy Rehabilitation Clinic, I was not only back on my feet but also enjoying life to the fullest again.",
    image: serviceTwo
  },
  {
    name: "Martha Cole",
    role: "Studio Director",
    quote:
      "The sessions were calm, personal, and practical. My back pain improved quickly, but the bigger win was learning how to move with confidence again.",
    image: aboutImage
  }
];

const partners = ["45 Degrees", "AlphaWave", "Alt+Shift", "Biosynthesia", "Boltshift", "Capsule"];
const navItems = ["Home", "Services", "About", "Reviews"];
const socialLinks = [
  { label: "X", href: "https://x.com", text: "X" },
  { label: "LinkedIn", href: "https://www.linkedin.com", text: "in" },
  { label: "Facebook", href: "https://www.facebook.com", text: "f" },
  { label: "Pinterest", href: "https://www.pinterest.com", text: "p" }
];
const footerQuickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "tel:988023432" }
];
const footerUtilityLinks = [
  { label: "Style Guide", href: "#" },
  { label: "Password Protected", href: "#" },
  { label: "Licenses", href: "#" },
  { label: "404 not Found", href: "#" },
  { label: "Changelog", href: "#" }
];

const scrollViewport = { once: false, amount: 0.12 };

const staggerReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const revealUp = {
  hidden: { opacity: 0, y: 38, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
  }
};

const revealLeft = {
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
  }
};

const revealRight = {
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
  }
};

function getNavTarget(item: string) {
  return item === "Home" ? "home" : item.toLowerCase();
}

function scrollFastToSection(targetId: string) {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  const startPosition = window.scrollY;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - 12;
  const distance = targetPosition - startPosition;
  const duration = 430;
  const startTime = performance.now();

  const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startPosition + distance * easeOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      window.history.replaceState(null, "", `#${targetId}`);
    }
  };

  requestAnimationFrame(step);
}

function ArrowBox() {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-md bg-[#a8bf95] text-[15px] font-semibold text-[#092c16]">
      <i className="uil uil-arrow-up-right" aria-hidden="true" />
    </span>
  );
}

function LogoMark({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`grid h-10 w-10 place-items-center rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] ${
        dark ? "bg-[#a8bf95] text-[#082d17]" : "bg-[#a8bf95] text-[#082d17]"
      }`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none">
        <path
          d="M6 8.5 17 4v16L6 15.5V8.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M10 11.8 14 9.8M10 12.2l4 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function AbstractMark() {
  return (
    <svg viewBox="0 0 260 220" aria-hidden="true" className="h-full w-full" fill="none">
      <path
        d="M128 18 236 76v126l-58-35V109l-50-28-49 28v58l-57 35V76L128 18Z"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Star({ className = "" }: { className?: string }) {
  return <span className={`soft-star ${className}`} aria-hidden="true" />;
}

type AppointmentFormProps = {
  onClose?: () => void;
};

function AppointmentForm({ onClose }: AppointmentFormProps) {
  return (
    <motion.form
      onSubmit={(event) => event.preventDefault()}
      className="relative rounded-md border border-black/[0.03] bg-white p-5 shadow-[0_34px_70px_rgba(7,33,18,0.28)] md:p-6"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.2 }}
    >
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-[#f0f6ea] text-[#052f16] transition hover:bg-[#d9e8cf]"
          aria-label="Close appointment form"
        >
          x
        </button>
      ) : null}
      <div className="grid gap-3">
        <label className="grid gap-1 text-[12px] font-semibold text-[#0b2f19]">
          Your Name *
          <input className="therapy-input" placeholder="John Smith" />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-[12px] font-semibold text-[#0b2f19]">
            Your Email *
            <input className="therapy-input" placeholder="address@example.com" />
          </label>
          <label className="grid gap-1 text-[12px] font-semibold text-[#0b2f19]">
            Phone *
            <input className="therapy-input" placeholder="(123) 456 789 00" />
          </label>
        </div>
        <label className="grid gap-1 text-[12px] font-semibold text-[#0b2f19]">
          Date & Time *
          <input className="therapy-input" placeholder="Select" />
        </label>
        <label className="grid gap-1 text-[12px] font-semibold text-[#0b2f19]">
          Your Message
          <textarea className="therapy-input min-h-[105px] resize-none py-3" placeholder="Write your message..." />
        </label>
        <button className="mt-1 rounded-md bg-[#052f16] px-5 py-3 text-[12px] font-semibold text-white transition hover:bg-[#0b3f20]">
          Book a Appointment
        </button>
      </div>
    </motion.form>
  );
}

export default function App() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const testimonial = testimonials[testimonialIndex];

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, item: string) => {
    event.preventDefault();
    setIsMenuOpen(false);
    scrollFastToSection(getNavTarget(item));
  };

  return (
    <div className="overflow-x-hidden bg-white text-[#062b16]">
      <nav className="fixed left-1/2 top-3 z-[1000] flex w-[min(1280px,calc(100vw-1.5rem))] -translate-x-1/2 items-center justify-between rounded-md bg-[#052b14]/95 px-6 py-4 text-white shadow-[0_16px_35px_rgba(0,0,0,0.16)] backdrop-blur-md md:w-[min(1280px,calc(100vw-2.5rem))] md:px-8">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div className="hidden items-center gap-3 text-[12px] font-semibold md:flex">
            {navItems.map((item, index) => (
              <a
                className={`nav-pill ${index === 0 ? "nav-pill-active" : ""}`}
                href={`#${getNavTarget(item)}`}
                key={item}
                onClick={(event) => handleNavClick(event, item)}
              >
                {index === 0 ? <span className="nav-dot" aria-hidden="true" /> : null}
                {item}
              </a>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-2xl text-[#d7e7ce] transition hover:bg-white/16 hover:text-white md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <i className="uil uil-bars" aria-hidden="true" />
        </button>
        <a
          href="tel:988023432"
          className="group hidden items-center gap-2 text-sm font-semibold text-[#d7e7ce] transition hover:text-white md:flex"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 text-[#a8bf95] transition group-hover:rotate-[-8deg] group-hover:text-white"
            fill="none"
          >
            <path
              d="M7.2 4.8 9.8 7.4 8.3 9.7c.9 1.8 2.2 3.1 4 4l2.3-1.5 2.6 2.6-1.3 3.1c-.3.7-1.1 1.1-1.9.9-4.7-1.2-8.5-5-9.7-9.7-.2-.8.2-1.6.9-1.9l2-1.4Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          9880-23432
        </a>
        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              className="absolute left-0 right-0 top-[86px] z-[1001] grid gap-2 rounded-md border border-white/10 bg-[#073119] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.24)] md:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item, index) => (
                <a
                  className={`nav-pill ${index === 0 ? "nav-pill-active" : ""}`}
                  href={`#${getNavTarget(item)}`}
                  key={item}
                  onClick={(event) => handleNavClick(event, item)}
                >
                  {index === 0 ? <span className="nav-dot" aria-hidden="true" /> : null}
                  {item}
                </a>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>

      <header className="w-full">
        <section className="relative overflow-visible bg-[#052b14] text-white">
          <div className="absolute right-[max(3rem,calc((100vw-1280px)/2+3rem))] top-28 h-72 w-72 text-[#0d3a20]/70">
            <AbstractMark />
          </div>
          <div className="h-[86px] md:h-[92px]" aria-hidden="true" />

          <div id="home" className="relative z-10 mx-auto grid min-h-[330px] max-w-[1280px] gap-8 px-6 pb-16 pt-12 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <p className="max-w-[390px] self-start text-sm leading-6 text-white/80">
              Personalized physiotherapy care designed to restore your strength, mobility, and confidence
              so you can live pain free and perform at your best.
            </p>
            <h1 className="max-w-[590px] text-[44px] font-semibold leading-[1.08] text-white md:text-[70px]">
              Recover. Rebuild.
              <br />
              Rise <span className="text-[#adc39b]">Again.</span>
            </h1>
          </div>
        </section>

        <section className="relative bg-[#052b14]">
          <div className="relative min-h-[560px]">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={heroImage}
                alt="Physiotherapist treating a patient in a clinic"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 hidden w-[38%] bg-gradient-to-r from-white via-white/92 to-white/0 lg:block" />
            </div>
            <div className="absolute left-6 top-[-64px] z-40 md:left-8 lg:hidden">
              <button
                type="button"
                onClick={() => setIsAppointmentOpen(true)}
                className="flex items-center gap-3 rounded-md bg-white px-5 py-4 text-[13px] font-semibold text-[#052f16] shadow-[0_28px_60px_rgba(7,33,18,0.24)] transition hover:-translate-y-1 hover:shadow-[0_34px_70px_rgba(7,33,18,0.3)]"
              >
                Book Appointment <ArrowBox />
              </button>
            </div>
            <div className="absolute left-[max(74px,calc((100vw-1280px)/2+74px))] top-[-126px] z-40 hidden w-[445px] lg:block">
              <AppointmentForm />
            </div>
            <motion.div
              className="absolute bottom-9 right-[max(2rem,calc((100vw-1280px)/2+2rem))] z-30 flex items-center gap-3 rounded-2xl bg-[#eef5e7] px-4 py-3 shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex -space-x-2">
                {["J", "M", "A"].map((letter) => (
                  <span
                    className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-[#a9c297] text-[11px] font-bold"
                    key={letter}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <p className="max-w-[130px] text-[12px] font-semibold leading-4 text-[#0a3118]">
                Trusted by 1000+ happy patients
              </p>
            </motion.div>
          </div>
        </section>
      </header>

      <main>
        <motion.section
          id="services"
          className="mt-0 bg-[#f0f6ea] py-20 md:py-24"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={staggerReveal}
        >
          <div className="mx-auto max-w-[1280px] px-6 md:px-14">
            <motion.div
              className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
              variants={revealUp}
            >
              <h2 className="text-[34px] font-bold leading-none md:text-[42px]">
                Physiotherapy <span className="text-[#9bb78a]">Services</span>
              </h2>
              <a className="flex items-center gap-2 rounded-md bg-[#052f16] px-4 py-2 text-[12px] font-semibold text-white" href="#">
                All Services <ArrowBox />
              </a>
            </motion.div>
            <div className="grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <motion.article
                  className="rounded-sm bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(8,41,21,0.12)]"
                  key={service.title}
                  variants={revealUp}
                  whileHover={{ y: -6 }}
                >
                  <h3 className="mb-3 text-[22px] font-bold">{service.title}</h3>
                  <div className="relative overflow-hidden rounded-sm">
                    <img src={service.image} alt={service.alt} className="h-[205px] w-full object-cover" />
                    <span className="absolute bottom-3 right-3">
                      <ArrowBox />
                    </span>
                  </div>
                  <p className="mt-4 text-[13px] font-medium leading-5 text-[#193724]">{service.copy}</p>
                </motion.article>
              ))}
            </div>
            <div className="mt-14 flex justify-center gap-1">
              <span className="h-2 w-9 rounded-full bg-[#052f16]" />
              <span className="h-2 w-2 rounded-full bg-[#b6c9a7]" />
              <span className="h-2 w-2 rounded-full bg-[#b6c9a7]" />
            </div>
          </div>
        </motion.section>

        <section className="overflow-hidden py-24">
          <div className="marquee-track whitespace-nowrap text-[48px] font-light leading-none text-[#a7bd95] md:text-[74px]">
            <span>Fresh Breath + Healthy Life + Fresh Breath + Healthy Life + </span>
            <span aria-hidden="true">Fresh Breath + Healthy Life + Fresh Breath + Healthy Life + </span>
          </div>
          <motion.div
            id="about"
            className="mx-auto mt-24 grid max-w-[1120px] gap-20 px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            initial="hidden"
            whileInView="show"
            viewport={scrollViewport}
            variants={staggerReveal}
          >
            <motion.div className="relative" variants={revealLeft}>
              <img src={aboutImage} alt="Clinic team supporting a recovery patient" className="h-[360px] w-full object-cover" />
              <motion.div
                className="absolute bottom-0 left-0 bg-[#052f16] px-8 py-6 text-white"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={scrollViewport}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[42px] font-bold leading-none">15+</p>
                <p className="mt-1 text-[12px] leading-4 text-[#c8d8b8]">Years of<br />Experience</p>
              </motion.div>
            </motion.div>
            <motion.div variants={revealRight}>
              <h2 className="max-w-[560px] text-[34px] font-bold leading-[1.08] md:text-[42px]">
                Expert <span className="text-[#9bb78a]">Physiotherapy</span>
                <br />
                for a Healthier, Pain-Free Life
              </h2>
              <p className="mt-6 max-w-[600px] text-[14px] font-medium leading-7 text-[#4b5c50]">
                We believe recovery is more than treatment. It is a journey. Our certified
                physiotherapists combine clinical expertise with personalized care to help you recover
                from injuries, manage pain, and prevent future issues.
              </p>
              <a className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#052f16] px-4 py-2 text-[12px] font-semibold text-white" href="#">
                Read More <ArrowBox />
              </a>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          className="bg-[#f0f6ea] py-20 md:py-24"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={staggerReveal}
        >
          <div className="relative mx-auto grid max-w-[1280px] gap-10 px-6 md:px-16 lg:block lg:min-h-[720px]">
            <Star className="bottom-16 left-[58%] hidden h-72 w-72 text-[#dce8d5] lg:block" />
            <Star className="right-10 top-20 hidden h-20 w-20 text-[#dce8d5] lg:block" />
            <motion.div className="max-w-[500px]" variants={revealUp}>
              <h2 className="text-[34px] font-bold leading-[1.08] md:text-[42px]">
                Our <span className="text-[#9bb78a]">3-Step</span> Recovery
                <br />
                Process
              </h2>
              <p className="mt-7 text-[14px] font-medium leading-6 text-[#526157]">
                We believe recovery is more than treatment. It is a journey. Our certified
                physiotherapists combine clinical expertise with personalized care to help you recover.
              </p>
            </motion.div>
            {process.map((item, index) => (
              <motion.article
                className={`relative w-full lg:absolute lg:max-w-[340px] ${
                  index === 0
                    ? "lg:right-2 lg:top-10"
                    : index === 1
                      ? "lg:left-[38%] lg:top-[265px]"
                      : "lg:bottom-8 lg:left-0"
                }`}
                key={item.step}
                variants={revealUp}
              >
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-[14px] font-semibold text-[#667367]">{item.step}</span>
                  <h3 className="text-[22px] font-bold">{item.title}</h3>
                </div>
                <img src={item.image} alt={item.alt} className="h-[170px] w-full object-cover" />
                <p className="mt-3 text-[12px] font-medium leading-5 text-[#193724]">{item.copy}</p>
              </motion.article>
            ))}
            <motion.a
              className="relative flex w-fit items-center gap-2 rounded-md bg-[#052f16] px-4 py-2 text-[12px] font-semibold text-white lg:absolute lg:bottom-8 lg:right-0"
              href="#"
              variants={revealUp}
            >
              Start Your Recovery Journey <ArrowBox />
            </motion.a>
          </div>
        </motion.section>

        <motion.section
          id="reviews"
          className="py-24"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={staggerReveal}
        >
          <div className="mx-auto max-w-[1120px] px-8">
            <motion.h2 className="mb-14 text-center text-[34px] font-bold md:text-[40px]" variants={revealUp}>
              What Our <span className="text-[#9bb78a]">Patient's</span> Says
            </motion.h2>
            <motion.div
              className="grid grid-cols-[34px_1fr_34px] items-center gap-3 md:grid-cols-[44px_1fr_44px] md:gap-8"
              variants={revealUp}
            >
              <button
                className="grid h-10 w-10 place-items-center rounded-sm bg-[#f0f4ee] text-xl"
                onClick={() => setTestimonialIndex((testimonialIndex + testimonials.length - 1) % testimonials.length)}
                type="button"
              >
                &lt;
              </button>
              <AnimatePresence mode="wait">
                <motion.div
                  className="mx-auto grid max-w-[760px] gap-8 md:grid-cols-[180px_1fr]"
                  key={testimonial.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <img src={testimonial.image} alt={testimonial.name} className="h-[150px] w-[150px] rounded-full object-cover md:h-[180px] md:w-[180px]" />
                  <div className="relative border-l border-[#9bb78a] pl-8">
                    <span className="absolute right-6 top-0 text-[90px] font-bold leading-none text-[#edf1eb]">
                      "
                    </span>
                    <h3 className="text-[20px] font-bold">{testimonial.name}</h3>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#4f5d51]">{testimonial.role}</p>
                    <p className="mt-6 text-[13px] font-medium leading-6 text-[#48564b]">{testimonial.quote}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <button
                className="grid h-10 w-10 place-items-center rounded-sm bg-[#f0f4ee] text-xl"
                onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
                type="button"
              >
                &gt;
              </button>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="border-y border-[#e5ece0] py-8"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={staggerReveal}
        >
          <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 overflow-hidden px-8 text-[#737b73]">
            {partners.map((partner) => (
              <motion.span className="shrink-0 text-[17px] font-bold text-[#6c746d]" key={partner} variants={revealUp}>
                {partner}
              </motion.span>
            ))}
          </div>
        </motion.section>
      </main>

      <motion.footer
        className="w-full pt-10"
        initial="hidden"
        whileInView="show"
        viewport={scrollViewport}
        variants={staggerReveal}
      >
        <motion.div className="relative overflow-hidden bg-[#052b14] px-6 py-9 text-white sm:px-10" variants={revealUp}>
          <div className="absolute left-[55%] top-[-55px] h-52 w-52 text-[#174423]">
            <AbstractMark />
          </div>
          <div className="relative z-10 mx-auto flex max-w-[1280px] items-center justify-between">
            <div className="flex items-center gap-4">
              <LogoMark dark />
              <p className="text-[28px] font-medium">THERAPY</p>
              <Star className="left-[210px] top-0 h-10 w-10 text-[#94ad83]" />
            </div>
            <a href="tel:988023432" className="text-sm font-semibold text-[#d7e7ce] transition hover:text-white">
              9880-23432
            </a>
          </div>
        </motion.div>
        <div className="bg-[#f0f6ea]">
          <motion.div
            className="mx-auto flex max-w-[1280px] flex-wrap items-start gap-x-8 gap-y-10 px-6 py-10 sm:px-10 sm:py-12"
            variants={staggerReveal}
          >
          <motion.div className="basis-full sm:flex-1 sm:basis-[260px] lg:basis-[300px]" variants={revealUp}>
            <h3 className="text-[16px] font-bold">Follow Us:</h3>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  aria-label={item.label}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white text-[12px] font-semibold text-[#173521] shadow-sm transition hover:-translate-y-1 hover:bg-[#052f16] hover:text-white hover:shadow-[0_12px_24px_rgba(5,47,22,0.18)]"
                  href={item.href}
                  key={item.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.text}
                </a>
              ))}
            </div>
            <p className="mt-7 max-w-[300px] text-[13px] font-medium leading-6 text-[#536058]">
              Combining modern physiotherapy techniques with holistic care, we help your body heal and
              thrive.
            </p>
          </motion.div>
          <motion.div className="basis-[calc(50%-1rem)] sm:flex-1 sm:basis-[160px]" variants={revealUp}>
            <h3 className="mb-5 text-[16px] font-bold">Quick Links</h3>
            {footerQuickLinks.map((item) => (
              <a className="block py-1 text-[13px] font-medium text-[#536058] transition hover:translate-x-1 hover:text-[#052f16]" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </motion.div>
          <motion.div className="basis-[calc(50%-1rem)] sm:flex-1 sm:basis-[170px]" variants={revealUp}>
            <h3 className="mb-5 text-[16px] font-bold">Utility Pages</h3>
            {footerUtilityLinks.map((item) => (
              <a className="block py-1 text-[13px] font-medium text-[#536058] transition hover:translate-x-1 hover:text-[#052f16]" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </motion.div>
          <motion.div className="basis-full sm:flex-1 sm:basis-[280px] lg:basis-[300px]" variants={revealUp}>
            <h3 className="mb-5 text-[16px] font-bold">Subscribe Newsletter</h3>
            <p className="mb-4 text-[13px] font-medium leading-5 text-[#536058]">
              Subscribe to our newsletter for weekly updates, market & special offers.
            </p>
            <input className="footer-email-input w-full rounded-md bg-[#a9c48e] px-4 py-3 text-center text-[13px] font-semibold text-[#173521]" placeholder="example@gmail.com" />
            <button className="mt-3 w-full rounded-md bg-[#052f16] px-4 py-3 text-[13px] font-semibold text-white">
              Subscribe Now
            </button>
          </motion.div>
          </motion.div>
          <motion.div
            className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 pb-5 text-[12px] font-semibold text-[#27352b] sm:flex-row sm:justify-between sm:px-10"
            variants={revealUp}
          >
            <p>(c) 2025 Therapy by. All Rights Reserved.</p>
            <p className="flex flex-wrap gap-x-2 gap-y-1">
              <a className="transition hover:text-[#052f16]" href="#">
                Terms and Conditions
              </a>
              <span>|</span>
              <a className="transition hover:text-[#052f16]" href="#">
                Privacy Policy
              </a>
            </p>
          </motion.div>
        </div>
      </motion.footer>

      <AnimatePresence>
        {isAppointmentOpen ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-[#02170c]/70 px-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
            aria-label="Appointment booking form"
            onClick={() => setIsAppointmentOpen(false)}
          >
            <div className="w-full max-w-[500px]" onClick={(event) => event.stopPropagation()}>
              <AppointmentForm onClose={() => setIsAppointmentOpen(false)} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
