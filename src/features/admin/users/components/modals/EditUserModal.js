import React, { useEffect } from "react";
import { Modal, Form } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { API_ADMIN_UPDATE_USER } from "@/apis/AdminApis";
import { useSelector } from "react-redux";
import Button from "@/components/ui/Button/Button";
import { emailRules, nameRules } from "@/utils/ValidationRules";
import { Key, Mail, User } from "lucide-react";

const EditUserModal = ({ visible, onClose, user,fetchUsers }) => {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      // Set initial form values when user changes
      form.setFieldsValue({
        id: user.id,
        username: user.username,
        email: user.email,
        email_verified: user.email_verified,
        verified_by_admin: user.verified_by_admin,
        // Add other fields if needed
      });
    } else {
      form.resetFields();
    }
  }, [user, form]);

  const handleFinish = async (values) => {
    // Add user id to values so you know who is edited
    const updatedUser = { ...user, ...values };
    const res = await API_ADMIN_UPDATE_USER(
      token,
      updatedUser?.id,
      updatedUser
    );
    if (res) {
      fetchUsers()
      onClose();
    }
  };

  return (
    <Modal
      title={`Edit User: ${user?.username || ""}`}
      open={visible}
      onCancel={onClose}
      footer={false}
      className="adm-usr-form"
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <CustomInputField
          name="id"
          label="User ID"
          inputType="input"
          disabled
          className={"adm-usr-input-field"}
          addonBefore={<Key strokeWidth={1} />}
        />

        <CustomInputField
          name="username"
          label="Username"
          placeholder="Enter username"
          inputType="input"
          rules={nameRules}
          className={"adm-usr-input-field"}
          addonBefore={<User strokeWidth={1} />}
        />

        <CustomInputField
          name="email"
          label="Email"
          placeholder="Enter email"
          inputType="input"
          type="email"
          rules={emailRules}
          className={"adm-usr-input-field"}
          addonBefore={<Mail strokeWidth={1} />}
        />

        <CustomInputField
          name="email_verified"
          label="Email Verified"
          inputType="switch"
        />

        <CustomInputField
          name="verified_by_admin"
          label="Verified by Admin"
          inputType="switch"
        />
      </Form>
      <Button variant="filled-animated" onClick={() => form.submit()}>
        Update User
      </Button>
    </Modal>
  );
};

export default EditUserModal;
