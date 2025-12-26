'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Sun, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);

  const services = [
    { name: 'Solar Energy', href: '/service/solar-energy' },
    { name: 'Hybrid Energy', href: '/service/hybrid-energy' },
    { name: 'Energy Storage', href: '/service/energy-storage' },
    { name: 'Solar Maintenance', href: '/service/maintenance' },
    { name: 'Solar Consulting', href: '/service/solar-consulting' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      {/* Main navigation */}
      <nav className={`transition-all duration-300 w-full ${isScrolled ? 'bg-white shadow-none' : 'bg-white bg-opacity-95 backdrop-blur-sm shadow-lg'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="flex items-center group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/procura logo.png" 
                    alt="Procura Solar" 
                    className="w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300"
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop menu */}
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ul className="flex space-x-8">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Services', href: '/service', hasDropdown: true },
                  { name: 'Projects', href: '/gallery' },
                  { name: 'Contact', href: '/contact' }
                ].map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setIsServicesDropdownOpen(false)}
                  >
                    {item.hasDropdown ? (
                      <div className="relative">
                        <button 
                          className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group flex items-center"
                          onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        >
                          {item.name}
                          <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                          <motion.div
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"
                            layoutId="underline"
                          />
                        </button>
                        
                        {/* Dropdown Menu */}
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ 
                            opacity: isServicesDropdownOpen ? 1 : 0,
                            y: isServicesDropdownOpen ? 0 : -10,
                            display: isServicesDropdownOpen ? 'block' : 'none'
                          }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                        >
                          <div className="py-2">
                            {services.map((service, serviceIndex) => (
                              <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ 
                                  opacity: isServicesDropdownOpen ? 1 : 0,
                                  x: isServicesDropdownOpen ? 0 : -10
                                }}
                                transition={{ duration: 0.1, delay: serviceIndex * 0.05 }}
                                whileHover={{ backgroundColor: '#f0fdf4' }}
                              >
                                <Link 
                                  href={service.href}
                                  className="block px-4 py-3 text-gray-700 hover:text-green-600 transition-colors text-sm"
                                  onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    ) : (
                      <Link 
                        href={item.href} 
                        className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
                      >
                        {item.name}
                        <motion.div
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"
                          layoutId="underline"
                        />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="tel:+918959890113" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors font-medium flex items-center text-sm">
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mr-2"
                  >
                    <Sun className="w-4 h-4" />
                  </motion.div>
                  Call: 8959890113
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="tel:+918959890113" 
                  className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                </Link>
              </motion.div>
              
              {/* Menu Toggle Button */}
              <motion.button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-green-50 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative">
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                  {isMenuOpen && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-green-600 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu with animation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden bg-white border-t border-gray-200 shadow-lg"
              >
                <motion.ul
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="space-y-2 py-6 px-4"
                >
                  {[
                    { name: 'Home', href: '/', icon: null },
                    { name: 'About Us', href: '/about', icon: null },
                    { name: 'Services', href: '/service', icon: ChevronDown, hasDropdown: true },
                    { name: 'Projects', href: '/gallery', icon: null },
                    { name: 'Contact', href: '/contact', icon: null }
                  ].map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      className="relative"
                      onMouseEnter={() => item.hasDropdown && setIsMobileServicesDropdownOpen(true)}
                      onMouseLeave={() => item.hasDropdown && setIsMobileServicesDropdownOpen(false)}
                    >
                      {item.hasDropdown ? (
                        <div className="relative">
                          <button 
                            className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group flex items-center w-full justify-between py-3 px-4 rounded-lg hover:bg-green-50"
                            onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}
                          >
                            <span>{item.name}</span>
                            <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {/* Mobile Dropdown Menu */}
                          <AnimatePresence>
                            {isMobileServicesDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                              >
                                <div className="py-2">
                                  {services.map((service, serviceIndex) => (
                                    <motion.div
                                      key={service.name}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.1, delay: serviceIndex * 0.05 }}
                                      whileHover={{ backgroundColor: '#f0fdf4' }}
                                    >
                                      <Link 
                                        href={service.href}
                                        className="block px-4 py-3 text-gray-700 hover:text-green-600 transition-colors text-sm"
                                        onClick={() => {
                                          setIsMobileServicesDropdownOpen(false);
                                          setIsMenuOpen(false);
                                        }}
                                      >
                                        {service.name}
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link 
                          href={item.href} 
                          className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="pt-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        href="tel:+918959890113" 
                        className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-200 font-medium block text-center shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Sun className="w-4 h-4 inline mr-2" />
                        Call: 8959890113
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;
