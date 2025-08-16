import React, { useState } from "react";
import ServiceCard from "@/features/services/list/components/ServiceCard";
import { Col, Row } from "antd";

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

        <Row gutter={[24, 24]}>
          {services?.slice(0, visibleCount).map((service, index) => (
              <Col xs={24} lg={12} key={index}>
                <ServiceCard service={service} key={service?.id} />
              </Col>
          ))}
        </Row>

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
