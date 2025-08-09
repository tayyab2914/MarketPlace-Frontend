"use client";
import { MAKE_API_REQUEST } from "@/utils/AxiosTemplate";
import { BACKEND_DOMAIN } from "@/utils/Constants";

export const API_SERVICE_CREATE = async (token, data) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/service/profile/`,
    data: data,
    token: token,
    errorMessage: "Failed to create service.",
    successMessage: "Service Listed Successfully",
  });
};
export const API_GET_USER_SERVICES = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/service/profile/`,
    token: token,
  });
};
export const API_SERVICE_LIST = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/service/public/`,
    token: token,
  });
};
export const API_SERVICE_GET = async (token, service_id) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/service/public/service/${service_id}/`,
    token: token,
  });
};

export const API_GET_USER_SERVICE_BY_ID = async (token, service_id) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/service/profile/${service_id}/`,
    token: token,
  });
};
export const API_UPDATE_USER_SERVICE = async (token, service_id, data) => {
  return await MAKE_API_REQUEST({
    method: "put",
    url: `${BACKEND_DOMAIN}/service/profile/${service_id}/`,
    token: token,
    data: data,
    successMessage: "Service Updated Successfully",
  });
};

export const API_DELETE_USER_SERVICE = async (token, service_id) => {
  return await MAKE_API_REQUEST({
    method: "delete",
    url: `${BACKEND_DOMAIN}/service/profile/${service_id}/`,
    token: token,
    successMessage: "Service Deleted Successfully",
  });
};
