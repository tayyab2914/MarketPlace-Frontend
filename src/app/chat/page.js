"use client";

import Navbar from "@/components/layout/navbar/Navbar";
import ChatPage from "@/features/chat/ChatPage";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";

const Page = () => {

  return (
    <AuthRedirect allowLoggedIn >
      <Navbar />
      <ChatPage />
    </AuthRedirect>
  );
};

export default Page;
