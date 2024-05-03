import { NAVIGATION_CONTENT } from "@shared/consts";
import { NavLink } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

import s from "./navigation.module.scss";

const navigationVariants = cva(s.button, {
  variants: {
    variant: {
      header: s.header,
      mobileMenu: s.mobileMenu,
    },
  },
  defaultVariants: {
    variant: "header",
  },
});

export const Navigation = (
  props: VariantProps<typeof navigationVariants> & { className?: string }
) => {
  const { className, variant } = props;

  return (
    <nav className={className}>
      <ul className={clsx(navigationVariants({ variant }))}>
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
