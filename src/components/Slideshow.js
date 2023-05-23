import React, { useState } from "react";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <button onClick={goToPrevious}>Previous</button>
      <img src={images[currentIndex]} alt={`Numero ${currentIndex}`} />
      <button onClick={goToNext}>Next</button>
    </div>
  );
}

export default Slideshow;
