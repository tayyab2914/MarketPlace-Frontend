"use client";
import React, { useEffect } from "react";
import { initializeScript } from "../../../public/assets/js/main";
import PrivacyPolicyPage from "@/features/privacy-policy/PrivacyPolicyPage";

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
      <PrivacyPolicyPage />
    </div>
  );
};

export default page;
