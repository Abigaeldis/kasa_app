import React from "react";
import { useParams } from "react-router-dom";
import lodgingList from "../datas/lodgingList.json";
import Header from "../components/Header";
import CollapsibleButton from "../components/CollapsibleButton";
import "../styles/lodgingpage.css";

function LodgingPage() {
  const { id } = useParams();
  const lodging = lodgingList.find((lodging) => lodging.id === id.toString());

  return (
    <div>
      <Header />
      <h1>{lodging.title}</h1>
      <img src={lodging.pictures[0]} alt={lodging.title} />
      <p>{lodging.location}</p>
      <p>{lodging.equipments}</p>
      {/* display more information here */}
      <div className="moreinfos">
        <CollapsibleButton collapsedText="Description" expandedText={lodging.description} />
        <CollapsibleButton collapsedText="Equipements" expandedText={lodging.equipements} />
      </div>
    </div>
  );
}

export default LodgingPage;
