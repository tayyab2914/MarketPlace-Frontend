import React from "react";
import "../../accounts.css";
import "./styles/forgot-password.css";
import { Col } from "antd";
import AnimatedTestimonials from "../AnimatedTestimonials";
import ForgotPasswordContainer from "./components/ForgotPasswordCOntainer";

const ForgotPasswordPage = () => {
  return (
    <div className="accounts-pg-container">
      <Col xs={24} lg={8} xl={13} className="accounts-pg-decoration-col">
        <AnimatedTestimonials />
      </Col>
      <Col xs={24} lg={16} xl={11} className="accounts-pg-form-col">
        <ForgotPasswordContainer/>
      </Col>
    </div>
  );
};

export default ForgotPasswordPage;
