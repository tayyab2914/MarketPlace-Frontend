import { message } from "@/components/ui/CustomMessageProvider.js/CustomMessageProvider";
import axios from "axios";

export const MAKE_API_REQUEST = async ({
  method = "get",
  url,
  token = null,
  data = null,
  params = null,
  isFormData = false,
  successMessage = null,
  errorMessage = "An unexpected error occurred.",
  loadingMessage = null,
  onSuccess = null,
  onError = null,
  timeout = 10000,
  hideError = false,
}) => {
  let hideLoading = null;

  try {
    if (loadingMessage) {
      hideLoading = message.loading(loadingMessage, 0);
    }

    const headers = {
      ...(token && { Authorization: `Token ${token}` }),
      ...(isFormData && { "Content-Type": "multipart/form-data" }),
    };

    const response = await axios({
      method,
      url,
      data,
      params,
      headers,
      timeout,
    });

    if (hideLoading) hideLoading();
    if (successMessage) message.success(successMessage);
    if (onSuccess) onSuccess(response.data);

    return response.data;
  } catch (error) {
    if (hideLoading) hideLoading();

    console.log(error);

    const errorText =
      error?.response?.data?.message ||
      error?.response?.data?.detail ||
      error?.response?.data?.error ||
      error?.message ||
      errorMessage;

    if (!hideError) {
      message.error(errorText);
    }

    if (onError) onError(errorText);

    return false;
  }
};
