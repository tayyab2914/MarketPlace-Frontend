"use client";
import React, { useEffect } from "react";
import { Modal, Form } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Edit3, Tag, DollarSign } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import {
  categoryRules,
  descriptionRules,
  priceRules,
  titleRules,
} from "@/utils/ValidationRules";
import { CONVERT_SERVICE_FORM_TO_FORM_DATA } from "@/features/services/create/utils/utils";
import { BACKEND_DOMAIN } from "@/utils/Constants";

const EditServiceModal = ({
  visible,
  onCancel,
  onSave,
  initialValues,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue({
        ...initialValues,
        image: initialValues?.image
          ? [
              {
                uid: "-1",
                name: "current-image.png",
                status: "done",
                url: `${BACKEND_DOMAIN}${initialValues.image}`,
              },
            ]
          : [],
      });
    }
  }, [visible, initialValues, form]);
  
  const beforeUpload = () => false; // prevent auto-upload

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        // Convert to FormData, including the uploaded image
        const formData = CONVERT_SERVICE_FORM_TO_FORM_DATA(values, values?.image);
        onSave(initialValues?.id, formData);
      })
      .catch((info) => {
        console.error("Validation Failed:", info);
      });
  };

  return (
    <Modal
      title="Edit Service"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
      centered
    >
      <Form
        layout="vertical"
        form={form}
        className="app-input-form"
      >
        <CustomInputField
          inputType="input"
          name="title"
          label="Title"
          placeholder="Enter service title"
          rules={titleRules}
          className={"app-input-field"}
          addonBefore={<Edit3 size={16} strokeWidth={1} />}
        />

        <CustomInputField
          inputType="textarea"
          name="description"
          label="Description"
          placeholder="Enter service description"
          rules={descriptionRules}
          className={"app-input-field"}
        />

        <CustomInputField
          inputType="input"
          name="category"
          label="Category"
          placeholder="e.g. Design"
          rules={categoryRules}
          className={"app-input-field"}
          addonBefore={<Tag size={16} strokeWidth={1} />}
        />

        <CustomInputField
          inputType="number"
          name="price_starting_from"
          label="Price Starting From ($)"
          placeholder="e.g. 1200"
          rules={priceRules}
          className={"app-input-field"}
          addonBefore={<DollarSign size={16} strokeWidth={1} />}
        />

        {/* Image Upload Field */}
        <CustomInputField
          inputType="upload"
          name="image"
          label="Service Image"
          placeholder="Upload Service image"
          accept="image/*"
          showUploadList={true}
          beforeUpload={beforeUpload}
        />
      </Form>

      <Button type="submit" variant="filled-animated" onClick={handleSave}>
        Save
      </Button>
    </Modal>
  );
};

export default EditServiceModal;
