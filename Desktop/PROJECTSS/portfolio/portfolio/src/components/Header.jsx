import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import { FiGithub, FiLinkedin, FiSun, FiMoon } from 'react-icons/fi';

import { socialLinks } from '../data/data';

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-grey-900 shadow-lg backdrop-blur-lg'
          : 'py-4 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 mt-3 md:px-8 flex justify-between items-center">
        <motion.div 
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative px-2 py-1 text-xl font-bold text-purple-600 dark:text-lightgreen hover:text-blue-600 dark:hover:text-green-800 transition-colors ${
                activeSection === item.toLowerCase() ? 'text-blue-600 dark:text-lightgreen' : ''
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-lightgreen"
                  layoutId="underline"
                />
              )}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-lightgreen"
          >
            <FiGithub size={20} />
          </a>
          <a 
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-lightgreen"
          >
            <FiLinkedin size={20} />
          </a>
          
          <motion.button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {darkMode ? <FiSun className="text-yellow-500" /> : <FiMoon className="text-blue-600" />}
          </motion.button>

          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-green-500 dark:text-lightgreen hover:text-blue-600 dark:hover:text-lightgreen transition-colors"
                  onClick={() => setOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.a>
              ))}
              <div className="flex gap-4 pt-4 border-t dark:border-gray-700">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="dark:hover:text-lightgreen">
                  <FiGithub size={20} />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="dark:hover:text-lightgreen">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;