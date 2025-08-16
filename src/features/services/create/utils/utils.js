export const CONVERT_SERVICE_FORM_TO_FORM_DATA = (values, fileList) => {
  const formData = new FormData();

  formData.append("title", values?.title || "");
  formData.append("description", values?.description || "");
  formData.append("category", values?.category || "");
  formData.append("price_starting_from", values?.price_starting_from || "");
  if (fileList?.length > 0) {
    const fileObj = fileList[0]?.originFileObj;
    if (fileObj) {
      formData.append("image", fileObj);
    }
  }

  return formData;
};
