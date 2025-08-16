import React, { useEffect } from "react";
import { Modal, Form } from "antd";
import { API_ADMIN_UPDATE_LISTING } from "@/apis/AdminApis";
import { useSelector } from "react-redux";
import Button from "@/components/ui/Button/Button";
import dayjs from "dayjs";
import {
  CONVERT_FORM_VALUES_TO_FORM_DATA,
  MAP_INITIAL_VALUES,
} from "../../utils/utils";
import EditForm from "./components/EditForm";
const EditListingModal = ({ visible, onClose, listing, fetchListings }) => {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);

  console.log(listing);
  useEffect(() => {
    if (listing) {
      const initialValues = MAP_INITIAL_VALUES(listing);
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [listing, form]);

  const handleFinish = async (values) => {
    const formData = CONVERT_FORM_VALUES_TO_FORM_DATA(values);
    const res = await API_ADMIN_UPDATE_LISTING(token, listing.id, formData);
    if (res) {
      fetchListings();
      onClose();
    }
  };

  return (
    <Modal
      title={`Edit Listing: ${listing?.title || ""}`}
      open={visible}
      onCancel={onClose}
      footer={false}
      width={700}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <div className="app-input-form-modal">
          <EditForm />
        </div>

        <Button variant="filled-animated" onClick={() => form.submit()}>
          Update Listing
        </Button>
      </Form>
    </Modal>
  );
};

export default EditListingModal;
