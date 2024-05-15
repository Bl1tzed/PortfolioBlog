import s from "./styles/App.module.scss";

import { Outlet } from "react-router-dom";
import { Header } from "@widgets/header";
import { Banner } from "@widgets/banner";
import { Footer } from "@widgets/footer";

function App() {
  return (
    <div className={s.page}>
      <div className={s.wrapper}>
        <Banner>This project is on WIP</Banner>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
