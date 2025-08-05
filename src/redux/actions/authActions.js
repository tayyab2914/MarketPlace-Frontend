import { SET_IS_USER_LOGGED_IN, SET_USER_AUTH_TOKEN } from "../types/authTypes";

export const setIsUserLoggedIn = (payload) => ({
  type: SET_IS_USER_LOGGED_IN,
  payload: payload,
});

export const setUserAuthToken = (payload) => ({
  type: SET_USER_AUTH_TOKEN,
  payload: payload,
});
