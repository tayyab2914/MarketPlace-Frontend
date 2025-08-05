"use client";
import React, { useEffect } from "react";
import { initializeScript } from "../../../../public/assets/js/main";
import CompanyProfilePage from "@/features/company-profile/CompanyProfilePage";
import AuthRedirect from "@/utils/AuthRedirect";

const CompanyProfileClient = ({ company_id }) => {
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
      <CompanyProfilePage company_id={company_id} />
    </AuthRedirect>
  );
};

export default CompanyProfileClient;
