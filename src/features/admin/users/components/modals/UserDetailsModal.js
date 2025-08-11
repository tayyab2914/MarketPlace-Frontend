import React from "react";
import { Modal } from "antd";
import { 
  UserOutlined, 
  MailOutlined, 
  CheckCircleOutlined, 
  CloseCircleOutlined 
} from "@ant-design/icons";

const UserDetailsModal = ({ visible, onClose, user, editable }) => {
  return (
    <Modal
      title={
        <div className="adm-info-v-modal-header">
          <UserOutlined className="adm-info-v-header-icon" />
          <span>{editable ? "Edit User" : "User Details"}</span>
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={false}
      width={600}
      className="adm-info-v-custom-modal"
    >
      {user ? (
        <div className="adm-info-v-details-content">
          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Basic Information</h3>
            </div>
            <div className="adm-info-v-details-grid">
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">User ID</div>
                  <div className="adm-info-v-detail-value adm-info-v-badge">
                    {user.id}
                  </div>
                </div>
              </div>
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <UserOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Username</div>
                  <div className="adm-info-v-detail-value">{user.username}</div>
                </div>
              </div>
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <MailOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Email</div>
                  <div className="adm-info-v-detail-value">{user.email}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Verification Status</h3>
            </div>
            <div className="adm-info-v-settings-grid">
              <div className="adm-info-v-setting-item">
                <span className="adm-info-v-setting-label">Email Verified</span>
                <div
                  className={`adm-info-v-setting-status ${
                    user.email_verified ? "active" : "inactive"
                  }`}
                >
                  {user.email_verified ? (
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
              <div className="adm-info-v-setting-item">
                <span className="adm-info-v-setting-label">Admin Verified</span>
                <div
                  className={`adm-info-v-setting-status ${
                    user.verified_by_admin ? "active" : "inactive"
                  }`}
                >
                  {user.verified_by_admin ? (
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
        </div>
      ) : (
        <div className="adm-info-v-no-data">
          <UserOutlined className="adm-info-v-no-data-icon" />
          <p>No user data available</p>
        </div>
      )}
    </Modal>
  );
};

export default UserDetailsModal;
