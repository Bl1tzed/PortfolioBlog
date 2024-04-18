import { Header } from "@widgets/header";
import { Route, Routes } from "react-router-dom";

// import s from "./styles/App.module.scss";
import { Blogpage } from "@pages/blogpage";
import { Homepage } from "@pages/homepage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blogpage />} />
      </Routes>
    </>
  );
}

export default App;
