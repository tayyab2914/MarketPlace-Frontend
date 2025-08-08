"use client";
import React from "react";
import CreateServicePage from "@/features/services/create/CreateServicePage";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import AuthRedirect from "@/utils/AuthRedirect";

const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.servicesCreate} />
      <CreateServicePage />
    </AuthRedirect>
  );
};

export default page;
