"use client";
import ServicesPage from "@/features/services/list/ServicesPage";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import Footer from "@/components/layout/footer/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.servicesList} />
      <ServicesPage />
      <Footer/>
    </>
  );
};

export default page;
