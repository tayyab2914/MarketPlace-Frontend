import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import TACPInfoSection from "./components/TACPInfoSection";
import Footer from "@/components/layout/footer/Footer";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";

const TermsAndConditionsPage = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.termsAndConditions}/>
      <TACPInfoSection />
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
