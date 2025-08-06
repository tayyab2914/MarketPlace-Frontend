"use client";
import { MAKE_API_REQUEST } from "@/utils/AxiosTemplate";
import { BACKEND_DOMAIN } from "@/utils/Constants";

export const API_LISTING_CREATE= async (token, data) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/listing/create/`,
    data: data,
    token: token,
    errorMessage: "Failed to create listing.",
    successMessage: "Listing Created Successfully",
  });
};
export const API_LISTING_LIST= async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/listing/list/`,
    token: token,
  });
};
export const API_GET_LISTING_PUBLIC_LIST= async (token,keyword) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/listing/public/list?keyword=${keyword}`,
    token:token
  });
};
