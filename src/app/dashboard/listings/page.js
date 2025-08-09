"use client";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import DashboardNavbar from "@/features/dashboard/components/navbar/DashboardNavbar";
import DashboardListingPage from "@/features/dashboard-listings/DashboardListingPage";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <DashboardNavbar/>
      <BreadCrumbs type="normal" items={BREADCRUMBS?.dashboardListing}/>
      <DashboardListingPage/>
    </AuthRedirect>
  );
};

export default page;
