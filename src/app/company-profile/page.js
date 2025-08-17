"use client";
import React from "react";
import CompanyProfilePage from "@/features/company-profile/CompanyProfilePage";

const CompanyProfileClient = ({ company_id }) => {

  return (
    <>
      <CompanyProfilePage company_id={company_id} />
    </>
  );
};

export default CompanyProfileClient;
