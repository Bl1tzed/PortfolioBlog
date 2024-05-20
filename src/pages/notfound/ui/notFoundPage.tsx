import { Metadata } from "@shared/lib/metadata";
import s from "./notFoundPage.module.scss";

import { Button } from "@shared/ui/button";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <main className={s.content}>
      <Metadata title="Not Found" />
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
