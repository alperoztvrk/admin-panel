'use client';

import React, { useState } from 'react';

const SettingsPage = () => {

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const [enableSystemSettings, setEnableSystemSettings] = useState(false);
  const [enableAdvancedFeatures, setEnableAdvancedFeatures] = useState(false);

  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  const [systemSettingsMessage, setSystemSettingsMessage] = useState('');
  const [notificationSettingsMessage, setNotificationSettingsMessage] = useState('');

  const storedPassword = localStorage.getItem('password') || 'password123';

  const handleChangePassword = () => {
    if (currentPassword !== storedPassword) {
      setPasswordMessage('Invalid current password');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMessage('New passwords do not match');
      return;
    }

    localStorage.setItem('password', newPassword);
    setPasswordMessage('Password successfully updated!');
  };

  const handleSaveSystemSettings = () => {

    localStorage.setItem('systemSettings', JSON.stringify({ enableSystemSettings, enableAdvancedFeatures }));
    setSystemSettingsMessage('System settings have been saved!');
  };

  const handleSaveNotificationSettings = () => {

    localStorage.setItem('notifications', JSON.stringify({ emailNotifications, pushNotifications }));
    setNotificationSettingsMessage('Notification settings have been saved!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex justify-center items-center py-12">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 space-y-8">
        <h1 className="text-4xl font-semibold text-center text-gray-800">Settings</h1>

        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Change Password</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Current Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Confirm New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {passwordMessage && (
            <div
              className={`text-sm ${
                passwordMessage === 'Password successfully updated!'
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {passwordMessage}
            </div>
          )}

          <button
            onClick={handleChangePassword}
            className="w-full py-2 mt-4 bg-gray-500 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            Change Password
          </button>
        </div>

        {/* Manage System Settings */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage System Settings</h2>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enableSystemSettings}
                onChange={() => setEnableSystemSettings(!enableSystemSettings)}
                className="mr-2 rounded border-gray-300 text-gray-500"
              />
              Enable system-wide settings
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enableAdvancedFeatures}
                onChange={() => setEnableAdvancedFeatures(!enableAdvancedFeatures)}
                className="mr-2 rounded border-gray-300 text-gray-500"
              />
              Enable advanced system features
            </label>
          </div>

          {systemSettingsMessage && (
            <div className="text-sm text-green-500 mb-4">{systemSettingsMessage}</div>
          )}

          <button
            onClick={handleSaveSystemSettings}
            className="w-full py-2 mt-4 bg-gray-500 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            Save System Settings
          </button>
        </div>

        {/* Set Up Notifications */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Set Up Notifications</h2>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="mr-2 rounded border-gray-300 text-gray-500"
              />
              Enable email notifications for important events
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={pushNotifications}
                onChange={() => setPushNotifications(!pushNotifications)}
                className="mr-2 rounded border-gray-300 text-gray-500"
              />
              Enable push notifications for real-time alerts
            </label>
          </div>

          {notificationSettingsMessage && (
            <div className="text-sm text-green-500 mb-4">{notificationSettingsMessage}</div>
          )}

          <button
            onClick={handleSaveNotificationSettings}
            className="w-full py-2 mt-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            Save Notification Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
