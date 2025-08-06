'use client'
import CreateServicePage from "@/features/services/create/CreateServicePage";
import React, { useEffect } from "react";
import { initializeScript } from "../../../../public/assets/js/main";

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
      <CreateServicePage />
    </div>
  );
};

export default page;
