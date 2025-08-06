import React, { useMemo, useState } from "react";
import ServiceDropdown from "./ServiceDropdown";
import LocationDropdown from "./LocationDropdown";

const SearchForm = ({ setFilters, Services }) => {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({
      keyword: service,
      location: location,
      category: "", // optional
    });
  };

  // Extract unique categories
  const categories = useMemo(() => {
    const all = Services?.map((s) => s.category);
    return [...new Set(all)];
  }, [Services]);

  // Extract unique locations (assuming `company_location` exists)
  const locations = useMemo(() => {
    const all = Services?.map((s) => s.company_location || "Unknown");
    return [...new Set(all)];
  }, [Services]);

  return (
    <form className="srv-p-form" onSubmit={handleSearch}>
      <div className="srv-p-input-group">
        <LocationDropdown
          selected={location}
          setSelected={setLocation}
          locations={locations}
        />
        <ServiceDropdown
          selected={service}
          setSelected={setService}
          services={categories}
        />
      </div>
      <button type="submit" className="srv-p-search-btn">
        <i className="ph ph-magnifying-glass srv-p-icon-only"></i>
        <span className="srv-p-btn-label">Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
