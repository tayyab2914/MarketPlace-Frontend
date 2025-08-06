import React from "react";

const ServiceHeader = () => {
  return (
    <div className="srv-p-service-header">
      <section className="srv-p-service-section">
        <div className="srv-p-container">
          <ul className="srv-p-breadcrumb">
            <li><a href="./index.html">Home</a></li>
            <li className="srv-p-breadcrumb-icon"><i className="ph ph-caret-double-right"></i></li>
            <li className="srv-p-breadcrumb-text">Services</li>
          </ul>

          <div className="srv-p-section-content">
            <div className="srv-p-content-text">
              <h3 className="srv-p-heading">Turn this search into a job post</h3>
              <p className="srv-p-subheading">
                Post a job for free and we’ll match you with experts perfect for your needs.
              </p>
              <div className="srv-p-post-job-btn-wrapper">
                <a href="./working-processed-step-01.html" className="srv-p-post-job-btn">
                  <span className="srv-p-btn-text">Post a job for free</span>
                </a>
              </div>
            </div>

            <div className="srv-p-job-card">
              <div className="srv-p-job-card-header">
                <p className="srv-p-job-title">Your job</p>
                <p className="srv-p-job-status">MATCHED</p>
              </div>
              <div className="srv-p-job-experts">
                <div className="srv-p-expert-img-wrapper">
                  <img src="./assets/images/expert_img_1.png" alt="" className="srv-p-expert-img" />
                </div>
                <div className="srv-p-expert-img-wrapper overlap">
                  <img src="./assets/images/expert_img_2.png" alt="" className="srv-p-expert-img" />
                </div>
                <div className="srv-p-expert-img-wrapper overlap">
                  <img src="./assets/images/expert_img_3.png" alt="" className="srv-p-expert-img" />
                </div>
                <div className="srv-p-arrow-icon">
                  <i className="-ph-bold ph-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceHeader;
