import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0B0B12]">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-8">
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
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(233,30,99,0.7)] hover:scale-105 transition-all duration-300 active:scale-95">
                Learn more
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center md:justify-end animate-fadeInUp animation-delay-300">
              <div className="relative">
                <div className="w-80 h-96 md:w-96 md:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                    alt="Anton F. - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl -z-10 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CV Tab - Positioned at bottom left */}
        <div className="relative mt-8">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg border border-gray-200">
            CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;