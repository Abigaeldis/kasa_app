import React from "react";
import { useParams } from "react-router-dom";
import lodgingList from "../datas/lodgingList.json";
import Header from "../components/Header";
import CollapsibleButton from "../components/CollapsibleButton";
import Slideshow from "../components/Slideshow";
import "../styles/lodgingpage.css";

function LodgingPage() {
  const { id } = useParams();
  const lodging = lodgingList.find((lodging) => lodging.id === id.toString());
  const tags = lodging.tags.map((tag) => <p key={tag}>{tag}</p>);

  return (
    <div>
      <Header />
      <Slideshow images={lodging.pictures} />
      {/* <img src={lodging.pictures[0]} alt={lodging.title} /> */}
      <h1>{lodging.title}</h1>
      <ul className="taglist">{tags}</ul>
      <p>{lodging.location} </p>
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
