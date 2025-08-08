import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import PrivacyInfo from "./components/PrivacyInfo";
import Footer from "@/components/layout/footer/Footer";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.privacyPolicy}/>
      <PrivacyInfo />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
