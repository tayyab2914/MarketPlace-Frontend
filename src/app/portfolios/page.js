"use client";
import React, { useEffect } from "react";
import { initializeScript } from "../../../public/assets/js/main";
import PortfoliosPage from "@/features/portfolios/PortfoliosPage";

const page = () => {
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
    <div>
      <PortfoliosPage />
    </div>
  );
};

export default page;
