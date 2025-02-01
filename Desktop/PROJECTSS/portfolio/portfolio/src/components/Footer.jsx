import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiFacebook } from 'react-icons/fi';
import { socialLinks } from '../data/data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-12 pb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Brand Section */}
          <div className="flex items-center justify-center md:justify-start">
            <motion.img 
              src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg" 
              alt="Brand Logo" 
              className="h-48 w-48 md:h-56 md:w-56 transition-transform duration-300 ease-in-out transform hover:scale-110" 
            />
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-purple-600 mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-purple-600 hover:text-blue-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-left md:text-center">
            <h4 className="text-lg font-semibold text-green-500 mb-4">Connect</h4>
            <div className="flex flex-col space-y-2 items-center md:items-center">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-blue-200 flex items-center space-x-2">
                <FiGithub size={24} />
                <span>Github</span>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-blue-200 flex items-center space-x-2">
                <FiLinkedin size={24} />
                <span>Linkedin</span>
              </a>
              <a href={socialLinks.email} className="text-green-500 hover:text-blue-200 flex items-center space-x-2">
                <FiMail size={24} />
                <span>Mail</span>
              </a>
              <a href="https://www.facebook.com/DarkOp2000" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-blue-200 flex items-center space-x-2">
                <FiFacebook size={24} />
                <span>FB</span>
              </a>
              <a href={`https://api.whatsapp.com/send?phone=9779860278913&text=Hello`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-blue-200 flex items-center space-x-2">
                <FiPhone size={24} />
                <span>WhatsApp</span>
              </a>
              
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col items-center">
            <p className="text-blue-700 text-sm text-center">
              © {new Date().getFullYear()} Gopal Dhakal. All rights reserved.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
