import React from "react";
import "../../accounts.css";
import "./styles/signin.css";
import { Col } from "antd";
import AnimatedTestimonials from "../AnimatedTestimonials";
import SignInForm from "./components/SignInForm";

const SignInPage = () => {
  return (
    <div className="accounts-pg-container">
      <Col xs={24} lg={8} xl={13} className="accounts-pg-decoration-col">
        <AnimatedTestimonials />
      </Col>
      <Col xs={24} lg={16} xl={11} className="accounts-pg-form-col">
        <SignInForm />
      </Col>
    </div>
  );
};

export default SignInPage;
