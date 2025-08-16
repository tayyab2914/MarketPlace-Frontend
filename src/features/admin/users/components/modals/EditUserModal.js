import React, { useEffect } from "react";
import { Modal, Form } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { API_ADMIN_UPDATE_USER } from "@/apis/AdminApis";
import { useSelector } from "react-redux";
import Button from "@/components/ui/Button/Button";
import { emailRules, nameRules } from "@/utils/ValidationRules";
import { Key, Mail, User } from "lucide-react";
import EditForm from "./components/EditForm";
import { MAP_INITIAL_VALUES } from "../../utils/utils";

const EditUserModal = ({ visible, onClose, user, fetchUsers }) => {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      const initialValues = MAP_INITIAL_VALUES(user);
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [user, form]);

  const handleFinish = async (values) => {
    const updatedUser = { ...user, ...values };
    const res = await API_ADMIN_UPDATE_USER(
      token,
      updatedUser?.id,
      updatedUser
    );
    if (res) {
      fetchUsers();
      onClose();
    }
  };

  return (
    <Modal
      title={`Edit User: ${user?.username || ""}`}
      open={visible}
      onCancel={onClose}
      footer={false}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <div className="app-input-form-modal">
          <EditForm />
        </div>
      </Form>
      <Button variant="filled-animated" onClick={() => form.submit()}>
        Update User
      </Button>
    </Modal>
  );
};

export default EditUserModal;
