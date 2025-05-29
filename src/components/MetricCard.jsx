import React from 'react';

const MetricCard = ({ title, icon, value, backgroundColor = 'bg-white', textColor = 'text-black', className, variant }) => {
  // Define variant styles
  const variantStyles = {
    highlight: 'border-2 border-yellow-500',
    error: 'bg-red-100 text-red-800',
    default: '',
  };

  const appliedVariant = variantStyles[variant] || variantStyles.default;

  return (
    <div className={`metric-Card ${backgroundColor} ${textColor} ${className || ''} ${appliedVariant}`}>
      <div className="metric-content">
        <div className="metric-title">{title}</div>
        <div className={`metric-value ${title === 'Total Revenue' ? 'metric-value-large' : ''}`}>
          {value}
        </div>
      </div>
      <div className="metric-icon">
        {icon}
      </div>
    </div>
  );
};

export default MetricCard;