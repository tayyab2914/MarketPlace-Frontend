'use client';
import React from "react";
import { Row, Col } from "antd";
import { HexagonImage } from "@/components/decor/hexagon-image/HexagonImage";
import { BACKEND_DOMAIN } from "@/utils/Constants";

const VSPInfo = ({ ServiceDetails }) => {
  console.log("ServiceDetails", ServiceDetails);

  return (
    <div className="srv-viw-wrapper">
      <Row gutter={[32, 32]} className="srv-viw-grid">
        {/* Left image */}
        <Col xs={24} md={10} className="srv-viw-image-wrapper">
          <img
            src={
              ServiceDetails?.image
                ? `${BACKEND_DOMAIN}${ServiceDetails?.image}`
                : "/assets/images/worker-details-img.png"
            }
            className="srv-viw-main-image"
          />
        </Col>

        {/* Right info section */}
        <Col xs={24} md={14} className="srv-viw-info">
          <div className="srv-viw-info-header">
            <h3 className="srv-viw-title">{ServiceDetails?.title}</h3>
            <p className="srv-viw-description">{ServiceDetails?.description}</p>

            <div className="srv-viw-company-info">
              <div className="srv-viw-hexagon-container">
                <HexagonImage
                  src={
                    ServiceDetails?.company_profile_image
                      ? `${BACKEND_DOMAIN}${ServiceDetails?.company_profile_image}`
                      : "/assets/images/worker-details-img.png"
                  }
                  size={140}
                />
                <div className="srv-viw-verify-badge">
                  <img src="/assets/images/verify-badge.png" alt="" />
                </div>
              </div>

              <div className="srv-viw-company-text">
                <div className="srv-viw-company-header">
                  <h5 className="srv-viw-company-name">
                    {ServiceDetails?.company}
                  </h5>
                  <p className="srv-viw-pro-badge">PRO</p>
                </div>
                <p className="srv-viw-location">{ServiceDetails?.location}</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default VSPInfo;
