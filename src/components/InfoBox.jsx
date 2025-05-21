// components/InfoBox.js
import React from "react";
const InfoBox = ({ number, label,icon }) => {
  return (
    <div className="info-box">
    <div className="info-icon">{icon}</div> {/* Icon section */}
      <div className="info-text">
       <p className="info-label">{label}</p>
      <p className="info-number">{number}</p>
    </div>
    </div>
  );
};

export default InfoBox;
