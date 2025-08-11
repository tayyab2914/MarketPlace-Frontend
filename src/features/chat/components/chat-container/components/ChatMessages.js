import React, { useEffect, useState, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useSearchParams } from "next/navigation";
import { API_GET_MESSAGES } from "@/apis/ChatApis";
import { useSelector } from "react-redux";
import ChatInputArea from "./ChatInputArea";

const ChatMessages = ({ socket }) => {
  const { token } = useSelector((state) => state.auth);
  const searchParams = useSearchParams();
  const chat_id = searchParams.get("chat_id") || "";

  const [messages, setMessages] = useState([]);

  // Ref for messages container
  const messagesEndRef = useRef(null);

  const getPreviousConvo = async () => {
    const res = await API_GET_MESSAGES(token, chat_id);
    setMessages(res);
    console.log(res)
  };

  useEffect(() => {
    if (!chat_id || !token) return;

    getPreviousConvo();
  }, [chat_id, token]);

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };

    socket.addEventListener("message", handleMessage);

    return () => {
      socket.removeEventListener("message", handleMessage);
    };
  }, [socket]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Function to add new message instantly
  const addMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <>
      <div className="chat-c-messages">
        {messages?.map((msg) => (
          <ChatMessage key={msg?.id} msg={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInputArea socket={socket} addMessage={addMessage} />
    </>
  );
};

export default ChatMessages;
