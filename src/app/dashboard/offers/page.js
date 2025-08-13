"use client";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import DashboardNavbar from "@/features/dashboard/components/navbar/DashboardNavbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import DashboardOffersPage from "@/features/dashboard-offers/DashboardOffersPage";
import AddOfferBtn from "@/features/dashboard-offers/components/AddOfferBtn";
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
        <BreadCrumbs type="normal" items={BREADCRUMBS?.dashboardOffers} />
        <AddOfferBtn />
      </div>
      <DashboardOffersPage />
    </AuthRedirect>
  );
};

export default page;
