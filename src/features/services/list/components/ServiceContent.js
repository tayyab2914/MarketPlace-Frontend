import React, { useState, useEffect } from "react";
import { Row, Col, Empty } from "antd";
import ServiceCard from "./ServiceCard";
import { filterServices, paginateServices } from "../utils/utils";
import LisSerSearchBar from "@/components/ui/LisSerSearchBar/LisSerSearchBar";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import CustomEmpty from "@/components/ui/Empty/CustomEmpty";

const ServiceContent = ({ Services }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    company_location: "",
    category: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
    <div className="container -mt-40 rounded-xl bg-white p-2 sm:p-2 md:rounded-3xl xl:rounded-[60px] xl:p-10">
      <LisSerSearchBar setFilters={setFilters} Data={Services} />

      <section className="srv-lis-section">
        <Row gutter={[24, 24]}>
          {paginatedData?.length ? (
            paginatedData?.map((service, key) => (
              <Col xs={24} lg={12} key={key}>
                <ServiceCard service={service} key={service?.id} />
              </Col>
            ))
          ) : (
            <CustomEmpty/>
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

export default ServiceContent;
