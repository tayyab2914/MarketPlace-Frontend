"use client";
import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import ViewListingPage from "@/features/listings/view/ViewListingPage";

const Page = ({ params }) => {
  const { listing_id } = React.use(params); // unwrap the promise

  return (
    <div>
      <Navbar />
      <BreadCrumbs type="normal" items={BREADCRUMBS?.listingView} />
      <ViewListingPage listing_id={listing_id} />
    </div>
  );
};

export default Page;
