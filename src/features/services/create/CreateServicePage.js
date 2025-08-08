import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import CreateServiceForm from "./components/CreateServiceForm";
import "./styles/create-service.css";
import BackgroundBubbles from "@/components/ui/BackgroundBubbles/BackgroundBubbles";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
const CreateServicePage = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.servicesCreate}/>
      {/* <BackgroundBubbles> */}
        <CreateServiceForm />
      {/* </BackgroundBubbles> */}
    </div>
  );
};

export default CreateServicePage;
