import React, { useState } from 'react';

const Form = ({
  initialName = '',
  initialRoles = {},
  initialEditing = {},
  onSave,
  onClear,
}) => {
  const [name, setName] = useState(initialName);
  const [roles, setRoles] = useState({
    Viewing: false,
    Dashboard: false,
    'User Management': false,
    'User Rewards & Revenue': false,
    Chats: false,
    'Content Management': false,
    'Admin Role Management': false,
    'Reports & Metrics': false,
    ...initialRoles,
  });
  const [editing, setEditing] = useState({
    'Manage Content': false,
    'Manage User': false,
    ...initialEditing,
  });

  const handleRoleChange = (role) => {
    setRoles((prev) => ({ ...prev, [role]: !prev[role] }));
  };

  const handleEditingChange = (edit) => {
    setEditing((prev) => ({ ...prev, [edit]: !prev[edit] }));
  };

  const handleClear = () => {
    setName('');
    setRoles({
      Viewing: false,
      Dashboard: false,
      'User Management': false,
      'User Rewards & Revenue': false,
      Chats: false,
      'Content Management': false,
      'Admin Role Management': false,
      'Reports & Metrics': false,
    });
    setEditing({
      'Manage Content': false,
      'Manage User': false,
    });
    if (onClear) onClear();
  };

  const handleSave = () => {
    if (onSave) onSave({ name, roles, editing });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Edit Role</h2>
        <button className="text-gray-500 hover:text-gray-700">✕</button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Sub-Admin"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {Object.keys(roles).map((role) => (
            <label key={role} className="flex items-center">
              <input
                type="checkbox"
                checked={roles[role]}
                onChange={() => handleRoleChange(role)}
                className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">{role}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Editing</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {Object.keys(editing).map((edit) => (
            <label key={edit} className="flex items-center">
              <input
                type="checkbox"
                checked={editing[edit]}
                onChange={() => handleEditingChange(edit)}
                className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">{edit} (Create, Edit, Delete)</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-pink-100 text-pink-700 rounded-md hover:bg-pink-200 flex items-center"
        >
          <span className="mr-2">⟳</span> Clear all
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 flex items-center"
        >
          Save <span className="ml-2">➔</span>
        </button>
      </div>
    </div>
  );
};

export default Form;