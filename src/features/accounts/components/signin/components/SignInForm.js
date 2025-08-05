"use client";
import React from "react";
import { Form } from "antd";
import Image from "next/image";

import { IMAGES } from "@/components/ui/Image/ImageData";
import SignInFooter from "./SignInFooter";
import SignInFormFields from "./SignInFormFields";
import { API_SIGNIN } from "@/apis/AccountApis";
import { useDispatch } from "react-redux";
import {
  setIsUserLoggedIn,
  setUserAuthToken,
} from "@/redux/actions/authActions";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/Constants";

const SignInForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter()

  const onFinish = async (values) => {
    const res = await API_SIGNIN(values);
    console.log(res)
    if (res) {
      dispatch(setUserAuthToken(res?.data?.token));
      dispatch(setIsUserLoggedIn(true));
      router.push(ROUTES.home)
    }
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
