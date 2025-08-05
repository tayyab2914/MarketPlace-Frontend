import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { emailRules, passwordRules } from "@/utils/ValidationRules";
import { LockKeyhole, Mail } from "lucide-react";
import React from "react";

const SignInFormFields = () => {
  return (
    <div>
      <CustomInputField
        name="email"
        placeholder="Enter your email"
        inputType="input"
        rules={emailRules}
        className="accounts-f-input"
        addonBefore={<Mail strokeWidth={1} />}
      />
      <CustomInputField
        name="password"
        placeholder="Enter your password"
        inputType="input"
        type="password"
        rules={passwordRules}
        className="accounts-f-input"
        addonBefore={<LockKeyhole strokeWidth={1} />}
      />
    </div>
  );
};

export default SignInFormFields;
