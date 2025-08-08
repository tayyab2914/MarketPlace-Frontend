"use client";
import ServicesPage from "@/features/services/list/ServicesPage";
import React, { useEffect } from "react";
import { initializeScript } from "../../../public/assets/js/main";
import AuthRedirect from "@/utils/AuthRedirect";
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
      <AuthRedirect allowLoggedIn>
        <ServicesPage />
      </AuthRedirect>
    </div>
  );
};

export default page;
