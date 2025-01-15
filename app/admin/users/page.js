'use client';

import React, { useState, useEffect } from 'react';

const UsersPage = () => {
  const initialUsers = JSON.parse(localStorage.getItem('users'));
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState('');
  const [editUser, setEditUser] = useState(null);
  const [editedUserName, setEditedUserName] = useState('');

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleAddUser = () => {
    if (newUser.trim() && !users.includes(newUser.trim())) {
      setUsers([...users, newUser.trim()]);
      setNewUser('');
    } else {
      alert('Please enter a valid user or avoid duplicate names.');
    }
  };

  const handleDeleteUser = (user) => {
    setUsers(users.filter((item) => item !== user));
  };

  const handleEditUser = (user) => {
    setEditUser(user);
    setEditedUserName(user);
  };

  const handleSaveEdit = () => {
    if (editedUserName.trim() && !users.includes(editedUserName.trim())) {
      setUsers(users.map((user) => (user === editUser ? editedUserName.trim() : user)));
      setEditUser(null);
      setEditedUserName('');
    } else {
      alert('Please enter a valid user name or avoid duplicate names.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-12 bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Users</h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Enter new user name"
          />
          <button
            onClick={handleAddUser}
            className="w-full mt-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Add User
          </button>
        </div>

        <ul className="space-y-4">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
        
                {editUser === user ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-40 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={editedUserName}
                      onChange={(e) => setEditedUserName(e.target.value)}
                    />
                    <button
                      onClick={handleSaveEdit}
                      className="ml-2 py-1 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <span className="text-lg font-medium text-gray-700">{user}</span>
                )}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No users found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
