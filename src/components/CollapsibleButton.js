import React, { useState } from "react";
import "../styles/collapsiblebutton.css";
import collapseImg from "../assets/collapse.png";
import retractImg from "../assets/retract.png";

function CollapsibleButton({ collapsedText, expandedContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="buttonholder">
      <button onClick={() => setIsExpanded(!isExpanded)} className="collaspebutton">
        <h3>{collapsedText}</h3>
        <img src={isExpanded ? retractImg : collapseImg} alt={isExpanded ? "Retract" : "Collapse"} />
      </button>
      {isExpanded && (
        <div className="expandedcontent">
          <p>{expandedContent}</p>
        </div>
      )}
    </div>
  );
}

export default CollapsibleButton;
