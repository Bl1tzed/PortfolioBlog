import { Header } from "@widgets/header";
import { Route, Routes } from "react-router-dom";
import { Blogpage } from "@pages/blogpage";
import { Homepage } from "@pages/homepage";
import { Banner } from "@widgets/banner";
import { Footer } from "@widgets/footer";

import s from "./styles/App.module.scss";

function App() {
  return (
    <>
      <div className={s.wrapper}>
        <Banner>This project is on WIP</Banner>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blogpage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
