import { Header } from "@widgets/header";
import { Route, Routes } from "react-router-dom";
import { Blogpage } from "@pages/blogpage";
import { Homepage } from "@pages/homepage";
import { Postpage } from "@pages/postpage";
import { PortfolioPage } from "@pages/portfolio";
import { NotFoundPage } from "@pages/notfound";
import { ContactPage } from "@pages/contactpage";
import { Banner } from "@widgets/banner";
import { Footer } from "@widgets/footer";

import s from "./styles/App.module.scss";

function App() {
  return (
    <div className={s.page}>
      <div className={s.wrapper}>
        <Banner>This project is on WIP</Banner>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/:postSlug" element={<Postpage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
