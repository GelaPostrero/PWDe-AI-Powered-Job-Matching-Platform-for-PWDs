import React from 'react';
import Logo from '../../../components/ui/Logo.jsx';

const EmployerSignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo showText={true} />
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 w-full max-w-2xl text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Employer Sign Up</h1>
          <p className="text-gray-600">Coming soon. For now, please continue with Sign In to proceed.</p>
        </div>
      </main>
    </div>
  );
};

export default EmployerSignUp;


