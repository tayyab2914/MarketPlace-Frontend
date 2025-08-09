import { TO_SENTENCE_CASE } from "@/utils/Methods";
import React, { useState } from "react";

const CategoryDropdown = ({ selected, setSelected, categories = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

console.log(categories,selected)

  return (
    <div
      className="lis-ser-srch-categorys"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="lis-ser-srch-category-text">
        {selected || <span><span className="lis-ser-srch-hide-400">Select your</span> category</span>}
      </span>
      <i className="ph ph-caret-down"></i>

      {isOpen && (
        <div className="lis-ser-srch-dropdown">
          {categories?.map((category) => (
            <p
              key={category}
              className="lis-ser-srch-category-item"
              onClick={(e) => {
                e.stopPropagation()
                setSelected(category);
                setIsOpen(false);
              }}
            >
              {TO_SENTENCE_CASE(category)}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
