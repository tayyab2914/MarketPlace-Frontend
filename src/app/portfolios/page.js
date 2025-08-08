"use client";
import React from "react";
import PortfoliosPage from "@/features/portfolios/PortfoliosPage";
import AuthRedirect from "@/utils/AuthRedirect";

const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <PortfoliosPage />
    </AuthRedirect>
  );
};

export default page;
