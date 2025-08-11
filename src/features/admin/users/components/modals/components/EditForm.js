import { emailRules, nameRules } from '@/utils/ValidationRules'
import React from 'react'
import { Key, Mail, User } from "lucide-react";
import CustomInputField from '@/components/ui/CustomInputField/CustomInputField';

const EditForm = () => {
  return (
    <div>  <CustomInputField
    name="id"
    label="User ID"
    inputType="input"
    disabled
    className={"adm-usr-input-field"}
    addonBefore={<Key strokeWidth={1} />}
  />

  <CustomInputField
    name="username"
    label="Username"
    placeholder="Enter username"
    inputType="input"
    rules={nameRules}
    className={"adm-usr-input-field"}
    addonBefore={<User strokeWidth={1} />}
  />

  <CustomInputField
    name="email"
    label="Email"
    placeholder="Enter email"
    inputType="input"
    type="email"
    rules={emailRules}
    className={"adm-usr-input-field"}
    addonBefore={<Mail strokeWidth={1} />}
  />

  <CustomInputField
    name="email_verified"
    label="Email Verified"
    inputType="switch"
  />

  <CustomInputField
    name="verified_by_admin"
    label="Verified by Admin"
    inputType="switch"
  /></div>
  )
}

export default EditForm