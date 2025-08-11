import React from "react";
import ChatListItem from "./ChatListItem";

const chatData = [
  {
    name: "Piter Maio",
    avatar: "./assets/images/chat2.png",
    message: "I am a ga..",
    unread: 3,
    time: "15min",
    timeColor: "text-t88",
    messageColor: "",
  },
  {
    name: "Leslie Alexander",
    avatar: "./assets/images/chat3.png",
    message: "Why...",
    time: "12min",
    timeColor: "text-t88",
    messageColor: "text-slate-400",
  },
  {
    name: "Sa Kib",
    avatar: "./assets/images/chat4.png",
    message: "Hello...",
    time: "25min",
    timeColor: "text-t88",
    messageColor: "text-slate-400",
  },
  {
    name: "Brooklyn Simmons",
    avatar: "./assets/images/chat5.png",
    message: "Duis tincid",
    unread: 3,
    time: "18min",
    timeColor: "text-t88",
    messageColor: "",
  },
  {
    name: "Leslie Alexander",
    avatar: "./assets/images/chat6.png",
    message: "I am...",
    time: "20mins",
    timeColor: "text-t88",
    messageColor: "text-slate-400",
  },
  {
    name: "Piter Maio",
    avatar: "./assets/images/chat1.png",
    message: "How are...",
    time: "19mins",
    timeColor: "text-t88",
    messageColor: "text-slate-400",
  },
  {
    name: "Cody Fisher",
    avatar: "./assets/images/chat2.png",
    message: "Video",
    time: "13mins",
    timeColor: "text-t88",
    messageColor: "text-slate-400",
  },
  {
    name: "Bessie Cooper",
    avatar: "./assets/images/chat3.png",
    message: "Photo",
    time: "23mins",
    timeColor: "text-t88",
    messageColor: "text-slate-400",
  },
  {
    name: "Brooklyn Simmons",
    avatar: "./assets/images/chat4.png",
    message: "How...",
    time: "14mins",
    timeColor: "text-t88",
    messageColor: "text-slate-400",
  },
  {
    name: "Theresa Webb",
    avatar: "./assets/images/chat5.png",
    message: "Friend...",
    time: "45mins",
    timeColor: "text-t88",
    messageColor: "text-slate-400",
  },
  {
    name: "Piter Maio",
    avatar: "./assets/images/chat6.png",
    message: "Hello",
    unread: 3,
    time: "14mins",
    timeColor: "text-t88",
    messageColor: "",
  },
  {
    name: "Leslie Alexander",
    avatar: "./assets/images/chat2.png",
    message: "I'm...",
    time: "1hour",
    timeColor: "text-t88",
    messageColor: "text-slate-400",
  },
];

const ChatList = () => {
  return (
    <div className="chat-s-list">
      {chatData.map((chat, index) => (
        <ChatListItem key={index} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
