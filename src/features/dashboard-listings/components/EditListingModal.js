import React, { useEffect } from "react";
import { Modal, Form } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Edit3, Tag, DollarSign } from "lucide-react";
import dayjs from "dayjs";
import Button from "@/components/ui/Button/Button";

const EditListingModal = ({
  visible,
  onCancel,
  onSave,
  initialValues,
  tagOptions,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue({
        ...initialValues,
        deadline: initialValues.deadline
          ? dayjs(initialValues.deadline, "YYYY-MM-DD")
          : null,
      });
    }
  }, [visible, initialValues, form]);

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        onSave(initialValues?.id, {
          ...values,
          deadline: values.deadline
            ? values.deadline.format("YYYY-MM-DD")
            : null,
        });
      })
      .catch((info) => {
        console.error("Validation Failed:", info);
      });
  };

  return (
    <Modal
      title="Edit Listing"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
      centered
    >
      <Form layout="vertical" form={form} className="app-input-form">
        {" "}
        <div className="app-input-form ">
          <CustomInputField
            inputType="input"
            name="title"
            label="Title"
            placeholder="Enter service title"
            addonBefore={<Edit3 size={16} strokeWidth={1} />}
            className="app-input-field"
            rules={[{ required: true, message: "Title is required" }]}
          />
          <CustomInputField
            inputType="textarea"
            name="description"
            label="Description"
            placeholder="Enter service description"
            className="app-input-field"
          />
          <CustomInputField
            inputType="input"
            name="category"
            label="Category"
            placeholder="e.g. Design"
            addonBefore={<Tag size={16} strokeWidth={1} />}
            className="app-input-field"
          />
          <CustomInputField
            inputType="select"
            name="tags"
            label="Tags"
            placeholder="Select tags"
            mode="tags"
            options={tagOptions}
            className="app-input-field"
          />
          <CustomInputField
            inputType="number"
            name="budget"
            label="Budget ($)"
            placeholder="e.g. 4000"
            addonBefore={<DollarSign size={16} strokeWidth={1} />}
            className="app-input-field"
          />
          <CustomInputField
            inputType="date"
            name="deadline"
            label="Deadline"
            type="date"
            className="app-input-field"
          />
          <CustomInputField
            inputType="switch"
            name="is_public"
            label="Make this listing public?"
          />
        </div>
      </Form>
      <Button type="submit" variant="filled-animated" onClick={handleSave}>
        Save
      </Button>
    </Modal>
  );
};

export default EditListingModal;
