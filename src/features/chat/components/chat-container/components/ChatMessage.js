// ChatMessage.jsx
import React from "react";

const ChatMessage = ({ avatar, message, time, isOwn = false, checked = false }) => {
  return (
    <div className={`chat-c-message-row ${isOwn ? "chat-c-message-row-own" : ""}`}>
      <img alt="user avatar" className="chat-c-avatar-sm" src={avatar} />
      <div className={`chat-c-message-bubble ${isOwn ? "chat-c-message-bubble-own" : "chat-c-message-bubble-other"}`}>
        <p className="chat-c-message-text">{message}</p>
        <p className={`chat-c-message-time ${isOwn ? "chat-c-message-time-own" : "chat-c-message-time-other"}`}>
          {checked && <i className="ri-check-double-line chat-c-icon-checked"></i>}
          {time}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
