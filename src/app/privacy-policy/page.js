"use client";
import React from "react";
import PrivacyPolicyPage from "@/features/privacy-policy/PrivacyPolicyPage";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";

const page = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS.privacyPolicy} />
      <PrivacyPolicyPage />
    </div>
  );
};

export default page;
