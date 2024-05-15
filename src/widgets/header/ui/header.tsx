import { useEffect, useState } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { Button } from "@shared/ui/button";
import {
  DURATION_SHORT,
  NAVIGATION_ANIMATIONS,
  NAVIGATION_CONTENT,
} from "@shared/consts";
import { Navigation } from "@features/navigation";
import clsx from "clsx";

import s from "./header.module.scss";

const variants = {
  closed: {
    clipPath: "circle(0px at 100% 0%)",
    transition: {
      ease: easeInOut,
      duration: DURATION_SHORT,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    clipPath: `circle(${650 * 2 + 200}px at 100% 0%)`,
    transition: {
      ease: easeInOut,
      duration: DURATION_SHORT,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
};

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const location = useLocation();

  const animationState = menuIsOpen ? "open" : "closed";

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
            <Link to="/contact">
              <Button variant="primary" size="small">
                Связаться
              </Button>
            </Link>
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
          animate={animationState}
          className={clsx(s.mobileMenu, menuIsOpen && s.open)}
        >
          <Navigation variant={"mobileMenu"} isOpen={menuIsOpen} />
          <motion.div
            variants={NAVIGATION_ANIMATIONS}
            animate={animationState}
            transition={{
              duration: DURATION_SHORT,

              delay: (NAVIGATION_CONTENT.length + 1) * DURATION_SHORT,
            }}
          >
            <Link to="/contact">
              <Button
                variant="primary"
                size="big"
                className={s.mobileMenuButton}
              >
                Связаться
              </Button>
            </Link>
          </motion.div>
        </motion.aside>
      </RemoveScroll>
    </>
  );
};
