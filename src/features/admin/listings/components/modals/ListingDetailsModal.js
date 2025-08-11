import React from "react";
import { Modal, Descriptions, Tag } from "antd";

const ListingDetailsModal = ({ visible, onClose, listing }) => {
  return (
    <Modal
      title={`Listing Details: ${listing?.title || ""}`}
      open={visible}
      onCancel={onClose}
      footer={[
        <button key="close" onClick={onClose} className="ant-btn ant-btn-primary">
          OK
        </button>,
      ]}
    >
      {listing ? (
        <Descriptions column={1} bordered>
          <Descriptions.Item label="ID">{listing.id}</Descriptions.Item>
          <Descriptions.Item label="Title">{listing.title}</Descriptions.Item>
          <Descriptions.Item label="Description">{listing.description}</Descriptions.Item>
          <Descriptions.Item label="Category">{listing.category}</Descriptions.Item>
          <Descriptions.Item label="Tags">
            {listing.tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Descriptions.Item>
          <Descriptions.Item label="Budget">${listing.budget}</Descriptions.Item>
          <Descriptions.Item label="Deadline">{listing.deadline}</Descriptions.Item>
          <Descriptions.Item label="Status">{listing.status}</Descriptions.Item>
          <Descriptions.Item label="Public Listing">{listing.is_public ? "Yes" : "No"}</Descriptions.Item>
          <Descriptions.Item label="Verified by Admin">{listing.verified_by_admin ? "Yes" : "No"}</Descriptions.Item>
          <Descriptions.Item label="Company ID">{listing.company}</Descriptions.Item>
          <Descriptions.Item label="Created At">{listing.created_at}</Descriptions.Item>
          <Descriptions.Item label="Updated At">{listing.updated_at}</Descriptions.Item>
        </Descriptions>
      ) : (
        "No listing data"
      )}
    </Modal>
  );
};

export default ListingDetailsModal;
