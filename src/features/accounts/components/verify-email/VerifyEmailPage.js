
import React from "react";
import "../../accounts.css";
import "./styles/verify-email.css";
import { Col } from "antd";
import AnimatedTestimonials from "../AnimatedTestimonials";
import VerifyEmailForm from "./components/VerifyEmailForm";

const VerifyEmailPage = () => {
  return (
    <div className="accounts-pg-container">
      <Col xs={24} lg={8} xl={13} className="accounts-pg-decoration-col">
        <AnimatedTestimonials />
      </Col>
      <Col xs={24} lg={16} xl={11} className="accounts-pg-form-col">
        <VerifyEmailForm/>
      </Col>
    </div>
  );
};

export default VerifyEmailPage;
