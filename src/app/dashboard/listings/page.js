"use client";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import DashboardNavbar from "@/features/dashboard/components/navbar/DashboardNavbar";
import DashboardListingPage from "@/features/dashboard-listings/DashboardListingPage";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import AddListingBtn from "@/features/dashboard-listings/components/AddListingBtn";
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
        <BreadCrumbs type="normal" items={BREADCRUMBS?.dashboardListing} />
        <AddListingBtn />
      </div>
      <DashboardListingPage />
    </AuthRedirect>
  );
};

export default page;
