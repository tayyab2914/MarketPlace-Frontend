"use client";
import CreateListingPage from "@/features/listings/create/CreateListingPage";
import React, { useEffect } from "react";
import { initializeScript } from "../../../../public/assets/js/main";
import BackgroundBubbles from "@/components/ui/BackgroundBubbles/BackgroundBubbles";

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
    <CreateListingPage />
  );
};

export default page;
