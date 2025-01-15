'use client';

import React, { useState } from 'react';

const ProfilePage = () => {

  const initialUser = JSON.parse(localStorage.getItem('user')) || {
    name: 'Ali Yilmaz',
    email: 'ali.yilmaz@example.com',
    password: 'password123',
  };

  const [user, setUser] = useState(initialUser);
  const [editMode, setEditMode] = useState(false);
  const [newUserDetails, setNewUserDetails] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
  });

  const [passwordVisible, setPasswordVisible] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = () => {
    if (newUserDetails.name && newUserDetails.email && newUserDetails.password) {
      setUser(newUserDetails);
      localStorage.setItem('user', JSON.stringify(newUserDetails));
      setEditMode(false);
      alert('Profile updated successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-12 bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Profile</h1>

        {/* Display User Info or Edit Mode */}
        <div className="space-y-6">
          {editMode ? (
            <div>
              {/* Edit Mode */}
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={newUserDetails.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={newUserDetails.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                />
              </div>

              <div className="mb-4 relative">
                <label className="block text-gray-600 font-semibold">Password</label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={newUserDetails.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
          
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-9 text-gray-500 cursor-pointer"
                >
                  {passwordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3l18 18M7 13a4 4 0 11-2 0 4 4 0 012 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zM12 3a9 9 0 100 18A9 9 0 0012 3z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <button
                onClick={handleSaveClick}
                className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
              >
                Save Changes
              </button>
              <button
                onClick={handleEditClick}
                className="w-full py-2 mt-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition duration-300 ease-in-out"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <p className="text-lg text-gray-700 mb-2">
                  <strong>Name:</strong> {user.name}
                </p>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>Password:</strong> ********
                </p>
              </div>
              <button
                onClick={handleEditClick}
                className="w-full py-2 mt-4 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
