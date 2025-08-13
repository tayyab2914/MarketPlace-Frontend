"use client";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import DashboardNavbar from "@/features/dashboard/components/navbar/DashboardNavbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import DashboardServicesPage from "@/features/dashboard-services/DashboardServicesPage";
import AddServiceBtn from "@/features/dashboard-services/components/AddServiceBtn";
const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <DashboardNavbar />
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <BreadCrumbs type="normal" items={BREADCRUMBS?.dashboardServices} />
        <AddServiceBtn />
      </div>
      <DashboardServicesPage />
    </AuthRedirect>
  );
};

export default page;
