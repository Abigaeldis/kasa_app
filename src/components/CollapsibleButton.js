import React, { useState } from "react";
import "../styles/collapsiblebuttons.css";

function CollapsibleButton({ expandedText, collapsedText }) {
  const [isExpanded, setIsExpanded] = useState(false);

  //   const buttonText = isExpanded ? expandedText : collapsedText;

  return (
    <button onClick={() => setIsExpanded(!isExpanded)}>
      <div>
        <h2>{collapsedText}</h2>
        {isExpanded && (
          <div>
            <p>{expandedText}</p>
          </div>
        )}
      </div>
    </button>
  );
}

export default CollapsibleButton;
