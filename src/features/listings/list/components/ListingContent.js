import React, { useState, useEffect } from "react";
import ListingSearchForm from "./ListingSearchForm";
import { filterServices, paginateServices } from "../utils/utils";
import { Pagination } from "./Pagination";
import ListingCard from "./ListingCard";

const ListingContent = ({ Listings }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredData = filterServices(Listings, filters);
  const paginatedData = paginateServices(
    filteredData,
    currentPage,
    itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div>
      {/* Search Form */}
      <section className="lis-p-section">
        <div className="lis-p-container-search">
          <div className="lis-p-box">
            <ListingSearchForm setFilters={setFilters} Listings={Listings} />
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="sbp-30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {paginatedData.length ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedData.map((listing, index) => (
                  <ListingCard listing={listing} key={index} />
                ))}
              </div>

              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(filteredData.length / itemsPerPage)}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500">No listings found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ListingContent;
