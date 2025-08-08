"use client";
import AboutUsPage from "@/features/about-us/AboutUsPage";
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
      <AboutUsPage />
    </div>
  );
};

export default page;
