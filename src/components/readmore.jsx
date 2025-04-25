import React, { useState } from "react";

const ReadMoreText = ({ text, maxLength = 300,lang }) => {
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
      <p  style={{ marginBottom: 0 }}>{displayedText}</p>
      <button onClick={toggleExpanded} className="btn btn-link p-0"  style={{ marginTop: 2 } }>

        { lang === "he"  ? expanded ? "קרא פחות" : "קרא עוד"  : expanded ? "Read Less" : "Read More" }
      </button>
    </div>
  );
};

export default ReadMoreText;
