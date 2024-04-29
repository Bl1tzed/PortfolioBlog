import { NAVIGATION_CONTENT } from "@shared/consts";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import s from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul className={s.navigationList}>
        {NAVIGATION_CONTENT.map((item) => (
          <li key={item.title} className={clsx(s.navigationItem)}>
            <NavLink
              to={item.link}
              className={({ isActive }) => clsx(isActive && s.activePage)}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
