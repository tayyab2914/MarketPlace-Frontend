import React, { useState } from "react";

const LocationDropdown = ({ selected, setSelected, locations = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lis-p-location" onClick={() => setIsOpen((prev) => !prev)}>
      <div className="lis-p-clickable">
        <i className="ph ph-map-pin"></i>
        <span className="lis-p-location-text">
          {selected || <span><span className="lis-p-hide-400">Select</span> Location</span>}
        </span>
      </div>

      {isOpen && (
        <div className="lis-p-dropdown" onClick={(e) => e.stopPropagation()}>
          <input
            type="text"
            className="lis-p-location-search"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredLocations.map((loc) => (
            <p
              key={loc}
              className="lis-p-location-item"
              onClick={() => {
                setSelected(loc);
                setIsOpen(false);
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
