"use client";
import React, { useState } from "react";
import { Form, Steps } from "antd";
import Image from "next/image";

import { IMAGES } from "@/components/ui/Image/ImageData";
import { getSignupSteps } from "./SignupSteps";
import SignupFooter from "./SignUpFooter";
import SignupNavigation from "./SignupNavigation";
import { CONVERT_SIGNUP_FORM_VALUES_TO_FORM_DATA } from "../../utils/utils";

const SignupForm = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [fileList, setFileList] = useState([]);

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

  const onFinish = (values) => {
    console.log(values);
    const formData = CONVERT_SIGNUP_FORM_VALUES_TO_FORM_DATA(values);
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };

  return (
    <div className="accounts-f-container">
      <Image src={IMAGES?.logo} alt="Logo" className="accounts-f-logo" />
      <p className="accounts-f-welcome">Welcome to Servibe</p>

      <Steps
        current={currentStep}
        items={steps.map((s) => ({ title: s.title }))}
        style={{ marginTop: "5px" }}
      />

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        className="accounts-f-form"
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
        />
      </Form>

      <SignupFooter />
    </div>
  );
};

export default SignupForm;
