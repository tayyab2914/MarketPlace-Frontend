import React from "react";
import { Form, Button, Space, InputNumber, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";

const ADMFooter = ({ form }) => {
  return (
    <>
      <h3 className="adm-cnt-upd-form-sub-heading">Footer</h3>
      <Divider />
      <CustomInputField
        className="app-input-field"
        form={form}
        name={["content", "footer", "leftCounter", "text"]}
        label="Left Counter Text"
        placeholder="Enter left counter text"
        rules={[{ required: true, message: "Text is required" }]}
      />
      <CustomInputField
        className="app-input-field"
        form={form}
        name={["content", "footer", "leftCounter", "count"]}
        label="Left Counter Number"
        placeholder="Enter left counter number"
        inputType="number"
        min={0}
        rules={[{ required: true, message: "Number is required" }]}
      />

      {/* Right Counter */}
      <CustomInputField
        className="app-input-field"
        form={form}
        name={["content", "footer", "rightCounter", "text"]}
        label="Right Counter Text"
        placeholder="Enter right counter text"
        rules={[{ required: true, message: "Text is required" }]}
      />
      <CustomInputField
        className="app-input-field"
        form={form}
        name={["content", "footer", "rightCounter", "count"]}
        label="Right Counter Number"
        placeholder="Enter right counter number"
        inputType="number"
        min={0}
        rules={[{ required: true, message: "Number is required" }]}
      />

      {/* Copyright */}
      <CustomInputField
        className="app-input-field"
        form={form}
        name={["content", "footer", "copyrightText"]}
        label="Copyright Text"
        placeholder="Enter copyright text"
        rules={[{ required: true, message: "Copyright is required" }]}
      />

      {/* Social Icons */}
      <Form.List name={["content", "footer", "icons"]}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                align="baseline"
                style={{ display: "flex", marginBottom: 8 }}
              >
                <CustomInputField
                  className="app-input-field"
                  {...restField}
                  name={[name, "label"]}
                  label="Icon Label"
                  placeholder="Enter icon label"
                  rules={[{ required: true, message: "Label is required" }]}
                />
                <CustomInputField
                  className="app-input-field"
                  {...restField}
                  name={[name, "href"]}
                  label="Icon URL"
                  placeholder="Enter URL"
                  rules={[{ required: true, message: "URL is required" }]}
                />
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Icon
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
};

export default ADMFooter;
