import React, { useState, useEffect } from "react";
import "./Message.css"; // Make sure to create or update this CSS file

const Message = () => {
  const items = ["Main Menu", "Careers", "Cloud", "About Us", "Leadership"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Slow down the animation to 4 seconds per slide
    return () => clearInterval(interval);
  }, [items.length]);

  const previousIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slider-item above">{items[previousIndex]}</div>
        <div className="slider-item current">{items[currentIndex]}</div>
        <div className="slider-item below">{items[nextIndex]}</div>
      </div>
    </div>
  );
};

export default Message;
