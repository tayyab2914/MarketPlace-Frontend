"use client";
import { message } from "@/components/ui/CustomMessageProvider.js/CustomMessageProvider";
import { MAKE_API_REQUEST } from "@/utils/AxiosTemplate";
import { BACKEND_DOMAIN } from "@/utils/Constants";

export const API_ADMIN_GET_USERS = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/adminpanel/users/`,
    token: token,
  });
};

export const API_ADMIN_GET_COMPANIES = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/adminpanel/companies/`,
    token: token,
  });
};
export const API_ADMIN_GET_LISTINGS = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/adminpanel/listings/`,
    token: token,
  });
};

export const API_ADMIN_UPDATE_USER = async (token, user_id, data) => {
  return await MAKE_API_REQUEST({
    method: "put",
    url: `${BACKEND_DOMAIN}/adminpanel/user/${user_id}/update/`,
    data: data,
    token: token,
    errorMessage: "Failed to update user.",
    successMessage: "User updated successfully",
  });
};

export const API_ADMIN_UPDATE_COMPANY = async (token, company_id, data) => {
  return await MAKE_API_REQUEST({
    method: "put",
    url: `${BACKEND_DOMAIN}/adminpanel/company/${company_id}/update/`,
    data: data,
    token: token,
    errorMessage: "Failed to update company.",
    successMessage: "Company updated successfully",
  });
};

export const API_ADMIN_UPDATE_LISTING = async (token, listing_id, data) => {
  return await MAKE_API_REQUEST({
    method: "put",
    url: `${BACKEND_DOMAIN}/adminpanel/listing/${listing_id}/update/`,
    data: data,
    token: token,
    errorMessage: "Failed to update listing.",
    successMessage: "Listing updated successfully",
  });
};
