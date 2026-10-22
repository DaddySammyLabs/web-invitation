import React from "react";
import { motion } from "framer-motion"; // npm install framer-motion

const animation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="visible"
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
