import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import s from "./stickyCursor.module.scss";
import clsx from "clsx";

export const StickyCursor = () => {
  const [mouseHover, setMouseHover] = useState(false);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  useEffect(() => {
    let elements = [];

    const onMouseEnter = () => {
      setMouseHover(true);
    };
    const onMouseLeave = () => {
      setMouseHover(false);
    };

    elements = [
      ...document.querySelectorAll(
        "button,a,input,label,[data-cursor='pointer']"
      ),
    ];

    elements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter, false);
      element.addEventListener("mouseleave", onMouseLeave, false);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter, false);
        element.removeEventListener("mouseleave", onMouseLeave, false);
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  });

  return (
    <motion.div
      className={clsx(s.cursor, mouseHover && s.pointer)}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    ></motion.div>
  );
};
