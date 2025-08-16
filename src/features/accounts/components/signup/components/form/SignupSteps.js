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
      <div className="app-input-form">
        <CustomInputField
          name="name"
          placeholder="Enter Your Name"
          inputType="input"
          rules={nameRules}
          className="app-input-field "
          addonBefore={<UserRound strokeWidth={1} />}
        />
        <CustomInputField
          name="email"
          placeholder="Enter your email"
          inputType="input"
          rules={emailRules}
          className="app-input-field "
          addonBefore={<Mail strokeWidth={1} />}
        />
        <CustomInputField
          name="password"
          placeholder="Enter your password"
          inputType="input"
          type="password"
          rules={passwordRules}
          className="app-input-field "
          addonBefore={<LockKeyhole strokeWidth={1} />}
        />
      </div>
    ),
  },
  {
    title: "Company Info",
    fields: ["company_name", "about", "phone_no", "industry", "location"],
    content: (
      <div className="app-input-form">
        <CustomInputField
          name="company_name"
          placeholder="Enter your company name"
          inputType="input"
          rules={[{ required: true, message: "Company name is required" }]}
          className="app-input-field "
          addonBefore={<Building2 strokeWidth={1} />}
        />
        <CustomInputField
          name="company_description"
          placeholder="Tell us about your company"
          inputType="textarea"
          rules={[{ required: true, message: "Description is required" }]}
          className="app-input-field "
          addonBefore={<Info strokeWidth={1} />}
        />
        <CustomInputField
          name="phone_no"
          placeholder="Company phone number"
          inputType="input"
          rules={[{ required: true, message: "Phone number is required" }]}
          className="app-input-field "
          addonBefore={<Phone strokeWidth={1} />}
        />
        <CustomInputField
          name="industry"
          placeholder="Industry"
          inputType="input"
          rules={[{ required: true, message: "Industry is required" }]}
          className="app-input-field "
          addonBefore={<Landmark strokeWidth={1} />}
        />
        <CustomInputField
          name="location"
          placeholder="Location"
          inputType="input"
          rules={[{ required: true, message: "Location is required" }]}
          className="app-input-field "
          addonBefore={<MapPin strokeWidth={1} />}
        />
      </div>
    ),
  },
];
