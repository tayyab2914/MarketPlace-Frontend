import { Tag } from "antd";

import { CheckCircle, XCircle } from "lucide-react";
export const RENDER_VERIFICATION_TAGS = (verified) => {
  return verified ? (
    <Tag
      color="green"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        width: "80px",
        height: "24px",
      }}
    >
      <CheckCircle size={14} /> Verified
    </Tag>
  ) : (
    <Tag
      color="red"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        width: "110px",
        height: "24px",
      }}
    >
      <XCircle size={14} /> Not Verified
    </Tag>
  );
};
