import React, { useEffect } from "react";
import { Modal, Form } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { API_ADMIN_UPDATE_COMPANY } from "@/apis/AdminApis"; // Assuming you have this API method
import { useSelector } from "react-redux";
import Button from "@/components/ui/Button/Button";

const EditCompanyModal = ({ visible, onClose, company, fetchCompanies }) => {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (company) {
      // Set initial form values for the company
      form.setFieldsValue({
        id: company.id,
        name: company.name,
        company_description: company.company_description,
        phone_no: company.phone_no,
        industry: company.industry,
        location: company.location,
        // profile_image could be handled separately if you have upload
      });
    } else {
      form.resetFields();
    }
  }, [company, form]);

  const handleFinish = async (values) => {
    const updatedCompany = { ...company, ...values };
    const res = await API_ADMIN_UPDATE_COMPANY(token, updatedCompany?.id, updatedCompany);
    if (res) {
      fetchCompanies();
      onClose();
    }
  };

  return (
    <Modal
      title={`Edit Company: ${company?.name || ""}`}
      open={visible}
      onCancel={onClose}
      footer={false}
      className="adm-company-form"
      destroyOnClose
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <CustomInputField
          name="id"
          label="Company ID"
          inputType="input"
          disabled
          className="adm-company-input-field"
        />

        <CustomInputField
          name="name"
          label="Company Name"
          placeholder="Enter company name"
          inputType="input"
          rules={[{ required: true, message: "Please enter company name" }]}
          className="adm-company-input-field"
        />

        <CustomInputField
          name="company_description"
          label="Description"
          placeholder="Enter company description"
          inputType="textarea"
          rows={4}
          className="adm-company-input-field"
        />

        <CustomInputField
          name="phone_no"
          label="Phone Number"
          placeholder="Enter phone number"
          inputType="input"
          className="adm-company-input-field"
        />

        <CustomInputField
          name="industry"
          label="Industry"
          placeholder="Enter industry"
          inputType="input"
          className="adm-company-input-field"
        />

        <CustomInputField
          name="location"
          label="Location"
          placeholder="Enter location"
          inputType="input"
          className="adm-company-input-field"
        />

        {/* For profile_image you might want a custom upload field, not included here */}

        <Button variant="filled-animated" onClick={() => form.submit()}>
          Update Company
        </Button>
      </Form>
    </Modal>
  );
};

export default EditCompanyModal;
