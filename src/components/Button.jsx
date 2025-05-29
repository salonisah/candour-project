import React, { useState } from 'react';

const DropdownButton = ({
  text = 'Actions',
  newcl = '',
  icon = '',
  path = '/',
  items = [],
  svg,
  onClick,
  customTrigger = null,
  startIcon = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (onClick && items.length === 0) {
      onClick();
    }
  };

  return (
    <div className="dropdown-container relative block w-auto">
      {customTrigger ? (
        <div onClick={toggleDropdown} className="custom-trigger cursor-pointer">
          {customTrigger}
        </div>
      ) : (
        <button
          onClick={toggleDropdown}
          className={`dropdown-button flex items-center justify-between ${newcl}`}
        >
          <div className="flex items-center gap-2">
            {startIcon && <span className="start-icon">{startIcon}</span>}
            {text}
          </div>
          {icon && (
            <span className="dropdown-icon">{isOpen ? '▲' : icon}</span>
          )}
        </button>
      )}

      {isOpen && items.length > 0 && (
        <div className="dropdown-menu absolute left-0 mt-2 w-[calc(100%+4rem)] bg-white border rounded shadow-lg z-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="dropdown-item w-full text-left"
              onClick={(e) => {
                item.action(e);
                setIsOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;