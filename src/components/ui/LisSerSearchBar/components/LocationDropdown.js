import React, { useState } from "react";

const LocationDropdown = ({ selected, setSelected, company_locations = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = company_locations?.filter((loc) =>
    loc?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  return (
    <div className="lis-ser-srch-location">
      {/* Dropdown trigger */}
      <div
        className="lis-ser-srch-clickable"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <i className="ph ph-map-pin"></i>
        <span className="lis-ser-srch-location-text">
          {selected || (
            <span>
              <span className="lis-ser-srch-hide-400">Select</span> Location
            </span>
          )}
        </span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="lis-ser-srch-dropdown"
          onClick={(e) => e.stopPropagation()} // prevent closing when typing
        >
          <input
            type="text"
            className="lis-ser-srch-location-search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {filteredLocations?.map((loc) => (
            <p
              key={loc}
              className="lis-ser-srch-location-item"
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
