"use client";
import ServicesPage from "@/features/services/list/ServicesPage";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.servicesList} />
      <ServicesPage />
    </AuthRedirect>
  );
};

export default page;
