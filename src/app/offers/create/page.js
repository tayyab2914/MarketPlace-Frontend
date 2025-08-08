"use client";
import CreateOfferPage from "@/features/offers/CreateOfferPage";
import React from "react";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import Navbar from "@/components/layout/navbar/Navbar";
import AuthRedirect from "@/utils/AuthRedirect";

const Page = () => {

  return (
    <AuthRedirect allowLoggedIn>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.offerPage} />
      <CreateOfferPage />
    </AuthRedirect>
  );
};

export default Page;
