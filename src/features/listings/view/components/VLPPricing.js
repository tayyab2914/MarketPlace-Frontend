import { API_GET_CONVERSATION_ID } from "@/apis/ChatApis";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const VLPPricing = ({ ListingDetails }) => {
  const { token } = useSelector((state) => state.auth);
  const { company_info } = useSelector((state) => state.company);
  const router = useRouter();

  const handleHireMe = async () => {
    const res = await API_GET_CONVERSATION_ID(token, ListingDetails?.company);
    if (res?.id) {
      router.push(`${ROUTES.Chat}?chat_id=${res?.id}`);
    }
  };

  return (
    <div className="lis-viw-p-wrapper">
      <div className="lis-viw-p-container">
        <div className="lis-viw-p-header">
          <p className="lis-viw-p-starting-text">STARTING AT</p>
          <p className="lis-viw-p-price">${ListingDetails?.budget}</p>

          {company_info?.id !== ListingDetails?.company && (
            <div className="lis-viw-p-btn-wrapper">
              <a onClick={handleHireMe} className="lis-viw-p-btn">
                <div className="lis-viw-p-btn-inner">
                  <i className="ph ph-paper-plane-tilt lis-viw-p-btn-icon"></i>
                  <span>Hire me</span>
                </div>
              </a>
            </div>
          )}
        </div>

        <div className="lis-viw-p-details">
          <p className="lis-viw-p-subtitle">Duration</p>
          <p className="lis-viw-p-duration">
            <i className="ph-fill ph-calendar lis-viw-p-calendar-icon"></i>{" "}
            1-1.5 weeks
          </p>

          <p className="lis-viw-p-subtitle">Skills and Services</p>
          <div className="lis-viw-p-skills">
            {ListingDetails?.tags?.map((tag, index) => (
              <p key={index} className="lis-viw-p-skill">
                <span>{tag}</span>
              </p>
            ))}
          </div>

          <p className="lis-viw-p-subtitle">Category</p>
          <p>{ListingDetails?.category}</p>
        </div>
      </div>
    </div>
  );
};

export default VLPPricing;
