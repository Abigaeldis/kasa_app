import React from "react";
import { useParams } from "react-router-dom";
import lodgingList from "../datas/lodgingList.json";
import Header from "../components/Header";
import CollapsibleButton from "../components/CollapsibleButton";
import Slideshow from "../components/Slideshow";
import NotFound from "../pages/NotFound";
import "../styles/lodgingpage.css";

import emptyStarsImage from "../assets/emptystars.png";
import starsImage from "../assets/stars.png";

function LodgingPage() {
  const { id } = useParams();
  const lodging = lodgingList.find((lodging) => lodging.id === id.toString());

  if (!lodging) {
    return <NotFound />;
  }

  const tags = lodging.tags.map((tag) => <p key={tag}>{tag}</p>);

  const renderRatingStars = () => {
    const fullStars = Math.floor(lodging.rating);
    const emptyStars = 5 - fullStars;

    return (
      <div className="rating">
        {[...Array(fullStars)].map((_, index) => (
          <img key={`full-star-${index}`} src={starsImage} alt="full-star" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <img key={`empty-star-${index}`} src={emptyStarsImage} alt="empty-star" />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Slideshow images={lodging.pictures} />
      <div className="quickinfos">
        <div className="title-locations">
          <h1>{lodging.title}</h1>
          <p>{lodging.location}</p>
          <ul className="taglist">{tags}</ul>
        </div>
        <div className="hostinfos">
          <div className="host">
            <p>{lodging.host.name}</p>
            <img src={lodging.host.picture} alt="host" />
          </div>
          {renderRatingStars()}
        </div>
      </div>

      <div className="moreinfos">
        <CollapsibleButton collapsedText="Description" expandedContent={lodging.description} />
        <CollapsibleButton
          collapsedText="Equipements"
          expandedContent={lodging.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default LodgingPage;
