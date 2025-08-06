"use client";
import React, { useEffect } from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import SinglePortfolioPage from "@/features/portfolios/view-portfolio/SinglePortfolioPage";
import { useParams } from "next/navigation";
import { initializeScript } from "../../../../../public/assets/js/main";

const CompanyProfileClient = () => {
  const params = useParams();
  const company_id = params?.company_id;

  useEffect(() => {
    const handleDomReady = () => {
      initializeScript();
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDomReady);
      return () => {
        document.removeEventListener("DOMContentLoaded", handleDomReady);
      };
    } else {
      handleDomReady();
    }
  }, []);

  return (
    <AuthRedirect allowLoggedIn>
      <SinglePortfolioPage company_id={company_id} />
    </AuthRedirect>
  );
};

export default CompanyProfileClient;
