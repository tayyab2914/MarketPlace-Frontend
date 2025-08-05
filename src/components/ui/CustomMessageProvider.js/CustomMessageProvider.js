"use client";

import React, { useEffect, useState } from "react";
import { message as antdMessage } from "antd";

let internalMessageApi = null;

// Expose a singleton message object to call from anywhere
export const message = {
  success: (content, duration, onClose) => internalMessageApi?.success(content, duration, onClose),
  error: (content, duration, onClose) => internalMessageApi?.error(content, duration, onClose),
  info: (content, duration, onClose) => internalMessageApi?.info(content, duration, onClose),
  warning: (content, duration, onClose) => internalMessageApi?.warning(content, duration, onClose),
  loading: (content, duration, onClose) => internalMessageApi?.loading(content, duration, onClose),
  open: (config) => internalMessageApi?.open(config),
};

export function CustomMessageProvider({ children }) {
  const [messageApi, contextHolder] = antdMessage.useMessage();

  // Set internal API on mount
  useEffect(() => {
    internalMessageApi = messageApi;
  }, [messageApi]);

  return (
    <>
      {contextHolder}
      {children}
    </>
  );
}
