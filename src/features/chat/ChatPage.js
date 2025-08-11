import React from "react";
import SideBar from "./components/sidebar/SideBar";
import ChatContainer from "./components/chat-container/ChatContainer";
import "./styles/chat-page.css";
import { Col, Row } from "antd";

const ChatPage = () => {
  return (
    <section className="chat-p-section">
      <Row>
        <Col lg={7} xl={6} xxl={5} className="chat-p-sidebar">
          <SideBar />
        </Col>
        <Col xs={24} lg={17} xl={18} xxl={19} className="chat-p-chat-container">
          <ChatContainer />
        </Col>
      </Row>
    </section>
  );
};

export default ChatPage;
