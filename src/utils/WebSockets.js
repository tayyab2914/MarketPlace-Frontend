export const INITIALIZE_WEBSOCKET = (
  token,
  payload,
  onOpen,
  onClose,
  dispatch
) => {
  let socketUrl;

  if (payload?.type == "inbox") {
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    socketUrl = `${protocol}://127.0.0.1:8000/ws/chat/${payload?.chat_id}/?token=${token}`;
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
    // DO NOT dispatch setSocket(chatSocket);
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
      console.log(data);
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
    socket.readyState === WebSocket.OPEN && // ensure socket is open
    message?.text &&
    message.text.trim()
  ) {
    const messageData = {
      message: message.text,
    };
    socket.send(JSON.stringify(messageData));
  } else {
    console.warn("WebSocket is not open or message is empty");
  }
};
