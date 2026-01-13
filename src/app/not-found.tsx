'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* 404 Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="text-8xl md:text-9xl font-bold mb-4 text-white text-opacity-20">
              404
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Oops! The page you're looking for seems to have gone solar. Let's help you find your way back.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Error Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-16 h-16 text-green-600" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                We couldn't find that page
              </h2>
              
              <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                The page you're looking for might have been removed, had its name changed, 
                or is temporarily unavailable. Don't worry though, we have plenty of solar 
                energy content for you to explore!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  href="/"
                  className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
                
                <button
                  onClick={() => window.history.back()}
                  className="bg-gray-200 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-300 transition-colors font-semibold flex items-center justify-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </button>
              </div>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                You might be looking for:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  href="/about"
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                >
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    About Us
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Learn about our mission to make India energy independent
                  </p>
                </Link>

                <Link
                  href="/service"
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                >
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Our Services
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Explore our comprehensive renewable energy solutions
                  </p>
                </Link>

                <Link
                  href="/project"
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                >
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Projects
                  </h4>
                  <p className="text-gray-600 text-sm">
                    View our portfolio of successful solar installations
                  </p>
                </Link>

                <Link
                  href="/contact"
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                >
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Contact Us
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Get in touch with our solar energy experts
                  </p>
                </Link>

                <Link
                  href="/faqs"
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                >
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    FAQs
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Find answers to common questions about solar energy
                  </p>
                </Link>
              </div>
            </motion.div>

            {/* Search Suggestion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 bg-gray-50 rounded-xl p-8"
            >
              <div className="flex items-center justify-center mb-4">
                <RefreshCw className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Still can't find what you're looking for?
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-center">
                Try using our search function or contact our support team for assistance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
                  Search Site
                </button>
                <Link
                  href="/contact"
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors font-semibold"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
