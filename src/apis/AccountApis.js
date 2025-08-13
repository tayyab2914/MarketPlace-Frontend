"use client";
import {
  setIsAdmin,
  setIsUserLoggedIn,
  setUserAuthToken,
} from "@/redux/actions/authActions";
import { setCompanyInfo } from "@/redux/actions/companyInfoActions";
import { MAKE_API_REQUEST } from "@/utils/AxiosTemplate";
import { BACKEND_DOMAIN, ROUTES } from "@/utils/Constants";
import { printFormData } from "@/utils/Methods";

export const API_SIGNIN = async (data, dispatch, router) => {
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/account/signin/`,
    data: data,
    errorMessage: "Failed to sign in.",
    onSuccess: async (res) => {
      dispatch(setUserAuthToken(res?.data?.token));
      dispatch(setIsUserLoggedIn(true));
      dispatch(setIsAdmin(res?.data?.is_admin))
      API_GET_USER_COMPANY(res?.data?.token, dispatch);
      router.push(ROUTES.home);
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
    successMessage: "Email Verified Successfully.",
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
export const API_LIST_ALL_COMPANIES = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/account/companies/public/`,
    token: token,
  });
};
export const API_GET_COMPANY_BY_ID = async (token, company_id) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/account/companies/public/${company_id}/`,
    token: token,
  });
};
export const API_TEST_USER_TOKEN = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/account/user/test_token/`,
    token: token,
  });
};
export const API_TEST_ADMIN_TOKEN = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/account/admin/test_token/`,
    token: token,
  });
};
export const API_GET_USER_COMPANY = async (token, dispatch) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/account/company/profile/`,
    token: token,
    onSuccess: (res) => {
      dispatch(setCompanyInfo(res?.data));
    },
  });
};
export const API_SET_USER_COMPANY = async (token, data) => {
  console.log("API_SET_USER_COMPANY",data)
  printFormData(data)
  console.log("API_SET_USER_COMPANY",data)
  return await MAKE_API_REQUEST({
    method: "post",
    url: `${BACKEND_DOMAIN}/account/company/profile/`,
    data: data,
    token: token,
  });
};
