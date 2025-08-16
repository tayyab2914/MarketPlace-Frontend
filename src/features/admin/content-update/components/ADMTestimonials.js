import React from "react";
import { Form, Button, Rate, Divider } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Minus, Plus } from "lucide-react";

const ADMTestimonials = ({ form }) => {
  return (
    <>
      <h3 className="adm-cnt-upd-form-sub-heading">Manage Testimonials</h3>
      <Divider />
      <Form.List name={["content", "testimonials"]}>
        {(fields, { add, remove }) => (
          <>
            {fields?.map(({ key, name }) => (
              <div key={key} className="adm-cnt-upd-step">
                {/* Rating */}
                <Form.Item
                  name={[name, "rating"]}
                  label="Rating"
                  rules={[{ required: true, message: "Rating is required" }]}
                >
                  <Rate />
                </Form.Item>

                {/* Testimonial Text */}
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "text"]}
                  label="Testimonial Text"
                  placeholder="Enter testimonial"
                  inputType="textarea"
                  rows={4}
                  rules={[{ required: true, message: "Text is required" }]}
                />

                {/* Author Name */}
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "author"]}
                  label="Author Name"
                  placeholder="Enter author name"
                  rules={[
                    { required: true, message: "Author name is required" },
                  ]}
                />

                {/* Author Handle */}
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "handle"]}
                  label="Author Handle"
                  placeholder="Enter author handle"
                />
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "avatar"]}
                  label="Author Avatar URL"
                  placeholder="Enter Author Avatar URL"
                />

                <Button
                  type="dashed"
                  danger
                  onClick={() => remove(name)}
                  style={{ marginTop: 10, height: "35px" }}
                >
                  <Minus /> Remove Testimonial
                </Button>
              </div>
            ))}

            <Button
              type="dashed"
              onClick={() => add()}
              style={{ marginTop: 10, height: "35px" }}
            >
              <Plus /> Add Testimonial
            </Button>
          </>
        )}
      </Form.List>
    </>
  );
};

export default ADMTestimonials;
