import { WEBSOCKET_DOMAIN } from "./Constants";

export const INITIALIZE_WEBSOCKET = (
  token,
  payload,
  onOpen,
  onClose,
) => {
  let socketUrl;

  if (payload?.type == "inbox") {
    socketUrl = `${WEBSOCKET_DOMAIN}/ws/chat/${payload?.chat_id}/?token=${token}`;
  }

  let chatSocket;

  try {
    chatSocket = new WebSocket(socketUrl);
  } catch (error) {
    console.error("WebSocket connection failed:", error);
    onClose();
    return null;
  }

  chatSocket.onopen = () => {
    onOpen(chatSocket);
    console.log("SOCKET OPEN", chatSocket);
  };

  chatSocket.onclose = () => {
    console.log("SOCKET CLOSE");
    onClose();
  };

  chatSocket.onerror = (event) => {
    console.error("WebSocket Error event:", event);
  };

  chatSocket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      console.log("chatSocket.onmessage", data);
    } catch (parseError) {
      console.error(
        "Failed to parse WebSocket message:",
        parseError,
        event.data
      );
    }
  };

  return chatSocket;
};

export const handleSendMessage = (socket, message) => {
  if (
    socket &&
    socket.readyState === WebSocket.OPEN &&
    message?.content &&
    message?.content?.trim()
  ) {
    const messageData = {
      message: message.content,
    };
    console.log("handleSendMessage", messageData);
    socket.send(JSON.stringify(messageData));
  } else {
    console.warn("WebSocket is not open or message is empty");
  }
};
