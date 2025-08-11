import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ChatList from "./components/ChatList";
import './styles/sidebar.css'

const SideBar = () => {
  return (
    <div className="chat-s-sidebar chat-s-sidebar-close">
      <Header />
      <SearchBar />
      <ChatList />
    </div>
  );
};

export default SideBar;