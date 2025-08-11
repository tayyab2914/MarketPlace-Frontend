// ChatHeader.jsx
import React from "react";

const ChatHeader = () => {
  return (
    <div className="chat-c-header">
      <div className="chat-c-header-left">
        <i id="chatSidebarOpen" className="ph ph-list chat-c-icon-toggle"></i>
        <img
          alt="user avatar"
          className="chat-c-avatar-lg"
          src="./assets/images/chat1.png"
        />
        <div>
          <p className="chat-c-xl-body">Piter Maio</p>
          <p className="chat-c-online-status">online</p>
        </div>
      </div>
      <div>
        <i className="ph ph-phone chat-c-icon"></i>
        <i className="ph ph-video-camera chat-c-icon"></i>
      </div>
    </div>
  );
};

export default ChatHeader;
