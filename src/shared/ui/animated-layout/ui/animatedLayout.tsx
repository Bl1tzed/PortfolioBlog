import { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export const AnimatedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.3, type: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
