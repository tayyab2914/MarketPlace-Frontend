import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import "./styles/create-listing.css";
import CreateListingForm from "./components/CreateListingForm";
const CreateListingPage = () => {
  return (
    <div>
      <Navbar />
      <CreateListingForm />
    </div>
  );
};

export default CreateListingPage;
