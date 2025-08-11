"use client";

import Navbar from "@/components/layout/navbar/Navbar";
import ChatPage from "@/features/chat/ChatPage";
import React from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {

  return (
    <div>
      <Navbar />
      <ChatPage />
    </div>
  );
};

export default Page;
