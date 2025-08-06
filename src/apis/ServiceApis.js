"use client";
import { MAKE_API_REQUEST } from "@/utils/AxiosTemplate";
import { BACKEND_DOMAIN } from "@/utils/Constants";

export const API_SERVICE_CREATE= async (token, data) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/service/profile/`,
    data: data,
    token: token,
    errorMessage: "Failed to create service.",
    successMessage: "Service Listed Successfully",
  });
};
export const API_SERVICE_LIST= async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/service/public/`,
    token: token,
  });
};
export const API_SERVICE_GET= async (token,service_id) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/service/public/service/${service_id}/`,
    token: token,
  });
};
