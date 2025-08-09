"use client";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "antd";
import { Edit3, Phone, Briefcase, MapPin, ImageIcon } from "lucide-react";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import Button from "@/components/ui/Button/Button";
import ImagePreview from "./ImagePreview";

const CompanyForm = ({ companyData, loading, onSubmit }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const titleRules = [
    { required: true, message: "Please enter the company name" },
  ];

  useEffect(() => {
    if (!companyData) return;
    form.setFieldsValue({ ...companyData, profile_image: undefined });

    if (companyData.profile_image) {
      setFileList([
        {
          uid: "-1",
          name: "profile_image.png",
          status: "done",
          url: companyData.profile_image.startsWith("http")
            ? companyData.profile_image
            : companyData.profile_image,
        },
      ]);
    } else {
      setFileList([]);
    }
  }, [companyData]);

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList.slice(-1));
  };

  const beforeUpload = () => false;

  const onFinish = (values) => {
    onSubmit(values, fileList);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      requiredMark={false}
      className="upd-comp-f-form"
    >
      <CustomInputField
        inputType="input"
        name="name"
        label="Company Name"
        placeholder="Enter company name"
        rules={titleRules}
        className="upd-comp-f-input-field"
        addonBefore={<Edit3 size={16} strokeWidth={1} />}
        disabled={loading}
      />

      <CustomInputField
        inputType="textarea"
        name="company_description"
        label="Company Description"
        placeholder="Enter company description"
        className="upd-comp-f-input-field"
        disabled={loading}
      />

      <Row gutter={15}>
        <Col xs={24} lg={12}>
          <CustomInputField
            inputType="input"
            name="phone_no"
            label="Phone Number"
            placeholder="Enter phone number"
            className="upd-comp-f-input-field"
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
            className="upd-comp-f-input-field"
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
        className="upd-comp-f-input-field"
        addonBefore={<MapPin size={16} strokeWidth={1} />}
        disabled={loading}
      />

      <ImagePreview imagePath={companyData?.profile_image} />

      <CustomInputField
        inputType="upload"
        name="profile_image"
        label="Profile Image"
        placeholder="Upload profile image"
        addonBefore={<ImageIcon size={16} strokeWidth={1} />}
        fileList={fileList}
        onFileChange={handleFileChange}
        beforeUpload={beforeUpload}
        showUploadList={true}
        accept="image/*"
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
