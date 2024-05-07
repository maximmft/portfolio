import React, { useState, useEffect } from "react";
import "./welcome.css";

function Welcome() {
  const letters = ["W", "e", "l", "c", "o", "m", "e","."];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="welcome-section">
      <div className="name-job">
        <h1 className="name">Maxime Maufront</h1>
        <h2 className="job">Web developer</h2>
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
