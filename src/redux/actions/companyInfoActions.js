import { SET_COMPANY_INFO } from "../types/companyInfoTypes";

export const setCompanyInfo = (payload) => ({
  type: SET_COMPANY_INFO,
  payload: payload,
});

