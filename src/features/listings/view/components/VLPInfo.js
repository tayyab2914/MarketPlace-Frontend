import { HexagonImage } from "@/components/decor/hexagon-image/HexagonImage";
import Button from "@/components/ui/Button/Button";
import { ROUTES } from "@/utils/Constants";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const VLPInfo = ({ ListingDetails }) => {
  const router = useRouter();
  return (
    <Row gutter={[20]}>
      <Col xs={24} md={12} lg={7}>
        {" "}
        <div className="lis-viw-image-wrapper">
          <img
            src="/assets/images/worker-details-img.png"
            className="lis-viw-main-image"
            alt="Listing Image"
          />
        </div>
      </Col>
      <Col xs={24} md={12} lg={17}>
        {" "}
        <div className="lis-viw-info">
          <div className="lis-viw-info-header">
            <h3 className="lis-viw-title">{ListingDetails?.title}</h3>
            <p className="lis-viw-description">{ListingDetails?.description}</p>

            <div className="lis-viw-company-info">
              <div className="lis-viw-hexagon-container">
                <HexagonImage
                  src="/assets/images/company-placeholder.png"
                  size={140}
                />
                {ListingDetails?.verified_by_admin && (
                  <div className="lis-viw-verify-badge">
                    <img src="/assets/images/verify-badge.png" alt="Verified" />
                  </div>
                )}
              </div>

              <div className="lis-viw-company-text">
                <div className="lis-viw-company-header">
                  <h5 className="lis-viw-company-name">
                    {ListingDetails?.company_name}
                  </h5>
                  <p className="lis-viw-pro-badge">PRO</p>
                </div>
                <p className="lis-viw-location">
                  {ListingDetails?.company_location}
                </p>
              </div>
            </div>
              <Button
                variant="filled-animated"
                style={{width:"250px"}}
                onClick={(e) => {
                  router.push(
                    `${ROUTES.createOffer}?listing_id=${ListingDetails?.id}`
                  );
                }}
              >
                Send Offer
              </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default VLPInfo;
