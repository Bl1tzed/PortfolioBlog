import s from "./header.module.scss";

import { Navigation } from "@features/navigation";
import { Button } from "@shared/ui/button";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

export const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to="/">
        <ReactSVG src="svg/logo.svg" />
      </NavLink>
      <Navigation />
      <Button variant="primary" size="small" buttonType="default">
        Contact Us
      </Button>
    </header>
  );
};
