import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    // <section id="contact" className="min-h-[60vh] relative overflow-hidden">
    <section
  id="contact"
  className="min-h-[60vh] relative overflow-hidden"
  style={{
    background: `radial-gradient(60% 40% at 10% 10%, rgba(4,0,255,.25) 0%, transparent 60%),
                 radial-gradient(50% 35% at 90% 80%, rgba(255,0,0,.22) 0%, transparent 60%),
                 linear-gradient(135deg, #0b0f16 0%, #140a1f 35%, #1a0a1a 100%)`
  }}
>
      {/* Header */}
      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white font-sans">
            Contact me
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Cat and Text */}
          <div className="relative">
            {/* Large Cat Image */}
            <div className="relative mb-8">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-400/40 to-purple-600/40 rounded-full flex items-center justify-center relative">
                <div className="w-80 h-80 bg-gray-700 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-6xl transform rotate-12">🐱</div>
                </div>
                {/* Purple gradient glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Text with Arrow */}
            <div className="text-center lg:text-left">
              <p className="text-white text-2xl font-handwriting mb-6 leading-relaxed">
                My friend is waiting for your letters
              </p>
              <div className="flex justify-center lg:justify-start items-center">
                <span className="text-white text-3xl animate-pulse">→</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl relative">
            <h2 className="text-2xl font-bold text-white mb-6 font-sans">
              Get in touch today
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Anton Filkas"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-medium mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="anton.fil@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Leave us a message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please type your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Send message
              </button>
            </form>

            {/* Peeking Cat */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="text-4xl animate-bounce">🐱</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/80 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Left Side */}
            <div className="text-white font-semibold text-lg">Anton F.</div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              <a
                href="#about"
                className="text-white hover:text-purple-300 transition-colors duration-300 font-sans"
              >
                About me
              </a>
              <a
                href="#skills"
                className="text-white hover:text-purple-300 transition-colors duration-300 font-sans"
              >
                My skills
              </a>
              <a
                href="#portfolio"
                className="text-white hover:text-purple-300 transition-colors duration-300 font-sans"
              >
                My side projects
              </a>
              <a
                href="#contact"
                className="text-white hover:text-purple-300 transition-colors duration-300 font-sans"
              >
                Contact me
              </a>
            </nav>

            {/* Download CV Button */}
            <button className="px-6 py-2 text-white border border-transparent bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-sans">
              Download CV
            </button>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm font-sans">
              All rights reserved
            </p>
            <a
              href="mailto:antonfil.job@gmail.com"
              className="text-gray-400 text-sm hover:text-white transition-colors duration-300 font-sans"
            >
              antonfil.job@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
