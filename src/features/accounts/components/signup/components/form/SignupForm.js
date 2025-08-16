"use client";
import React, { useState } from "react";
import { Form, Steps } from "antd";
import Image from "next/image";

import { IMAGES } from "@/components/ui/Image/ImageData";
import { getSignupSteps } from "./SignupSteps";
import SignupFooter from "./SignUpFooter";
import SignupNavigation from "./SignupNavigation";
import { STRUCTURE_SIGNUP_REQUEST } from "../../utils/utils";
import { API_SIGNUP } from "@/apis/AccountApis";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/Constants";
const SignupForm = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [fileList, setFileList] = useState([]);
  const router = useRouter();

  const steps = getSignupSteps({ fileList, setFileList });

  const next = () => {
    const currentFields = steps[currentStep].fields;
    form
      .validateFields(currentFields)
      .then(() => {
        setCurrentStep((prev) => prev + 1);
      })
      .catch((err) => {
        console.log("Validation error:", err);
      });
  };
  const prev = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const onFinish = async (values) => {
    const payload = STRUCTURE_SIGNUP_REQUEST(values);

    const res = await API_SIGNUP(payload);
    if (res) {
      router.push(ROUTES.home);
    }
  };

  return (
    <div className="acc-pg-f-container">
      <img src={IMAGES?.logo} alt="Logo" className="acc-pg-logo" />
      <p className="acc-pg-welcome">Welcome to Servibe</p>

      <Steps
        current={currentStep}
        items={steps.map((s) => ({ title: s.title }))}
        style={{ marginTop: "5px",marginBottom:"10px" }}
      />

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        className="acc-pg-form"
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{ display: index === currentStep ? "block" : "none" }}
          >
            {step.content}
          </div>
        ))}

        <SignupNavigation
          currentStep={currentStep}
          totalSteps={steps.length}
          onNext={next}
          onPrev={prev}
          isFinalStep={currentStep === steps.length - 1}
          form={form}
        />
      </Form>

      <SignupFooter />
    </div>
  );
};

export default SignupForm;
