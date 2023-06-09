import React, { useState } from "react";
import Card from "./Card";
import lodgingList from "../datas/lodgingList.json";
import "../styles/gallery.css";

function Gallery() {
  const initialVisibleCount = 15; // Initial number of visible cards
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const handleShowMore = () => {
    setIsExpanded(true);
    setVisibleCount(lodgingList.length); // Show all cards
  };
  const handleHideContent = () => {
    setIsExpanded(false);
    setVisibleCount(initialVisibleCount); // Show initial number of cards
  };

  const visibleLodgingList = lodgingList.slice(0, visibleCount);

  return (
    <div>
      <div className="gallery">
        {visibleLodgingList.map((lodging) => (
          <Card key={lodging.id} title={lodging.title} image={lodging.pictures[0]} link={`/logement/${lodging.id}`} />
        ))}
      </div>
      <div className="seemorebutton">
        {!isExpanded && visibleCount < lodgingList.length && <button onClick={handleShowMore}>Voir plus</button>}
        {isExpanded && <button onClick={handleHideContent}>Voir moins</button>}
      </div>
    </div>
  );
}

export default Gallery;
