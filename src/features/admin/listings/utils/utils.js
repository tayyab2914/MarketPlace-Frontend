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
};export const FILTER_LISTINGS_BY_SEARCH = (searchText, data) => {
  if (!searchText) return data;
  const lowerSearch = searchText.toLowerCase();

  return data.filter((listing) => {
    const includesSearch = (value) =>
      typeof value === "string" && value.toLowerCase().includes(lowerSearch);

    // Check tags array
    const tagsMatch =
      Array.isArray(listing.tags) &&
      listing.tags.some((tag) => tag.toLowerCase().includes(lowerSearch));

    return (
      includesSearch(listing.title) ||
      includesSearch(listing.description) ||
      includesSearch(listing.category) ||
      tagsMatch ||
      includesSearch(listing.status) ||
      String(listing.company).includes(lowerSearch) // company is a number, convert to string
    );
  });
};
