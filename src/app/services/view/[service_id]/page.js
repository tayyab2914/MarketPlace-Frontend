
'use client'
import ViewServicePage from "@/features/services/view/ViewServicePage";
import React, { useEffect } from "react";
import { initializeScript } from "../../../../../public/assets/js/main";

// Example function to fetch service by ID (replace with your actual API call)

const Page = async ({ params }) => {
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
  const { service_id } = params;

  return (
    <div>
      <ViewServicePage service_id={service_id} />
    </div>
  );
};

export default Page;
