import React from "react";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Collapse, Divider, Form, Button } from "antd";
import { Minus, Plus } from "lucide-react";

const { Panel } = Collapse;

const ADMAbout = ({ form }) => {
  return (
    <>
      <h3 className="adm-cnt-upd-form-sub-heading">About Us</h3>
      <Divider />
      <div className="adm-cnt-upd-collapses-wrapper">
        <Collapse ghost accordion defaultActiveKey={"info"}>
          {/* Info Section */}
          <Panel header="Information Section" key="info">
            <CustomInputField
              className="app-input-field"
              name={["content", "about", "info", "title"]}
              label="Title"
              inputType="input"
              placeholder="Enter about us title"
              rules={[{ required: true, message: "Title is required" }]}
            />

            <CustomInputField
              className="app-input-field"
              name={["content", "about", "info", "description"]}
              label="Description"
              placeholder="Enter description"
              inputType="textarea"
              rows={6}
              rules={[{ required: true, message: "Description is required" }]}
            />

            {/* Features List (heading + text like Terms) */}
            <h4 className="adm-cnt-upd-form-sub-heading">Features</h4>
            <Form.List name={["content", "about", "info", "features"]}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name }) => (
                    <div key={key} className="adm-cnt-upd-step">
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "heading"]}
                        label="Feature Heading"
                        placeholder="Enter feature heading"
                      />

                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "text"]}
                        label="Feature Text"
                        placeholder="Enter feature description"
                        inputType="textarea"
                        rows={3}
                      />

                      <Button
                        type="dashed"
                        danger
                        onClick={() => remove(name)}
                        style={{ marginTop: 10, height: "35px" }}
                      >
                        <Minus size={14} /> Remove Feature
                      </Button>
                    </div>
                  ))}

                  <Divider size="small" />
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ marginTop: 10, height: "35px" }}
                  >
                    <Plus size={14} /> Add Feature
                  </Button>
                </>
              )}
            </Form.List>

            <CustomInputField
              className="app-input-field"
              name={["content", "about", "info", "knowMoreLink"]}
              label="Know More Link"
              placeholder="Enter link URL"
            />

            <CustomInputField
              className="app-input-field"
              name={["content", "about", "info", "knowMoreText"]}
              label="Know More Text"
              placeholder="Enter link text"
            />

            <CustomInputField
              className="app-input-field"
              name={["content", "about", "howDoesItWorkTitle"]}
              label="How Service Works Title"
              placeholder="Enter section title"
            />
          </Panel>
        </Collapse>

        {/* How It Works Section */}
        <Collapse ghost accordion>
          <Panel header="How It Works Section" key="howItWorks">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="adm-cnt-upd-step">
                <CustomInputField
                  className="app-input-field"
                  name={["content", "about", "howDoesItWork", idx, "icon"]}
                  label={`Step ${idx + 1} Icon`}
                  placeholder="Enter lucide icon name (e.g., FileText)" 
                />
                <CustomInputField
                  className="app-input-field"
                  name={["content", "about", "howDoesItWork", idx, "title"]}
                  label={`Step ${idx + 1} Title`}
                  placeholder="Enter step title"
                />
                <CustomInputField
                  className="app-input-field"
                  name={[
                    "content",
                    "about",
                    "howDoesItWork",
                    idx,
                    "description",
                  ]}
                  label={`Step ${idx + 1} Description`}
                  placeholder="Enter step description"
                  inputType="textarea"
                  rows={3}
                />
              </div>
            ))}
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default ADMAbout;
