// ChatContainer.jsx
import React from "react";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import ChatInputArea from "./components/ChatInputArea";
import './styles/chat-container.css'

const ChatContainer = ({socket}) => {
  return (
    <div className="chat-c-container">
      <ChatHeader />
      <ChatMessages socket={socket}/>
    </div>
  );
};

export default ChatContainer;
