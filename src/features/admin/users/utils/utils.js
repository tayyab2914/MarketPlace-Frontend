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
    (user) =>
      (user?.username && user?.username.toLowerCase().includes(lowerSearch)) ||
      (user?.email && user?.email.toLowerCase().includes(lowerSearch))
  );
};




export const MAP_INITIAL_VALUES = (user) => {
  const initialValues = {
    id: user?.id,
    username: user?.username,
    email: user?.email,
    email_verified: user?.email_verified,
    verified_by_admin: user?.verified_by_admin,
  };
  return initialValues;
};
