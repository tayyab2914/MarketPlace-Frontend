import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import DashboardListingOffersPage from "@/features/dashboard-listing-offers-view/DashboardListingOffersPage";
import DashboardNavbar from "@/features/dashboard/components/navbar/DashboardNavbar";
import AuthRedirect from "@/utils/AuthRedirect";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardNavbar />
      <BreadCrumbs type="normal" items={BREADCRUMBS?.dashboardListingOffers} />
      <DashboardListingOffersPage />
    </>
  );
};

export default page;
