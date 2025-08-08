"use client";
import AboutUsPage from "@/features/about-us/AboutUsPage";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";

const page = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS.aboutUs} />
      <AboutUsPage />
    </div>
  );
};

export default page;
