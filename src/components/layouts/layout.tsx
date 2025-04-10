import { Outlet } from "react-router-dom";
import { Header } from "../common/header/Header";
import { Footer } from "../common/footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
