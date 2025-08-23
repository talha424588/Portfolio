import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 p-6">
      {/* Main Header Container */}
      <div className="relative bg-[#0B0B12] rounded-3xl shadow-lg max-w-7xl mx-auto border border-gray-800">
        {/* Navigation Bar */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-black rounded-full px-8 py-3 border border-gray-700">
            <nav className="flex items-center justify-center space-x-8">
              <a href="#home" className="text-white text-sm font-medium hover:text-gray-300 transition-colors bg-gray-800 px-4 py-1 rounded-full">Home</a>
              <a href="#about" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">About</a>
              <a href="#portfolio" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Portfolio</a>
              <a href="#hobby" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Hobby</a>
              <a href="#contact" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        {/* Header Content */}
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold text-white">
              Anton F.
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 h-9 px-4 pr-10 rounded-full bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <Search className="absolute right-3 w-4 h-4 text-gray-400" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-6">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-white font-semibold" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="text-white font-semibold" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#portfolio" className="text-white font-semibold" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a href="#hobby" className="text-white font-semibold" onClick={() => setIsMenuOpen(false)}>Hobby</a>
                <a href="#contact" className="text-white font-semibold" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </nav>
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-9 px-4 pr-10 rounded-full bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;