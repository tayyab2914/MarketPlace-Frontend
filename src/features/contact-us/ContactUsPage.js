import React from "react";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/layout/footer/Footer";
import "./styles/contact-us.css";
import FaqComponent from "@/components/layout/faq/FaqComponent";
import { CONTACT_US_CONTENT } from "@/constants/static-pages/contact-us";
const ContactUsPage = () => {
  return (
    <div>
      <ContactSection />
      <FaqComponent questionnaire={CONTACT_US_CONTENT} />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
