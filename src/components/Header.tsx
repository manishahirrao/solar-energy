'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);

  const services = [
    { name: 'Solar EPC', href: '/service/solar-epc', desc: 'End-to-end solutions' },
    { name: 'Solar Installation', href: '/service/solar-installation', desc: 'Professional setup' },
    { name: 'Solar Maintenance', href: '/service/solar-maintenance', desc: 'Ongoing support' }
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/service', hasDropdown: true },
    { name: 'Projects', href: '/project' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/50'
          : 'py-4 bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="/procura logo.png"
                  alt="Procura Solar"
                  className="h-12 sm:h-14 lg:h-16 w-auto transition-all duration-300"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navLinks.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesDropdownOpen(false)}
              >
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all ${isScrolled
                          ? 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden"
                        >
                          <div className="p-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all group"
                              >
                                <div className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-slate-500">{service.desc}</div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${isScrolled
                        ? 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="tel:+918959890113"
              className={`flex items-center gap-2 font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white/80 hover:text-white'
                }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 89598 90113</span>
            </a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  (window as any).openQuoteForm();
                }
              }}
              className="relative group px-6 py-2.5 rounded-full font-semibold text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 transition-transform group-hover:scale-105" />
              <span className="relative flex items-center gap-2 text-white">
                <Sun className="w-4 h-4" />
                Get Free Quote
              </span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${isScrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}
                          className="w-full flex items-center justify-between p-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isMobileServicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 border-l-2 border-emerald-200 pl-4"
                            >
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block p-2 text-slate-600 hover:text-emerald-600 transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block p-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 pt-4 border-t border-slate-100"
                >
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        (window as any).openQuoteForm();
                      }
                      setIsMenuOpen(false);
                    }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <Sun className="w-4 h-4" />
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
