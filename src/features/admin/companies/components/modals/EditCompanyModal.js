import React, { useEffect } from "react";
import { Modal, Form } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { API_ADMIN_UPDATE_COMPANY } from "@/apis/AdminApis";
import { useSelector } from "react-redux";
import Button from "@/components/ui/Button/Button";
import {
  Hash,
  Building2,
  FileText,
  Phone,
  Briefcase,
  MapPin
} from "lucide-react";

const EditCompanyModal = ({ visible, onClose, company, fetchCompanies }) => {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (company) {
      form.setFieldsValue({
        id: company.id,
        name: company.name,
        company_description: company.company_description,
        phone_no: company.phone_no,
        industry: company.industry,
        location: company.location,
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
          addonBefore={<Hash size={16} />}
        />

        <CustomInputField
          name="name"
          label="Company Name"
          placeholder="Enter company name"
          inputType="input"
          rules={[{ required: true, message: "Please enter company name" }]}
          className="adm-company-input-field"
          addonBefore={<Building2 size={16} />}
        />

        <CustomInputField
          name="company_description"
          label="Description"
          placeholder="Enter company description"
          inputType="textarea"
          rows={4}
          className="adm-company-input-field"
          addonBefore={<FileText size={16} />}
        />

        <CustomInputField
          name="phone_no"
          label="Phone Number"
          placeholder="Enter phone number"
          inputType="input"
          className="adm-company-input-field"
          addonBefore={<Phone size={16} />}
        />

        <CustomInputField
          name="industry"
          label="Industry"
          placeholder="Enter industry"
          inputType="input"
          className="adm-company-input-field"
          addonBefore={<Briefcase size={16} />}
        />

        <CustomInputField
          name="location"
          label="Location"
          placeholder="Enter location"
          inputType="input"
          className="adm-company-input-field"
          addonBefore={<MapPin size={16} />}
        />

        <Button variant="filled-animated" onClick={() => form.submit()}>
          Update Company
        </Button>
      </Form>
    </Modal>
  );
};

export default EditCompanyModal;
