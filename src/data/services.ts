import assessmentImage from "../assets/pexels-funkcines-terapijos-centras-927573878-20860577.jpg";
import consultationImage from "../assets/pexels-worldsikhorg-14797760.jpg";
import mobilityImage from "../assets/sincerely-media-qzmPDJJOz4c-unsplash.jpg";

export type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    title: "Manual Therapy",
    description:
      "Hands-on techniques that ease muscle restriction, improve mobility, and reduce pain gently.",
    image: assessmentImage,
    alt: "Therapist guiding a patient through a mobility exercise"
  },
  {
    title: "Injury Rehabilitation",
    description:
      "Structured recovery programs designed for athletes and active professionals returning to peak performance.",
    image: consultationImage,
    alt: "Physiotherapist discussing injury recovery with a patient"
  },
  {
    title: "Pain Management",
    description:
      "Evidence-based sessions for chronic back, neck, and joint discomfort with measurable milestones.",
    image: mobilityImage,
    alt: "Close-up of therapist supporting a patient's wrist movement"
  }
];
