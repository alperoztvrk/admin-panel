'use client'; 

import { useEffect, useState } from 'react';  

export default function WelcomePage() {
  const [userName, setUserName] = useState('');
  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || { name: 'Admin' };
    setUserName(user.name);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome back, {userName}!</h1>
        <p className="text-lg text-gray-600 mb-6">
          
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        
          <div className="bg-gray-400 text-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold">Total Users</h2>
            <p className="text-3xl">1</p>
          </div>
          
          <div className="bg-gray-400 text-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold">Total Transactions</h2>
            <p className="text-3xl">89</p>
          </div>
        </div>

        <div className="space-y-8">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Quick Links</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <a href="/admin/settings" className="flex items-center space-x-4 text-gray-800 hover:text-gray-400">
        <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
        </svg>
        <span className="text-lg font-medium">Manage Settings</span>
      </a>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <a href="/admin/users" className="flex items-center space-x-4 text-gray-800 hover:text-gray-400">
        <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
        </svg>
        <span className="text-lg font-medium">User Management</span>
      </a>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <a href="/admin/transactions" className="flex items-center space-x-4 text-gray-800 hover:text-gray-400">
        <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
        </svg>
        <span className="text-lg font-medium">Transactions Overview</span>
      </a>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <a href="/admin/profile" className="flex items-center space-x-4 text-gray-800 hover:text-gray-400">
        <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
        </svg>
        <span className="text-lg font-medium">View Profile</span>
      </a>
    </div>
  </div>
</div>


  
      </div>
    </div>
  );
}
