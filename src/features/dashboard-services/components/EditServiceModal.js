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

const EditServiceModal = ({
  visible,
  onCancel,
  onSave,
  initialValues,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [visible, initialValues, form]);

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        onSave(initialValues?.id, values);
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
        className="lis-upd-form lis-upd-form-modal"
      >
        <CustomInputField
          inputType="input"
          name="title"
          label="Title"
          placeholder="Enter service title"
          rules={titleRules}
          className={"srv-upd-input-field"}
          addonBefore={<Edit3 size={16} strokeWidth={1} />}
        />

        <CustomInputField
          inputType="textarea"
          name="description"
          label="Description"
          placeholder="Enter service description"
          rules={descriptionRules}
          className={"srv-upd-input-field"}
        />

        <CustomInputField
          inputType="input"
          name="category"
          label="Category"
          placeholder="e.g. Design"
          rules={categoryRules}
          className={"srv-upd-input-field"}
          addonBefore={<Tag size={16} strokeWidth={1} />}
        />

        <CustomInputField
          inputType="number"
          name="price_starting_from"
          label="Price Starting From ($)"
          placeholder="e.g. 1200"
          rules={priceRules}
          className={"srv-upd-input-field"}
          addonBefore={<DollarSign size={16} strokeWidth={1} />}
        />
      </Form>
      <Button type="submit" variant="filled-animated" onClick={handleSave}>
        Save
      </Button>
    </Modal>
  );
};

export default EditServiceModal;
