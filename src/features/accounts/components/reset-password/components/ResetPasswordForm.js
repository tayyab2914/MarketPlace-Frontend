"use client";

import React, { useEffect, useRef, useState } from "react";
import { Form} from "antd";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/Constants";
import { extractTokenAndEmail } from "../../utils/utils";
import { passwordRules } from "@/utils/ValidationRules";
import { Mail } from "lucide-react";
import { API_RESET_PASSWORD } from "@/apis/AccountApis";
import { IMAGES } from "@/components/ui/Image/ImageData";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const res = await API_RESET_PASSWORD({
      email,
      password: values.password,
      token,
    });
    if (res) {
      router.push(ROUTES.home);
    }
  };

  useEffect(() => {
    const { token, email } = extractTokenAndEmail();
    setEmail(email);
    setToken(token);
  }, []);

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
          name="password"
          placeholder="Enter your password"
          inputType="input"
          rules={passwordRules}
          className="accounts-f-input"
          addonBefore={<Mail strokeWidth={1} />}
        />
        <Button variant="filled-animated" type="submit">
          <span>Set Password</span>
        </Button>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
