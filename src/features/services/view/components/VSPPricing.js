import React from 'react';

const VSPPricing = ({ ServiceDetails }) => {
  return (
    <div className="srv-viw-p-wrapper">
      <div className="srv-viw-p-container">
        <div className="srv-viw-p-header">
          <p className="srv-viw-p-starting-text">STARTING AT</p>
          <p className="srv-viw-p-price">${ServiceDetails?.price_starting_from}/hr</p>

          <div className="srv-viw-p-btn-wrapper">
            <a href="./hire-me.html" className="srv-viw-p-btn">
              <div className="srv-viw-p-btn-inner">
                <i className="ph ph-paper-plane-tilt srv-viw-p-btn-icon"></i>
                <span>Hire me</span>
              </div>
            </a>
          </div>
        </div>

        <div className="srv-viw-p-details">
          <p className="srv-viw-p-subtitle">Duration</p>
          <p className="srv-viw-p-duration">
            <i className="ph-fill ph-calendar srv-viw-p-calendar-icon"></i> 1-1.5 weeks
          </p>

          <p className="srv-viw-p-subtitle">Skills and Services</p>
          <div className="srv-viw-p-skills">
            <p className="srv-viw-p-skill">
              <span>{ServiceDetails?.category}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSPPricing;
