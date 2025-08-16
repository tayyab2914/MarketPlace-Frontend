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
  inputType = "input",
  options = [],
  min,
  max,
  addonBefore,
  addonAfter,
  rows = 4,
  beforeUpload,
  showUploadList = false,
  accept,
  buttonText = "Upload",
  disabled = false,
  inputStyle,
  className = "",
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
        getValueFromEvent={inputType === "upload" ? normFile : undefined}

      >
        {inputType === "input" && (
          <Input
            placeholder={placeholder}
            prefix={prefix}
            type={type}
            disabled={disabled}
            addonBefore={addonBefore}
            style={inputStyle}
            variant="unbordered"
            className={`${className} custom-input-field-item`}
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
            {...rest}
            variant="unbordered"
            className={`${className} custom-input-field-item`}
          />
        )}

        {inputType === "textarea" && (
          <Input.TextArea
            placeholder={placeholder}
            rows={rows}
            disabled={disabled}
            variant="unbordered"
            className={`${className} custom-input-field-item`}
            {...rest}
          />
        )}
        {inputType === "select" && (
          <Select
            placeholder={placeholder}
            options={options}
            disabled={disabled}
            className={`${className} custom-input-field-item`}
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
            variant="unbordered"
            {...rest}
          />
        )}

        {inputType === "date" && (
          <DatePicker
            style={{ width: "100%" }}
            placeholder={placeholder || "Select a date"}
            disabled={disabled}
            allowClear
            className={`${className} custom-input-field-item`}
            {...rest}
          />
        )}
      </Form.Item>
    </div>
  );
};

export default CustomInputField;
