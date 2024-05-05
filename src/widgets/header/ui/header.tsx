import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { Button } from "@shared/ui/button";
import { Navigation } from "@features/navigation";
import clsx from "clsx";

import s from "./header.module.scss";
import { NAVIGATION_ANIMATIONS, NAVIGATION_CONTENT } from "@shared/consts";

const variants = {
  closed: {
    x: "100%",
    transition: {
      ease: easeInOut,
      duration: 0.3,
    },
  },
  open: {
    x: "0%",
    transition: {
      ease: easeInOut,
      duration: 0.3,
    },
  },
};

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuIsOpen(false);
  }, [location]);

  return (
    <>
      <header className={s.header}>
        <div className={s.headerInner}>
          <NavLink to="/">
            <div className={s.logo}>Bibiblog</div>
          </NavLink>
          <Navigation className={s.navigationMenu} isOpen={true} />
          <div className={s.headerButton}>
            <Button variant="primary" size="small">
              Contact Us
            </Button>
          </div>
          <button
            className={clsx(s.navButton, menuIsOpen && s.open)}
            onClick={() => setMenuIsOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <RemoveScroll enabled={menuIsOpen} removeScrollBar={false}>
        <motion.aside
          initial={false}
          variants={variants}
          animate={menuIsOpen ? "open" : "closed"}
          className={clsx(s.mobileMenu, menuIsOpen && s.open)}
        >
          <Navigation variant={"mobileMenu"} isOpen={menuIsOpen} />
          <motion.div
            variants={NAVIGATION_ANIMATIONS}
            animate={menuIsOpen ? "open" : "closed"}
            transition={{
              duration: 0.3,
              delay: (NAVIGATION_CONTENT.length + 1) * 0.3,
            }}
          >
            <Button variant="primary" size="big" className={s.mobileMenuButton}>
              Contact Us
            </Button>
          </motion.div>
        </motion.aside>
      </RemoveScroll>
    </>
  );
};
