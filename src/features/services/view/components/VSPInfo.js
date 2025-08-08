import { HexagonImage } from '@/components/decor/hexagon-image/HexagonImage';
import React from 'react';

const VSPInfo = ({ ServiceDetails }) => {
  console.log(ServiceDetails);

  return (
    <div className="srv-v-wrapper">
      <div className="srv-v-grid">
        {/* Left image */}
        <div className="srv-v-image-wrapper">
          <img
            src="/assets/images/worker-details-img.png"
            className="srv-v-main-image"
            alt=""
          />
        </div>

        {/* Right info section */}
        <div className="srv-v-info">
          <div className="srv-v-info-header">
            <h3 className="srv-v-title">{ServiceDetails?.title}</h3>
            <p className="srv-v-description">{ServiceDetails?.description}</p>

            <div className="srv-v-company-info">
              <div className="srv-v-hexagon-container">
                <HexagonImage src={''} size={140} />
                <div className="srv-v-verify-badge">
                  <img src="/assets/images/verify-badge.png" alt="" />
                </div>
              </div>

              <div className="srv-v-company-text">
                <div className="srv-v-company-header">
                  <h5 className="srv-v-company-name">{ServiceDetails?.company}</h5>
                  <p className="srv-v-pro-badge">PRO</p>
                </div>
                <p className="srv-v-location">{ServiceDetails?.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSPInfo;
