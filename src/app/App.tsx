import s from "./styles/App.module.scss";

import { useLocation, useOutlet } from "react-router-dom";
import { Header } from "@widgets/header";
import { Banner } from "@widgets/banner";
import { Footer } from "@widgets/footer";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function App() {
  const location = useLocation();
  const element = useOutlet();

  return (
    <div className={s.page}>
      <div className={s.wrapper}>
        <Banner>This project is on WIP</Banner>
        <Header />
        <AnimatePresence mode="wait" initial={true}>
          {element && React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
