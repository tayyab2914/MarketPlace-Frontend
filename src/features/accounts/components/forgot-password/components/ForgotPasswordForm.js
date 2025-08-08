"use client";
import React from "react";
import { Form } from "antd";
import { Mail } from "lucide-react";
import { emailRules } from "@/utils/ValidationRules";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import { IMAGES } from "@/components/ui/Image/ImageData";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { API_FORGOT_PASSWORD } from "@/apis/AccountApis";

const ForgotPasswordForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const res = await API_FORGOT_PASSWORD(values?.email);
    onSubmit(values.email);
  };

  return (
    <div className="acc-pg-f-container">
      <img src={IMAGES?.logo} alt="Logo" className="acc-pg-logo" />
      <p className="acc-pg-welcome">Welcome to Servibe</p>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        className="acc-pg-form"
      >
        <CustomInputField
          name="email"
          placeholder="Enter your email"
          inputType="input"
          rules={emailRules}
          className="acc-pg-input"
          addonBefore={<Mail strokeWidth={1} />}
        />
        <Button variant="filled-animated" type="submit">
          <span>Send Email</span>
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
