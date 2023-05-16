import React from "react";
import { useParams } from "react-router-dom";
import lodgingList from "../datas/lodgingList.json";
import Header from "../components/Header";

function LodgingPage() {
  const { id } = useParams();
  const lodging = lodgingList.find((lodging) => lodging.id === id.toString());

  return (
    <div>
      <Header />
      <h1>{lodging.title}</h1>
      <img src={lodging.pictures[0]} alt={lodging.title} />
      <p>{lodging.description}</p>
      <p>{lodging.location}</p>
      {/* display more information here */}
    </div>
  );
}

export default LodgingPage;
