import { BACKEND_DOMAIN, ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
import { Row, Col, Empty } from "antd";
import Button from "@/components/ui/Button/Button";
import { FORMAT_WITH_COMMAS } from "@/utils/Methods";

const PortfolioCard = ({ portfolio }) => {
  const services = portfolio?.services || [];
  const router = useRouter();

  console.log(portfolio);
  // Get the minimum price (ignoring nulls)
  const minPrice = services
    .map((s) => s.price_starting_from)
    .filter((p) => p != null)
    .sort((a, b) => a - b)[0];

  // Extract unique categories
  const uniqueCategories = [
    ...new Set(services.map((s) => s.category).filter(Boolean)),
  ];
  const categoriesToShow = uniqueCategories.slice(0, 6);
  const remainingCount = uniqueCategories.length - categoriesToShow.length;

  return (
    <div className="por-l-card">
      <Row
        gutter={[24, 24]}
        align="middle"
        justify="space-between"
        className="por-l-row"
      >
        {/* Left Side */}
        <Col xs={24} md={16} className="por-l-left">
          <Row
            gutter={[16, 16]}
            align="middle"
            className="por-l-left-inner"
            wrap
          >
            <Col flex="180px" className="por-l-image-col">
              {portfolio?.profile_image ? (
                <img
                  src={`${BACKEND_DOMAIN}${portfolio?.profile_image}`}
                  alt={portfolio?.name || "Service Provider"}
                  className="por-l-image"
                />
              ) : (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="No Image"
                  style={{ margin: 0 }}
                />
              )}
            </Col>

            <Col flex="auto" className="por-l-info-col">
              <h3 className="por-l-name">
                {portfolio?.name || "No Name Provided"}
              </h3>

              {/* Added Industry and Location here */}
              <p className="por-l-industry-location">
                <span className="por-l-industry">
                  {portfolio?.industry || "Industry N/A"}
                </span>
                {" • "}
                <span className="por-l-location">
                  {portfolio?.location || "Location N/A"}
                </span>
              </p>
              <p className="por-l-description">
                {portfolio?.company_description}
              </p>

              <div className="por-l-categories">
                {categoriesToShow.map((category, idx) => (
                  <span key={idx} className="por-l-category-badge">
                    {category}
                  </span>
                ))}
                {remainingCount > 0 && (
                  <span className="por-l-category-more">
                    +{remainingCount} more
                  </span>
                )}
              </div>
            </Col>
          </Row>
        </Col>

        {/* Right Side: Pricing */}
        <Col xs={24} md={8} className="por-l-pricing-col">
          <div className="por-l-pricing-box">
            <div className="por-l-pricing-label">STARTING AT</div>
            <div className="por-l-price">
              {minPrice ? `Rs ${FORMAT_WITH_COMMAS(minPrice)}` : "Not Set"}
            </div>
            <div className="por-l-fixed-price-label">Fixed Price</div>
            <Button
              variant="filled-animated"
              style={{ fontSize: "12px" }}
              onClick={() =>
                router.push(`${ROUTES.viewPortfolio}${portfolio.id}`)
              }
            >
              View Details
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PortfolioCard;
