import React from "react";
import { Modal, Tag } from "antd";
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

const ListingDetailsModal = ({ visible, onClose, listing }) => {
  if (!listing) return null;

  const getStatusColor = (status) =>
    ({
      open: "orange",
      pending: "blue",
      completed: "green",
      cancelled: "red",
    }[status?.toLowerCase()] || "default");

  const sections = [
    {
      title: "Basic Information",
      items: [
        {
          Icon: FileTextOutlined,
          label: "Listing ID",
          value: listing.id,
          isBadge: true,
        },
        { Icon: FileTextOutlined, label: "Title", value: listing.title },
        {
          Icon: FileTextOutlined,
          label: "Status",
          value: listing.status,
          isTag: true,
          tagColor: getStatusColor(listing.status),
        },
      ],
    },
    {
      title: "Description",
      content: listing.description || "No description available",
    },
    {
      title: "Project Details",
      items: [
        { Icon: BuildOutlined, label: "Category", value: listing.category },
        { Icon: DollarOutlined, label: "Budget", value: `$${listing.budget}` },
        { Icon: CalendarOutlined, label: "Deadline", value: listing.deadline },
      ],
    },
    listing.tags?.length
      ? {
          title: (
            <>
              <TagOutlined /> Tags
            </>
          ),
          content: (
            <div className="adm-info-v-tags-container">
              {listing.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          ),
        }
      : null,
    {
      title: "Settings & Status",
      items: [
        {
          Icon: EyeOutlined,
          label: "Public Listing",
          value: listing.is_public ? "Public" : "Private",
          isTag: true,
          tagColor: listing.is_public ? "green" : "red",
        },
        {
          Icon: CheckCircleOutlined,
          label: "Admin Verified",
          value: listing.verified_by_admin ? "Verified" : "Pending",
          isTag: true,
          tagColor: listing.verified_by_admin ? "green" : "red",
        },
      ],
    },
    {
      title: "Additional Information",
      content: (
        <div className="adm-info-v-details-grid">
          {[
            { label: "Company ID", value: listing.company },
            {
              label: "Created",
              value: new Date(listing.created_at).toLocaleString(),
            },
            {
              label: "Last Updated",
              value: new Date(listing.updated_at).toLocaleString(),
            },
          ].map(({ label, value }) => (
            <div key={label} className="adm-info-v-info-row">
              <span className="adm-info-v-info-label">{label}:</span>
              <span className="adm-info-v-info-value">{value}</span>
            </div>
          ))}
        </div>
      ),
    },
  ].filter(Boolean); 

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
        {sections.map(({ title, items, content }) => (
          <div className="adm-info-v-info-section" key={title.toString()}>
            <div className="adm-info-v-section-header">
              <h3>{title}</h3>
            </div>
            {items && (
              <div className="adm-info-v-details-grid">
                {items.map((props) => (
                  <InfoCard key={props.label} {...props} />
                ))}
              </div>
            )}
            {content && (
              <div className="adm-info-v-description-content">{content}</div>
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ListingDetailsModal;
