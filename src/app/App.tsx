import s from "./styles/App.module.scss";

import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";
import { Metadata } from "@shared/lib/metadata";
import { AnimatedOutlet } from "@shared/ui/animated-outlet";

export default function App() {
  return (
    <div className={s.page}>
      <Metadata />
      <div className={s.wrapper}>
        <Header />
        <AnimatedOutlet />
      </div>
      <Footer />
    </div>
  );
}
