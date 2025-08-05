import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import {
  Link2,
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
  Building2,
  Landmark,
  MapPin,
  Info,
} from "lucide-react";
import { nameRules, emailRules, passwordRules } from "@/utils/ValidationRules";

export const getSignupSteps = () => [
  {
    title: "Account Info",
    fields: ["name", "email", "password"],
    content: (
      <div className="accounts-f-form-steps">
        <CustomInputField
          name="name"
          placeholder="Enter Your Name"
          inputType="input"
          rules={nameRules}
          className="accounts-f-input"
          addonBefore={<UserRound strokeWidth={1} />}
        />
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
    ),
  },
  {
    title: "Company Info",
    fields: ["company_name", "about", "phone_no", "industry", "location"],
    content: (
      <div className="accounts-f-form-steps">
        <CustomInputField
          name="company_name"
          placeholder="Enter your company name"
          inputType="input"
          rules={[{ required: true, message: "Company name is required" }]}
          className="accounts-f-input"
          addonBefore={<Building2 strokeWidth={1} />}
        />
        <CustomInputField
          name="about"
          placeholder="Tell us about your company"
          inputType="textarea"
          rules={[{ required: true, message: "About is required" }]}
          className="accounts-f-input"
          addonBefore={<Info strokeWidth={1} />}
        />
        <CustomInputField
          name="phone_no"
          placeholder="Company phone number"
          inputType="input"
          rules={[{ required: true, message: "Phone number is required" }]}
          className="accounts-f-input"
          addonBefore={<Phone strokeWidth={1} />}
        />
        <CustomInputField
          name="industry"
          placeholder="Industry"
          inputType="input"
          rules={[{ required: true, message: "Industry is required" }]}
          className="accounts-f-input"
          addonBefore={<Landmark strokeWidth={1} />}
        />
        <CustomInputField
          name="location"
          placeholder="Location"
          inputType="input"
          rules={[{ required: true, message: "Location is required" }]}
          className="accounts-f-input"
          addonBefore={<MapPin strokeWidth={1} />}
        />
      </div>
    ),
  },
];
