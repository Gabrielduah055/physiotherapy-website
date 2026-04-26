import firstStepImage from "../assets/raj-tuladhar-HscUZd52tQk-unsplash.jpg";
import secondStepImage from "../assets/pexels-funkcines-terapijos-centras-927573878-20860577.jpg";
import thirdStepImage from "../assets/care-assure-Zx4ddAfk0Ck-unsplash.jpg";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Assessment",
    description:
      "We begin with a precise diagnosis, posture review, and movement screening tailored to your condition.",
    image: firstStepImage,
    alt: "Physiotherapist consulting a patient with a spinal model"
  },
  {
    number: "02",
    title: "Treatment Plan",
    description:
      "Your plan combines manual therapy, targeted exercises, and education to restore confidence in movement.",
    image: secondStepImage,
    alt: "Physiotherapist supporting a patient during treatment"
  },
  {
    number: "03",
    title: "Continuous Support",
    description:
      "Progress check-ins and adaptive sessions help you stay pain-free and resilient long after recovery.",
    image: thirdStepImage,
    alt: "Therapist supporting a patient during rehabilitation exercises"
  }
];
