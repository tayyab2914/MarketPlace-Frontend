"use client";
import React from "react";
import { Form } from "antd";
import { KeyRound } from "lucide-react";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import Button from "@/components/ui/Button/Button";

const OtpVerificationForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values.code);
  };

  return (
    <div className="accounts-f-container">
      <p className="accounts-f-welcome">Enter the code sent to your email</p>

      <Form form={form} layout="vertical" onFinish={onFinish} className="accounts-f-form">
        <CustomInputField
          name="code"
          placeholder="Enter verification code"
          inputType="input"
          rules={[{ required: true, message: "Please enter the code" }]}
          addonBefore={<KeyRound strokeWidth={1} />}
        className="accounts-f-input"
        />
        <Button variant="filled-animated" htmlType="submit">
          <span>Verify</span>
        </Button>
      </Form>
    </div>
  );
};

export default OtpVerificationForm;
