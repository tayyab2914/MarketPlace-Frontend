// ChatContainer.jsx
import React, { useEffect, useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import "./styles/chat-container.css";
import { useSearchParams } from "next/navigation";
import { API_GET_MESSAGES } from "@/apis/ChatApis";
import { useSelector } from "react-redux";
import { IMAGES } from "@/components/ui/Image/ImageData";

const ChatContainer = ({ socket }) => {
  const searchParams = useSearchParams();
  const { token } = useSelector((state) => state.auth);
  const chat_id = searchParams.get("chat_id") || "";
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState({});

  const getPreviousConvo = async () => {
    const res = await API_GET_MESSAGES(token, chat_id);
    setMessages(res?.messages);
    setUserData(res?.users_data);
  };

  useEffect(() => {
    if (!chat_id || !token) return;
    getPreviousConvo();
  }, [chat_id, token]);

  if (!chat_id) {
    return (
      <div className="chat-c-empty-state">
       <img src={IMAGES?.inbox} />
        <p style={{ marginTop: "12px", fontSize: "16px", color: "#777" }}>
          Select a chat to start messaging
        </p>
      </div>
    );
  }

  return (
    <div className="chat-c-container">
      <ChatHeader userData={userData} />
      <ChatMessages
        socket={socket}
        messages={messages}
        setMessages={setMessages}
        userData={userData}
      />
    </div>
  );
};

export default ChatContainer;
