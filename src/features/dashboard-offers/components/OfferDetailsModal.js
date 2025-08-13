import React from "react";
import { Modal } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  FieldTimeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const OfferDetailsModal = ({ open, onClose, offer }) => {
  return (
    <Modal
      title={
        <div className="dsh-off-modal-header">
          <FileTextOutlined className="dsh-off-header-icon" />
          <span>Offer Details</span>
        </div>
      }
      open={open}
      onCancel={onClose}
      footer={null}
      width={700}
      className="dsh-off-custom-modal"
    >
      {offer ? (
        <div className="dsh-off-details-content">
          {/* Basic Info */}
          <div className="dsh-off-info-section">
            <div className="dsh-off-section-header">
              <h3>Basic Information</h3>
            </div>
            <div className="dsh-off-details-grid">
              <div className="dsh-off-detail-card">
                <DollarOutlined className="dsh-off-detail-icon" />
                <div>
                  <div className="dsh-off-detail-label">Proposed Price</div>
                  <div className="dsh-off-detail-value dsh-off-budget">
                    ${offer.proposed_price}
                  </div>
                </div>
              </div>

              <div className="dsh-off-detail-card">
                <FieldTimeOutlined className="dsh-off-detail-icon" />
                <div>
                  <div className="dsh-off-detail-label">Estimated Delivery</div>
                  <div className="dsh-off-detail-value">
                    {offer.estimated_delivery_days} Days
                  </div>
                </div>
              </div>

              <div className="dsh-off-detail-card">
                <CalendarOutlined className="dsh-off-detail-icon" />
                <div>
                  <div className="dsh-off-detail-label">Created At</div>
                  <div className="dsh-off-detail-value">
                    {new Date(offer.created_at).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="dsh-off-info-section">
            <div className="dsh-off-section-header">
              <h3>Message</h3>
            </div>
            <div className="dsh-off-description-content">{offer.message}</div>
          </div>

          {/* Status */}
          <div className="dsh-off-info-section">
            <div className="dsh-off-section-header">
              <h3>Status</h3>
            </div>
            <div>
              <span
                className={`dsh-off-setting-status ${
                  offer.status === "pending" ? "inactive" : "active"
                }`}
              >
                {offer.status}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p className="dsh-off-no-data">No offer selected.</p>
      )}
    </Modal>
  );
};

export default OfferDetailsModal;
