import React from "react";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Collapse, Divider } from "antd";

const { Panel } = Collapse;
const ADMAbout = () => {
  return (
    <>
      <h3 className="adm-cnt-upd-form-sub-heading">About Us</h3>
      <Divider  />
      <div className="adm-cnt-upd-collapses-wrapper">
        <Collapse ghost accordion defaultActiveKey={"info"} >
          {/* Hero Section */}
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

            <CustomInputField
              className="app-input-field"
              name={["content", "about", "info", "experienceYears"]}
              label="Years of Experience"
              placeholder="Enter experience years"
              inputType="number"
              min={0}
              rules={[{ required: true, message: "Experience years required" }]}
            />

            <CustomInputField
              className="app-input-field"
              name={["content", "about", "info", "features"]}
              label="Features"
              placeholder="Enter features"
              inputType="tags"
            />

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

        <Collapse ghost accordion>
          {/* How It Works Section */}
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
