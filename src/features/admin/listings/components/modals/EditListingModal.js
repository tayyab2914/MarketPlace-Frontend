import React, { useEffect } from "react";
import { Modal, Form } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { API_ADMIN_UPDATE_LISTING } from "@/apis/AdminApis"; // Make sure this API exists
import { useSelector } from "react-redux";
import Button from "@/components/ui/Button/Button";
import dayjs from "dayjs";

const EditListingModal = ({ visible, onClose, listing, fetchListings }) => {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (listing) {
      form.setFieldsValue({
        id: listing.id,
        title: listing.title,
        description: listing.description,
        category: listing.category,
        tags: listing.tags ? listing.tags.join(", ") : "",
        budget: listing.budget,
        deadline: listing.deadline ? dayjs(listing.deadline) : null,
        status: listing.status,
        is_public: listing.is_public,
        verified_by_admin: listing.verified_by_admin,
        company: listing.company,
      });
    } else {
      form.resetFields();
    }
  }, [listing, form]);

  const handleFinish = async (values) => {
    const updatedListing = {
      title: values.title,
      description: values.description,
      category: values.category,
      tags: values.tags ? values.tags.split(",").map(tag => tag.trim()) : [],
      budget: values.budget,
      deadline: values.deadline ? dayjs(values.deadline).format("YYYY-MM-DD") : null,
      status: values.status,
      is_public: values.is_public,
      verified_by_admin: values.verified_by_admin,
      company: values.company,  // ensure this matches API expectation
    };
  
    try {
      const res = await API_ADMIN_UPDATE_LISTING(token, listing.id, updatedListing);
      if (res) {
        fetchListings();
        onClose();
      }
    } catch (error) {
      console.error("Update failed:", error);
      // Optionally show a notification to the user here
    }
  };
  

  return (
    <Modal
      title={`Edit Listing: ${listing?.title || ""}`}
      open={visible}
      onCancel={onClose}
      footer={false}
      className="adm-lis-form"
      width={700}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <CustomInputField
          name="id"
          label="Listing ID"
          inputType="input"
          disabled
          className="adm-lis-input-field"
        />

        <CustomInputField
          name="title"
          label="Title"
          placeholder="Enter listing title"
          inputType="input"
          rules={[{ required: true, message: "Please enter title" }]}
          className="adm-lis-input-field"
        />

        <CustomInputField
          name="description"
          label="Description"
          placeholder="Enter description"
          inputType="textarea"
          rows={4}
          className="adm-lis-input-field"
        />

        <CustomInputField
          name="category"
          label="Category"
          placeholder="Enter category"
          inputType="input"
          className="adm-lis-input-field"
        />

        <CustomInputField
          name="tags"
          label="Tags (comma separated)"
          placeholder="e.g. mobile, flutter, react native"
          inputType="input"
          className="adm-lis-input-field"
        />

        <CustomInputField
          name="budget"
          label="Budget"
          placeholder="Enter budget"
          inputType="number"
          className="adm-lis-input-field"
        />

        <CustomInputField
          name="deadline"
          label="Deadline"
          placeholder="YYYY-MM-DD"
          inputType="date"
          className="adm-lis-input-field"
        />

        <CustomInputField
          name="status"
          label="Status"
          placeholder="open, closed, etc."
          inputType="input"
          className="adm-lis-input-field"
        />

        <CustomInputField
          name="is_public"
          label="Is Public"
          inputType="switch"
        />

        <CustomInputField
          name="verified_by_admin"
          label="Verified by Admin"
          inputType="switch"
        />

        <CustomInputField
          name="company"
          label="Company ID"
          inputType="number"
          disabled
          className="adm-lis-input-field"
        />

        <Button variant="filled-animated" onClick={() => form.submit()}>
          Update Listing
        </Button>
      </Form>
    </Modal>
  );
};

export default EditListingModal;
