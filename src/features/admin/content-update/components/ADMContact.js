import React from "react";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Divider } from "antd";

const ADMContact = () => {
  return (
    <>
      <h3 className="adm-cnt-upd-form-sub-heading">Contact Us</h3>
      <Divider/>
      {/* Email */}
      <CustomInputField
        className="app-input-field"
        name={["content", "contact", "email"]}
        label="Support Email"
        placeholder="Enter support email"
        rules={[{ required: true, message: "Email is required" }]}
      />

      {/* Visit Us Text */}
      <CustomInputField
        className="app-input-field"
        name={["content", "contact", "visitUs", "text"]}
        label="Visit Us Text"
        placeholder="Enter visit us description"
        inputType="textarea"
        rows={3}
      />

      {/* Google Maps Link */}
      <CustomInputField
        className="app-input-field"
        name={["content", "contact", "visitUs", "mapLocation"]}
        label="Google Maps Link"
        placeholder="Enter Google Maps URL"
      />

      {/* Timing */}
      <CustomInputField
        className="app-input-field"
        name={["content", "contact", "timing"]}
        label="Contact Timing"
        placeholder="Enter contact timing"
      />

      {/* Phone Number */}
      <CustomInputField
        className="app-input-field"
        name={["content", "contact", "phone_num"]}
        label="Phone Number"
        placeholder="Enter phone number"
      />
    </>
  );
};

export default ADMContact;
