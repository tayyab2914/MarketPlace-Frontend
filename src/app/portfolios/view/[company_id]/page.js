"use client";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import SinglePortfolioPage from "@/features/portfolios/view-portfolio/SinglePortfolioPage";
import { useParams } from "next/navigation";

const CompanyProfileClient = () => {
  const params = useParams();
  const company_id = params?.company_id;


  return (
    <AuthRedirect allowLoggedIn>
      <SinglePortfolioPage company_id={company_id} />
    </AuthRedirect>
  );
};

export default CompanyProfileClient;
