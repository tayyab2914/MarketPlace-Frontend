import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import CreateServiceForm from "./components/CreateServiceForm";
import './styles/create-service.css'
const CreateServicePage = () => {
  return (
    <div>
      <Navbar />
      <CreateServiceForm />
    </div>
  );
};

export default CreateServicePage;
