import React, { useState } from "react";
import CPPServicesCard from "./CPPServicesCard";
import { IMAGES } from "@/components/ui/Image/ImageData";

const CPPPPortfolioSection = ({ CompanyData }) => {
  const { services = [] } = CompanyData || {};
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="stp-30 sbp-30" id="services">
      <div className="container grid grid-cols-12 gap-6">
        <h2 className="heading-2 sbp-15 col-span-12">More Services</h2>

        {services?.slice(0, visibleCount).map((service, index) => (
          <CPPServicesCard
            key={index}
            title={service?.title}
            image={IMAGES.worker_portfolio_img_2}
          />
        ))}

        {/* Show More button */}
        {visibleCount < services.length && (
          <div className="col-span-12 flex justify-center mt-6">
            <button
              className="btn btn-primary px-6 py-2 rounded-full"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CPPPPortfolioSection;
