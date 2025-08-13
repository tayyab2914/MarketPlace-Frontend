// ChatMessage.jsx
import { IMAGES } from "@/components/ui/Image/ImageData";
import ReadMore from "@/components/ui/ReadMore/ReadMore";
import { BACKEND_DOMAIN } from "@/utils/Constants";
import React from "react";

const ChatMessage = ({ msg, userData }) => {
  const isOwn = +msg?.sender_company_id === userData?.me?.company_id;
  const avatar = isOwn
    ? userData?.me?.company_profile_image
    : userData?.other_user?.company_profile_image;

  const time = new Date(msg?.created_at).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`chat-c-message-row ${isOwn ? "chat-c-message-row-own" : ""}`}
    >
      <img
        alt="user avatar"
        className="chat-c-avatar-sm"
        src={avatar ? `${BACKEND_DOMAIN}${avatar}` : IMAGES?.user}
        onError={(e) => {
          e.target.src = "./assets/images/default-avatar.png";
        }}
      />
      <div
        className={`chat-c-message-bubble ${
          isOwn ? "chat-c-message-bubble-own" : "chat-c-message-bubble-other"
        }`}
      >
        <p className="chat-c-message-text"><ReadMore>{msg?.content}</ReadMore></p>
        <p
          className={`chat-c-message-time ${
            isOwn ? "chat-c-message-time-own" : "chat-c-message-time-other"
          }`}
        >
          {time}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
