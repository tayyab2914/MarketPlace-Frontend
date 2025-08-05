'use client'
import React, { useEffect } from "react";
import { initializeScript } from "../../../public/assets/js/main";
import TermsAndConditionsPage from "@/features/terms-and-conditions/TermsAndConditionsPage";

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
      <TermsAndConditionsPage />
    </div>
  );
};

export default page;
