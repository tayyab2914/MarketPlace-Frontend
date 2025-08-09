"use client";
import React from "react";
import { Form } from "antd";
import Image from "next/image";

import { IMAGES } from "@/components/ui/Image/ImageData";
import SignInFooter from "./SignInFooter";
import SignInFormFields from "./SignInFormFields";
import { API_SIGNIN } from "@/apis/AccountApis";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const onFinish = async (values) => {
    await API_SIGNIN(values, dispatch, router);
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
        <SignInFormFields />
        <SignInFooter />
      </Form>
    </div>
  );
};

export default SignInForm;
