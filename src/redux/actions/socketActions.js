import { SET_SOCKET } from "../types/socketTypes";

export const setSocket = (payload) => ({
  type: SET_SOCKET,
  payload: payload,
});
