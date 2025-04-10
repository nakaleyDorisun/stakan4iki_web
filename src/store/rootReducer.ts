import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import loginReducer from "./slices/loginSlice";
import resetPassword from "./slices/resetSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  login: loginReducer,
  reset: resetPassword,
});

export default rootReducer;
