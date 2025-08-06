import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import ServiceCard from "./ServiceCard";
import ServiceSearchComponent from "./ServiceSearchComponent";

import {
  filterServices,
  paginateServices,
} from "../utils/utils"; 
import { Pagination } from "./Pagination";

const ServiceContent = ({Services}) => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const filteredData = filterServices(Services, filters);

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
      <section className="srv-p-section">
        <div className="srv-p-container-search">
          <div className="srv-p-box">
            <SearchForm setFilters={setFilters} Services={Services}/>
          </div>
        </div>
      </section>

      <section className="sbp-30">
        <div className="container grid grid-cols-12 gap-6">
          <ServiceSearchComponent setFilters={setFilters} />
          <div className="col-span-12 rounded-xl border border-n30 p-4 sm:p-8 lg:col-span-8">
            <div className="flex flex-col gap-4">
              {paginatedData.length ? (
                paginatedData.map((service) => (
                  <ServiceCard
                  service={service}
                    key={service.id}
                  />
                ))
              ) : (
                <p>No services found.</p>
              )}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredData.length / itemsPerPage)}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceContent;
