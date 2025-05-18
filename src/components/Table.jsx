import React, { useState } from 'react';
import Button from './Button';

const Table = ({
  headers,
  data,
  onStatusChange,
  sortable = true,
  initialSortColumn = null,
  initialSortDirection = 'asc',
}) => {
  const [tableData, setTableData] = useState(data);
  const [sortColumn, setSortColumn] = useState(initialSortColumn);
  const [sortDirection, setSortDirection] = useState(initialSortDirection);

  const handleSort = (column) => {
    if (!sortable) return;

    const newDirection =
      sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newDirection);

    const sortedData = [...tableData].sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      if (aValue < bValue) return newDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return newDirection === 'asc' ? 1 : -1;
      return 0;
    });
    setTableData(sortedData);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedData = [...tableData];
    updatedData[index].status = newStatus;
    setTableData(updatedData);
    if (onStatusChange) onStatusChange(index, newStatus);
  };

  const statusOptions = [
    { label: 'Active', action: (index) => handleStatusChange(index, 'Active') },
    { label: 'Inactive', action: (index) => handleStatusChange(index, 'Inactive') },
    { label: 'Flagged', action: (index) => handleStatusChange(index, 'Flagged') },
  ];

  return (
    <table className="reusable-table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              onClick={() => handleSort(header)}
              className={`${
                sortable ? 'cursor-pointer hover:bg-gray-100' : ''
              } text-left`}
            >
              {header}
              {sortColumn === header && (
                <span>{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="t-body">
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => {
              const header = headers[cellIndex];
              if (header === 'Status') {
                return (
                  <td key={cellIndex} className="p-2">
                    <Button
                      text={cell}
                      icon="▼"
                      items={statusOptions.map((option) => ({
                        ...option,
                        action: () => option.action(rowIndex),
                      }))}
                      newcl={`status-dropdown px-2 py-1 rounded border ${cell.toLowerCase()}`}
                    />
                  </td>
                );
              }
              return <td key={cellIndex} className="p-2">{cell}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;