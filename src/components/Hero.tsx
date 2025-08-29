import React from 'react';
import { Search } from 'lucide-react';
import image from "../components/images/hero-image.png";
import './hero/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0B0B12] pt-[50px]">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="relative bg-white rounded-3xl shadow-lg p-8 overflow-hidden">
          {/* Top Header - Logo, Navigation, and Search in one row */}
          <div className="flex items-center justify-between mb-8">
            {/* Logo */}
            <div className="text-xl font-bold text-black">
              Anton F.
            </div>

            {/* Navigation Bar - Centered */}
            <div className="bg-black rounded-full border border-gray-700 navbar">
              <nav className="flex items-center justify-center space-x-8">
                <a href="#home" className="text-white text-sm font-medium hover:text-gray-300 transition-colors bg-gray-800 px-4 py-1 rounded-full">Home</a>
                <a href="#about" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">About</a>
                <a href="#portfolio" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Portfolio</a>
                <a href="#hobby" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Hobby</a>
                <a href="#contact" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Contact</a>
              </nav>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 h-9 px-4 pr-10 rounded-full bg-gray-100 border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <Search className="absolute right-3 w-4 h-4 text-gray-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6 animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                Anton F.
              </h1>
              <div className="space-y-3">
                <p className="text-xl text-gray-600 font-medium">
                  SOFTWARE ENGINEER | FULLSTACK DEVELOPER
                </p>
                <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                  With impeccable experience from concept to layout, I bring your ideas to life with clean code.
                </p>
              </div>
              <button
                className="group inline-flex items-center px-8 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(233,30,99,0.7)] hover:scale-105 transition-all duration-300 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #FF0000, #0400FF)' }}
              >
                Learn more
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center md:justify-center animate-fadeInUp animation-delay-300">
              <div className="relative">
                <div className="w-80 rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt="Anton F. - Software Engineer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl -z-10 opacity-20"></div>
              </div>
            </div>
          </div>

  

          {/* New Curved Tab - Bottom Left with ~ Shape */}
          <div className="absolute bottom-2 left-2">
            <div className="bg-black w-32 h-24 rounded-tl-[50px] rounded-br-[50px] relative z-0">
              <div className="absolute bottom-2 left-2 bg-white w-28 h-20 rounded-tl-[40px] rounded-br-[40px] flex items-center justify-center border border-gray-200 shadow-md">
                <span className="font-semibold text-black">CV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;