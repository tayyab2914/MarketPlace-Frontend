import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import "./styles/create-listing.css";
import CreateListingForm from "./components/CreateListingForm";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import BackgroundBubbles from "@/components/ui/BackgroundBubbles/BackgroundBubbles";
const CreateListingPage = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.servicesCreate} />
      {/* <BackgroundBubbles> */}
        <CreateListingForm />
      {/* </BackgroundBubbles> */}
    </div>
  );
};

export default CreateListingPage;
