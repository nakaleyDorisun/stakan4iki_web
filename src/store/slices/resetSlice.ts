import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  loginInput: string;
}

const initialState: LoginState = {
  loginInput: "",
};

const resetPassword = createSlice({
  name: "reset",
  initialState,
  reducers: {
    setLoginInput: (state, action: PayloadAction<string>) => {
      state.loginInput = action.payload;
    },
  },
});

export const { setLoginInput } = resetPassword.actions;

export default resetPassword.reducer;
