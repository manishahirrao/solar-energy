'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, Sun, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

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
        <div className="w-full px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
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
                    src="/procura logo.jpg" 
                    alt="Procura Solar" 
                    className="w-16 h-16 transition-transform duration-300"
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
                  { name: 'Gallery', href: '/gallery' },
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
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Contact Us
                  </Link>
                </li>
                <li className="pt-2">
                  <Link href="/contact" className="w-full bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-medium block text-center">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
