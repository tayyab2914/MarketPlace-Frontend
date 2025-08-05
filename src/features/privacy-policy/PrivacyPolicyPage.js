import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import PrivacyBreadCrumbs from "./components/PrivacyBreadCrumbs";
import PrivacyFaq from "./components/PrivacyFaq";
import Footer from "@/components/layout/footer/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Navbar />
      <PrivacyBreadCrumbs />
      <PrivacyFaq />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
