import React from "react";
import { Form, Button, Divider, Collapse } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Minus, Plus } from "lucide-react";

const { Panel } = Collapse;

const ADMHome = ({ form }) => {
  return (
    <>
      <h3 className="adm-cnt-upd-form-sub-heading">Home</h3>
      <Divider />
      <div className="adm-cnt-upd-collapses-wrapper">
        {" "}
        <Collapse ghost accordion defaultActiveKey={"hero"}>
          {/* Hero Section */}
          <Panel header="Hero Section" key="hero">
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "hero", "subtitle"]}
              label="Hero Subtitle"
              placeholder="Enter hero subtitle"
            />
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "hero", "title"]}
              label="Hero Title"
              placeholder="Enter hero title"
            />
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "hero", "description"]}
              label="Hero Description"
              placeholder="Enter hero description"
              inputType="textarea"
              rows={4}
            />
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "hero", "searchButtonText"]}
              label="Hero Button Text"
              placeholder="Enter button text"
            />
          </Panel>
        </Collapse>
        <Collapse ghost accordion>
          {/* How It Works Section */}
          <Panel header="How It Works Section" key="howItWorks">
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "howItWorks", "heading"]}
              label="Heading"
              placeholder="Enter heading"
            />
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "howItWorks", "subheading"]}
              label="Subheading"
              placeholder="Enter subheading"
            />
            <Form.List name={["content", "home", "howItWorks", "steps"]}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name }) => (
                    <div
                      key={key}
                      style={{
                        marginBottom: 20,
                        border: "1px solid #ddd",
                        padding: 10,
                      }}
                    >
                      <h4>Step {name + 1}</h4>
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "title"]}
                        label="Step Title"
                        placeholder="Enter step title"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "contentTitle"]}
                        label="Content Title"
                        placeholder="Enter content title"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "contentDescription"]}
                        label="Content Description"
                        placeholder="Enter content description"
                        inputType="textarea"
                        rows={4}
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "imageSrc"]}
                        label="Image Source URL"
                        placeholder="Enter image URL"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "ctaLink"]}
                        label="CTA Link"
                        placeholder="Enter CTA link"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "ctaText"]}
                        label="CTA Text"
                        placeholder="Enter CTA text"
                      />
                      <Button type="dashed" danger onClick={() => remove(name)}>
                        <Minus size={14} /> Remove Step
                      </Button>
                    </div>
                  ))}
                  <Divider size="small" />
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ marginTop: 10 }}
                  >
                    <Plus size={14} /> Add Step
                  </Button>
                </>
              )}
            </Form.List>
          </Panel>
        </Collapse>
        <Collapse ghost accordion>
          {/* Booking Section */}
          <Panel header="Booking Section" key="booking">
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "booking", "titleSmall"]}
              label="Title Small"
              placeholder="Enter title small"
            />
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "booking", "heading"]}
              label="Heading"
              placeholder="Enter heading"
            />
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "booking", "description"]}
              label="Description"
              placeholder="Enter description"
              inputType="textarea"
              rows={4}
            />
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "booking", "subDescription"]}
              label="Sub Description"
              placeholder="Enter sub description"
            />
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "booking", "cta", "href"]}
              label="CTA Link"
              placeholder="Enter CTA link"
            />
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "booking", "cta", "text"]}
              label="CTA Text"
              placeholder="Enter CTA text"
            />
            <CustomInputField
              className="app-input-field"
              form={form}
              name={["content", "home", "booking", "imageSrc"]}
              label="Image Source"
              placeholder="Enter image source"
            />
            <Form.List name={["content", "home", "booking", "features"]}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name }) => (
                    <div key={key} style={{ marginBottom: 10 }}>
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "iconClass"]}
                        label="Feature Icon Class"
                        placeholder="Enter icon class"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "text"]}
                        label="Feature Text"
                        placeholder="Enter feature text"
                      />
                      <Button type="dashed" danger onClick={() => remove(name)}>
                        <Minus size={14} /> Remove Feature
                      </Button>
                    </div>
                  ))}
                  <Divider size="small" />
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ marginTop: 10 }}
                  >
                    <Plus size={14} /> Add Feature
                  </Button>
                </>
              )}
            </Form.List>
          </Panel>
        </Collapse>
        <Collapse ghost accordion>
          {/* Find Work / Hiring Section */}
          <Panel header="Find Work / Hiring Section" key="findWork">
            <Form.List name={["content", "home", "findWork", "profiles"]}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name }) => (
                    <div
                      key={key}
                      style={{
                        marginBottom: 20,
                        border: "1px solid #ddd",
                        padding: 10,
                      }}
                    >
                      <h4>Profile {name + 1}</h4>
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "badgeText"]}
                        label="Badge Text"
                        placeholder="Enter badge text"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "reviewImage"]}
                        label="Review Image URL"
                        placeholder="Enter image URL"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "rating"]}
                        label="Rating"
                        placeholder="Enter rating"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "reviewCount"]}
                        label="Review Count"
                        placeholder="Enter review count"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "verifyBadgeImg"]}
                        label="Verify Badge Image URL"
                        placeholder="Enter URL"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "heading"]}
                        label="Heading"
                        placeholder="Enter heading"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "description"]}
                        label="Description"
                        placeholder="Enter description"
                        inputType="textarea"
                        rows={3}
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "detail1"]}
                        label="Detail 1"
                        placeholder="Enter detail 1"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "detail2"]}
                        label="Detail 2"
                        placeholder="Enter detail 2"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "ctaHref"]}
                        label="CTA Link"
                        placeholder="Enter CTA link"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "ctaText"]}
                        label="CTA Text"
                        placeholder="Enter CTA text"
                      />
                      <Button type="dashed" danger onClick={() => remove(name)}>
                        <Minus size={14} /> Remove Profile
                      </Button>
                    </div>
                  ))}
                  <Divider size="small" />
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ marginTop: 10 }}
                  >
                    <Plus size={14} /> Add Profile
                  </Button>
                </>
              )}
            </Form.List>
          </Panel>
        </Collapse>
        <Collapse ghost accordion>
          {/* Posts Section */}
          <Panel header="Posts Section" key="posts">
            <Form.List name={["content", "home", "posts"]}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name }) => (
                    <div key={key} style={{ marginBottom: 10 }}>
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "image"]}
                        label="Post Image"
                        placeholder="Enter image URL"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "category"]}
                        label="Category"
                        placeholder="Enter category"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "title"]}
                        label="Title"
                        placeholder="Enter title"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "date"]}
                        label="Date"
                        placeholder="Enter date"
                      />
                      <CustomInputField
                        className="app-input-field"
                        form={form}
                        name={[name, "link"]}
                        label="Link"
                        placeholder="Enter link URL"
                      />
                      <Button type="dashed" danger onClick={() => remove(name)}>
                        <Minus size={14} /> Remove Post
                      </Button>
                    </div>
                  ))}
                  <Divider size="small" />
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ marginTop: 10 }}
                  >
                    <Plus size={14} /> Add Post
                  </Button>
                </>
              )}
            </Form.List>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default ADMHome;
