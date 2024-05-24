import React, { useEffect } from "react";
import { useState } from "react";
import { appear } from "../variants";
import { useTheme } from '../context/theme';
import { motion } from "framer-motion";
import "./welcome.css";

function Welcome() {
  const letters = ["P", "o", "r", "t", "f", "o", "l", "i", "o"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const { theme } = useTheme();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="welcome-section">
      <div className="name-job">
        <motion.h1 
          variants={appear(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }} 
          className={theme === "dark" ? "name" : "name-light"}
        >
          Maxime Maufront
        </motion.h1>
        <motion.h2 
          variants={appear(0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }} 
          className={theme === "dark" ? "job" : "job-light"}
        >
          Web developer
        </motion.h2>
      </div>
      {letters.map((letter, index) => (
        <h1
          className={`welcome-title ${currentIndex > index ? "visible" : ""} ${theme === "dark" ? "welcome-title" : "welcome-title-light"}`}
          key={index}
        >
          {letter}
        </h1>
      ))}
    </div>
  );
}

export default Welcome;
