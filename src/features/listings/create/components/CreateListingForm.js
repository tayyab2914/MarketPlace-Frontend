"use client";
import React, { useEffect } from "react";
import { DatePicker, Form } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import Button from "@/components/ui/Button/Button";
import { DollarSign, Edit3, Tag } from "lucide-react";
import { API_SERVICE_CREATE } from "@/apis/ServiceApis";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { API_LISTING_CREATE } from "@/apis/ListingApis";

const initialFormValues = {
  title: "Build a cross-platform mobile app for booking services",
  description:
    "We're looking to develop a cross-platform mobile application (iOS and Android) for our home services marketplace. It should include user registration, service booking, real-time chat, and payment integration. Experience with Flutter or React Native is preferred.",
  category: "Mobile Development",
  tags: ["mobile", "flutter", "react native", "booking", "payments"],
  budget: 4000.0,
  deadline: "2025-10-01",
  is_public: true,
};

const tagOptions = initialFormValues?.tags?.map((tag) => ({
  label: tag,
  value: tag,
}));

const CreateListingForm = () => {
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    form.setFieldsValue({
      ...initialFormValues,
      deadline: dayjs(initialFormValues?.deadline, "YYYY-MM-DD"),
    });
  }, [form]);

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
          <CustomInputField
            inputType="input"
            name="title"
            label="Title"
            placeholder="Enter service title"
            addonBefore={<Edit3 size={16} strokeWidth={1} />}
            className={"app-input-field "}
          />

          <CustomInputField
            inputType="textarea"
            name="description"
            label="Description"
            placeholder="Enter service description"
            className={"app-input-field "}
          />

          <CustomInputField
            inputType="input"
            name="category"
            label="Category"
            placeholder="e.g. Design"
            addonBefore={<Tag size={16} strokeWidth={1} />}
            className={"app-input-field "}
          />

          <CustomInputField
            inputType="select"
            name="tags"
            label="Tags"
            placeholder="Select tags"
            mode="tags"
            options={tagOptions}
            className={"app-input-field "}
          />

          <CustomInputField
            inputType="number"
            name="budget"
            label="Budget ($)"
            placeholder="e.g. 4000"
            addonBefore={<DollarSign size={16} strokeWidth={1} />}
            className={"app-input-field "}
          />

          <CustomInputField
            inputType="date"
            name="deadline"
            label="Deadline"
            type="date"
            className={"app-input-field "}
          />

          <CustomInputField
            inputType="switch"
            name="is_public"
            label="Make this listing public?"
          />

          <Button variant="filled-animated" type="submit" h="50px">
            <span>Create</span>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateListingForm;
