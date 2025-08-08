"use client";
import React from "react";
import PortfoliosPage from "@/features/portfolios/PortfoliosPage";
import AuthRedirect from "@/utils/AuthRedirect";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";

const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.portfolio} />
      <PortfoliosPage />
    </AuthRedirect>
  );
};

export default page;
