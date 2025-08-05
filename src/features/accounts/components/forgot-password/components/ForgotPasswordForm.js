"use client";
import React from "react";
import { Form } from "antd";
import { Mail } from "lucide-react";
import { emailRules } from "@/utils/ValidationRules";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import { IMAGES } from "@/components/ui/Image/ImageData";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";

const ForgotPasswordForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values.email);
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
        <CustomInputField
          name="email"
          placeholder="Enter your email"
          inputType="input"
          rules={emailRules}
          className="accounts-f-input"
          addonBefore={<Mail strokeWidth={1} />}
        />
        <Button variant="filled-animated" htmlType="submit">
          <span>Send Email</span>
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
