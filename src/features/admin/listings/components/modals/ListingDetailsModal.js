import React from "react";
import { Modal } from "antd";
import { 
  FileTextOutlined, 
  TagOutlined, 
  DollarOutlined, 
  CalendarOutlined,
  EyeOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  BuildOutlined
} from "@ant-design/icons";

const ListingDetailsModal = ({ visible, onClose, listing }) => {
  const getStatusColor = (status) => {
    const colors = {
      'active': '#52c41a',
      'pending': '#faad14',
      'completed': '#1890ff',
      'cancelled': '#ff4d4f'
    };
    return colors[status?.toLowerCase()] || '#666';
  };

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
      {listing ? (
        <div className="adm-info-v-details-content">
          <div className="adm-info-v-listing-header">
            <h2 className="adm-info-v-listing-title">{listing.title}</h2>
            <div className="adm-info-v-listing-meta">
              <span className="adm-info-v-listing-id">ID: {listing.id}</span>
              <span 
                className="adm-info-v-listing-status" 
                style={{ backgroundColor: getStatusColor(listing.status) }}
              >
                {listing.status}
              </span>
            </div>
          </div>

          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Description</h3>
            </div>
            <div className="adm-info-v-description-content">
              {listing.description}
            </div>
          </div>

          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Project Details</h3>
            </div>
            <div className="adm-info-v-details-grid">
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <BuildOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Category</div>
                  <div className="adm-info-v-detail-value">{listing.category}</div>
                </div>
              </div>
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <DollarOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Budget</div>
                  <div className="adm-info-v-detail-value adm-info-v-budget">${listing.budget}</div>
                </div>
              </div>
              <div className="adm-info-v-detail-card">
                <div className="adm-info-v-detail-icon">
                  <CalendarOutlined />
                </div>
                <div className="adm-info-v-detail-content">
                  <div className="adm-info-v-detail-label">Deadline</div>
                  <div className="adm-info-v-detail-value">{listing.deadline}</div>
                </div>
              </div>
            </div>
          </div>

          {listing.tags && listing.tags.length > 0 && (
            <div className="adm-info-v-info-section">
              <div className="adm-info-v-section-header">
                <h3><TagOutlined /> Tags</h3>
              </div>
              <div className="adm-info-v-tags-container">
                {listing.tags.map((tag, index) => (
                  <span key={index} className="adm-info-v-tag">{tag}</span>
                ))}
              </div>
            </div>
          )}

          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Settings & Status</h3>
            </div>
            <div className="adm-info-v-settings-grid">
              <div className="adm-info-v-setting-item">
                <EyeOutlined className="adm-info-v-setting-icon" />
                <span className="adm-info-v-setting-label">Public Listing</span>
                <div className={`adm-info-v-setting-status ${listing.is_public ? 'active' : 'inactive'}`}>
                  {listing.is_public ? (
                    <>
                      <CheckCircleOutlined /> Public
                    </>
                  ) : (
                    <>
                      <CloseCircleOutlined /> Private
                    </>
                  )}
                </div>
              </div>
              <div className="adm-info-v-setting-item">
                <CheckCircleOutlined className="adm-info-v-setting-icon" />
                <span className="adm-info-v-setting-label">Admin Verified</span>
                <div className={`adm-info-v-setting-status ${listing.verified_by_admin ? 'active' : 'inactive'}`}>
                  {listing.verified_by_admin ? (
                    <>
                      <CheckCircleOutlined /> Verified
                    </>
                  ) : (
                    <>
                      <CloseCircleOutlined /> Pending
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="adm-info-v-info-section">
            <div className="adm-info-v-section-header">
              <h3>Additional Information</h3>
            </div>
            <div className="adm-info-v-additional-info">
              <div className="adm-info-v-info-row">
                <span className="adm-info-v-info-label">Company ID:</span>
                <span className="adm-info-v-info-value adm-info-v-company-id">{listing.company}</span>
              </div>
              <div className="adm-info-v-info-row">
                <span className="adm-info-v-info-label">Created:</span>
                <span className="adm-info-v-info-value">{new Date(listing.created_at).toLocaleString()}</span>
              </div>
              <div className="adm-info-v-info-row">
                <span className="adm-info-v-info-label">Last Updated:</span>
                <span className="adm-info-v-info-value">{new Date(listing.updated_at).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="adm-info-v-no-data">
          <FileTextOutlined className="adm-info-v-no-data-icon" />
          <p>No listing data available</p>
        </div>
      )}
    </Modal>
  );
};

export default ListingDetailsModal;
