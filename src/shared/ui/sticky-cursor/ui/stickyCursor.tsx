import s from "./stickyCursor.module.scss";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

export const StickyCursor = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const smoothOptions = { damping: 15, stiffness: 300, mass: 0.25 };

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX);
      mouse.y.set(clientY);
      setHasMoved(true);
    },
    [mouse.x, mouse.y]
  );

  useEffect(() => {
    let elements = [];

    const onMouseEnter = () => {
      setMouseHover(true);
    };
    const onMouseLeave = () => {
      setMouseHover(false);
    };

    elements = [
      ...window.document.querySelectorAll(
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
  });

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, [hasMoved, manageMouseMove]);

  return (
    <div className={clsx(s.container, hasMoved && s.show)}>
      <motion.div
        className={clsx(s.cursor, mouseHover && s.pointer)}
        style={{ left: smoothMouse.x, top: smoothMouse.y }}
      ></motion.div>
    </div>
  );
};
