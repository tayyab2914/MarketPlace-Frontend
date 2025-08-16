import React from "react";
import { Form, Button,Divider } from "antd";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import { Minus } from "lucide-react";

const ADMFaq = () => {
  return (
    <>
    <h3 className="adm-cnt-upd-form-sub-heading">FAQ</h3>
    <Divider  />
      <CustomInputField
        className="app-input-field"
        name={["content", "faq", "title"]}
        label="FAQ Section Title"
        placeholder="Enter FAQ section title"
        rules={[{ required: true, message: "Title is required" }]}
      />

      {/* FAQ Introduction Text */}
      <CustomInputField
        className="app-input-field"
        name={["content", "faq", "introText"]}
        label="FAQ Intro Text"
        placeholder="Enter introduction text"
        inputType="textarea"
        rows={3}
      />
      <Form.List name={["content", "faq", "faqs"]}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <>
                <CustomInputField
                  className="app-input-field"
                  {...restField}
                  name={[name, "question"]}
                  label="Question"
                  placeholder="Enter question"
                  rules={[{ required: true, message: "Question is required" }]}
                />
                <CustomInputField
                  className="app-input-field"
                  {...restField}
                  name={[name, "answer"]}
                  label="Answer"
                  placeholder="Enter answer"
                  inputType="textarea"
                  rows={3}
                  rules={[{ required: true, message: "Answer is required" }]}
                />
                <Button
                  type="dashed"
                  danger
                  onClick={() => remove(name)}
                  style={{ marginTop: 10 ,height:"35px"}}
                >
                  <Minus size={14} /> Remove
                </Button>
              </>
            ))}
          </>
        )}
      </Form.List>
    </>
  );
};

export default ADMFaq;
