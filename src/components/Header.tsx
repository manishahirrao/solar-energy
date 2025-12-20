'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Sun, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <img 
                  src="/procura logo.jpg" 
                  alt="Procura Solar" 
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/project" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Project
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-medium">
                Get a Quote
              </Link>
            </div>

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
                  <Link href="/project" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Projects
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
