import React, { useState } from "react";

const ReadMore = ({ children, minLength = 150, jumpLength = 150 }) => {
  const text = typeof children === "string" ? children : "";
  const [visibleLength, setVisibleLength] = useState(minLength);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleLength(minLength);
      setIsExpanded(false);
    } else {
      setVisibleLength(prev => Math.min(prev + jumpLength, text.length));
      if (visibleLength + jumpLength >= text.length) {
        setIsExpanded(true);
      }
    }
  };

  const isShortText = text.length <= minLength;

  return (
    <>
      {isShortText
        ? text
        : text.slice(0, visibleLength) +
          (visibleLength < text.length && !isExpanded ? "..." : "")}

      {!isShortText && (
        <button
          onClick={handleToggle}
          style={{
            color: "lightBlue",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            marginLeft:"5px"
          }}
        >
          <u>{isExpanded ? "Show Less" : "Read More"}</u>
        </button>
      )}
    </>
  );
};

export default ReadMore;
