'use client'; 

import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { FaCog, FaUsers, FaMoneyCheckAlt, FaUserCircle } from 'react-icons/fa';
import '/styles/globals.css'; 

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');  
    router.push('/');  
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */} 
      <aside className="w-64 bg-gray-700 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="font-family: Lobster,;text-2xl font-bold mb-6 text-gray-400">ADMIN DASHBOARD</h2>
          <nav>
            <ul>
              <li>
                <Link
                  href="/admin/settings"
                  className={`flex items-center py-2 px-4 rounded mb-4 hover:bg-gray-800 transition duration-300  ${
                    router.pathname === '/admin/settings' ? 'bg-gray-600' : ''
                  }`}
                >
                  <FaCog className="mr-3" />
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/users"
                  className={`flex items-center py-2 px-4 rounded mb-4 hover:bg-gray-800 transition duration-300 ${
                    router.pathname === '/admin/users' ? 'hover:bg-gray-800' : ''
                  }`}
                >
                  <FaUsers className="mr-3" />
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/transactions"
                  className={`flex items-center py-2 px-4 rounded mb-4 hover:bg-gray-800 transition duration-300 ${
                    router.pathname === '/admin/transactions' ? 'hover:bg-gray-800' : ''
                  }`}
                >
                  <FaMoneyCheckAlt className="mr-3" />
                  Transactions
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/profile"
                  className={`flex items-center py-2 px-4 rounded mb-4 hover:bg-gray-800 transition duration-300 ${
                    router.pathname === '/admin/profile' ? 'hover:bg-gray-800' : ''
                  }`}
                >
                  <FaUserCircle className="mr-3" />
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Logout Button */}
        <div>
          <button
            onClick={handleLogout}
            className="mt-6 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-800 transition duration-300 w-full"
          >
            Logout
          </button>
        </div>
      </aside>
      
      <main className="flex-1 p-6 bg-gray-50 text-gray-800">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
