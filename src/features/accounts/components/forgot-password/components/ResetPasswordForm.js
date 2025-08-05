"use client";
import React from "react";
import { Form } from "antd";
import { Lock } from "lucide-react";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import Button from "@/components/ui/Button/Button";

const ResetPasswordForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values.password);
  };

  return (
    <div className="accounts-f-container">
      <p className="accounts-f-welcome">Reset your password</p>

      <Form form={form} layout="vertical" onFinish={onFinish} className="accounts-f-form">
        <CustomInputField
          name="password"
          placeholder="New Password"
          inputType="input"
          type="password"
        className="accounts-f-input"
          rules={[{ required: true, message: "Please enter a new password" }]}
          addonBefore={<Lock strokeWidth={1} />}
        />
        <Button variant="filled-animated" htmlType="submit">
          <span>Reset Password</span>
        </Button>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
