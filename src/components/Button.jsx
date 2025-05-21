import React, { useState } from 'react';

const DropdownButton = ({
  text = 'Actions',
  newcl = '',
  icon = '▼',
  path = '/',
  items = [],
  svg,
  onClick,
  customTrigger = null,
  startIcon = null, // 👈 New prop
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (onClick && items.length === 0) {
      onClick();
    }
  };

  return (
    <div className="dropdown-container relative inline-block">
      {customTrigger ? (
        <div onClick={toggleDropdown} className="custom-trigger cursor-pointer">
          {customTrigger}
        </div>
      ) : (
        <button
          onClick={toggleDropdown}
          className={`dropdown-button px-4 py-2 rounded flex items-center gap-2 ${newcl}`}
        >
          {/* Start icon before text */}
          {startIcon && <span className="start-icon">{startIcon}</span>}
          {text}
          {icon && <span className="dropdown-icon ml-1">{icon}</span>}
        </button>
      )}

      {isOpen && items.length > 0 && (
        <div className="dropdown-menu absolute mt-2 w-48 bg-white border rounded shadow-lg z-10">
          {items.map((item, index) => (
            <button
              key={index}
              className="dropdown-item w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                item.action();
                setIsOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
