"use client";
import ContactUsPage from "@/features/contact-us/ContactUsPage";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.contactUs} />
      <ContactUsPage />
      <Footer/>
    </div>
  );
};

export default page;
