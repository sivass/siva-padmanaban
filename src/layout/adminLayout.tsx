import React, { useState } from 'react';
import SideBar from '../components/Admin/SideBar';
import { UserCircleIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const location = useLocation();
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />

     {/* Main content area with header */}
     <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Admin
                </h2>
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <button
                    onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <UserCircleIcon className="h-8 w-8 text-gray-400" />
                    <span className="ml-2">John Doe</span>
                    <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" />
                  </button>
                  {isAccountMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Link to="/admin/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</Link>
                      <Link to="/admin/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                      <button onClick={() => console.log('Sign out')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
