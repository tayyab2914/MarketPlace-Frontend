import React from "react";
import CPPServicesCard from "./CPPServicesCard";
import { IMAGES } from "@/components/ui/Image/ImageData";

const CPPPPortfolioSection = () => {
  return (
    <section className="stp-30 sbp-30" id="services">
      <div className="container grid grid-cols-12 gap-6">
        <h2 className="heading-2 sbp-15 col-span-12">More Services</h2>
        <CPPServicesCard
          title="Restaurant Cleaning Services"
          image={IMAGES.worker_portfolio_img_2}
        />
        <CPPServicesCard
          title="Home Cleaning Services"
          image={IMAGES.worker_portfolio_img_2}
        />
      </div>
    </section>
  );
};

export default CPPPPortfolioSection;
