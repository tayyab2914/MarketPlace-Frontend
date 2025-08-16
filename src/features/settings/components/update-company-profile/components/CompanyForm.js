"use client";
import React, { useEffect } from "react";
import { Col, Form, Row } from "antd";
import { Edit3, Phone, Briefcase, MapPin, ImageIcon } from "lucide-react";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import Button from "@/components/ui/Button/Button";
import ImagePreview from "./ImagePreview";

const CompanyForm = ({ companyData, loading, onSubmit }) => {
  const [form] = Form.useForm();

  const titleRules = [
    { required: true, message: "Please enter the company name" },
  ];

  useEffect(() => {
    if (!companyData) return;

    // Build initial fileList for the Upload (if we have an existing URL)
    const initialFileList = companyData?.profile_image
      ? [
          {
            uid: "-1",
            name: "profile_image.png",
            status: "done",
            url: companyData.profile_image,
          },
        ]
      : [];

    // IMPORTANT: let the form control the upload fileList
    const { profile_image, ...rest } = companyData || {};
    form.setFieldsValue({
      ...rest,
      profile_image: initialFileList,
    });
  }, [companyData, form]);

  const beforeUpload = () => false; // prevent auto-upload

  const onFinish = (values) => {
    // values.profile_image is now a fileList array controlled by the Form
    onSubmit(values, values.profile_image || []);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      requiredMark={false}
      className="app-input-form"
    >
      <CustomInputField
        inputType="input"
        name="name"
        label="Company Name"
        placeholder="Enter company name"
        rules={titleRules}
        className="app-input-field "
        addonBefore={<Edit3 size={16} strokeWidth={1} />}
        disabled={loading}
      />

      <CustomInputField
        inputType="textarea"
        name="company_description"
        label="Company Description"
        placeholder="Enter company description"
        className="app-input-field "
        disabled={loading}
      />

      <Row gutter={15}>
        <Col xs={24} lg={12}>
          <CustomInputField
            inputType="input"
            name="phone_no"
            label="Phone Number"
            placeholder="Enter phone number"
            className="app-input-field "
            addonBefore={<Phone size={16} strokeWidth={1} />}
            disabled={loading}
          />
        </Col>
        <Col xs={24} lg={12}>
          <CustomInputField
            inputType="input"
            name="industry"
            label="Industry"
            placeholder="Enter industry"
            className="app-input-field "
            addonBefore={<Briefcase size={16} strokeWidth={1} />}
            disabled={loading}
          />
        </Col>
      </Row>

      <CustomInputField
        inputType="input"
        name="location"
        label="Location"
        placeholder="Enter location"
        className="app-input-field "
        addonBefore={<MapPin size={16} strokeWidth={1} />}
        disabled={loading}
      />

      <ImagePreview imagePath={companyData?.profile_image} />

      <CustomInputField
        inputType="upload"
        name="profile_image"
        label="Profile Image"
        placeholder="Upload profile image"
        // Note: addonBefore isn't supported by Upload; icon is already on the button
        accept="image/*"
        showUploadList={true}
        beforeUpload={beforeUpload}
        disabled={loading}
      />

      <Button
        variant="filled-animated"
        type="submit"
        disabled={loading}
        style={{ marginTop: 10 }}
      >
        <span>{loading ? "Updating..." : "Update Profile"}</span>
      </Button>
    </Form>
  );
};

export default CompanyForm;
