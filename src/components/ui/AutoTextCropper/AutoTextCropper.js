import React from "react";
import "./AutoTextCropper.css";
import { Tooltip } from "antd";
const AutoTextCropper = ({ children, textStyles, numOfLines = 1, onClick,  }) => {
  return (
    <Tooltip title={children} >
      <span
        className="two-line-ellipsis"
        style={{ textAlign: "start" }}
        onClick={onClick}
      >
        <div className="flex-parent">
          <div className="flex-child short-and-fixed"></div>

          <div className={`flex-child long-and-truncated-${numOfLines}`}>
            <span style={textStyles}>{children}</span>
          </div>

          <div className="flex-child short-and-fixed"></div>
        </div>
      </span>
    </Tooltip>
  );
};

export default AutoTextCropper;
