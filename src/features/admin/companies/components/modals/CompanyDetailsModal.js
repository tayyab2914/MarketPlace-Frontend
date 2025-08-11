// CompanyDetailsModal.jsx
import React from "react";
import { Modal } from "antd";
import {
  HomeOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  TagOutlined,
  PictureOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  IdcardOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { BACKEND_DOMAIN } from "@/utils/Constants";

const CompanyDetailsModal = ({ visible, onClose, company, editable }) => {
  return (
    <Modal
      title={
        <div className="adm-info-v-modal-header">
          <HomeOutlined className="adm-info-v-header-icon" />
          <span>{editable ? "Edit Company" : "Company Details"}</span>
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={false}
      width={600}
      className="adm-info-v-custom-modal"
    >
      {company ? (
        <div className="adm-info-v-details-content">
          {/* Basic Information */}
          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Basic Information</h3>
            </div>
            <div className="adm-info-v-details-grid">
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <IdcardOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Company ID</div>
                  <div className="adm-info-v-detail-value adm-info-v-badge">
                    {company.id}
                  </div>
                </div>
              </div>
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <HomeOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Company Name</div>
                  <div className="adm-info-v-detail-value">
                    {company.name || "-"}
                  </div>
                </div>
              </div>
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <TagOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Industry</div>
                  <div className="adm-info-v-detail-value">
                    {company.industry || "-"}
                  </div>
                </div>
              </div>
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <EnvironmentOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Location</div>
                  <div className="adm-info-v-detail-value">
                    {company.location || "-"}
                  </div>
                </div>
              </div>
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <PhoneOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Phone Number</div>
                  <div className="adm-info-v-detail-value">
                    {company.phone_no || "-"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Description</h3>
            </div>
            <div className="adm-info-v-description-text">
              {company.company_description || "No description available"}
            </div>
          </div>

          {/* Profile Image */}
          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Profile Image</h3>
            </div>
            <div className="adm-info-v-image-container">
              {company.profile_image ? (
                <img
                  src={`${BACKEND_DOMAIN}${company.profile_image}`}
                  alt="Profile"
                  className="adm-info-v-profile-image"
                />
              ) : (
                <div className="adm-info-v-no-image">
                  <PictureOutlined /> No image available
                </div>
              )}
            </div>
          </div>

          {/* Status */}
          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Status</h3>
            </div>
            <div className="adm-info-v-settings-grid">
              <div className="adm-info-v-setting-item">
                <span className="adm-info-v-setting-label">Admin Verified</span>
                <div
                  className={`adm-info-v-setting-status ${
                    company.verified_by_admin ? "active" : "inactive"
                  }`}
                >
                  {company.verified_by_admin ? (
                    <>
                      <CheckCircleOutlined /> Verified
                    </>
                  ) : (
                    <>
                      <CloseCircleOutlined /> Not Verified
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Dates</h3>
            </div>
            <div className="adm-info-v-details-grid">
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <CalendarOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Created At</div>
                  <div className="adm-info-v-detail-value">
                    {new Date(company.created_at).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <CalendarOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Updated At</div>
                  <div className="adm-info-v-detail-value">
                    {new Date(company.updated_at).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="adm-info-v-no-data">
          <HomeOutlined className="adm-info-v-no-data-icon" />
          <p>No company data available</p>
        </div>
      )}
    </Modal>
  );
};

export default CompanyDetailsModal;
