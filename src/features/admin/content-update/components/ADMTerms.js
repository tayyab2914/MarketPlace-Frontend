import React from "react";
import { Form, Button, Divider } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Minus, Plus } from "lucide-react";

const ADMTerms = ({ form }) => {
  return (
    <>
      <h3 className="adm-cnt-upd-form-sub-heading">Terms & Conditions</h3>
      <Divider/>
      <Form.List name={["content", "terms"]}>
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
                  <Minus size={14} /> Remove Section
                </Button>
              </div>
            ))}

            <Divider size="small" />
            <Button
              type="dashed"
              onClick={() => add()}
              style={{ marginTop: 10 ,height:"35px"}}
            >
              <Plus size={14} /> Add Section
            </Button>
          </>
        )}
      </Form.List>
    </>
  );
};

export default ADMTerms;
