import React from "react";

const Tab = ({ label, active, onClick }) => {
  return (
    <span
      className={`tab ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default Tab;
