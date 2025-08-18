"use client";
import ListingsPage from "@/features/listings/list/ListingsPage";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import Footer from "@/components/layout/footer/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.listingsList} />
      <ListingsPage />
      <Footer/>
    </>
  );
};

export default page;
