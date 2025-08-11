import React, { useEffect, useState } from "react";
import { Modal, Form } from "antd";
import { API_ADMIN_UPDATE_COMPANY } from "@/apis/AdminApis";
import { useSelector } from "react-redux";
import Button from "@/components/ui/Button/Button";
import { BACKEND_DOMAIN } from "@/utils/Constants";
import {
  CONVERT_FORM_VALUES_TO_FORM_DATA,
  MAP_INITIAL_VALUES,
} from "../../utils/utils";
import EditForm from "./components/EditForm";

const EditCompanyModal = ({ visible, onClose, company, fetchCompanies }) => {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (company) {
      const initialValues = MAP_INITIAL_VALUES(company);
      form.setFieldsValue(initialValues);

      if (company?.profile_image) {
        setFileList([
          {
            uid: "-1",
            name: "profile_image.jpg",
            status: "done",
            url: company?.profile_image.startsWith("http")
              ? company?.profile_image
              : `${BACKEND_DOMAIN}${company?.profile_image}`,
          },
        ]);
      } else {
        setFileList([]);
      }
    } else {
      form.resetFields();
      setFileList([]);
    }
  }, [company, form]);

  const handleFinish = async (values) => {
    const formData = CONVERT_FORM_VALUES_TO_FORM_DATA(values, fileList);
    const res = await API_ADMIN_UPDATE_COMPANY(token, company?.id, formData);
    if (res) {
      fetchCompanies();
      onClose();
    }
  };

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <Modal
      title={`Edit Company: ${company?.name || ""}`}
      open={visible}
      onCancel={onClose}
      footer={false}
      className="adm-company-form"
      width={600}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <EditForm
          company={company}
          fileList={fileList}
          onFileChange={handleFileChange}
        />

        <Button variant="filled-animated" onClick={() => form.submit()}>
          Update Company
        </Button>
      </Form>
    </Modal>
  );
};

export default EditCompanyModal;
