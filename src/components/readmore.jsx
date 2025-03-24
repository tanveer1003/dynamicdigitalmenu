import React, { useState } from "react";

const ReadMoreText = ({ text, maxLength = 100 }) => {
  const [expanded, setExpanded] = useState(false);

  // If text is short enough, simply display it.
  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const displayedText = expanded ? text : text.substring(0, maxLength) + "...";

  return (
    <div>
      <p>{displayedText}</p>
      <button onClick={toggleExpanded} className="btn btn-link p-0">
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreText;
