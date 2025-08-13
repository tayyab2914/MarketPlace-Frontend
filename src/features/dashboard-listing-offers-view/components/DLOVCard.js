"use client";

import React from "react";
import { Tag } from "antd";
import "antd/dist/reset.css"; // Make sure antd styles are imported

const statusColors = {
  pending: "gold",
  accepted: "green",
  rejected: "red",
  completed: "blue",
};

const DLOVCard = ({ offer }) => {
  const createdAtFormatted = offer.created_at
    ? new Date(offer.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div className="dlov-card-container">
      {/* Left Content */}
      <div className="dlov-left-content">
        {/* Sender Name & Status */}
        <div className="dlov-header">
          <p className="dlov-sender-name">{offer.sender_name}</p>
          <Tag color={statusColors[offer.status]} style={{ textTransform: "capitalize" }}>
            {offer.status}
          </Tag>
        </div>

        {/* Message */}
        <p className="dlov-message">{offer.message}</p>

        {/* Sent date */}
        {createdAtFormatted && <p className="dlov-sent-date">Sent on: {createdAtFormatted}</p>}
      </div>

      {/* Pricing & Delivery */}
      <div className="dlov-right-content">
        <div className="dlov-label">Proposed Price</div>
        <div className="dlov-value">${offer.proposed_price}</div>
        <div className="dlov-label">Estimated Delivery</div>
        <div className="dlov-value">{offer.estimated_delivery_days} days</div>
      </div>
    </div>
  );
};

export default DLOVCard;
