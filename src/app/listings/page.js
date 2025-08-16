"use client";
import ListingsPage from "@/features/listings/list/ListingsPage";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import AuthRedirect from "@/utils/AuthRedirect";
const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.listingsList} />
      <ListingsPage />
    </AuthRedirect>
  );
};

export default page;
