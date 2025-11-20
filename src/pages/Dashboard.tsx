import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const { fullname, username, email, gender } = location.state || {}; // Extract user details

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">Welcome to Your Dashboard</h1>

          <div className="space-y-4">
            <p className="text-lg">
              <strong>Full Name:</strong> <span className="text-gray-800 dark:text-gray-200">{fullname || 'N/A'}</span>
            </p>
            <p className="text-lg">
              <strong>Username:</strong> <span className="text-gray-800 dark:text-gray-200">{username || 'N/A'}</span>
            </p>
            <p className="text-lg">
              <strong>Email:</strong> <span className="text-gray-800 dark:text-gray-200">{email || 'N/A'}</span>
            </p>
            <p className="text-lg">
              <strong>Gender:</strong> <span className="text-gray-800 dark:text-gray-200">{gender || 'N/A'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
