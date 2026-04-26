import firstPatientImage from "../assets/care-assure-Zx4ddAfk0Ck-unsplash.jpg";
import secondPatientImage from "../assets/raj-tuladhar-HscUZd52tQk-unsplash.jpg";
import thirdPatientImage from "../assets/pexels-worldsikhorg-14797760.jpg";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
  alt: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Joseph David",
    role: "Product Designer",
    quote:
      "After my knee surgery, Velora helped me rebuild strength without fear. Every session felt personal, precise, and genuinely caring.",
    image: firstPatientImage,
    alt: "Patient recovering with physiotherapy support"
  },
  {
    name: "Alina Moore",
    role: "Marketing Lead",
    quote:
      "The team explained every step of my shoulder recovery plan. Within weeks, my range of motion and confidence returned.",
    image: secondPatientImage,
    alt: "Patient consultation during physiotherapy appointment"
  },
  {
    name: "Marcus Lee",
    role: "Amateur Runner",
    quote:
      "Their sports rehab approach was exact and motivating. I went from recurring pain to finishing my first half-marathon comfortably.",
    image: thirdPatientImage,
    alt: "Physiotherapist guiding a patient in clinic"
  }
];
