import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  loginInput: string;
  passwordInput: string;
  isValues: boolean;
}

const initialState: LoginState = {
  loginInput: "",
  passwordInput: "",
  isValues: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginInput: (state, action: PayloadAction<string>) => {
      state.loginInput = action.payload;
    },
    setPasswordInput: (state, action: PayloadAction<string>) => {
      state.passwordInput = action.payload;
    },
  },
});

export const { setLoginInput, setPasswordInput } = loginSlice.actions;

export default loginSlice.reducer;
