import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { Button } from "@shared/ui/button";
import { Navigation } from "@features/navigation";
import clsx from "clsx";

import s from "./header.module.scss";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuIsOpen(false);
  }, [location]);

  const variants = {
    closed: {
      x: "100%",
      transition: {
        ease: easeInOut,
        duration: 1,
      },
    },
    open: {
      x: "0%",
      transition: {
        ease: easeInOut,
        duration: 1,
      },
    },
  };

  return (
    <>
      <header className={s.header}>
        <div className={s.headerInner}>
          <NavLink to="/">
            <div className={s.logo}>Bibiblog</div>
          </NavLink>
          <Navigation className={s.navigationMenu} />
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
          <Navigation variant={"mobileMenu"} />
          <Button variant="primary" size="big" className={s.mobileMenuButton}>
            Contact Us
          </Button>
        </motion.aside>
      </RemoveScroll>
    </>
  );
};
