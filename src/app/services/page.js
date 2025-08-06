"use client";
import ServicesPage from "@/features/services/list/ServicesPage";
import React, { useEffect } from "react";
import { initializeScript } from "../../../public/assets/js/main";
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
      <ServicesPage />
    </div>
  );
};

export default page;
