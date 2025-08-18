"use client";

import React, { useState } from "react";
import { Col, Row, Select } from "antd";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import { ROUTES } from "@/utils/Constants";
import "./styles/lis-ser-search-bar.css";

const LisSerHomeSearchBar = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("listing"); // default is listing

  const handleSearch = (e) => {
    e.preventDefault();
    const route =
      type === "service"
        ? `${ROUTES?.listServices}?keyword=${encodeURIComponent(keyword)}`
        : `${ROUTES?.listListings}?keyword=${encodeURIComponent(keyword)}`;
    router.push(route);
  };

  return (
    <section className="lis-ser-search-section-home" style={{ width: "100%" }}>
      <form className="lis-ser-srch-form" onSubmit={handleSearch}>
        <Row gutter={[10, 10]}>
          <Col xs={24} lg={12}>
            <input
              type="text"
              className="lis-ser-srch-keyword-input"
              placeholder="Search keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              style={{ flex: 1, minWidth: "200px" }}
            />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Select
              value={type}
              onChange={(value) => setType(value)}
              style={{ width: "100%",height:"40px" }}
              options={[
                { value: "listing", label: "Listing" },
                { value: "service", label: "Service" },
              ]}
            />
          </Col>
          <Col xs={24} lg={6}>
            <Button type="submit" variant="filled-animated" m="0">
              <Search strokeWidth={2} /> Search
            </Button>
          </Col>
        </Row>
      </form>
    </section>
  );
};

export default LisSerHomeSearchBar;
