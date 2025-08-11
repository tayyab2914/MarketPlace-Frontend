import React from "react";
import {
  createInitialFileList,
} from "../../../utils/utils";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";

import {
  Hash,
  Building2,
  FileText,
  Phone,
  Briefcase,
  MapPin,
} from "lucide-react";
import { VALIDATE_IMAGE_BEFORE_UPLOAD } from "@/utils/Methods";
const EditForm = ({ company, fileList, onFileChange }) => {
  return (
    <div>
      {" "}
      <CustomInputField
        name="id"
        label="Company ID"
        inputType="input"
        disabled
        className="adm-company-input-field"
        addonBefore={<Hash size={16} />}
      />
      <CustomInputField
        name="name"
        label="Company Name"
        placeholder="Enter company name"
        inputType="input"
        rules={[{ required: true, message: "Please enter company name" }]}
        className="adm-company-input-field"
        addonBefore={<Building2 size={16} />}
      />
      <CustomInputField
        name="company_description"
        label="Description"
        placeholder="Enter company description"
        inputType="textarea"
        rows={4}
        className="adm-company-input-field"
        addonBefore={<FileText size={16} />}
      />
      <CustomInputField
        name="phone_no"
        label="Phone Number"
        placeholder="Enter phone number"
        inputType="input"
        className="adm-company-input-field"
        addonBefore={<Phone size={16} />}
      />
      <CustomInputField
        name="industry"
        label="Industry"
        placeholder="Enter industry"
        inputType="input"
        className="adm-company-input-field"
        addonBefore={<Briefcase size={16} />}
      />
      <CustomInputField
        name="location"
        label="Location"
        placeholder="Enter location"
        inputType="input"
        className="adm-company-input-field"
        addonBefore={<MapPin size={16} />}
      />
      <CustomInputField
        name="profile_image"
        label="Profile Image"
        inputType="upload"
        initialFileList={
          fileList?.length ? fileList : createInitialFileList(company)
        }
        onFileChange={onFileChange}
        beforeUpload={VALIDATE_IMAGE_BEFORE_UPLOAD}
        showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
        accept="image/*"
      />
    </div>
  );
};

export default EditForm;
