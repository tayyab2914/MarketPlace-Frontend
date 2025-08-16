import AutoTextCropper from "@/components/ui/AutoTextCropper/AutoTextCropper";
import { IMAGES } from "@/components/ui/Image/ImageData";
import { BACKEND_DOMAIN, ROUTES } from "@/utils/Constants";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/navigation";
import React from "react";

dayjs.extend(relativeTime);

export const ChatListItem = ({ chat }) => {
  const router = useRouter();

  const {
    other_user_company_name = "",
    other_user_profile_image = "",
    unread = "",
    last_message = "",
  } = chat || {};

  const handleGetConversationId = async () => {
    router.push(`${ROUTES?.Chat}?chat_id=${chat?.conversation_id}`);
  };

  const unreadCount = unread && last_message && !last_message.read ? 1 : 0;

  return (
    <div className="chat-s-item" onClick={handleGetConversationId}>
      <img
        src={
          other_user_profile_image
            ? `${BACKEND_DOMAIN}${other_user_profile_image}`
            : IMAGES?.user
        }
        className="chat-s-item-avatar"
      />
      <div>
        <div className="chat-s-item-header">
          <p className="chat-s-item-name">{other_user_company_name}</p>
          {unreadCount > 0 && (
            <p className="chat-s-item-unread">{unreadCount}</p>
          )}
        </div>
        <div className="chat-s-item-message-row">
          <div className={last_message?.read ? "text-slate-400" : ""}>
            <AutoTextCropper
              text={
                last_message?.me
                  ? `Me: ${last_message?.content}`
                  : last_message?.content
              }
            />
          </div>
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
