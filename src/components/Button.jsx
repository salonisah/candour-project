import React, { useState } from 'react';

const DropdownButton = ({ text = 'Actions', newcl = '', icon = '▼', path = '/' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown-container ${newcl}`}>
      <button
        onClick={toggleDropdown}
        className="dropdown-button"
      >
        {text}
        <span className="dropdown-icon">{icon}</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <a href={`${path}/user`} className="dropdown-item">User </a>
          <a href={`${path}/role`} className="dropdown-item">Role </a>
          
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
