import React, { useState } from "react";
import "../styles/collapsiblebutton.css";

function CollapsibleButton({ collapsedText, expandedContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{collapsedText}</h3>
        <p>^</p>
      </button>
      {isExpanded && <div>{expandedContent}</div>}
    </div>
  );
}

export default CollapsibleButton;
