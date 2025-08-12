import { API_GET_CONVERSATION_ID } from "@/apis/ChatApis";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const VSPPricing = ({ ServiceDetails }) => {
  const { token } = useSelector((state) => state.auth);

  const handleHireMe = async () => {
    const res = await API_GET_CONVERSATION_ID(token, ServiceDetails?.company);
    router.push(`${ROUTES?.Chat}?chat_id=${res?.id}`);
  };

  const router = useRouter();
  return (
    <div className="srv-viw-p-wrapper">
      <div className="srv-viw-p-container">
        <div className="srv-viw-p-header">
          <p className="srv-viw-p-starting-text">STARTING AT</p>
          <p className="srv-viw-p-price">
            ${ServiceDetails?.price_starting_from}/hr
          </p>

          <div className="srv-viw-p-btn-wrapper">
            <a onClick={handleHireMe} className="srv-viw-p-btn">
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
            <i className="ph-fill ph-calendar srv-viw-p-calendar-icon"></i>{" "}
            1-1.5 weeks
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
