"use client";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import SinglePortfolioPage from "@/features/portfolios/view-portfolio/SinglePortfolioPage";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/navbar/Navbar";

const CompanyProfileClient = () => {
  const params = useParams();
  const company_id = params?.company_id;

  return (
    <>
      {" "}
      <Navbar />
      <SinglePortfolioPage company_id={company_id} />
    </>
  );
};

export default CompanyProfileClient;
