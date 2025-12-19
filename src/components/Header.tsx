'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="bg-green-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 004-9985-484-44</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@domain.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="bg-white bg-opacity-95 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-green-600">SolarBright</h1>
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
                    <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                      Blog
                    </Link>
                  </li>
                  <li className="relative group">
                    <button className="text-gray-700 hover:text-green-600 transition-colors font-medium flex items-center">
                      Pages
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <Link href="/service/solar-energy" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Service Details</Link>
                      <Link href="/blog/future-of-solar-energy" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Blog Details</Link>
                      <Link href="/project" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Project</Link>
                      <Link href="/project/adani-plant" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Project Details</Link>
                      <Link href="/team" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Our Team</Link>
                      <Link href="/gallery" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Our Gallery</Link>
                      <Link href="/faqs" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">FAQ</Link>
                      <Link href="/404" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">404</Link>
                    </div>
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
                    <Link href="/blog" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/project" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs" className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
                      FAQ
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
      </div>
    </header>
  );
};

export default Header;
