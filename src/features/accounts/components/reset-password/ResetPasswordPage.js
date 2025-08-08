import React from "react";
import "../../accounts.css";
import "./styles/reset-password.css";
import { Col } from "antd";
import AnimatedTestimonials from "../AnimatedTestimonials";
import ResetPasswordForm from "./components/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="acc-pg-container">
      <Col xs={24} lg={8} xl={13} className="acc-pg-decoration-col">
        <AnimatedTestimonials />
      </Col>
      <Col xs={24} lg={16} xl={11} className="acc-pg-form-col">
        <ResetPasswordForm/>
      </Col>
    </div>
  );
};

export default ResetPasswordPage;
