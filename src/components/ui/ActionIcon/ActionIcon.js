import React from "react";
import { Popconfirm } from "antd";
import "./styles/action-icon.css";

// Helper to lighten a hex color
const lightenColor = (hex, percent = 80) => {
  if (!hex) return hex;
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  r = Math.min(255, Math.floor(r + ((255 - r) * percent) / 100));
  g = Math.min(255, Math.floor(g + ((255 - g) * percent) / 100));
  b = Math.min(255, Math.floor(b + ((255 - b) * percent) / 100));

  return `rgb(${r}, ${g}, ${b})`;
};

const ActionIcon = ({ color = "#000", icon, label, onClick, tooltip, type }) => {
  const lightColor = lightenColor(color, 90); // lighten 60%
  const coloredIcon = React.cloneElement(icon, {
    color: lightColor,
    strokeWidth: 2,
    size: 16,
  });

  if (type === "delete") {
    return (
      <Popconfirm
        title={`Are you sure you want to ${label || "delete this item"}?`}
        onConfirm={onClick}
        okText="Yes"
        cancelText="No"
      >
        <div className="action-icon" title={tooltip || label} style={{ backgroundColor: color }}>
          {coloredIcon}
        </div>
      </Popconfirm>
    );
  }

  return (
    <div className="action-icon" onClick={onClick} title={tooltip || label} style={{ backgroundColor: color }}>
      {coloredIcon}
    </div>
  );
};

export default ActionIcon;
