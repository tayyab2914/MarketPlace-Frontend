import React from 'react'

const ChatListItem = ({ chat }) => {
  return (
    <div className="chat-s-item">
      <img alt={chat.name} src={chat.avatar} className="chat-s-item-avatar" />
      <div>
        <div className="chat-s-item-header">
          <p className='chat-s-item-name'>{chat.name}</p>
          {chat.unread && (
            <p className="chat-s-item-unread">{chat.unread}</p>
          )}
        </div>
        <div className="chat-s-item-message-row">
          <p className={chat.messageColor || ""}>{chat.message}</p>
          <p className="chat-s-item-time-wrapper">
            <span className="chat-s-item-time-dot"></span>
            <span className={`chat-s-item-time ${chat.timeColor}`}>
              {chat.time}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatListItem
