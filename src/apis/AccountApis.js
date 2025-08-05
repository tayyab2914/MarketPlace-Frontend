"use client";
import { MAKE_API_REQUEST } from "@/utils/AxiosTemplate";
import { BACKEND_DOMAIN } from "@/utils/Constants";

export const API_SIGNIN = async (data) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/account/signin/`,
    data: data,
    errorMessage: "Failed to sign in.",
    onSuccess: (res) => {
      console.log("User data:", res);
    },
  });
};

export const API_SIGNUP = async (data) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/account/signup/`,
    data: data,
    errorMessage: "Failed to sign up.",
    successMessage:
      "Signup successful. Please check your email to verify your account.",
  });
};
export const API_VERIFY_EMAIL = async (data) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/account/signup/verify_email/`,
    data: data,
    errorMessage: "Failed to verify email.",
    successMessage: "Email Verified SUccessfully.",
  });
};
export const API_FORGOT_PASSWORD = async (email) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/account/forgot_password/`,
    data: { email },
    successMessage: "Reset link sent to your email.",
  });
};
export const API_RESET_PASSWORD = async (data) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/account/forgot_password/reset_password/`,
    data: data,
    successMessage: "Password reset successfully.",
  });
};

export const API_GET_COMPANY_PROFILE = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/account/companyprofile/`,
    token: token,
  });
};
