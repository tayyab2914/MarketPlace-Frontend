import React from "react";
import { Form, Button, Divider } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Minus, Plus } from "lucide-react";

const ADMPrivacy = ({ form }) => {
  return (
    <>
      <h3 className="adm-cnt-upd-form-sub-heading">Privacy Policy</h3>
      <Divider />
      <Form.List name={["content", "privacyPolicy"]}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <div key={key} className="adm-cnt-upd-step">
                {/* Section Heading */}
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "heading"]}
                  label="Section Heading"
                  placeholder="Enter heading"
                />

                {/* Section Text */}
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "text"]}
                  label="Section Text"
                  placeholder="Enter text"
                  inputType="textarea"
                  rows={4}
                />

                <Button
                  type="dashed"
                  danger
                  onClick={() => remove(name)}
                  style={{ marginTop: 10 ,height:"35px"}}
                >
                  <Minus /> Remove Section
                </Button>
              </div>
            ))}

            <Button
              type="dashed"
              onClick={() => add()}
              style={{ marginTop: 10 ,height:"35px"}}
            >
              <Plus /> Add Section
            </Button>
          </>
        )}
      </Form.List>
    </>
  );
};

export default ADMPrivacy;
