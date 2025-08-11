import { Tag } from "antd";
import dayjs from "dayjs";

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
export const FILTER_LISTINGS_BY_SEARCH = (searchText, data) => {
  if (!searchText) return data;
  const lowerSearch = searchText?.toLowerCase();

  return data?.filter((listing) => {
    const includesSearch = (value) =>
      typeof value === "string" && value?.toLowerCase()?.includes(lowerSearch);

    // Check tags array
    const tagsMatch =
      Array.isArray(listing?.tags) &&
      listing?.tags?.some((tag) => tag?.toLowerCase()?.includes(lowerSearch));

    return (
      includesSearch(listing?.title) ||
      includesSearch(listing?.description) ||
      includesSearch(listing?.category) ||
      tagsMatch ||
      includesSearch(listing?.status) ||
      String(listing?.company)?.includes(lowerSearch) // company is a number, convert to string
    );
  });
  
};


export const CONVERT_FORM_VALUES_TO_FORM_DATA = (values) => {
  const formData = {
    title: values.title,
    description: values.description,
    category: values.category,
    tags: values.tags ? values.tags.split(",").map(tag => tag.trim()) : [],
    budget: values.budget,
    deadline: values.deadline ? dayjs(values.deadline).format("YYYY-MM-DD") : null,
    status: values.status,
    is_public: values.is_public,
    verified_by_admin: values.verified_by_admin,
    company: values.company,
  }
  return formData
};




export const MAP_INITIAL_VALUES = (listing) => {
  const initialValues = {
    id: listing?.id,
    title: listing?.title,
    description: listing?.description,
    category: listing?.category,
    tags: listing?.tags ? listing?.tags.join(", ") : "",
    budget: listing?.budget,
    deadline: listing?.deadline ? dayjs(listing?.deadline) : null,
    status: listing?.status,
    is_public: listing?.is_public,
    verified_by_admin: listing?.verified_by_admin,
    company: listing?.company,
  };
  return initialValues;
};
