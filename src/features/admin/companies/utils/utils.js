import { BACKEND_DOMAIN } from "@/utils/Constants";
import { Tag } from "antd";
import { CheckCircle, XCircle } from "lucide-react";

export const RENDER_VERIFICATION_TAGS = (verified) => {
  const tagStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    width: "80px",
    height: "24px",
  };

  return verified ? (
    <Tag color="green" style={tagStyle}>
      <CheckCircle size={14} /> Verified
    </Tag>
  ) : (
    <Tag color="red" style={tagStyle}>
      <XCircle size={14} /> Not Verified
    </Tag>
  );
};

export const FILTER_DATA_BY_SEARCH = (searchText, data) => {
  if (!searchText) return data;
  const lowerSearch = searchText?.toLowerCase();

  return data.filter(
    (company) =>
      (company?.name && company?.name?.toLowerCase()?.includes(lowerSearch)) ||
      (company?.industry &&
        company?.industry?.toLowerCase()?.includes(lowerSearch)) ||
      (company?.location &&
        company?.location?.toLowerCase()?.includes(lowerSearch)) ||
      (company?.phone_no &&
        company?.phone_no?.toLowerCase()?.includes(lowerSearch))
  );
};

export const CONVERT_FORM_VALUES_TO_FORM_DATA = (values, fileList) => {
  const formData = new FormData();
  formData.append("name", values?.name);
  formData.append("company_description", values?.company_description || "");
  formData.append("phone_no", values?.phone_no || "");
  formData.append("industry", values?.industry || "");
  formData.append("location", values?.location || "");
  formData.append("verified_by_admin", values?.verified_by_admin);

  // If new file uploaded, append the file to formData
  if (fileList?.length > 0 && fileList[0]?.originFileObj) {
    formData.append("profile_image", fileList[0]?.originFileObj);
  }
  return formData;
};

export const createInitialFileList = (company) => {
  if (company?.profile_image) {
    return [
      {
        uid: "-1",
        name: "profile_image.jpg",
        status: "done",
        url: company?.profile_image.startsWith("http")
          ? company?.profile_image
          : `${BACKEND_DOMAIN}${company?.profile_image}`,
      },
    ];
  }
  return [];
};

export const MAP_INITIAL_VALUES = (company) => {
  const initialValues ={
    id: company?.id,
    name: company?.name,
    company_description: company?.company_description,
    phone_no: company?.phone_no,
    industry: company?.industry,
    location: company?.location,
  };
  return initialValues;
};
