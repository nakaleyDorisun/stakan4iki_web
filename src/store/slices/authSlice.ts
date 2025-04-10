import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  loginInputValueReg: string;
  passwordInputValueReg: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loginInputValueReg: "",
  passwordInputValueReg: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    loginInputValueReg: (state, action) => {
      state.loginInputValueReg = action.payload;
    },
    passwordInputValueReg: (state, action) => {
      state.passwordInputValueReg = action.payload;
    },
  },
});

export const { login, logout, loginInputValueReg, passwordInputValueReg } =
  authSlice.actions;

export default authSlice.reducer;
