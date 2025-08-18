import { Empty } from "antd";
import React from "react";

const CustomEmpty = ({ w = "100%", h = "auto", text = "" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: w,
        height: h,
      }}
    >
      <Empty>{text}</Empty>
    </div>
  );
};

export default CustomEmpty;
