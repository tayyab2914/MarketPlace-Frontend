// ChatListItem.js
import { API_GET_CONVERSATION_ID } from "@/apis/ChatApis";
import { IMAGES } from "@/components/ui/Image/ImageData";
import { ROUTES } from "@/utils/Constants";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

dayjs.extend(relativeTime);

export const ChatListItem = ({ chat }) => {
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();

  const {
    user_company_name = "",
    avatar = "",
    unread = "",
    last_message = "",
  } = chat || {};

  const handleGetConversationId = async () => {
    const res = await API_GET_CONVERSATION_ID(
      token,
      last_message?.sender_company_id
    );
    if (res?.id) {
      router.push(`${ROUTES?.Chat}?chat_id=${res?.id}`);
    }
  };

  const unreadCount = unread && last_message && !last_message.read ? 1 : 0;

  return (
    <div className="chat-s-item" onClick={handleGetConversationId}>
      <img
        alt={user_company_name || "User"}
        src={avatar || IMAGES?.user}
        className="chat-s-item-avatar"
      />
      <div>
        <div className="chat-s-item-header">
          <p className="chat-s-item-name">{user_company_name}</p>
          {unreadCount > 0 && (
            <p className="chat-s-item-unread">{unreadCount}</p>
          )}
        </div>
        <div className="chat-s-item-message-row">
          <p className={last_message?.read ? "text-slate-400" : ""}>
            {last_message?.content || ""}
          </p>
          <p className="chat-s-item-time-wrapper">
            <span className="chat-s-item-time-dot"></span>
            <span className="chat-s-item-time text-t88">
              {last_message?.created_at &&
                dayjs(last_message.created_at).fromNow()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
