"use client";
import CreateListingPage from "@/features/listings/create/CreateListingPage";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import AuthRedirect from "@/utils/AuthRedirect";

const page = () => {

  return (
    <AuthRedirect allowLoggedIn>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.servicesCreate} />
      <CreateListingPage />
    </AuthRedirect>
  );
};

export default page;
