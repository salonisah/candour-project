// src/components/ChatList.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
 // make sure to create & import a CSS file

const ChatList = () => {
  const { state } = useLocation();
  const chats = state?.chats || [];

  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]); // Store messages for the selected chat
  const [newMessage, setNewMessage] = useState(""); // Store new message input

  // Mock messages for demonstration (replace with actual data)
  const loadMessages = (chat) => {
    // This is a placeholder; fetch real messages from an API or state
    return [
      { id: 1, sender: chat.name, text: chat.message, timestamp: chat.timestamp },
      { id: 2, sender: "You", text: "Hey, how's it going?", timestamp: "10:05 AM" },
    ];
  };
  const handleChatClick = (chat) => {
    setSelectedChat(chat);
    setMessages(loadMessages(chat)); // Load messages for the selected chat
  };

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "You",
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage(""); // Clear input
    }
  };

  return (
    <div className="chat-list-container">
      {/* Left Sidebar */}
      <div className="chat-sidebar">
        <div className="chat-header-h2">
          <h2>Chat</h2>
        </div>
        <div className="chat-items">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${
                selectedChat?.id === chat.id ? "active" : ""
              }`}
              onClick={() => handleChatClick(chat)}
            >
              <img
                src={chat.avatar}
                alt={`${chat.name}'s avatar`}
                className="chat-avatar"
              />
              <div className="chat-details">
                <div className="chat-header-row">
                  <span className="chat-name">{chat.name}</span>
                  <span className="chat-timestamp">{chat.timestamp}</span>
                </div>
                <p className="chat-message">{chat.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Message Viewer */}
      <div className="chat-viewer">
        {selectedChat ? (
          <div className="chat-interface">
            {/* Chat Header */}
            <div className="chat-interface-header">
              <img
                src={selectedChat.avatar}
                alt={`${selectedChat.name}'s avatar`}
                className="chat-interface-avatar"
              />
              <h3>{selectedChat.name}</h3>
            </div>
            {/* Message List */}
            <div className="chat-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message ${
                    msg.sender === "You" ? "message-sent" : "message-received"
                  }`}
                >
                  <div className="message-content">
                    <p>{msg.text}</p>
                    <span className="message-timestamp">{msg.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Message Input */}
            <form className="chat-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="chat-input"
              />
              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        ) : (
          <div className="chat-placeholder">
            <span className="chat-placeholder-icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="48" height="48" rx="24" fill="#F2E6E6"/>
<path d="M19.5 26.75H25.5C25.7167 26.75 25.8917 26.6833 26.025 26.55C26.175 26.4 26.25 26.2167 26.25 26C26.25 25.7833 26.175 25.6083 26.025 25.475C25.8917 25.325 25.7167 25.25 25.5 25.25H19.5C19.2833 25.25 19.1 25.325 18.95 25.475C18.8167 25.6083 18.75 25.7833 18.75 26C18.75 26.2167 18.8167 26.4 18.95 26.55C19.1 26.6833 19.2833 26.75 19.5 26.75ZM19.5 23.75H29.5C29.7167 23.75 29.8917 23.6833 30.025 23.55C30.175 23.4 30.25 23.2167 30.25 23C30.25 22.7833 30.175 22.6083 30.025 22.475C29.8917 22.325 29.7167 22.25 29.5 22.25H19.5C19.2833 22.25 19.1 22.325 18.95 22.475C18.8167 22.6083 18.75 22.7833 18.75 23C18.75 23.2167 18.8167 23.4 18.95 23.55C19.1 23.6833 19.2833 23.75 19.5 23.75ZM19.5 20.75H29.5C29.7167 20.75 29.8917 20.6833 30.025 20.55C30.175 20.4 30.25 20.2167 30.25 20C30.25 19.7833 30.175 19.6083 30.025 19.475C29.8917 19.325 29.7167 19.25 29.5 19.25H19.5C19.2833 19.25 19.1 19.325 18.95 19.475C18.8167 19.6083 18.75 19.7833 18.75 20C18.75 20.2167 18.8167 20.4 18.95 20.55C19.1 20.6833 19.2833 20.75 19.5 20.75ZM18.55 30.5L16.525 32.5C16.2417 32.7833 15.9167 32.85 15.55 32.7C15.1833 32.5333 15 32.25 15 31.85V17.3C15 16.8 15.175 16.375 15.525 16.025C15.875 15.675 16.3 15.5 16.8 15.5H32.2C32.7 15.5 33.125 15.675 33.475 16.025C33.825 16.375 34 16.8 34 17.3V28.7C34 29.2 33.825 29.625 33.475 29.975C33.125 30.325 32.7 30.5 32.2 30.5H18.55ZM17.2 29H32.2C32.2667 29 32.3333 28.9667 32.4 28.9C32.4667 28.8333 32.5 28.7667 32.5 28.7V17.3C32.5 17.2333 32.4667 17.1667 32.4 17.1C32.3333 17.0333 32.2667 17 32.2 17H16.8C16.7333 17 16.6667 17.0333 16.6 17.1C16.5333 17.1667 16.5 17.2333 16.5 17.3V29.7L17.2 29ZM16.5 29V17.3C16.5 17.2333 16.5 17.1667 16.5 17.1C16.5 17.0333 16.5 17 16.5 17C16.5 17 16.5 17.0333 16.5 17.1C16.5 17.1667 16.5 17.2333 16.5 17.3V28.7C16.5 28.7667 16.5 28.8333 16.5 28.9C16.5 28.9667 16.5 29 16.5 29Z" fill="#800000"/>
</svg>


</span>
            <p>Select chats to view messages.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
