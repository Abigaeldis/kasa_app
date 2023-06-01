import React, { useState } from "react";
import "../styles/collapsiblebutton.css";
import collapseImg from "../assets/collapse.png";
import retractImg from "../assets/retract.png";

function CollapsibleButton({ collapsedText, expandedContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="buttonholder">
      <button onClick={handleButtonClick} className={`collaspebutton ${isExpanded ? "expanded" : ""}`}>
        <h3>{collapsedText}</h3>
        <img src={isExpanded ? retractImg : collapseImg} alt={isExpanded ? "Retract" : "Collapse"} />
      </button>
      <div className={`expandedcontent ${isExpanded ? "show" : ""}`}>
        <p>{expandedContent}</p>
      </div>
    </div>
  );
}

export default CollapsibleButton;
