import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Link2, LockKeyhole, Mail, UserRound } from "lucide-react";
import { nameRules, emailRules, passwordRules } from "@/utils/ValidationRules";

export const getSignupSteps = ({ fileList, setFileList }) => [
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
    title: "Profile Info",
    fields: ["description", "logo", "website"],
    content: (
      <div className="accounts-f-form-steps">
        <CustomInputField
          name="description"
          placeholder="Write a short bio..."
          inputType="textarea"
          rules={[{ required: true, message: "Description is required" }]}
          className="accounts-f-input"
        />
        <CustomInputField
          name="logo"
          inputType="upload"
          accept="image/*"
          fileList={fileList}
          onFileChange={({ fileList }) => setFileList(fileList)}
          beforeUpload={() => false}
          showUploadList={true}
          buttonText="Upload Logo"
          rules={[{ required: true, message: "Logo is required" }]}
        />
        <CustomInputField
          name="website"
          placeholder="Enter your website"
        //   type="url"
          rules={[
            {
              required: true,
              message: "Website is required",
            },
            {
              pattern: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/,
              message: "Please enter a valid URL",
            },
          ]}
          className="accounts-f-input"
          addonBefore={<Link2 strokeWidth={1} />}
        />
      </div>
    ),
  },
];
