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
