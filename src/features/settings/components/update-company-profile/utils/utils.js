export const CONVERT_COMP_FORM_TO_FORM_DATA = (values,fileList) => {
  const formData = new FormData();
  formData.append("name", values?.name || "");
  formData.append("company_description", values?.company_description || "");
  formData.append("phone_no", values?.phone_no || "");
  formData.append("industry", values?.industry || "");
  formData.append("location", values?.location || "");
  if (fileList?.length > 0) {
    const fileObj = fileList[0]?.originFileObj;
    if (fileObj) {
      formData.append("profile_image", fileObj);
    }
  }
  return formData;
};
