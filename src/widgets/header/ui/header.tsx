import { Navigation } from "@features/navigation";
import { Button } from "@shared/ui/button";
import { NavLink } from "react-router-dom";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerInner}>
        <NavLink to="/">
          <div className={s.logo}>Bibiblog</div>
        </NavLink>
        <Navigation />
        <div className={s.headerButton}>
          <Button variant="primary" size="small">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};
