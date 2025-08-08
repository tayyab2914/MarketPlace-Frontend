"use client";
import React from "react";
import CompanyProfilePage from "@/features/company-profile/CompanyProfilePage";
import AuthRedirect from "@/utils/AuthRedirect";

const CompanyProfileClient = ({ company_id }) => {

  return (
    <AuthRedirect allowLoggedIn>
      <CompanyProfilePage company_id={company_id} />
    </AuthRedirect>
  );
};

export default CompanyProfileClient;
