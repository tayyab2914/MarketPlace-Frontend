"use client";
import React from "react";
import { Form } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import Button from "@/components/ui/Button/Button";
import { DollarSign, Edit3, Tag } from "lucide-react";
import { API_LISTING_CREATE } from "@/apis/ListingApis";
import { useSelector } from "react-redux";
import { CATEGORIES } from "@/utils/Constants";
import { categoryRules } from "@/utils/ValidationRules";

const CreateListingForm = () => {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);

  const onFinish = async (values) => {
    if (values.deadline) {
      values.deadline = values.deadline.format("YYYY-MM-DD");
    }
    const res = await API_LISTING_CREATE(token, values);
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
          {/* Title */}
          <CustomInputField
            inputType="input"
            name="title"
            label="Title"
            placeholder="Enter service title"
            addonBefore={<Edit3 size={16} strokeWidth={1} />}
            className={"app-input-field "}
          />

          {/* Description */}
          <CustomInputField
            inputType="textarea"
            name="description"
            label="Description"
            placeholder="Enter service description"
            className={"app-input-field "}
          />

          {/* Category (hardcoded select) */}
          <CustomInputField
            inputType="select"
            name="category"
            label="Category"
            placeholder="Select category"
            options={CATEGORIES} // hardcoded categories
            className={"app-input-field "}
            rules={categoryRules}
          />

          {/* Tags (user can add any tag) */}
          <CustomInputField
            inputType="select"
            name="tags"
            label="Tags"
            placeholder="Add tags"
            mode="tags"
            className={"app-input-field "}
          />

          {/* Budget */}
          <CustomInputField
            inputType="number"
            name="budget"
            label="Budget ($)"
            placeholder="e.g. 4000"
            addonBefore={<DollarSign size={16} strokeWidth={1} />}
            className={"app-input-field "}
          />

          {/* Deadline */}
          <CustomInputField
            inputType="date"
            name="deadline"
            label="Deadline"
            type="date"
            className={"app-input-field "}
          />

          {/* Public Switch */}
          <CustomInputField
            inputType="switch"
            name="is_public"
            label="Make this listing public?"
          />

          {/* Submit Button */}
          <Button variant="filled-animated" type="submit" h="50px">
            <span>Create</span>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateListingForm;
