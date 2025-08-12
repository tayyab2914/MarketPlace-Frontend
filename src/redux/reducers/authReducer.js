import { SET_IS_ADMIN, SET_IS_USER_LOGGED_IN, SET_USER_AUTH_TOKEN } from "../types/authTypes";

const initialState = {
  token: "",
  is_user_logged_in: false,
  is_admin:false
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_IS_USER_LOGGED_IN:
      return { ...state, is_user_logged_in: action.payload };

    case SET_USER_AUTH_TOKEN:
      return { ...state, token: action.payload };

    case SET_IS_ADMIN:
      return { ...state, is_admin: action.payload };

    default:
      return state;
  }
};

export default authReducer;
