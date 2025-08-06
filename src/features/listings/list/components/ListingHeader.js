import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";

const ListingHeader = () => {
  const router = useRouter();
  return (
    <div className="lis-p-service-header">
      <section className="lis-p-service-section">
        <div className="lis-p-container">
          <ul className="lis-p-breadcrumb">
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li className="lis-p-breadcrumb-icon">
              <i className="ph ph-caret-double-right"></i>
            </li>
            <li className="lis-p-breadcrumb-text">Listings</li>
          </ul>

          <div className="lis-p-section-content">
            <div className="lis-p-content-text">
              <h3 className="lis-p-heading">
                Turn this search into a job post
              </h3>
              <p className="lis-p-subheading">
                Post a job for free and we’ll match you with experts perfect for
                your needs.
              </p>
              <div className="lis-p-post-job-btn-wrapper">
                <a
                  onClick={() => router.push(ROUTES.createListing)}
                  className="lis-p-post-job-btn"
                >
                  <span className="lis-p-btn-text">Post a job for free</span>
                </a>
              </div>
            </div>

            <div className="lis-p-job-card">
              <div className="lis-p-job-card-header">
                <p className="lis-p-job-title">Your job</p>
                <p className="lis-p-job-status">MATCHED</p>
              </div>
              <div className="lis-p-job-experts">
                <div className="lis-p-expert-img-wrapper">
                  <img
                    src="./assets/images/expert_img_1.png"
                    alt=""
                    className="lis-p-expert-img"
                  />
                </div>
                <div className="lis-p-expert-img-wrapper overlap">
                  <img
                    src="./assets/images/expert_img_2.png"
                    alt=""
                    className="lis-p-expert-img"
                  />
                </div>
                <div className="lis-p-expert-img-wrapper overlap">
                  <img
                    src="./assets/images/expert_img_3.png"
                    alt=""
                    className="lis-p-expert-img"
                  />
                </div>
                <div className="lis-p-arrow-icon">
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

export default ListingHeader;
