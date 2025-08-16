import { SET_PAGES_CONTENT } from "../types/pagesContentTypes";


export const setPagesContent = (payload) => ({
  type: SET_PAGES_CONTENT,
  payload: payload,
});

