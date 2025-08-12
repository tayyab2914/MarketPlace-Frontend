import {
  SET_IS_ADMIN,
  SET_IS_USER_LOGGED_IN,
  SET_USER_AUTH_TOKEN,
} from "../types/authTypes";

export const setIsUserLoggedIn = (payload) => ({
  type: SET_IS_USER_LOGGED_IN,
  payload: payload,
});
export const setIsAdmin = (payload) => ({
  type: SET_IS_ADMIN,
  payload: payload,
});

export const setUserAuthToken = (payload) => {
  return {
    type: SET_USER_AUTH_TOKEN,
    payload: payload,
  };
};
