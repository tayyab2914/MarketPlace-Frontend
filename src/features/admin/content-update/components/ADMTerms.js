
import React from "react";
import { Form, Button, Divider } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Minus, Plus } from "lucide-react";

const ADMTerms = ({ form }) => {
  return (
    <>
      <CustomInputField
        className="app-input-field"
        form={form}
        name={["content","terms", "lastUpdated"]}
        label="Last Updated"
        placeholder="Enter Last Updated"
      />

      <Form.List name={["content","terms", "sections"]}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <div key={key} className="adm-cnt-upd-step">
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "heading"]}
                  label="Section Heading"
                  placeholder="Enter heading"
                />

                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "subHeading"]}
                  label="Section Subheading (Optional)"
                  placeholder="Enter subheading"
                />

                <Form.List name={[name, "paragraphs"]}>
                  {(paraFields, { add: addPara, remove: removePara }) => (
                    <>
                      {paraFields.map(({ key: pKey, name: pName }) => (
                        <div key={pKey} className="adm-cnt-upd-step ml-4 mt-3">
                          <CustomInputField
                            className="app-input-field"
                            form={form}
                            name={[pName]}
                            label={`Paragraph ${pKey + 1}`}
                            placeholder="Enter paragraph text"
                            inputType="textarea"
                            rows={3}
                          />
                          <Button
                            type="dashed"
                            danger
                            onClick={() => removePara(pName)}
                            style={{ marginTop: 8, height: "35px" }}
                          >
                            <Minus size={14} /> Remove Paragraph
                          </Button>
                        </div>
                      ))}

                      <Button
                        type="dashed"
                        onClick={() => addPara()}
                        style={{
                          marginTop: 10,
                          height: "35px",
                          marginLeft: 16,
                        }}
                      >
                        <Plus size={14} /> Add Paragraph
                      </Button>
                    </>
                  )}
                </Form.List>

                <Button
                  type="dashed"
                  danger
                  onClick={() => remove(name)}
                  style={{ marginTop: 10, height: "35px" }}
                >
                  <Minus size={14} /> Remove Section
                </Button>

                <Divider />
              </div>
            ))}

            <Button
              type="dashed"
              onClick={() => add()}
              style={{ marginTop: 10, height: "35px" }}
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
