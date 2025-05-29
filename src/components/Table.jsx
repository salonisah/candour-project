import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Table = ({
  className,
  headers,
  data,
  onStatusChange,
  sortable = true,
  initialSortColumn = null,
  initialSortDirection = "asc",
  onRowClick,
  headerToKeyMap = {},
  showPagination = false,
  statusOptions, // Dropdown options for status (e.g., ["Active", "Inactive", "Redeemed"])
  statusButtonText, // If set, renders a button with this text instead of a dropdown
  renderCustomActions,
}) => {
  const [tableData, setTableData] = useState(data);
  const [sortColumn, setSortColumn] = useState(initialSortColumn);
  const [sortDirection, setSortDirection] = useState(initialSortDirection);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const rowsPerPage = 7;

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const totalRows = tableData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

  const normalizeHeader = (header) =>
    headerToKeyMap[header] ||
    header.toLowerCase().replace(/ /g, "").replace(/[^a-zA-Z0-9]/g, "");

  const handleSort = (column) => {
    if (!sortable) return;

    const key = normalizeHeader(column);
    const newDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newDirection);

    const sortedData = [...tableData].sort((a, b) => {
      const aValue = a[key] || "";
      const bValue = b[key] || "";
      if (aValue < bValue) return newDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setTableData(sortedData);
    setCurrentPage(1);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedData = [...tableData];
    const key = normalizeHeader("Status");
    updatedData[startIndex + index][key] = newStatus;
    setTableData(updatedData);
    if (onStatusChange) onStatusChange(startIndex + index, newStatus);
  };

  const defaultStatusOptions = [
    { label: "Active", action: (index) => handleStatusChange(index, "Active") },
    { label: "Inactive", action: (index) => handleStatusChange(index, "Inactive") },
    { label: "Flagged", action: (index) => handleStatusChange(index, "Flagged") },
  ];

  const customStatusOptions = statusOptions
    ? statusOptions.map((option) => ({
        label: option.label || option,
        action: (index) => handleStatusChange(index, option.value || option),
      }))
    : defaultStatusOptions;

  const defaultActionOptions = (rowIndex) => [
    {
      label: (
        <div className="flex items-center text-red-600">
          <svg
            className="w-4 h-4 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Delete
        </div>
      ),
      action: (e) => {
        e?.preventDefault();
        setRowToDelete(rowIndex);
        setShowDeleteModal(true);
      },
    },
  ];

  const getRowCells = (row, rowIndex) => {
    return headers.map((header) => {
      const key = normalizeHeader(header);
      return row[key] || "";
    });
  };

  const getColumnWidth = (header) => {
    switch (header) {
      case "Title":
        return "w-1/5";
      case "Type":
      case "Category":
      case "Published By":
      case "Published Date":
      case "Date":
      case "Source":
        return "w-[15%]";
      case "Status":
      case "No. of Views":
        return "w-1/10";
      default:
        return "w-auto";
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    const maxVisiblePages = 4;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    while (pages.length < 4 && pages.length < maxVisiblePages) {
      pages.push(null);
    }
    return pages;
  };

  return (
    <div>
      <table className="reusable-table w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            {headers.map((header) => (
              <th
                key={header}
                onClick={() => handleSort(header)}
                className={`${
                  sortable ? "cursor-pointer hover:bg-gray-300" : ""
                } text-center p-2 border-b font-medium ${getColumnWidth(header)}`}
              >
                {header}
                {sortColumn === header && (
                  <span>{sortDirection === "asc" ? " ↑" : " ↓"}</span>
                )}
              </th>
            ))}
            <th className="text-center p-2 border-b font-medium w-[5%]"></th>
          </tr>
        </thead>
        <tbody className="t-body">
          {(showPagination ? currentData : tableData).map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                onRowClick?.(row);
              }}
            >
              {getRowCells(row, rowIndex).map((cell, cellIndex) => {
                const header = headers[cellIndex];
                if (header === "Status") {
                  return (
                    <td
                      key={cellIndex}
                      className="p-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {statusButtonText ? (
                        // Render a static button if statusButtonText is provided
                        <Button
                          text={statusButtonText}
                          newcl={`status-button px-2 py-1 rounded border ${statusButtonText.toLowerCase()}`}
                        />
                      ) : (
                        // Render a dropdown if statusOptions are provided
                        <Button
                          text={cell}
                          icon={
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.82812 0.148438L10 1.32031L5 6.32031L0 1.32031L1.17188 0.148438L5 3.97656L8.82812 0.148438Z" fill="#616161"/>
                            </svg>
                          }
                          items={customStatusOptions.map((option) => ({
                            ...option,
                            action: (e) => {
                              e?.preventDefault();
                              option.action(rowIndex);
                            },
                          }))}
                          newcl={`status-dropdown px-2 py-1 rounded border ${cell.toLowerCase()}`}
                        />
                      )}
                    </td>
                  );
                }
                if (header === "Name") {
                  return (
                    <td
                      key={cellIndex}
                      className="p-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link
                        to={`/user/${startIndex + rowIndex}`}
                        state={{ user: row }}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {cell}
                      </Link>
                    </td>
                  );
                }
                return (
                  <td
                    key={cellIndex}
                    className={`p-2 ${
                      header === "Title"
                        ? "whitespace-nowrap overflow-hidden text-ellipsis"
                        : ""
                    }`}
                    title={header === "Title" ? cell : undefined}
                  >
                    {cell}
                  </td>
                );
              })}
              <td
                className="p-2 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                {renderCustomActions ? (
                  renderCustomActions(rowIndex)
                ) : (
                  <Button
                    text=""
                    icon={
                      <svg
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2" r="2" fill="#333333" />
                        <circle cx="2" cy="8" r="2" fill="#333333" />
                        <circle cx="2" cy="14" r="2" fill="#333333" />
                      </svg>
                    }
                    items={defaultActionOptions(rowIndex)}
                    newcl="action-menu px-2 py-1 bg-white shadow-md"
                    itemClass="px-2 py-3 text-red-600 bg-white"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPagination && totalPages > 1 && (
        <div className="pagination p-10 flex justify-center items-center mt-1 space-x-0.5">
          {getVisiblePages().map((page, index) => (
            page ? (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(page);
                }}
                className={`w-5 h-5 flex items-center justify-center ${
                  currentPage === page
                    ? "bg-[#800000] text-white"
                    : "bg-[#D9D9D9] text-[#800000]"
                } text-xs font-medium rounded-full`}
              >
                {page}
              </button>
            ) : (
              <button
                key={index}
                disabled
                className="w-5 h-5 rounded-full bg-[#D9D9D9] cursor-not-allowed"
              ></button>
            )
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              goToPage(currentPage + 1);
            }}
            disabled={currentPage === totalPages}
            className={`w-5 h-5 flex items-center justify-center rounded-full ${
              currentPage === totalPages
                ? "bg-[#E5E5E5] cursor-not-allowed"
                : "bg-[#D9D9D9]"
            }`}
          >
            <svg
              width="5"
              height="8"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.95 6.5L0.350001 1.9L1.4 0.849999L7.05 6.5L1.4 12.15L0.350001 11.1L4.95 6.5Z"
                fill="#800000"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 w-96 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black">Delete Content</h2>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowDeleteModal(false);
                }}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
            <p className="mb-6 text-gray-600 text-sm">
              Selected content will be permanently removed from system. Are you sure you
              want to delete content?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowDeleteModal(false);
                }}
                className="px-4 py-2 bg-[#FFC1CC] text-black rounded hover:bg-[#FF99AA] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const updatedData = [...tableData];
                  updatedData.splice(startIndex + rowToDelete, 1);
                  setTableData(updatedData);
                  const newTotalPages = Math.ceil(updatedData.length / rowsPerPage);
                  if (currentPage > newTotalPages) {
                    setCurrentPage(newTotalPages || 1);
                  }
                  setShowDeleteModal(false);
                  setShowSuccessModal(true);
                  setRowToDelete(null);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 w-96 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Deletion Successful</h2>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowSuccessModal(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="mb-6 text-gray-600">The row has been successfully deleted.</p>
            <div className="flex justify-end">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowSuccessModal(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;