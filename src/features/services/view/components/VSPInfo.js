import { HexagonImage } from '@/components/decor/hexagon-image/HexagonImage';
import React from 'react';

const VSPInfo = ({ ServiceDetails }) => {
  console.log(ServiceDetails);

  return (
    <div className="srv-viw-wrapper">
      <div className="srv-viw-grid">
        {/* Left image */}
        <div className="srv-viw-image-wrapper">
          <img
            src="/assets/images/worker-details-img.png"
            className="srv-viw-main-image"
            alt=""
          />
        </div>

        {/* Right info section */}
        <div className="srv-viw-info">
          <div className="srv-viw-info-header">
            <h3 className="srv-viw-title">{ServiceDetails?.title}</h3>
            <p className="srv-viw-description">{ServiceDetails?.description}</p>

            <div className="srv-viw-company-info">
              <div className="srv-viw-hexagon-container">
                <HexagonImage src={''} size={140} />
                <div className="srv-viw-verify-badge">
                  <img src="/assets/images/verify-badge.png" alt="" />
                </div>
              </div>

              <div className="srv-viw-company-text">
                <div className="srv-viw-company-header">
                  <h5 className="srv-viw-company-name">{ServiceDetails?.company}</h5>
                  <p className="srv-viw-pro-badge">PRO</p>
                </div>
                <p className="srv-viw-location">{ServiceDetails?.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSPInfo;
