import React, { useState } from "react";
import "../styles/slideshow.css";
import previousarrow from "../assets/previousarrow.png";
import nextarrow from "../assets/nextarrow.png";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const showArrows = images.length > 1; // Check if there is more than one image

  return (
    <div className="slideshow-container">
      {showArrows && (
        <button className="previous-button" onClick={goToPrevious}>
          <img src={previousarrow} alt="previous arrow"></img>
        </button>
      )}
      <img className="slideshow-image" src={images[currentIndex]} alt={``} />
      {showArrows && (
        <button className="next-button" onClick={goToNext}>
          <img src={nextarrow} alt="next arrow"></img>
        </button>
      )}
    </div>
  );
}

export default Slideshow;
