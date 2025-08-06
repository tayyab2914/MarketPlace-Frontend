"use client";
import CreateOfferPage from "@/features/offers/CreateOfferPage";
import React, { useEffect } from "react";
import { initializeScript } from "../../../../public/assets/js/main";
import BackgroundBubbles from "@/components/ui/BackgroundBubbles/BackgroundBubbles";

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
      <BackgroundBubbles>
        <CreateOfferPage />
      </BackgroundBubbles>
    </div>
  );
};

export default Page;
