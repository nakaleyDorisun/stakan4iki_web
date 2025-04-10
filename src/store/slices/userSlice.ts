import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userLogin: string | undefined;
  userPassword: string | undefined;
}

const initialState: UserState = {
  userLogin: undefined,
  userPassword: undefined,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    singUp: (state, action) => {
      state.userLogin = action.payload.userLogin;
      state.userPassword = action.payload.userPassword;
    },
  },
});

export const { singUp } = userSlice.actions;

export default userSlice.reducer;
