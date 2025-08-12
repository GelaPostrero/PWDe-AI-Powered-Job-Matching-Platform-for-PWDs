import React from 'react';
import logo from '../../assets/logo.png'; // Assuming your logo path is correct

const Logo = ({ showText = false }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="PWDe Logo" className="w-8 h-8" />
      {showText && <h1 className="text-xl font-bold text-blue-500">PWDe</h1>}
    </div>
  );
};

export default Logo;