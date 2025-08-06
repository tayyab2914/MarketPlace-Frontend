import React, { useMemo, useState } from "react";
import ServiceDropdown from "./ServiceDropdown";
import LocationDropdown from "./LocationDropdown";

const ListingSearchForm = ({ setFilters, Listings }) => {
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
    const all = Listings.map((s) => s.category);
    return [...new Set(all)];
  }, [Listings]);

  // Extract unique locations
  const locations = useMemo(() => {
    const all = Listings.map((s) => s.company_location || "Unknown");
    return [...new Set(all)];
  }, [Listings]);

  return (
    <form className="lis-p-form" onSubmit={handleSearch}>
      <div className="lis-p-input-group">
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
      <button type="submit" className="lis-p-search-btn">
        <i className="ph ph-magnifying-glass srv-p-icon-only"></i>
        <span className="lis-p-btn-label">Search</span>
      </button>
    </form>
  );
};

export default ListingSearchForm;
