export const CONVERT_SIGNUP_FORM_VALUES_TO_FORM_DATA = (values)=>{
    
    console.log(values)
    const formData = new FormData();
  
    // Append text fields
    formData.append("description", values?.description || "");
    formData.append("website", values?.website || "");
    formData.append("name", values?.name || "");
    formData.append("email", values?.email || "");
    formData.append("password", values?.password || "");
  
    // Append logo (handle upload object)
    const fileObj = values?.logo?.fileList?.[0]?.originFileObj;
    if (fileObj) {
      formData.append("logo", fileObj);
    }
  return formData
}

export const STRUCTURE_SIGNUP_REQUEST = (values)=>{
  const payload = {
    email: values?.email,
    password: values?.password,
    name: values?.name,
    company: {
      name: values?.company_name, 
      about: values?.about,
      phone_no: values?.phone_no,
      industry: values?.industry,
      location: values?.location,
    },
  };
  return payload

}