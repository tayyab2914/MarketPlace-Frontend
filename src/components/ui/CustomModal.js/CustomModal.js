import React from "react";
import MyIcon from "../Icon/MyIcon";
import { Button, Col, Modal, Row } from "antd";
import "./CustomModal.css";
const CustomModal = ({ child, isVisible, onClose, iconType, title, rightBtn, onSave, saveText, disableSubmit,customFooter,width=600}) => {
  return (
    <Modal className="" title={false} centered visible={isVisible} onCancel={onClose} closable={false} footer={null} width={width} >
      <div className="cm-modal-header">
        <span className="cm-modal-title">
          <MyIcon type={iconType} style={{ marginRight: "5px" }} size="md" />
          {title}
        </span>
        <span className="cm-title-right-section">
          {rightBtn}
          <MyIcon type={"close_icon"} onClick={onClose} size="lg" className="close-icon" />
        </span>
      </div>
      <div className="cm-modal-content">{child}</div>
      {onSave && (
        <div className="cm-modal-actions">
          <Button type="primary" htmlType="submit" className="cm-modal-save-btn" onClick={onSave} disabled={disableSubmit}>
            <MyIcon type={"tick"} /> {saveText || "Save"}
          </Button>
          <Button onClick={onClose} className="cm-modal-cancel-btn">
            <MyIcon type={"cross_red"} /> Cancel
          </Button>
        </div>
      )}
      {customFooter && customFooter}
    </Modal>
  );
};

export default CustomModal;
