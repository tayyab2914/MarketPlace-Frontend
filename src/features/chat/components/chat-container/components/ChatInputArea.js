import React, { useState } from "react";
import { Send } from "lucide-react";
import { handleSendMessage } from "@/utils/WebSockets";
import { useSelector } from "react-redux";

const ChatInputArea = ({ socket, addMessage }) => {
  const { user } = useSelector((state) => state.auth);
  const [input, setInput] = useState("");

  const onSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(), // temporary ID
      sender: user?.id,
      sender_name: user?.email, // or name if you have
      content: input,
      is_read: false,
      created_at: new Date().toISOString(),
      text: input, // if your backend expects "text" as well
    };

    // Immediately append new message in UI
    addMessage(newMessage);

    // Send the message through WebSocket
    handleSendMessage(socket, newMessage);

    setInput("");
  };

  return (
    <div className="chat-c-input-area">
      <div className="chat-c-input-wrapper">
        <div className="chat-c-input-box">
          <input
            className="chat-c-input"
            placeholder="Write a comment...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onSend();
              }
            }}
          />
        </div>
        <div className="chat-c-send-area">
          <button
            className="chat-c-send-button"
            type="button"
            onClick={onSend}
            disabled={!input.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInputArea;
