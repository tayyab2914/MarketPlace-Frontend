"use client";
import React from "react";
import ViewServicePage from "@/features/services/view/ViewServicePage";
import Navbar from "@/components/layout/navbar/Navbar";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";

const Page = ({ params }) => {
  const { service_id } = React.use(params); // unwrap the promise

  return (
    <div>
      <Navbar />
      <BreadCrumbs type="normal" items={BREADCRUMBS?.serviceView} />
      <ViewServicePage service_id={service_id} />
    </div>
  );
};

export default Page;
