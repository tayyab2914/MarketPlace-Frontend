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
export const FILTER_DATA_BY_SEARCH = (searchText, data) => {
  if (!searchText) return data;
  const lowerSearch = searchText.toLowerCase();

  return data.filter(
    (company) =>
      (company.name && company.name.toLowerCase().includes(lowerSearch)) ||
      (company.industry &&
        company.industry.toLowerCase().includes(lowerSearch)) ||
      (company.location &&
        company.location.toLowerCase().includes(lowerSearch)) ||
      (company.phone_no && company.phone_no.toLowerCase().includes(lowerSearch))
  );
};
