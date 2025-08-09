"use client";
import React from "react";

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
          <span className={`dlov-status dlov-status--${offer.status}`}>
            {offer.status}
          </span>
        </div>

        {/* Message */}
        <p className="dlov-message">{offer.message}</p>

        {/* Sent date */}
        {createdAtFormatted && (
          <p className="dlov-sent-date">Sent on: {createdAtFormatted}</p>
        )}
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
