import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import loginReducer from "./slices/loginSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  login: loginReducer,
});

export default rootReducer;
