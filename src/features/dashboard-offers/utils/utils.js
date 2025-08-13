import { Tag } from "antd";

import { CheckCircle, XCircle } from "lucide-react";
export const RENDER_VERIFICATION_TAGS = (value) => {
  return value=="accepted" ? (
    <Tag
      color="green"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        height: "28px",
        justifyContent:"center"
      }}
    >
      <CheckCircle size={14} /> Accepted
    </Tag>
  ) : (
    <Tag
      color="red"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        height: "28px",
        justifyContent:"center"
      }}
    >
      <XCircle size={14} /> Pending
    </Tag>
  );
};