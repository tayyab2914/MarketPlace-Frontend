import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ChatList from "./components/ChatList";
import "./styles/sidebar.css";
import { API_GET_CHAT_CONVERSATIONS } from "@/apis/ChatApis";
import { useSelector } from "react-redux";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const [chats, setChats] = useState([]);
  const { token } = useSelector((state) => state.auth);

  const getChatConversations = async () => {
    const res = await API_GET_CHAT_CONVERSATIONS(token);
    setChats(res);
  };

  useEffect(() => {
    getChatConversations();
  }, []);

  const filteredChats = chats?.filter(
    (chat) =>
      !search ||
      (chat?.user_company_name ?? "")
        ?.toLowerCase()
        ?.includes(search.toLowerCase())
  );

  return (
    <div className="chat-s-sidebar chat-s-sidebar-close">
      <Header />
      <SearchBar value={search} onChange={setSearch} />
      <ChatList chats={filteredChats} />
    </div>
  );
};

export default SideBar;
