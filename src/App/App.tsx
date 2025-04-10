import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/layouts/auth/Login.tsx";
import { Main } from "../components/layouts/main/Main.tsx";
import { Registration } from "@/components/layouts/registration/Registration.tsx";
import { NotFound } from "@/components/layouts/not-found/NotFound.tsx";

import "./App.css";
import { Layout } from "@/components/layouts/layout.tsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="app" element={<Main />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
