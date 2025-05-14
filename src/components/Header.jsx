import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiBell } from "react-icons/bi";
import logo from "../assets/logo.png";
import profileImg from "../assets/profile.png";
import DropdownButton from "./Button";
import { FaChevronDown } from 'react-icons/fa';
 // ✅ Make sure this is uncommented

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showRoleForm, setShowRoleForm] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <div className="search-container">
          <div className="search-wrapper">
            <span className="search-icon">{<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.05524 13.5C5.23857 13.5 3.6969 12.875 2.43024 11.625C1.18024 10.3583 0.555237 8.81667 0.555237 7C0.555237 5.18333 1.18024 3.65 2.43024 2.4C3.6969 1.13333 5.23857 0.499999 7.05524 0.499999C8.8719 0.499999 10.4052 1.13333 11.6552 2.4C12.9219 3.65 13.5552 5.18333 13.5552 7C13.5552 7.73333 13.4386 8.425 13.2052 9.075C12.9719 9.725 12.6552 10.3 12.2552 10.8L17.8552 16.4C18.0386 16.5833 18.1302 16.8167 18.1302 17.1C18.1302 17.3833 18.0386 17.6167 17.8552 17.8C17.6719 17.9833 17.4386 18.075 17.1552 18.075C16.8719 18.075 16.6386 17.9833 16.4552 17.8L10.8552 12.2C10.3552 12.6 9.78024 12.9167 9.13024 13.15C8.48024 13.3833 7.78857 13.5 7.05524 13.5ZM7.05524 11.5C8.30524 11.5 9.36357 11.0667 10.2302 10.2C11.1136 9.31667 11.5552 8.25 11.5552 7C11.5552 5.75 11.1136 4.69167 10.2302 3.825C9.36357 2.94167 8.30524 2.5 7.05524 2.5C5.80524 2.5 4.73857 2.94167 3.85524 3.825C2.98857 4.69167 2.55524 5.75 2.55524 7C2.55524 8.25 2.98857 9.31667 3.85524 10.2C4.73857 11.0667 5.80524 11.5 7.05524 11.5Z" fill="#800000"/>
</svg>
}</span>
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>

        <div className="user-actions">
          <DropdownButton
            text="Create"
            icon="⏷"
            newcl="my-dropdown"
            items={[
              { label: "User", action: () => setShowUserForm(true) },
              { label: "Role", action: () => setShowRoleForm(true) },
            ]}
          />

          <button className="notification-btn">
          <BiBell size={24} /> 
          </button>

          <DropdownButton
              customTrigger={
    <div className="profile-trigger">
      <img src={profileImg} alt="Profile" className="profile-img " />
      <FaChevronDown className="arrow-icon" />
    </div>
  }
  items={[
    { label: 'My Profile', action: () => console.log('Profile') },
    { label: 'Settings', action: () => console.log('Settings') },
    { label: 'Logout', action: () => console.log('Logout') },
  ]}
/>
        </div>
      </header>

      {/* Show Modal Forms */}
      {showUserForm && (
        <NewUserForm onClose={() => setShowUserForm(false)} />
      )}

      {showRoleForm && (
        <div>
          {/* Replace with <RoleForm onClose={() => setShowRoleForm(false)} /> if you have a component */}
          <p>Role form goes here</p>
        </div>
      )}
    </>
  );
};

export default Header;
