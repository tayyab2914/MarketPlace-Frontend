import React, { useState } from "react";

const LocationDropdown = ({ selected, setSelected, locations = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = locations?.filter((loc) =>
    loc?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  return (
    <div className="srv-p-location">
      {/* Dropdown trigger */}
      <div
        className="srv-p-clickable"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <i className="ph ph-map-pin"></i>
        <span className="srv-p-location-text">
          {selected || (
            <span>
              <span className="srv-p-hide-400">Select</span> Location
            </span>
          )}
        </span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="srv-p-dropdown"
          onClick={(e) => e.stopPropagation()} // prevent closing when typing
        >
          <input
            type="text"
            className="srv-p-location-search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {filteredLocations.map((loc) => (
            <p
              key={loc}
              className="srv-p-location-item"
              onClick={() => {
                setSelected(loc); // set selected value
                setIsOpen(false); // close dropdown
                setSearchTerm(""); // reset search
              }}
            >
              {loc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
