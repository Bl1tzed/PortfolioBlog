import { Navigation } from "@features/navigation";
import { Button } from "@shared/ui/button";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to="/">
        <ReactSVG src="/svg/logo.svg" />
      </NavLink>
      <Navigation />
      <Button variant="primary" size="small">
        Contact Us
      </Button>
    </header>
  );
};
