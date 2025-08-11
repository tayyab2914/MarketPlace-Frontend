import React from "react";
import { Modal } from "antd";
import {
  FileTextOutlined,
  TagOutlined,
  DollarOutlined,
  CalendarOutlined,
  EyeOutlined,
  CheckCircleOutlined,
  BuildOutlined,
} from "@ant-design/icons";
import { InfoCard } from "./components/InfoCard";

// Small reusable info card component (like your InfoCard)

const ListingDetailsModal = ({ visible, onClose, listing }) => {
  if (!listing) return null;

  const getStatusColor = (status) => {
    const colors = {
      active: "#52c41a",
      pending: "#faad14",
      completed: "#1890ff",
      cancelled: "#ff4d4f",
    };
    return colors[status?.toLowerCase()] || "#666";
  };

  const basicInfo = [
    {
      Icon: FileTextOutlined,
      label: "Listing ID",
      value: listing?.id,
      isBadge: true,
    },
    {
      Icon: FileTextOutlined,
      label: "Title",
      value: listing?.title,
    },
    {
      Icon: FileTextOutlined,
      label: "Status",
      value: listing?.status,
      isTag: true,
      tagColor: getStatusColor(listing?.status),
    },
  ];

  const projectDetails = [
    { Icon: BuildOutlined, label: "Category", value: listing?.category },
    { Icon: DollarOutlined, label: "Budget", value: `$${listing?.budget}` },
    { Icon: CalendarOutlined, label: "Deadline", value: listing?.deadline },
  ];

  const settings = [
    {
      Icon: EyeOutlined,
      label: "Public Listing",
      value: listing?.is_public ? "Public" : "Private",
      isTag: true,
      tagColor: listing?.is_public ? "#52c41a" : "#ff4d4f",
    },
    {
      Icon: CheckCircleOutlined,
      label: "Admin Verified",
      value: listing?.verified_by_admin ? "Verified" : "Pending",
      isTag: true,
      tagColor: listing?.verified_by_admin ? "#52c41a" : "#faad14",
    },
  ];

  const additionalInfo = [
    { label: "Company ID", value: listing?.company },
    { label: "Created", value: new Date(listing?.created_at).toLocaleString() },
    {
      label: "Last Updated",
      value: new Date(listing?.updated_at).toLocaleString(),
    },
  ];

  return (
    <Modal
      title={
        <div className="adm-info-v-modal-header">
          <FileTextOutlined className="adm-info-v-header-icon" />
          <span>Listing Details</span>
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={false}
      width={700}
      className="adm-info-v-custom-modal"
    >
      <div className="adm-info-v-details-content">
        {/* Basic Info */}
        <div className="adm-info-v-info-section">
          <div className="adm-info-v-section-header">
            <h3>Basic Information</h3>
          </div>
          <div className="adm-info-v-details-grid">
            {basicInfo?.map(
              ({ Icon, label, value, isBadge, isTag, tagColor }) => (
                <InfoCard
                  key={label}
                  Icon={Icon}
                  label={label}
                  value={value}
                  isBadge={isBadge}
                  isTag={isTag}
                  tagColor={tagColor}
                />
              )
            )}
          </div>
        </div>

        {/* Description */}
        <div className="adm-info-v-info-section">
          <div className="adm-info-v-section-header">
            <h3>Description</h3>
          </div>
          <div className="adm-info-v-description-content">
            {listing?.description || "No description available"}
          </div>
        </div>

        {/* Project Details */}
        <div className="adm-info-v-info-section">
          <div className="adm-info-v-section-header">
            <h3>Project Details</h3>
          </div>
          <div className="adm-info-v-details-grid">
            {projectDetails?.map(({ Icon, label, value }) => (
              <InfoCard key={label} Icon={Icon} label={label} value={value} />
            ))}tags
          </div>
        </div>

        {/* Tags */}
        {listing?.tags && listing?.tags?.length > 0 && (
          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>
                <TagOutlined /> Tags
              </h3>
            </div>
            <div className="adm-info-v-tags-container">
              {listing?.tags?.map((tag, index) => (
                <span key={index} className="adm-info-v-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Settings */}
        <div className="adm-info-v-info-section">
          <div className="adm-info-v-section-header">
            <h3>Settings & Status</h3>
          </div>
          <div className="adm-info-v-details-grid">
            {settings?.map(({ Icon, label, value, isTag, tagColor }) => (
              <InfoCard
                key={label}
                Icon={Icon}
                label={label}
                value={value}
                isTag={isTag}
                tagColor={tagColor}
              />
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="adm-info-v-info-section">
          <div className="adm-info-v-section-header">
            <h3>Additional Information</h3>
          </div>
          <div className="adm-info-v-details-grid">
            {additionalInfo?.map(({ label, value }) => (
              <div key={label} className="adm-info-v-info-row">
                <span className="adm-info-v-info-label">{label}:</span>
                <span className="adm-info-v-info-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ListingDetailsModal;
