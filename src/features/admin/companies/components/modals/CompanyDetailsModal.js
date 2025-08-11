import React from "react";
import { Modal } from "antd";
import {
  Home,
  Phone,
  MapPin,
  Tag,
  Image as ImageIcon,
  IdCard,
  CalendarDays,
} from "lucide-react";
import { BACKEND_DOMAIN } from "@/utils/Constants";
import { InfoCard } from "./components/InfoCard";

const CompanyDetailsModal = ({ visible, onClose, company, editable }) => {
  if (!company) return;

  const basicInfo = [
    { Icon: IdCard, label: "Company ID", value: company?.id, isBadge: true },
    { Icon: Home, label: "Company Name", value: company?.name },
    { Icon: Tag, label: "Industry", value: company?.industry },
    { Icon: MapPin, label: "Location", value: company?.location },
    { Icon: Phone, label: "Phone Number", value: company?.phone_no },
  ];

  const dates = [
    {
      Icon: CalendarDays,
      label: "Created At",
      value: new Date(company?.created_at).toLocaleString(),
    },
    {
      Icon: CalendarDays,
      label: "Updated At",
      value: new Date(company?.updated_at).toLocaleString(),
    },
  ];

  return (
    <Modal
      title={
        <div className="adm-info-v-modal-header">
          <Home className="adm-info-v-header-icon" size={18} />
          <span>{editable ? "Edit Company" : "Company Details"}</span>
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={false}
      width={600}
      className="adm-info-v-custom-modal"
    >
      <div className="adm-info-v-details-content">
        <div className="adm-info-v-info-section">
          <div className="adm-info-v-section-header">
            <h3>Basic Information</h3>
          </div>
          <div className="adm-info-v-details-grid">
            {basicInfo.map(({ Icon, label, value, isBadge }) => (
              <InfoCard
                key={label}
                Icon={Icon}
                label={label}
                value={value}
                isBadge={isBadge}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="adm-info-v-info-section">
          <div className="adm-info-v-section-header">
            <h3>Description</h3>
          </div>
          <div className="adm-info-v-description-text">
            {company?.company_description || "No description available"}
          </div>
        </div>

        {/* Profile Image */}
        <div className="adm-info-v-info-section">
          <div className="adm-info-v-section-header">
            <h3>Profile Image</h3>
          </div>
          <div className="adm-info-v-image-container">
            <InfoCard
              Icon={ImageIcon}
              label="Profile Image"
              value={
                company?.profile_image
                  ? `${BACKEND_DOMAIN}${company?.profile_image}`
                  : null
              }
              isImage
            />
          </div>
        </div>

        <div className="adm-info-v-info-section">
          <div className="adm-info-v-section-header">
            <h3>Dates</h3>
          </div>
          <div className="adm-info-v-details-grid">
            {dates?.map(({ Icon, label, value }) => (
              <InfoCard key={label} Icon={Icon} label={label} value={value} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CompanyDetailsModal;
