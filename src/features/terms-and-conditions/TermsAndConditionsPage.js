import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import TACPBreadcrumbs from "./components/TACPBreadcrumbs";
import TACPFaqSection from "./components/TACPFaqSection";
import Footer from "@/components/layout/footer/Footer";

const TermsAndConditionsPage = () => {
  return (
    <div>
      <Navbar />
      <TACPBreadcrumbs />
      <TACPFaqSection />
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
