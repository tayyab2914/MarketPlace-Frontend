import React from "react";
import { Form, Button, Divider } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Minus, Plus } from "lucide-react";

const ADMTopExperts = ({ form }) => {
  return (
    <>
      <h3 className="adm-cnt-upd-form-sub-heading">Manage Top Experts</h3>
      <Divider />
      <div className="adm-cnt-upd-step">
        <CustomInputField
          className="app-input-field"
          form={form}
          name={["content", "topExperts", "header", "title"]}
          label="Header Title"
          placeholder="Enter header title"
        />
        <CustomInputField
          className="app-input-field"
          form={form}
          name={["content", "topExperts", "header", "highlightWord"]}
          label="Highlight Word"
          placeholder="Enter word to highlight"
        />
        <CustomInputField
          className="app-input-field"
          form={form}
          name={["content", "topExperts", "header", "description"]}
          label="Header Description"
          placeholder="Enter description"
          inputType="textarea"
          rows={3}
        />
        <CustomInputField
          className="app-input-field"
          form={form}
          name={["content", "topExperts", "header", "allExpertsLink", "href"]}
          label="All Experts Link URL"
          placeholder="Enter URL"
        />
        <CustomInputField
          className="app-input-field"
          form={form}
          name={["content", "topExperts", "header", "allExpertsLink", "text"]}
          label="All Experts Link Text"
          placeholder="Enter button text"
        />
      </div>

      {/* Experts List */}
      <Form.List name={["content", "topExperts", "experts"]}>
        {(fields, { add, remove }) => (
          <>
            {fields?.map(({ key, name }) => (
              <div key={key} className="adm-cnt-upd-step">
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "name"]}
                  label="Expert Name"
                  placeholder="Enter expert name"
                />
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "location"]}
                  label="Location"
                  placeholder="Enter expert location"
                />
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "badges"]}
                  label="Badges"
                  placeholder="Enter badges separated by comma"
                  inputType="tags"
                />
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "priceRange"]}
                  label="Price Range"
                  placeholder="Enter price range"
                />
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "tags"]}
                  label="Tags"
                  placeholder="Enter tags separated by comma"
                  inputType="tags"
                />
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "skills"]}
                  label="Skills"
                  placeholder="Enter skills separated by comma"
                  inputType="tags"
                />

                {/* Links instead of uploads */}
                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "verifiedBadgeImage"]}
                  label="Verified Badge Image URL"
                  placeholder="Enter verified badge image link"
                />

                <Form.List name={[name, "sliderImages"]}>
                  {(sliderFields, { add: addSlider, remove: removeSlider }) => (
                    <>
                      {sliderFields.map((sliderField) => (
                        <div
                          key={sliderField.key}
                          style={{ display: "flex", gap: 10, marginBottom: 10 }}
                        >
                          <CustomInputField
                            className="app-input-field"
                            form={form}
                            name={sliderField.name}
                            label="Slider Image URL"
                            placeholder="Enter slider image link"
                          />
                          <Button
                            type="dashed"
                            danger
                            style={{ marginTop: 10, height: "35px" }}
                            onClick={() => removeSlider(sliderField.name)}
                          >
                            <Minus /> Remove
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="dashed"
                        onClick={() => addSlider()}
                        style={{ marginTop: 10, height: "35px" }}
                      >
                        <Plus /> Add Slider Image URL
                      </Button>
                    </>
                  )}
                </Form.List>

                <CustomInputField
                  className="app-input-field"
                  form={form}
                  name={[name, "profileLink"]}
                  label="Profile Link"
                  placeholder="Enter profile URL"
                />

                <Button
                  type="dashed"
                  danger
                  onClick={() => remove(name)}
                  style={{ marginTop: 10, height: "35px" }}
                >
                  <Minus /> Remove Expert
                </Button>
              </div>
            ))}

            <Button
              type="dashed"
              onClick={() => add()}
              style={{ marginTop: 10, height: "35px" }}
            >
              <Plus /> Add Expert
            </Button>
          </>
        )}
      </Form.List>
    </>
  );
};

export default ADMTopExperts;
