'use client'
import ContactUsPage from "@/features/contact-us/ContactUsPage";
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
      <ContactUsPage />
    </div>
  );
};

export default page;
