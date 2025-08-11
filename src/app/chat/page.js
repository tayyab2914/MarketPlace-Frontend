import Navbar from "@/components/layout/navbar/Navbar";
import ChatPage from "@/features/chat/ChatPage";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <ChatPage />
    </div>
  );
};

export default page;
