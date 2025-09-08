import React, { useState } from "react";
import catImage from "./images/cat.png";
import catEyes from "./images/cat_eyes.png";

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
        {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
        <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
          {/* Left Side - Cat and Text */}
          <div className="relative flex">
            {/* Large Cat Image */}
            <div className="relative">
            {/* <div className="relative mb-8"> */}
              <img src={catImage} alt="Cat" className="w-full max-w-lg object-contain mr-auto" />
            </div>

            {/* Text with Arrow */}
            <div className="text-center lg:text-left relative inline-block">
              <p className="text-white text-2xl font-handwriting mb-2 leading-relaxed">
                My friend is waiting
                <br />
                for your letters
              </p>
              {/* Arrow */}
              <svg
                className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-white"
                width="80"
                height="60"
                viewBox="0 0 80 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M74 22C56 16 40 18 12 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 30L22 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 30L22 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Right Side - Contact Form */}

          <div className="relative max-w-xl mx-auto">
            <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10 overflow-hidden">
              {/* Spotlight gradient inside the card */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    'radial-gradient(40% 35% at 50% 65%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.00) 100%)'
                }}
              />
              <h2 className="text-2xl font-bold text-white mb-8 font-sans text-center">
              {/* <h2 className="text-2xl font-bold text-white mb-8 font-sans text-center"> */}
                Get in touch today
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email aligned in grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-white/10 border-0 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-white/10 border-0 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
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
                    className="w-full px-4 py-3 bg-white/10 border-0 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300"
                    required
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-[40%] float-right bg-white text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send message
                </button>
              </form>

              {/* Peeking Cat */}
            </div>
              <img
                src={catEyes}
                alt="Cat peeking"
                className="absolute left-1/2 -translate-x-1/2  h-auto pointer-events-none select-none"
              />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/80 ">
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
            <button className="group inline-flex items-center px-8 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(233,30,99,0.7)] hover:scale-105 transition-all duration-300 active:scale-95" style={{ background: 'linear-gradient(135deg, #FF0000, #0400FF)' }}>
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

