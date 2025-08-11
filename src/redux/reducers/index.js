// src/redux/reducers/index.js

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import companyInfoReducer from "./companyInfoReducer";
import socketReducer from "./socketReducer";

export default combineReducers({
  auth: authReducer,
  company: companyInfoReducer,
  socket: socketReducer,
});
