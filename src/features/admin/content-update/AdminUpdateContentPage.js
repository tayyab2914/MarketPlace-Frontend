import {
  API_ALL_PAGES_CONTENT,
  API_UPDATE_PAGE_CONTENT,
} from "@/apis/AdminApis";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { COMPONENTS_MAP } from "./utils/utils";
import { Form } from "antd";
import Button from "@/components/ui/Button/Button";
import "./styles/admin-update-content.css";

const AdminUpdateContentPage = () => {
  const { token } = useSelector((state) => state.auth);
  const searchParams = useSearchParams();
  const [form] = Form.useForm();
  const [initialContent, setInitialContent] = useState({});

  const menuParam = searchParams.get("menu");

  const getPagesContent = async () => {
    const res = await API_ALL_PAGES_CONTENT(token);
    const parsedContent =
      res && res.content ? JSON.parse(res.content || "{}") : {};
    setInitialContent(parsedContent);
    form.resetFields();
    form.setFieldsValue({
      content: parsedContent || {},
    });
  };

  const handleSubmit = async (values) => {
    const updatedContent = {
      ...initialContent,
      ...values.content,
    };
    const payload = { content: JSON.stringify(updatedContent) };
    await API_UPDATE_PAGE_CONTENT(token, payload);
    setInitialContent(updatedContent);
  };

  useEffect(() => {
    getPagesContent();
  }, [menuParam]);

  const FieldsComponent =
    COMPONENTS_MAP[menuParam] ||
    (() => <div>Please select a section from the menu.</div>);

  return (
    <div className="adm-cnt-upd-form-wrapper">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ content: initialContent }}
        style={{ width: "100%" }}
      >
        <div className="app-input-form">
          <FieldsComponent form={form} />
        </div>
        <Form.Item>
          <div className="adm-cnt-upd-action-btns">
            <Button variant="filled-animated" type="submit">
              Save Changes
            </Button>

            <Button
              variant="danger"
              onClick={() => form.resetFields()}
              style={{ marginLeft: 10 }}
            >
              Discard
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminUpdateContentPage;
