import { Search } from "lucide-react";
import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="chat-s-s-container">
      <Search size={20}/>
      <input
        placeholder="Search"
        className="chat-s-s-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
