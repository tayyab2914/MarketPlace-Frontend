"use client";
import { MAKE_API_REQUEST } from "@/utils/AxiosTemplate";
import { BACKEND_DOMAIN } from "@/utils/Constants";

export const API_GET_CONVERSATION_ID = async (token, company_id) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/chat/get_conversation/${company_id}/`,
    token: token,
  });
};
export const API_GET_MESSAGES = async (token, chat_id) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/chat/conversations/${chat_id}/messages/`,
    token: token,
  });
};
export const API_GET_CHAT_CONVERSATIONS = async (token) => {
  return await MAKE_API_REQUEST({
    method: "get",
    url: `${BACKEND_DOMAIN}/chat/conversations/`,
    token: token,
  });
};