import { SET_COMPANY_INFO } from "../types/companyInfoTypes";

const initialState = {
  company_info: {},
};

const companyInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY_INFO:
      return { ...state, company_info: action.payload };
    default:
      return state;
  }
};

export default companyInfoReducer;
