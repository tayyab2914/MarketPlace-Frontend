import React, { useState, useMemo } from "react";
import LocationDropdown from "./LocationDropdown";
import CategoryDropdown from "./CategoryDropdown";
import { Search, X } from "lucide-react";
import Button from "@/components/ui/Button/Button";

const ListingSearchForm = ({ setFilters, Listings }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({
      keyword,
      location,
      category,
    });
  };

  const handleClear = () => {
    setKeyword("");
    setLocation("");
    setCategory("");
    setFilters({
      keyword: "",
      location: "",
      category: "",
    });
  };

  const categories = useMemo(() => {
    const all = Listings?.map((s) => s.category);
    return [...new Set(all)];
  }, [Listings]);

  const locations = useMemo(() => {
    const all = Listings?.map((s) => s.company_location || null);
    return [...new Set(all)];
  }, [Listings]);

  const filtersApplied = location || category || keyword;
  return (
    <form className="srv-p-form" onSubmit={handleSearch}>
      <div className="srv-p-input-group">
        <input
          type="text"
          className="srv-p-keyword-input"
          placeholder="Search keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        {locations && (
          <LocationDropdown
            selected={location}
            setSelected={setLocation}
            locations={locations}
          />
        )}

        <CategoryDropdown
          selected={category}
          setSelected={setCategory}
          categories={categories}
        />
      </div>

      <div className="srv-p-button-group">
        {filtersApplied && (
          <button
            type="button"
            className="srv-p-clear-btn"
            onClick={handleClear}
          >
            <X />
          </button>
        )}
        <Button type="submit" variant="filled-animated" m="0">
          <Search strokeWidth={2} /> Search
        </Button>
      </div>
    </form>
  );
};

export default ListingSearchForm;
