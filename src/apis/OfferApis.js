"use client";
import { MAKE_API_REQUEST } from "@/utils/AxiosTemplate";
import { BACKEND_DOMAIN } from "@/utils/Constants";

export const API_OFFER_CREATE = async (token, data, listing_id) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/offer/create/${listing_id}/`,
    data: data,
    token: token,
    errorMessage: "Failed to create offer.",
    successMessage: "Offer sent successfully",
  });
};
export const API_GET_OFFER_BY_LISTING_ID = async (token, listing_id) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/offer/listing/${listing_id}/`,
    token: token,
  });
};
export const API_GET_OFFERS = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/offer/list/`,
    token: token,
  });
};
