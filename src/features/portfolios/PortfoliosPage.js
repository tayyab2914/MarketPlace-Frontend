import React from "react";
import PortfolioList from "./components/PortfolioList";
import './styles/portfolio.css'

const PortfoliosPage = () => {
  return (
    <div className="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
      <PortfolioList />
    </div>
  );
};

export default PortfoliosPage;
