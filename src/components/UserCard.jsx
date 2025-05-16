import React from "react";

const UserCard = ({ name, role, avatar }) => {
  return (
    <div className="chat-card">
      <img src={avatar} alt={name} className="avatar" />
      <div className="chat-info">
        <div className="name">{name}</div>
        <div className="role">{role}</div>
      </div>
      <div className="more-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4z"
            fill="#333333"
          />
        </svg>
      </div>
    </div>
  );
};

export default UserCard;