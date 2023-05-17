import React, { useState } from "react";

function CollapsibleButton({ expandedText, collapsedText }) {
  const [isExpanded, setIsExpanded] = useState(false);

  //   const buttonText = isExpanded ? expandedText : collapsedText;

  return (
    <button onClick={() => setIsExpanded(!isExpanded)}>
      <div>
        <h2>{collapsedText}</h2>
        {isExpanded && (
          <div>
            <h3>{expandedText}</h3>
          </div>
        )}
      </div>
    </button>
  );
}

export default CollapsibleButton;
