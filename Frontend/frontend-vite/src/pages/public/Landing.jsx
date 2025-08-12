import React from 'react';
import Logo from '../../components/ui/Logo.jsx';
import AccessibilityIcons from '../../components/ui/AccessibilityIcons.jsx';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Navigation Bar */}
          <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
            {/* Logo */}
            <Logo size="default" showText={true} />

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact Us</a>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sign In</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg">
                Sign Up
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                {/* Headline */}
                <div className="space-y-2">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-gray-900 block">Empowering</span>
                    <span className="text-gray-900 block">Connections</span>
                    <span className="text-green-600 block">for All Abilities</span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                  PWDe leverages AI to bridge Persons With Disabilities with trusted, inclusive employers. 
                  Discover opportunities designed with your strengths and needs in mind.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                    Find Jobs
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                    For Employers
                  </button>
                </div>

                {/* Accessibility Icons */}
                <AccessibilityIcons />
              </div>

              {/* Right Side - Illustration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    {/* Office Meeting Scene */}
                    <div className="space-y-4">
                      {/* Windows Background */}
                      <div className="h-32 bg-gradient-to-b from-blue-200 to-blue-100 rounded-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="w-8 h-12 bg-white/80 rounded"></div>
                            <div className="w-8 h-12 bg-white/80 rounded"></div>
                            <div className="w-8 h-12 bg-white/80 rounded"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* People */}
                      <div className="flex justify-center items-end space-x-2">
                        {/* Person 1 - Wheelchair */}
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-green-400 rounded-full mb-1"></div>
                          <div className="w-6 h-3 bg-blue-300 rounded-full"></div>
                        </div>
                        
                        {/* Person 2 */}
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-pink-400 rounded-full mb-1"></div>
                          <div className="w-6 h-3 bg-pink-300 rounded-full"></div>
                        </div>
                        
                        {/* Person 3 */}
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-yellow-400 rounded-full mb-1"></div>
                          <div className="w-6 h-3 bg-yellow-300 rounded-full"></div>
                        </div>
                        
                        {/* Person 4 */}
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-blue-400 rounded-full mb-1"></div>
                          <div className="w-6 h-3 bg-blue-300 rounded-full"></div>
                        </div>
                        
                        {/* Person 5 */}
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-purple-400 rounded-full mb-1"></div>
                          <div className="w-6 h-3 bg-purple-300 rounded-full"></div>
                        </div>
                        
                        {/* Person 6 */}
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-red-400 rounded-full mb-1"></div>
                          <div className="w-6 h-3 bg-red-300 rounded-full"></div>
                        </div>
                        
                        {/* Person 7 */}
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-indigo-400 rounded-full mb-1"></div>
                          <div className="w-6 h-3 bg-indigo-300 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Table/Meeting Area */}
                      <div className="h-4 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;