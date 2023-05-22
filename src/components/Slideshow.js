import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slideshow({ images }) {
  return (
    <Carousel showArrows={true} showStatus={false} showIndicators={false} showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Numero ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default Slideshow;
