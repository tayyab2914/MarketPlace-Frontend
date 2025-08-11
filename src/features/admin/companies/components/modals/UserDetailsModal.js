// CompanyDetailsModal.jsx
import React from "react";
import { Modal, Descriptions, Tag } from "antd";

const CompanyDetailsModal = ({ visible, onClose, company, editable, onEditChange, onSave }) => {
  return (
    <Modal
      title={editable ? "Edit Company" : "Company Details"}
      open={visible}
      onCancel={onClose}
      onOk={editable ? onSave : onClose}
      okText={editable ? "Save" : "OK"}
      cancelText={editable ? "Cancel" : null}
      footer={
        editable
          ? undefined
          : [
              <button key="close" onClick={onClose} className="ant-btn ant-btn-primary">
                OK
              </button>,
            ]
      }
      destroyOnClose
    >
      {company ? (
        <Descriptions column={1} bordered>
          <Descriptions.Item label="ID">{company.id}</Descriptions.Item>
          <Descriptions.Item label="User ID">{company.user}</Descriptions.Item>
          <Descriptions.Item label="Company Name">{company.name}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {company.company_description || <Tag color="default">No description</Tag>}
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">{company.phone_no || "-"}</Descriptions.Item>
          <Descriptions.Item label="Industry">{company.industry || "-"}</Descriptions.Item>
          <Descriptions.Item label="Location">{company.location || "-"}</Descriptions.Item>
          <Descriptions.Item label="Profile Image">
            {company.profile_image ? (
              <img
                src={company.profile_image}
                alt="Profile"
                style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8 }}
              />
            ) : (
              <Tag color="default">No image</Tag>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Created At">
            {new Date(company.created_at).toLocaleString()}
          </Descriptions.Item>
          <Descriptions.Item label="Updated At">
            {new Date(company.updated_at).toLocaleString()}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        "No company data"
      )}
    </Modal>
  );
};

export default CompanyDetailsModal;
