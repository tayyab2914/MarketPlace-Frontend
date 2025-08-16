import React from "react";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/layout/footer/Footer";
import "./styles/contact-us.css";
import FaqComponent from "@/components/layout/faq/FaqComponent";
const ContactUsPage = () => {
  return (
    <div>
      <ContactSection />
      <FaqComponent />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
