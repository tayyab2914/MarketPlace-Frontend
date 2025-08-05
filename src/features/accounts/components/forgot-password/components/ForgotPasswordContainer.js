"use client";
import React, { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import OtpVerificationForm from "./OtpVerificationForm";
import ResetPasswordForm from "./ResetPasswordForm";
const ForgotPasswordContainer = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSendEmail = async (emailValue) => {
    console.log("Sending email to:", emailValue);
    await new Promise((res) => setTimeout(res, 1000));
    setEmail(emailValue);
    setStep(2);
  };

  const handleVerifyOtp = async (codeValue) => {
    console.log("Verifying code:", codeValue);
    await new Promise((res) => setTimeout(res, 1000));
    if (codeValue === "123456") {
      setCode(codeValue);
      setStep(3);
    } else {
      alert("Invalid code");
    }
  };

  const handleResetPassword = async (newPassword) => {
    console.log("Resetting password for:", email, "with password:", newPassword);
    await new Promise((res) => setTimeout(res, 1000));
    alert("Password reset successful!");
  };

  return (
    <>
      {step === 1 && <ForgotPasswordForm onSubmit={handleSendEmail} />}
      {step === 2 && <OtpVerificationForm onSubmit={handleVerifyOtp} />}
      {step === 3 && <ResetPasswordForm onSubmit={handleResetPassword} />}
    </>
  );
};

export default ForgotPasswordContainer;
