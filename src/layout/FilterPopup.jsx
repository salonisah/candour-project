// src/FilterPopup.js
import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme CSS file


const FilterPopup = ({ isOpen, onClose, onApply, onClear, currentFilters }) => {
  const [filters, setFilters] = useState(currentFilters);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Sync local state with prop changes
  useEffect(() => {
    setFilters(currentFilters);
  }, [currentFilters]);

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
          <div className="filter-section">
            <label>Status</label>
            <div className="status-buttons">
              <button
                type="button"
                className={`status-btn ${filters.status === "active" ? "selected" : ""}`}
                onClick={() => handleStatusChange("active")}
              >
                Active
              </button>
              <button
                type="button"
                className={`status-btn ${filters.status === "inactive" ? "selected" : ""}`}
                onClick={() => handleStatusChange("inactive")}
              >
                Inactive
              </button>
              <button
                type="button"
                className={`status-btn ${filters.status === "flagged" ? "selected" : ""}`}
                onClick={() => handleStatusChange("flagged")}
              >
                Flagged
              </button>
            </div>
          </div>

          <div className="filter-section">
            <label>Type</label>
            <select
              value={filters.type}
              onChange={(e) => handleDropdownChange(e, "type")}
            >
              <option value="">Select</option>
              <option value="post">Post</option>
              <option value="article">Article</option>
            </select>
          </div>

          <div className="filter-section">
            <label>Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleDropdownChange(e, "category")}
            >
              <option value="">Select</option>
              <option value="tech">Tech</option>
              <option value="news">News</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>

          <div className="filter-section">
            <label>Published By</label>
            <select
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
            <label>Published Date</label>
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

          <div className="filter-actions">
            <button type="button" className="clear-btn" onClick={onClear}>
              Clear filter
            </button>
            <button type="submit" className="apply-btn">
              Apply filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterPopup;