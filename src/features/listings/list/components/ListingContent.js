"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { filterListing, paginateListing } from "../utils/utils";
import ListingCard from "./ListingCard";
import { Col, Row } from "antd";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import LisSerSearchBar from "@/components/ui/LisSerSearchBar/LisSerSearchBar";
import CustomEmpty from "@/components/ui/Empty/CustomEmpty";

const ListingContent = ({ Listings }) => {
  const searchParams = useSearchParams();
  const keywordParam = searchParams.get("keyword") || "";

  const [filters, setFilters] = useState({
    keyword: keywordParam,
    company_location: "",
    category: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = filterListing(Listings, filters);
  const paginatedData = paginateListing(
    filteredData,
    currentPage,
    itemsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="container -mt-40 rounded-xl bg-white p-2 sm:p-2 md:rounded-3xl xl:rounded-[60px] xl:p-10">
      <LisSerSearchBar setFilters={setFilters} Data={Listings} />

      {/* Listings Grid */}
      <section className="lis-lis-section">
        <Row gutter={[24, 24]}>
          {paginatedData?.length ? (
            paginatedData.map((listing, index) => (
              <Col xs={24} lg={12} key={index}>
                <ListingCard listing={listing} />
              </Col>
            ))
          ) : (
            <CustomEmpty />
          )}
        </Row>
        {paginatedData?.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredData?.length / itemsPerPage)}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
    </div>
  );
};

export default ListingContent;
