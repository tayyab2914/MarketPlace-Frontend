import React from "react";
import "../../accounts.css";
import "./styles/forgot-password.css";
import { Col } from "antd";
import AnimatedTestimonials from "../AnimatedTestimonials";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <div className="acc-pg-container">
      <Col xs={24} lg={8} xl={13} className="acc-pg-decoration-col">
        <AnimatedTestimonials />
      </Col>
      <Col xs={24} lg={16} xl={11} className="acc-pg-form-col">
        <ForgotPasswordForm/>
      </Col>
    </div>
  );
};

export default ForgotPasswordPage;
