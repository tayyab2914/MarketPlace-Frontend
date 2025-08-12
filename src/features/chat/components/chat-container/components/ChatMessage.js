// ChatMessage.jsx
import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = ({ msg }) => {
  const { company_info } = useSelector((state) => state.company);
  const avatar =
    msg?.sender === company_info?.id
      ? "./assets/images/chat1.png"
      : "./assets/images/chat2.png";

  const time = new Date(msg?.created_at).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const isOwn = msg?.sender === company_info?.id;
  const checked = msg?.is_read;

  console.log(
    "msg?.sender",
    msg?.sender,
    "company_info?.id",
    company_info?.id,
    isOwn
  );
  return (
    <div
      className={`chat-c-message-row ${isOwn ? "chat-c-message-row-own" : ""}`}
    >
      <img alt="user avatar" className="chat-c-avatar-sm" src={avatar} />
      <div
        className={`chat-c-message-bubble ${
          isOwn ? "chat-c-message-bubble-own" : "chat-c-message-bubble-other"
        }`}
      >
        <p className="chat-c-message-text">{msg?.content}</p>
        <p
          className={`chat-c-message-time ${
            isOwn ? "chat-c-message-time-own" : "chat-c-message-time-other"
          }`}
        >
          {checked && (
            <i className="ri-check-double-line chat-c-icon-checked"></i>
          )}
          {time}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
