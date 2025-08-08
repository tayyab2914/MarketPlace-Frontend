import { TO_SENTENCE_CASE } from "@/utils/Methods";
import React, { useState } from "react";

const CategoryDropdown = ({ selected, setSelected, categories = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

console.log(categories,selected)

  return (
    <div
      className="lis-lis-categorys"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="lis-lis-category-text">
        {selected || <span><span className="lis-lis-hide-400">Select your</span> category</span>}
      </span>
      <i className="ph ph-caret-down"></i>

      {isOpen && (
        <div className="lis-lis-dropdown">
          {categories?.map((category) => (
            <p
              key={category}
              className="lis-lis-category-item"
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
