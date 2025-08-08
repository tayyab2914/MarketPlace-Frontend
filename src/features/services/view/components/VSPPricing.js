import React from 'react';

const VSPPricing = ({ ServiceDetails }) => {
  return (
    <div className="srv-p-wrapper">
      <div className="srv-p-container">
        <div className="srv-p-header">
          <p className="srv-p-starting-text">STARTING AT</p>
          <p className="srv-p-price">${ServiceDetails?.price_starting_from}/hr</p>

          <div className="srv-p-btn-wrapper">
            <a href="./hire-me.html" className="srv-p-btn">
              <div className="srv-p-btn-inner">
                <i className="ph ph-paper-plane-tilt srv-p-btn-icon"></i>
                <span>Hire me</span>
              </div>
            </a>
          </div>
        </div>

        <div className="srv-p-details">
          <p className="srv-p-subtitle">Duration</p>
          <p className="srv-p-duration">
            <i className="ph-fill ph-calendar srv-p-calendar-icon"></i> 1-1.5 weeks
          </p>

          <p className="srv-p-subtitle">Skills and Services</p>
          <div className="srv-p-skills">
            <p className="srv-p-skill">
              <span>{ServiceDetails?.category}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSPPricing;
