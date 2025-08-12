import React from "react";

const Header = () => {
  return (
    <div className="chat-s-h-header">
      <div className="chat-s-h-left">
        <h5 className="chat-s-h-title">Chat</h5>
      </div>
      <div className="chat-s-h-right">
        <i className="ph-fill ph-dots-three-outline chat-s-h-dots"></i>
        <i id="chatSidebarClose" className="ph ph-x-circle chat-s-h-close"></i>
      </div>
    </div>
  );
};

export default Header;
