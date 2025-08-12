import React from "react";
import { ChatListItem } from "./ChatListItem";

const ChatList = ({ chats }) => {
  console.log("chats",chats)
  return (
    <div className="chat-s-list">
      {chats?.map((chat, index) => (
        <ChatListItem key={index} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
