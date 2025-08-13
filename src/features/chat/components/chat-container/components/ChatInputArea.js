import React, { useState } from "react";
import { Send } from "lucide-react";
import { handleSendMessage } from "@/utils/WebSockets";

const ChatInputArea = ({ socket, addMessage, userData }) => {
  const [input, setInput] = useState("");

  const onSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      sender_company_id: userData?.me?.company_id,
      sender_company_profile_image: userData?.me?.company_profile_image,
      content: input,
      created_at: new Date().toISOString(),
    };

    addMessage(newMessage);
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
