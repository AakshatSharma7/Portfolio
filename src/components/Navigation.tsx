import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavigationProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

export function Navigation({ theme, onThemeToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Tech Stack', href: '#tech' },
    { label: 'Certifications', href: '#cert' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            AK
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onThemeToggle}
              className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-400" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              {isOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
}
