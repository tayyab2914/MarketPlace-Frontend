import { message } from "antd";
import axios from "axios";

export const MAKE_API_REQUEST = async ({
    method = "get",
    url,
    token,
    data = null,
    params = null,
    isFormData = false,
    successMessage = null,
    errorMessage = "An unexpected error occurred.",
  }) => {
    try {
      const headers = token
        ? {
            Authorization: token,
            ...(isFormData ? { "Content-Type": "multipart/form-data" } : {}),
          }
        : {};
  
      const response = await axios({ method, url, headers, data, params });
  
      if (successMessage) {
        message.success(successMessage);
      }
  
      return response.data;
    } catch (error) {
      console.error(error);
      const errorText =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        error?.response?.data?.error ||
        errorMessage;
  
      message.error(errorText);
      return null;
    }
  };