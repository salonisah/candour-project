import React from "react";
import UserCard from "./UserCard"; 
import DropdownButton from "./Button";// Import the renamed component

const RecentlyAdded = ({ users }) => {
  return (
    <div className="recently-added">
      <div className="chats-header">
        <h3>Recently Added</h3>
       <DropdownButton
          text="View All"
          icon={
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.95 6.5L0.350001 1.9L1.4 0.849999L7.05 6.5L1.4 12.15L0.350001 11.1L4.95 6.5Z" fill="#800000"/>
            </svg>
          }
          newcl="view-btn"
        />
      </div>
      <div className="user-list">
        {users.map((user, index) => (
          <UserCard
            key={index} // Use a unique key, ideally user.id if available
            name={user.name}
            role={user.role}
            avatar={user.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;