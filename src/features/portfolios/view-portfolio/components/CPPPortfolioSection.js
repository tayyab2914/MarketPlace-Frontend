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
    <section className="portfolio-section" id="services">
      <div className="portfolio-container">
        <h2 className="portfolio-heading">More Services</h2>

        {services?.slice(0, visibleCount).map((service, index) => (
          <CPPServicesCard
            key={index}
            title={service?.title}
            image={IMAGES.worker_portfolio_img_2}
          />
        ))}

        {/* Show More button */}
        {visibleCount < services.length && (
          <div className="portfolio-showmore-container">
            <button className="portfolio-showmore-btn" onClick={handleShowMore}>
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CPPPPortfolioSection;
