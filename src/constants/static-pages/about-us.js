import { IMAGES } from "@/components/ui/Image/ImageData";
import { ROUTES } from "@/utils/Constants";
import { FileText, ShieldCheck, Users2 } from "lucide-react";

export const ABOUT_US_CONTENT = {
  experienceYears: 7,
  images: [
    "./assets/images/about_us_img_1.png",
    "./assets/images/about_us_img_2",
  ],
  title: "Know Our On-Demand Services Platform",
  description:
    "Readers are distracted by readable content when viewing page layout. This phenomenon has long been recognized in the design and publishing industries.",
  features: [
    "Readers are distracted by readable content when viewing",
    "Biodegradable chemicals are used",
    "Cleaning Tools will be used to remove deep stains",
    "Complete Sanitization and cleaning of bathroom",
  ],
  knowMoreLink: ROUTES.contactPage,
  knowMoreText: "Know More About",

  howDoesItWorkTitle: "How does Servibe work?",
  howDoesItWork: [
    {
      icon: FileText,
      title: "Businesses post Shifts for free",
      description:
        "Tap into a nationwide network of Workers as your reserve labor pool",
    },
    {
      icon: ShieldCheck,
      title: "Hire with confidence",
      description:
        "Tap into a nationwide network of Workers as your reserve labor pool",
    },
    {
      icon: Users2,
      title: "Qualified Workers notified instantly",
      description:
        "Tap into a nationwide network of Workers as your reserve labor pool",
    },
  ],
  faqs: [
    {
      question: "What types of services do you offer?",
      answer:
        "We offer a wide range of services including cleaning, handyman services, and more depending on your location.",
    },
    {
      question: "What is your payment method?",
      answer:
        "We accept major credit cards, debit cards, and online payment gateways like PayPal.",
    },
    {
      question: "How long does it take?",
      answer:
        "Service duration varies by type. Typically, cleaning services take 1–3 hours.",
    },
    {
      question: "When is your off time?",
      answer:
        "Our services are available 7 days a week, 8am to 8pm. No off days unless notified.",
    },
  ],
};
