"use client";
import FAQPage from "@/features/faq/FAQPage";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";

const page = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.faq} />
      <FAQPage />
    </div>
  );
};

export default page;
