import { IMAGES } from "@/components/ui/Image/ImageData";
import { ROUTES } from "@/utils/Constants";
import { FileText, ShieldCheck, Users2 } from "lucide-react";

export const ABOUT_US_CONTENT = {
  experienceYears: 7,
  images: [
    "./assets/images/about_us_img_1.png",
    "./assets/images/about_us_img_2.png",
  ],
  title: "Know Our On-Demand Services Platform",
  description: (
    <>
      At<b> ServiceBay</b> , we believe finding and offering services should be simple,
      transparent, and efficient. Our platform connects businesses and
      independent contractors with clients looking for solutions - no middleman,
      just direct collaboration. Whether you’re a company showcasing your
      expertise through a dedicated <b> portfolio</b> page, or a client posting a
      <b> listing</b>  with your specific needs and budget, ServiceBay helps you find the
      right match. We make it easy for service providers to discover
      opportunities and for clients to connect with trusted professionals.
    </>
  ),
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
