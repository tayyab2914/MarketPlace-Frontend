import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Button,
  Switch,
  Checkbox,
  DatePicker,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./CustomInputField.css";
import dayjs from "dayjs";

const CustomInputField = ({
  name,
  label,
  placeholder,
  rules = [],
  styles,
  prefix,
  value,
  onChange,
  type = "text",
  inputType = "input", // 'input', 'textarea', 'number', 'select', 'upload', 'switch'
  options = [], // for select
  min,
  max,
  addonBefore,
  rows = 4, // for textarea
  fileList, // for upload
  onFileChange, // for upload
  beforeUpload, // for upload
  showUploadList = false, // for upload
  accept, // for upload
  buttonText = "Upload", // for upload
  disabled = false,
  initialValue,
  addonAfter,
  inputStyle,
  ...rest
}) => (
  <div style={styles} className="custom-input-field-container">
    <p className="custom-input-field-label">{label}</p>
    <Form.Item
      name={name}
      rules={rules}
      valuePropName={
        inputType === "switch" || inputType === "checkbox" ? "checked" : "value"
      }
      className="custom-input-field-item"
    >
      {inputType === "input" && (
        <Input
          placeholder={placeholder}
          prefix={prefix}
          type={type}
          disabled={disabled}
          addonBefore={addonBefore}
          style={inputStyle}
          {...rest}
        />
      )}
      {inputType === "textarea" && (
        <Input.TextArea
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          {...rest}
        />
      )}
      {inputType === "number" && (
        <InputNumber
          placeholder={placeholder}
          min={min}
          max={max}
          addonBefore={addonBefore}
          addonAfter={addonAfter}
          disabled={disabled}
          style={{ width: "100%", height: "40px" }}
          {...rest}
        />
      )}
      {inputType === "select" && (
        <Select
          placeholder={placeholder}
          options={options}
          disabled={disabled}
          style={{ width: "100%", height: "40px" }}
          {...rest}
        />
      )}
      {inputType === "upload" && (
        <Upload
          fileList={fileList}
          onChange={onFileChange}
          beforeUpload={beforeUpload}
          showUploadList={showUploadList}
          accept={accept}
          disabled={disabled}
          maxCount={1}
          {...rest}
        >
          <Button icon={<UploadOutlined />} disabled={disabled}>
            {buttonText}
          </Button>
        </Upload>
      )}
      {inputType === "switch" && (
        <Switch
          checked={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
      )}
      {inputType === "checkbox" && (
        <Checkbox disabled={disabled} {...rest}>
          {placeholder}
        </Checkbox>
      )}
      {inputType === "tags" && (
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder={placeholder}
          tokenSeparators={[","]}
          {...rest}
        />
      )}

      {inputType === "date" && (
        <DatePicker
          style={{ width: "100%" }}
          placeholder={placeholder || "Select a date"}
          disabled={disabled}
          allowClear
          {...rest}
          defaultValue={
            initialValue ? dayjs(initialValue, "YYYY-MM-DD") : undefined
          }
        />
      )}
    </Form.Item>
  </div>
);

export default CustomInputField;
