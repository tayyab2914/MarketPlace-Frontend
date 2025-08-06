import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import CreateServiceForm from "./components/CreateServiceForm";
import "./styles/create-service.css";
import BackgroundBubbles from "@/components/ui/BackgroundBubbles/BackgroundBubbles";
const CreateServicePage = () => {
  return (
    <div>
      <Navbar />
      <BackgroundBubbles>
        <CreateServiceForm />
      </BackgroundBubbles>
    </div>
  );
};

export default CreateServicePage;
