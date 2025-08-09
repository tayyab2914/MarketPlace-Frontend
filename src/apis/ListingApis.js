"use client";
import { message } from "@/components/ui/CustomMessageProvider.js/CustomMessageProvider";
import { MAKE_API_REQUEST } from "@/utils/AxiosTemplate";
import { BACKEND_DOMAIN } from "@/utils/Constants";

export const API_LISTING_CREATE = async (token, data) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/listing/create/`,
    data: data,
    token: token,
    errorMessage: "Failed to create listing.",
    successMessage: "Listing Created Successfully",
  });
};
export const API_LISTING_UPDATE = async (token, listing_id, data) => {
  return await MAKE_API_REQUEST({
    method: "put",
    url: `${BACKEND_DOMAIN}/listing/${listing_id}/`,
    data: data,
    token: token,
    errorMessage: "Failed to update listing.",
    successMessage: "Listing updated successfully",
  });
};
export const API_LISTING_LIST = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/listing/list/`,
    token: token,
  });
};
export const API_GET_LISTING_PUBLIC_LIST = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/listing/public/list/`,
    token: token,
  });
};
export const API_DELETE_LISTING_BY_ID = async (token, listing_id) => {
  return await MAKE_API_REQUEST({
    method: "delete",
    url: `${BACKEND_DOMAIN}/listing/${listing_id}/`,
    token: token,
    successMessage: "Listing deleted successfully",
  });
};
