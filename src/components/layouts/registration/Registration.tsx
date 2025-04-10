import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useNavigate } from "react-router-dom";
import {
  loginInputValueReg,
  passwordInputValueReg,
} from "../../../store/slices/authSlice";
import { useState } from "react";
import { singUp } from "@/store/slices/userSlice";

export const Registration = () => {
  const [singUpValueAlert, setSingUpValueAlert] = useState<string | boolean>(
    false
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginValueState = useAppSelector(
    (state) => state.auth.loginInputValueReg
  );
  const passwordValueState = useAppSelector(
    (state) => state.auth.passwordInputValueReg
  );

  const loginInputHandler = (value: string) => {
    dispatch(loginInputValueReg(value));
    passwordInputValueReg;
  };

  const passwpordInputHandler = (value: string) => {
    dispatch(passwordInputValueReg(value));
  };

  const singUpCheck = () => {
    if (!loginValueState && !passwordValueState) {
      setSingUpValueAlert("Введите логин и пароль");
    } else if (!loginValueState && passwordValueState) {
      setSingUpValueAlert("Введите логин");
    } else if (loginValueState && !passwordValueState) {
      setSingUpValueAlert("Введите пароль");
    } else {
      navigate("/");

      dispatch(
        singUp({ userLogin: loginValueState, userPassword: passwordValueState })
      );
    }
  };

  return (
    <div>
      <h1>Sing Up</h1>
      <Input
        placeholder="Login"
        value={loginValueState}
        onChange={(e) => {
          loginInputHandler(e.target.value);
        }}
      />
      <Input
        placeholder="Password"
        type="password"
        value={passwordValueState}
        onChange={(e) => {
          passwpordInputHandler(e.target.value);
        }}
      />
      <Button variant="outline" onClick={singUpCheck}>
        Sing UP
      </Button>
      {singUpValueAlert ? <div>{singUpValueAlert}</div> : null}
    </div>
  );
};
