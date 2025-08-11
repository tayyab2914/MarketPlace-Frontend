// ChatInputArea.jsx
import React from "react";
import { Send } from "lucide-react";

const ChatInputArea = () => {
  return (
    <div className="chat-c-input-area">
      <div className="chat-c-input-wrapper">
        <div className="chat-c-input-box">
          <input className="chat-c-input" placeholder="Write a comment...." />
        </div>
        <div className="chat-c-send-area">
          <button className="chat-c-send-button" type="button">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInputArea;
