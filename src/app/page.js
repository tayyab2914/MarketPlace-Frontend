"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";
import HomePage from "@/features/home/Home";
import { initializeScript } from "../../public/assets/js/main";
export default function Home() {
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
    <>
      <HomePage />
    </>
  );
}
