import React, { useEffect, useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import ChatContainer from "./components/chat-container/ChatContainer";
import "./styles/chat-page.css";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { INITIALIZE_WEBSOCKET } from "@/utils/WebSockets";
import { useSearchParams } from "next/navigation";

const ChatPage = () => {
  const { token } = useSelector((state) => state.auth);
  const [socket, setSocket] = useState(null);
  const searchParams = useSearchParams();
  const chat_id = searchParams.get("chat_id") || "";

  useEffect(() => {
    if (!chat_id) return;

    const chatSocket = INITIALIZE_WEBSOCKET(
      token,
      { type: "inbox", chat_id: chat_id },
      (socket) => setSocket(socket),
      () => setSocket(null)
    );

    return () => {
      if (chatSocket) {
        chatSocket.close();
      }
    };
  }, [chat_id, token]);

  return (
    <section className="chat-p-section">
      <Row>
        <Col lg={7} xl={6} xxl={5} className="chat-p-sidebar">
          <SideBar />
        </Col>
        <Col xs={24} lg={17} xl={18} xxl={19} className="chat-p-chat-container">
          <ChatContainer socket={socket} />
        </Col>
      </Row>
    </section>
  );
};

export default ChatPage;
