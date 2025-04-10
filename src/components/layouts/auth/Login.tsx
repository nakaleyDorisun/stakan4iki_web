import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLoginInput, setPasswordInput } from "@/store/slices/loginSlice";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { authFn } from "./authFn";
import { UserState } from "@/store/slices/userSlice";
import { login } from "@/store/slices/authSlice";

import styles from "./login.module.css";
import { CheckboxWithText } from "@/components/ui/CheckBoxWithText";
import { GoogleButton } from "./GoogleButton";

export const Login = () => {
  const dispacth = useAppDispatch();
  const navigate = useNavigate();
  const loginValueState = useAppSelector((state) => state.login.loginInput);
  const passwordValueState = useAppSelector(
    (state) => state.login.passwordInput
  );

  const [loginInputAlert, setLoginInputAlert] = useState<boolean>(false);
  const [passwordInputAlert, setPasswordInputAlert] = useState<boolean>(false);
  const [failedToLogIn, setFailedToLogin] = useState<boolean>(false);

  const isLoginValueChecker = () => {
    if (!loginValueState) {
      setLoginInputAlert(true);
    }
  };
  const isPasswordValueChecker = () => {
    if (!passwordValueState) {
      setPasswordInputAlert(true);
    }
  };

  const logInHandler = () => {
    const userData: UserState = {
      userLogin: loginValueState,
      userPassword: passwordValueState,
    };
    isLoginValueChecker();
    isPasswordValueChecker();
    if (authFn(userData)) {
      dispacth(login());
      navigate("/app");
    } else if (loginValueState && passwordValueState) {
      setFailedToLogin(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Добро пожаловать в Стаканчик Шоп</h1>
      <p>Пожалуйста введите свои данные</p>
      <div className={styles.containerInput}>
        <Input
          value={loginValueState}
          placeholder="email"
          onChange={(e) => {
            setLoginInputAlert(false);
            setFailedToLogin(false);
            dispacth(setLoginInput(e.target.value));
          }}
        />
        <div className={styles.alertInput}>
          {loginInputAlert && <p>Введите логин</p>}
        </div>
        <Input
          value={passwordValueState}
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPasswordInputAlert(false);
            setFailedToLogin(false);
            dispacth(setPasswordInput(e.target.value));
          }}
        />
        <div className={styles.alertInput}>
          {passwordInputAlert && <p>Введите пароль</p>}
          {failedToLogIn && <p>Имя пользователя или пароль введены неверно</p>}
        </div>
      </div>

      <div className={styles.containerCheckBox}>
        <CheckboxWithText />
        <Link to={"/"}>Забыли пароль?</Link>
      </div>
      <div className={styles.containerBtn}>
        <Button variant="default" onClick={logInHandler}>
          Войти
        </Button>
        <GoogleButton />
      </div>
      <div className={styles.containerRegister}>
        <p>Нет аккаунта?</p>
        <Link to={"/registration"}>Зарегистрируйся</Link>
      </div>
    </div>
  );
};
