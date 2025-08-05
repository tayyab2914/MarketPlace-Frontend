import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import ContactSection from "./components/ContactSection";
import ContactFaq from "./components/ContactFaq";
import ContactBreadcrumbs from "./components/ContactBreadcrumbs";
import Footer from "@/components/layout/footer/Footer";

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />
      <ContactBreadcrumbs />
      <ContactSection />
      <ContactFaq />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
