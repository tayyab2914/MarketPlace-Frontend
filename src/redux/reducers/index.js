// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import companyInfoReducer from './companyInfoReducer';

export default combineReducers({
  auth: authReducer,
  company:companyInfoReducer
});
