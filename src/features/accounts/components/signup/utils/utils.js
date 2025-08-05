export const CONVERT_SIGNUP_FORM_VALUES_TO_FORM_DATA = (values)=>{
    
    console.log(values)
    const formData = new FormData();
  
    // Append text fields
    formData.append("description", values.description || "");
    formData.append("website", values.website || "");
    formData.append("name", values.name || "");
    formData.append("email", values.email || "");
    formData.append("password", values.password || "");
  
    // Append logo (handle upload object)
    const fileObj = values.logo?.fileList?.[0]?.originFileObj;
    if (fileObj) {
      formData.append("logo", fileObj);
    }
  return formData
}