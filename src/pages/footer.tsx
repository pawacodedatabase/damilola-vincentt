// import React from 'react';
// import {
//   FaEnvelope,
  
//   FaLinkedin,
//   FaInstagram,
//   FaTwitter,
//   FaGithub,
//   FaWhatsapp,
// } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-[#ccc] dark:bg-black text-gray-800 dark:text-gray-200 py-10">
    <div className="max-w-6xl mx-auto px-6">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-sm leading-relaxed">
            I am a front-end developer passionate about creating responsive, visually appealing designs. With expertise
            in React, TypeScript, and UI/UX design, I strive to craft engaging web experiences.
          </p>
        </div>

        {/* Contact Section
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:whakhydoh@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 transition"
              title="Email"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://wa.me/+2348053208997"
              className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-600 transition"
              title="WhatsApp"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/damilola-ogunbanwo-1347b5284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-blue-500 hover:text-blue-900 dark:hover:text-blue-700 transition"
              title="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://instagram.com/its.damilola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-600 transition"
              title="Instagram"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://twitter.com/vicesensei"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 transition"
              title="Twitter"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://github.com/pawacodedatabase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              title="GitHub"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div> */}

        {/* Newsletter Section */}
        {/* <div className="text-center md:text-right">
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-sm mb-4">
            Subscribe to get updates about new projects and opportunities.
          </p>
          <form className="flex flex-col sm:flex-row justify-center md:justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <button
              type="submit"
              className="p-2 bg-purple-600 text-white rounded-r hover:bg-purple-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Damilola Vincent. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
