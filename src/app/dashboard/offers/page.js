"use client";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import DashboardNavbar from "@/features/dashboard/components/navbar/DashboardNavbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import DashboardOffersPage from "@/features/dashboard-offers/DashboardOffersPage";
const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <DashboardNavbar />
        <BreadCrumbs type="normal" items={BREADCRUMBS?.dashboardOffers} />

      <DashboardOffersPage />
    </AuthRedirect>
  );
};

export default page;
