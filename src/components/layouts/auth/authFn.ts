import { UserState } from "../../../store/slices/userSlice";
import { store } from "@/store/store";

export const authFn = ({ userLogin, userPassword }: UserState) => {
  const login = store.getState().user.userLogin;
  const password = store.getState().user.userPassword;

  if (login === userLogin && password === userPassword) {
    return true;
  } else return false;
};
