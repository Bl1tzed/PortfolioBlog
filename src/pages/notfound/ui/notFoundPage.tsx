import s from "./notFoundPage.module.scss";

import { Button } from "@shared/ui/button";
import { StickyCursor } from "@shared/ui/sticky-cursor";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <main className={s.content}>
      <StickyCursor />
      <div className={s.heading}>Not Found 404</div>
      <Link to="/">
        <Button
          variant="secondary"
          size="medium"
          svgSrc="/svg/arrow-up-right.svg"
        >
          Главная страница
        </Button>
      </Link>
    </main>
  );
};
