import React from "react";
import '../../accounts.css'
import "./styles/signup.css";
import { Col } from "antd";
import SignupForm from "./components/form/SignupForm";
import AnimatedTestimonials from "../AnimatedTestimonials";

const SignUpPage = () => {
  return (
    <div className="acc-pg-container">
      <Col xs={24} lg={8} xl={13} className="acc-pg-decoration-col">
        <AnimatedTestimonials />
      </Col>
      <Col xs={24} lg={16} xl={11} className="acc-pg-form-col">
        <SignupForm />
      </Col>
    </div>
  );
};

export default SignUpPage;
