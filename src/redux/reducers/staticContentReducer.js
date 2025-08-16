import { SET_PAGES_CONTENT } from "../types/pagesContentTypes";
const initialState = {
  pages_content: {},
};

const pagesContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGES_CONTENT:
      return { ...state, pages_content: action.payload };

    default:
      return state;
  }
};

export default pagesContentReducer;
