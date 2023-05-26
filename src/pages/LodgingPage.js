import React from "react";
import { useParams } from "react-router-dom";
import lodgingList from "../datas/lodgingList.json";
import Header from "../components/Header";
import CollapsibleButton from "../components/CollapsibleButton";
import Slideshow from "../components/Slideshow";
import NotFound from "../pages/NotFound";
import "../styles/lodgingpage.css";

// Import the images
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
      <div className="lodginginfo">
        <div className="titlelocationtag">
          <h1>{lodging.title}</h1>
          <ul className="taglist">{tags}</ul>
          <p>{lodging.location}</p>
        </div>
        <div className="hostrating">
          <div className="host">
            <p>{lodging.host.name}</p>
            <img src={lodging.host.picture} alt="host" />
          </div>
          {renderRatingStars()}
        </div>
      </div>

      <div className="moreinfos">
        <CollapsibleButton collapsedText="Description" expandedContent={<p>{lodging.description}</p>} />
        <CollapsibleButton
          collapsedText="Equipements"
          expandedContent={lodging.equipments.map((equipment) => (
            <p key={equipment}>{equipment}</p>
          ))}
        />
      </div>
    </div>
  );
}

export default LodgingPage;
