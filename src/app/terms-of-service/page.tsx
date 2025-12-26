'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { Shield, Users, FileText, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10">Terms of Service</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using Procura Solar's services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Procura Solar provides solar energy installation, maintenance, and consulting services. All services are subject to the terms outlined in this agreement.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Payment terms are specified in individual service agreements. All payments must be made as per the agreed schedule.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Warranty and Support</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We provide warranty coverage as specified in your service agreement. Support services are available during business hours.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Procura Solar shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Mail className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Email: sale.procura@gmail.com</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Phone className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Phone: +91 8959890113</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Address: E-3/114, 2nd Floor, 10 No. Market, Arera Colony, Bhopal</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}