import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownButton from "./Button";
import ChatCard from "./ChatCard";

const RecentChats = ({ chats }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
      console.log("Navigating to /chat-list...");
    navigate("/chat-list", { state: { chats } });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const chatsPerPage = 4;
  const indexOfLastChat = currentPage * chatsPerPage;
  const indexOfFirstChat = indexOfLastChat - chatsPerPage;
  const currentChats = chats.slice(indexOfFirstChat, indexOfLastChat);

  return (
    <div className="recent-chats-container">
      <div className="chats-header">
        <h3>Recent Chats</h3>
        <DropdownButton
          text="View All"
          icon={
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.95 6.5L0.350001 1.9L1.4 0.849999L7.05 6.5L1.4 12.15L0.350001 11.1L4.95 6.5Z" fill="#800000"/>
            </svg>
          }
          newcl="view-btn"
          onClick={handleViewAll}
        />
      </div>

      {currentChats.map((chat) => (
        <ChatCard key={chat.id} {...chat} />
      ))}
    </div>
  );
};

export default RecentChats;
