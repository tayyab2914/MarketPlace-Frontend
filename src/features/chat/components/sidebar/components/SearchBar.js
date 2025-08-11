import React from "react";

const SearchBar = () => {
  return (
    <div className="chat-s-s-container">
      <i className="ph ph-magnifying-glass chat-s-s-icon"></i>
      <input
        placeholder="Search"
        className="chat-s-s-input"
      />
    </div>
  );
};

export default SearchBar;
