import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/theme";

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");
  const {theme} = useTheme();

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexDirection:"row", flexWrap:"wrap",
       }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={theme === "dark" ? "presentation-paragraph" : "presentation-paragraph-light"}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "10px", marginBottom:"5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
export default AnimatedTextWord;
