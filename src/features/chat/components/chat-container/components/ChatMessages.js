// ChatMessages.jsx
import React from "react";
import ChatMessage from "./ChatMessage";

const ChatMessages = () => {
  return (
    <div className="chat-c-messages">
      <ChatMessage
        avatar="./assets/images/chat2.png"
        message="Hello! Have you seen my backpack anywhere in office?"
        time="15:42"
      />
      <ChatMessage
        avatar="./assets/images/chat1.png"
        message="Thank you for work, see you!"
        time="15:42"
        isOwn
        checked
      />
      <ChatMessage
        avatar="./assets/images/chat2.png"
        message="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        time="15:42"
      />
      <ChatMessage
        avatar="./assets/images/chat2.png"
        message="A page when looking at its layout."
        time="15:42"
        isOwn
        checked
      />
      <ChatMessage
        avatar="./assets/images/chat2.png"
        message="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        time="15:42"
      />
      <ChatMessage
        avatar="./assets/images/chat2.png"
        message="A page when looking at its layout."
        time="15:42"
        isOwn
        checked
      />
      <ChatMessage
        avatar="./assets/images/chat2.png"
        message="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        time="15:42"
      />
      <ChatMessage
        avatar="./assets/images/chat2.png"
        message="A page when looking at its layout."
        time="15:42"
        isOwn
        checked
      />
    </div>
  );
};

export default ChatMessages;
