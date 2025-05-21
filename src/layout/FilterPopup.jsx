// src/FilterPopup.js
import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme CSS file
import DropdownButton from "../components/Button";

const RefreshIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.05 15.5C5.95 15.5 4.175 14.775 2.725 13.325C1.275 11.875 0.55 10.1 0.55 8C0.55 5.9 1.275 4.125 2.725 2.675C4.175 1.225 5.95 0.499999 8.05 0.499999C9.21667 0.499999 10.3167 0.758332 11.35 1.275C12.4 1.79167 13.2667 2.525 13.95 3.475V0.499999H15.45V6.625H9.35V5.125H13.3C12.7667 4.15833 12.0333 3.4 11.1 2.85C10.1667 2.28333 9.15 2 8.05 2C6.38333 2 4.96667 2.58333 3.8 3.75C2.63333 4.91667 2.05 6.33333 2.05 8C2.05 9.66667 2.63333 11.0833 3.8 12.25C4.96667 13.4167 6.38333 14 8.05 14C9.33333 14 10.4917 13.6333 11.525 12.9C12.5583 12.1667 13.2833 11.2 13.7 10H15.275C14.825 11.6333 13.925 12.9583 12.575 13.975C11.2417 14.9917 9.73333 15.5 8.05 15.5Z" fill="#484848"/>
  </svg>
);

const FilterIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.375 15.5C7.125 15.5 6.91667 15.4167 6.75 15.25C6.58333 15.0833 6.5 14.875 6.5 14.625V8.825L0.9 1.725C0.716667 1.45833 0.691667 1.19167 0.825 0.924999C0.958334 0.641665 1.18333 0.499999 1.5 0.499999H14.5C14.8167 0.499999 15.0417 0.641665 15.175 0.924999C15.3083 1.19167 15.2833 1.45833 15.1 1.725L9.5 8.825V14.625C9.5 14.875 9.41667 15.0833 9.25 15.25C9.08333 15.4167 8.875 15.5 8.625 15.5H7.375ZM8 8.3L12.95 2H3.05L8 8.3Z" fill="white"/>
  </svg>
);
const FilterPopup = ({ isOpen, onClose, onApply, onClear, currentFilters }) => {
  const [filters, setFilters] = useState(currentFilters);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Sync local state with prop changes
  useEffect(() => {
    setFilters(currentFilters);
  }, [currentFilters]);
  useEffect(() => {
  const handleClickOutside = (e) => {
    if (isOpen && !e.target.closest(".popup-content")) {
      onClose();
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isOpen, onClose]);

  // Handle status button click
  const handleStatusChange = (status) => {
    setFilters((prev) => ({
      ...prev,
      status: prev.status === status ? "" : status,
    }));
  };

  // Handle dropdown changes
  const handleDropdownChange = (e, key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  // Handle date range change
  const handleDateRangeChange = (ranges) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: {
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(filters);
  };

  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Filter</h2>
          <span className="close-btn" onClick={onClose}>
            ×
          </span>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="f-scrollable">
          <div className="filter-section">
            <label className="label">Status</label>
            <div className="status-buttons f-body">
            <DropdownButton
  text="Active"
  newcl={`status-btn ${filters.status === "active" ? "selected" : ""}`}
  onClick={() => handleStatusChange("active")}
  items={[]}
  icon=""
/>
 <DropdownButton
  text="Inactive"
  newcl={`status-btn ${filters.status === "active" ? "selected" : ""}`}
  onClick={() => handleStatusChange("active")}
  items={[]}
  icon=""
/>
<DropdownButton
  text="Flagged"
  newcl={`status-btn ${filters.status === "active" ? "selected" : ""}`}
  onClick={() => handleStatusChange("active")}
  items={[]}
  icon=""
/>
 </div>
  </div>
   <div className="filter-section">
    <label className="label">Type</label>
     <select
     className="f-body"
      value={filters.type}
       onChange={(e) => handleDropdownChange(e, "type")}
        >
         <option value="">Select</option>
              <option value="information">information</option>
              <option value="News">News</option>
            </select>
          </div>

          <div className="filter-section">
            <label className="label">Category</label>
            <select
            className="f-body"
              value={filters.category}
              onChange={(e) => handleDropdownChange(e, "category")}
            >
              <option value="">Select</option>
              <option value="Medical">Medical</option>
               <option value="Fashion">Fashion</option>
                <option value="Art">Art</option>
                 <option value="Photography">Photography</option>
                  <option value="Design">Design</option>
                   <option value="Politics">Politics</option>
              <option value="news">News</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>

          <div className="filter-section">
            <label className="label">Published By</label>
            <select
            className="f-body"
              value={filters.publishedBy}
              onChange={(e) => handleDropdownChange(e, "publishedBy")}
            >
              <option value="">Select</option>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>

          <div className="filter-section">
            <label className="label">Published Date</label>
            <div className="date-range-wrapper">
              <input
                type="text"
                value={
                  filters.dateRange.startDate && filters.dateRange.endDate
                    ? `${filters.dateRange.startDate.toLocaleDateString()} - ${filters.dateRange.endDate.toLocaleDateString()}`
                    : ""
                }
                placeholder="Select date range"
                onClick={() => setShowDatePicker((prev) => !prev)}
                readOnly
              />
              {showDatePicker && (
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateRangeChange}
                  moveRangeOnFirstSelection={false}
                  ranges={[
                    {
                      startDate: filters.dateRange.startDate || new Date(),
                      endDate: filters.dateRange.endDate || new Date(),
                      key: "selection",
                    },
                  ]}
                />
              )}
            </div>
          </div>
</div>
         <div className="filter-actions flex gap-2">
 <DropdownButton
  text="Clear Filter"
  newcl="clear-btn"
  onClick={onClear}
  items={[]}
  icon="" // no dropdown arrow
  startIcon={RefreshIcon}
/>

<DropdownButton
  text="Apply Filter"
  newcl="apply-btn"
  onClick={handleSubmit}
  items={[]}
  icon=""
  startIcon={FilterIcon}
/>
</div>

        </form>
      </div>
    </div>
  );
};

export default FilterPopup;