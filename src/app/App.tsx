import { Header } from "@widgets/header";
import { Route, Routes } from "react-router-dom";
import { Blogpage } from "@pages/blogpage";
import { Homepage } from "@pages/homepage";
import { Postpage } from "@pages/postpage";
import { Portfoliopage } from "@pages/portfoliopage";
import { Banner } from "@widgets/banner";
import { Footer } from "@widgets/footer";

import s from "./styles/App.module.scss";
import { NotFound } from "@pages/not-found";

function App() {
  return (
    <>
      <div className={s.wrapper}>
        <Banner>This project is on WIP</Banner>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/portfolio" element={<Portfoliopage />} />
          <Route path="/blog/:postSlug" element={<Postpage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
