import React, { useState, useMemo } from "react";
import LocationDropdown from "./components/LocationDropdown";
import CategoryDropdown from "./components/CategoryDropdown";
import { Search, X } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import "./styles/lis-ser-search-bar.css";
import { Col, Row } from "antd";
const LisSerSearchBar = ({ setFilters, Data }) => {
  const [keyword, setKeyword] = useState("");
  const [company_location, setCompanyLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({
      keyword,
      company_location,
      category,
    });
  };

  const handleClear = () => {
    setKeyword("");
    setCompanyLocation("");
    setCategory("");
    setFilters({
      keyword: "",
      company_location: "",
      category: "",
    });
  };

  const categories = useMemo(() => {
    const all = Data?.map((s) => s.category);
    return [...new Set(all)];
  }, [Data]);

  const company_locations = useMemo(() => {
    const all = Data?.map((s) => s.company_location || null);
    return [...new Set(all)];
  }, [Data]);

  const filtersApplied = company_location || category || keyword;

  return (
    <section className="lis-ser-search-section">
      <div className="lis-ser-search-box">
        <form className="lis-ser-srch-form" onSubmit={handleSearch}>
          <Row gutter={[10, 10]}>
            <Col xs={24} lg={6}>
              <input
                type="text"
                className="lis-ser-srch-keyword-input"
                placeholder="Search keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <LocationDropdown
                selected={company_location}
                setSelected={setCompanyLocation}
                company_locations={company_locations}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <CategoryDropdown
                selected={category}
                setSelected={setCategory}
                categories={categories}
              />
            </Col>

            <Col xs={24} lg={6}>
              <div className="lis-ser-srch-button-group">
                {filtersApplied && (
                  <button
                    type="button"
                    className="lis-ser-srch-clear-btn"
                    onClick={handleClear}
                  >
                    <X />
                  </button>
                )}
                <Button type="submit" variant="filled-animated" m="0">
                  <Search strokeWidth={2} /> Search
                </Button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </section>
  );
};

export default LisSerSearchBar;
