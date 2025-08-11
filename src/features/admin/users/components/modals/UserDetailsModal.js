// UserDetailsModal.jsx
import React from "react";
import { Modal, Descriptions } from "antd";

const UserDetailsModal = ({ visible, onClose, user, editable, onEditChange, onSave }) => {
  // editable: boolean to toggle view or edit mode
  // onEditChange: handler for form changes if editing
  // onSave: handler to save edited data

  return (
    <Modal
      title={editable ? "Edit User" : "User Details"}
      open={visible}
      onCancel={onClose}
      onOk={onSave}
      okText={editable ? "Save" : "OK"}
      cancelText="Cancel"
      footer={
        editable
          ? undefined
          : [
              <button key="close" onClick={onClose} className="ant-btn ant-btn-primary">
                OK
              </button>,
            ]
      }
      destroyOnHidden
    >
      {user ? (
        <Descriptions column={1} bordered>
          <Descriptions.Item label="ID">{user.id}</Descriptions.Item>
          <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
          <Descriptions.Item label="Email Verified">
            {user.email_verified ? "Yes" : "No"}
          </Descriptions.Item>
          <Descriptions.Item label="Verified by Admin">
            {user.verified_by_admin ? "Yes" : "No"}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        "No user data"
      )}
    </Modal>
  );
};

export default UserDetailsModal;
