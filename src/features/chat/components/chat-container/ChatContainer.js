// ChatContainer.jsx
import React from "react";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import ChatInputArea from "./components/ChatInputArea";
import './styles/chat-container.css'

const ChatContainer = () => {
  return (
    <div className="chat-c-container">
      <ChatHeader />
      <ChatMessages />
      <ChatInputArea />
    </div>
  );
};

export default ChatContainer;
