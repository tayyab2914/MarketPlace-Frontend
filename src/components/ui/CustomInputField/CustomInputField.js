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

const CustomInputField = ({
  name,
  label,
  placeholder,
  rules = [],
  styles,
  prefix,
  type = "text",
  inputType = "input", // 'input', 'textarea', 'number', 'select', 'upload', 'switch', 'checkbox', 'tags', 'date'
  options = [],
  min,
  max,
  addonBefore,
  addonAfter,
  rows = 4,
  beforeUpload, // for upload
  showUploadList = false, // for upload
  accept, // for upload
  buttonText = "Upload", // for upload
  disabled = false,
  inputStyle,
  ...rest
}) => {
  // Map Form.Item value prop names
  const valuePropName =
    inputType === "switch" || inputType === "checkbox"
      ? "checked"
      : inputType === "upload"
      ? "fileList"
      : "value";

  // Normalize Upload event -> fileList array (and keep only the last file)
  const normFile = (e) => {
    if (Array.isArray(e)) return e;
    return e?.fileList ? e.fileList.slice(-1) : [];
  };

  return (
    <div style={styles} className="custom-input-field-container">
      <p className="custom-input-field-label">{label}</p>

      <Form.Item
        name={name}
        rules={rules}
        valuePropName={valuePropName}
        // Only for Upload
        getValueFromEvent={inputType === "upload" ? normFile : undefined}
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
            style={{ width: "100%", height: 40 }}
            {...rest}
          />
        )}

        {inputType === "select" && (
          <Select
            placeholder={placeholder}
            options={options}
            disabled={disabled}
            style={{ width: "100%", height: 40 }}
            {...rest}
          />
        )}

        {inputType === "upload" && (
          <Upload
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

        {inputType === "switch" && <Switch disabled={disabled} {...rest} />}

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
          />
        )}
      </Form.Item>
    </div>
  );
};

export default CustomInputField;
