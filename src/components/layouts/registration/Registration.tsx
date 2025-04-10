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

import styles from "./registration.module.css";

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginInputAlert, setLoginInputAlert] = useState<boolean>(false);
  const [passwordInputAlert, setPasswordInputAlert] = useState<boolean>(false);
  const [failedToRegister, setFailedToRegister] = useState<boolean>(false);

  const loginInputValue = useAppSelector(
    (state) => state.auth.loginInputValueReg
  );
  const passwordInputValue = useAppSelector(
    (state) => state.auth.passwordInputValueReg
  );

  const isLoginValueChecker = () => {
    if (!loginInputValue) {
      setLoginInputAlert(true);
    }
  };
  const isPasswordValueChecker = () => {
    if (!passwordInputValue) {
      setPasswordInputAlert(true);
    }
  };

  const loginInputHandler = (value: string) => {
    dispatch(loginInputValueReg(value));
    passwordInputValueReg;
  };

  const passwpordInputHandler = (value: string) => {
    dispatch(passwordInputValueReg(value));
  };

  const singUpCheck = () => {
    isLoginValueChecker();
    isPasswordValueChecker();
    if (loginInputValue && passwordInputValue) {
      navigate("/");
      dispatch(
        singUp({ userLogin: loginInputValue, userPassword: passwordInputValue })
      );
    }
  };

  return (
    <div className={styles.container}>
      <h1>Регистрация</h1>
      <p>Введите ваши данные</p>
      <div className={styles.containerInput}>
        <Input
          placeholder="Login"
          value={loginInputValue}
          onChange={(e) => {
            setLoginInputAlert(false);
            loginInputHandler(e.target.value);
          }}
        />
        <div className={styles.alertInput}>
          {loginInputAlert && <p>Введите логин</p>}
        </div>

        <Input
          placeholder="Password"
          type="password"
          value={passwordInputValue}
          onChange={(e) => {
            setPasswordInputAlert(false);
            passwpordInputHandler(e.target.value);
          }}
        />
        <div className={styles.alertInput}>
          {passwordInputAlert && <p>Введите пароль</p>}
          {failedToRegister && (
            <p>Имя пользователя или пароль введены неверно</p>
          )}
        </div>
      </div>
      <div className={styles.containerBtn}>
        <Button variant="outline" onClick={singUpCheck}>
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
};
