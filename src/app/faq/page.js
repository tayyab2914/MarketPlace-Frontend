"use client";
import FAQPage from "@/features/faq/FAQPage";
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
      <FAQPage />
    </div>
  );
};

export default page;
