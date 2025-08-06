"use client";
import ListingsPage from "@/features/listings/list/ListingsPage";
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
      <ListingsPage />
    </div>
  );
};

export default page;
