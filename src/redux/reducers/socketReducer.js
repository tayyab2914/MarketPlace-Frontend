import { SET_SOCKET } from "../types/socketTypes";
const initialState = {
  chat_socket: {},
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, chat_socket: action.payload };

    default:
      return state;
  }
};

export default socketReducer;
