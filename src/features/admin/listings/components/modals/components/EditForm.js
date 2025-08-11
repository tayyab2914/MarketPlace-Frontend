import React from "react";

import {
  Hash,
  Type,
  FileText,
  Layers,
  Tags,
  DollarSign,
  Calendar,
  Flag,
  Eye,
  ShieldCheck,
  Building2,
} from "lucide-react";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";

const EditForm = () => {
  return (
    <div className="adm-company-form-inner">
      <CustomInputField
        name="id"
        label="Listing ID"
        inputType="input"
        disabled
        className="adm-lis-input-field"
        addonBefore={<Hash size={16} />}
      />

      <CustomInputField
        name="title"
        label="Title"
        placeholder="Enter listing title"
        inputType="input"
        rules={[{ required: true, message: "Please enter title" }]}
        className="adm-lis-input-field"
        addonBefore={<Type size={16} />}
      />

      <CustomInputField
        name="description"
        label="Description"
        placeholder="Enter description"
        inputType="textarea"
        rows={4}
        className="adm-lis-input-field"
        addonBefore={<FileText size={16} />}
      />

      <CustomInputField
        name="category"
        label="Category"
        placeholder="Enter category"
        inputType="input"
        className="adm-lis-input-field"
        addonBefore={<Layers size={16} />}
      />

      <CustomInputField
        name="tags"
        label="Tags (comma separated)"
        placeholder="e.g. mobile, flutter, react native"
        inputType="input"
        className="adm-lis-input-field"
        addonBefore={<Tags size={16} />}
      />

      <CustomInputField
        name="budget"
        label="Budget"
        placeholder="Enter budget"
        inputType="number"
        className="adm-lis-input-field"
        addonBefore={<DollarSign size={16} />}
      />

      <CustomInputField
        name="deadline"
        label="Deadline"
        placeholder="YYYY-MM-DD"
        inputType="date"
        className="adm-lis-input-field"
        addonBefore={<Calendar size={16} />}
      />

      <CustomInputField
        name="status"
        label="Status"
        placeholder="open, closed, etc."
        inputType="input"
        className="adm-lis-input-field"
        addonBefore={<Flag size={16} />}
      />

      <CustomInputField
        name="is_public"
        label="Is Public"
        inputType="switch"
        addonBefore={<Eye size={16} />}
      />

      <CustomInputField
        name="verified_by_admin"
        label="Verified by Admin"
        inputType="switch"
        addonBefore={<ShieldCheck size={16} />}
      />

      <CustomInputField
        name="company"
        label="Company ID"
        inputType="number"
        disabled
        className="adm-lis-input-field"
        addonBefore={<Building2 size={16} />}
      />
    </div>
  );
};

export default EditForm;
