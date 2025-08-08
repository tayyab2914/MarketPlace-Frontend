import React, { useState, useEffect } from "react";
import ListingSearchForm from "./ListingSearchForm";
import { filterListing, paginateListing } from "../utils/utils";
import { Pagination } from "./Pagination";
import ListingCard from "./ListingCard";
import { Col, Row } from "antd";

const ListingContent = ({ Listings }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const filteredData = filterListing(Listings, filters);
  const paginatedData = paginateListing(
    filteredData,
    currentPage,
    itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="container -mt-40 rounded-xl bg-white p-2 sm:p-2 md:rounded-3xl xl:rounded-[60px] xl:p-10">
      <section className="listing-search-section">
        <div className="search-box">
          <ListingSearchForm setFilters={setFilters} Listings={Listings} />
        </div>
      </section>

      {/* Listings Grid */}
      <section className="listing-list-section">
        <Row gutter={[24, 24]}>
          {paginatedData?.length ? (
            paginatedData.map((listing, index) => (
              <Col xs={24} lg={12}>
                <ListingCard listing={listing} key={index} />
              </Col>
            ))
          ) : (
            <p>No listings found.</p>
          )}
        </Row>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredData.length / itemsPerPage)}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </div>
  );
};

export default ListingContent;
