"use client";
import React from "react";
import { Form } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import Button from "@/components/ui/Button/Button";
import { DollarSign, Edit3, Tag } from "lucide-react";
import {
  categoryRules,
  descriptionRules,
  priceRules,
  titleRules,
} from "@/utils/ValidationRules";
import { API_SERVICE_CREATE } from "@/apis/ServiceApis";
import { useSelector } from "react-redux";

const CreateServiceForm = () => {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);

  const onFinish = async (values) => {
    const res = await API_SERVICE_CREATE(token, values);
    if (res) {
      form.resetFields();
    }
  };

  return (
    <div className="max-w-4xl mx-auto -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
      <div className="w-full rounded-3xl border border-gray-300 p-6 sm:p-8 shadow-sm bg-white">
       

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          className="app-input-form"
        >
          <CustomInputField
            inputType="input"
            name="title"
            label="Title"
            placeholder="Enter service title"
            rules={titleRules}
            className={"app-input-field "}
            addonBefore={<Edit3 size={16} strokeWidth={1} />}
          />

          <CustomInputField
            inputType="textarea"
            name="description"
            label="Description"
            placeholder="Enter service description"
            rules={descriptionRules}
            className={"app-input-field "}
          />

          <CustomInputField
            inputType="input"
            name="category"
            label="Category"
            placeholder="e.g. Design"
            rules={categoryRules}
            className={"app-input-field "}
            addonBefore={<Tag size={16} strokeWidth={1} />}
          />

          <CustomInputField
            inputType="number"
            name="price_starting_from"
            label="Price Starting From ($)"
            placeholder="e.g. 1200"
            rules={priceRules}
            className={"app-input-field "}
            addonBefore={<DollarSign size={16} strokeWidth={1} />}
          />

          <Button variant="filled-animated" type="submit" h="50px">
            <span>Create</span>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateServiceForm;
