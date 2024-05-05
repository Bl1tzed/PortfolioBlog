import { NavLink } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { NAVIGATION_ANIMATIONS, NAVIGATION_CONTENT } from "@shared/consts";
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
  props: VariantProps<typeof navigationVariants> & {
    className?: string;
    isOpen?: boolean;
  }
) => {
  const { className, variant, isOpen } = props;

  return (
    <nav className={className}>
      <ul className={clsx(navigationVariants({ variant }))}>
        {NAVIGATION_CONTENT.map((item, index) => (
          <motion.li
            key={item.title}
            variants={NAVIGATION_ANIMATIONS}
            className={clsx(s.navigationItem)}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3, delay: (index + 1) * 0.3 }}
          >
            <NavLink
              to={item.link}
              className={({ isActive }) => clsx(isActive && s.activePage)}
            >
              {item.title}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
