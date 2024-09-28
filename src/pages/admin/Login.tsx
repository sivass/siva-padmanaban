import React from 'react';
import Login from '../../components/Admin/Login';


const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Login />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
