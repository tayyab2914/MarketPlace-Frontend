import React, { useEffect, useState, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInputArea from "./ChatInputArea";

const ChatMessages = ({ socket, messages ,setMessages,userData }) => {
  console.log('ChatMessages',messages)
  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const addMessage = (msg) => {
    console.log('addMessage',msg,messages)
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <>
      <div className="chat-c-messages">
        {messages?.map((msg) => (
          <ChatMessage key={msg?.id} msg={msg} userData={userData} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInputArea socket={socket} addMessage={addMessage} userData={userData} />
    </>
  );
};

export default ChatMessages;
