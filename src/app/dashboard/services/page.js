"use client";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import DashboardNavbar from "@/features/dashboard/components/navbar/DashboardNavbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import DashboardServicesPage from "@/features/dashboard-services/DashboardServicesPage";
const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <DashboardNavbar/>
      <BreadCrumbs type="normal" items={BREADCRUMBS?.dashboardServices}/>
      <DashboardServicesPage/>
    </AuthRedirect>
  );
};

export default page;
