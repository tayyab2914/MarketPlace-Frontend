'use client'
import CreateOfferPage from "@/features/offers/CreateOfferPage";
import React, { useEffect } from "react";
import { initializeScript } from "../../../../public/assets/js/main";

const Page = () => {
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
      <CreateOfferPage />
    </div>
  );
};

export default Page;
