"use client";
import React from "react";
import TermsAndConditionsPage from "@/features/terms-and-conditions/TermsAndConditionsPage";

import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";

const page = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.termsAndConditions} />
      <TermsAndConditionsPage />
    </div>
  );
};

export default page;
