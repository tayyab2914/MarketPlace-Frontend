import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import PortfolioList from "./components/PortfolioList";

const PortfoliosPage = () => {
  return (
    <div>
      <Navbar />
      <PortfolioList />
    </div>
  );
};

export default PortfoliosPage;
