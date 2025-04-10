import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useNavigate } from "react-router-dom";
import { setLoginInput } from "../../../store/slices/resetSlice";
import { useState } from "react";

import styles from "./forgotPassword.module.css";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginInputAlert, setLoginInputAlert] = useState<boolean>(false);

  const loginInputValue = useAppSelector((state) => state.reset.loginInput);

  const isLoginValueChecker = () => {
    if (!loginInputValue) {
      setLoginInputAlert(true);
    }
  };

  const loginInputHandler = (value: string) => {
    dispatch(setLoginInput(value));
  };

  const subbmitHandler = () => {
    isLoginValueChecker();
    if (loginInputValue) {
      dispatch(setLoginInput(""));
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Восстановление пароля</h1>
      <p>Введите ваши почту</p>
      <div className={styles.containerInput}>
        <Input
          placeholder="email"
          value={loginInputValue}
          onChange={(e) => {
            setLoginInputAlert(false);
            loginInputHandler(e.target.value);
          }}
        />
        <div className={styles.alertInput}>
          {loginInputAlert && <p>Введите логин</p>}
        </div>
      </div>
      <div className={styles.containerBtn}>
        <Button variant="outline" onClick={subbmitHandler}>
          Отправить
        </Button>
      </div>
    </div>
  );
};
