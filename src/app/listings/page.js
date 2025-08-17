"use client";
import ListingsPage from "@/features/listings/list/ListingsPage";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
const page = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.listingsList} />
      <ListingsPage />
    </>
  );
};

export default page;
