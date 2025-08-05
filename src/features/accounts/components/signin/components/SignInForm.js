"use client";
import React from "react";
import { Form } from "antd";
import Image from "next/image";

import { IMAGES } from "@/components/ui/Image/ImageData";
import SignInFooter from "./SignInFooter";
import SignInFormFields from "./SignInFormFields";

const SignInForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="accounts-f-container">
      <Image src={IMAGES?.logo} alt="Logo" className="accounts-f-logo" />
      <p className="accounts-f-welcome">Welcome to Servibe</p>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        className="accounts-f-form"
      >
        <SignInFormFields />
        <SignInFooter />
      </Form>
    </div>
  );
};

export default SignInForm;
