import React, { useState, useEffect } from "react";
import { appear, fadeIn, fadeInImage } from "../variants";
import {motion} from "framer-motion"
import "./welcome.css";

function Welcome() {
  const letters = ["P", "o", "r", "t", "f", "o", "l", "i", "o"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="welcome-section">
      <div className="name-job">
        <motion.h1 variants={appear(0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="name">Maxime Maufront</motion.h1>
        <motion.h2 variants={appear(0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="job">Web developer</motion.h2>
      </div>
      {letters.map((letter, index) => (
        <h1
          className={`welcome-title ${currentIndex > index ? "visible" : ""}`}
          key={index}
        >
          {letter}
        </h1>
      ))}
    </div>
  );
}

export default Welcome;
