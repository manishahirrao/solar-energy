'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, Users } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-5"
              style={{
                width: Math.random() * 80 + 40 + 'px',
                height: Math.random() * 80 + 40 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-white border-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Our terms and conditions for using Procura Solar services and website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Effective Date:</strong> December 2025<br />
                <strong>Company:</strong> Procura Solar<br />
                <strong>Website:</strong> www.procurasolar.com<br />
                <strong>GST No:</strong> 23GLBPS2222E12J
              </p>
            </div>

            <div className="space-y-8">
              {/* Acceptance of Terms */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    By accessing and using Procura Solar's website and services, you accept and agree 
                    to be bound by these Terms of Service. If you do not agree to these terms, please 
                    do not use our services.
                  </p>
                  <p>
                    These terms constitute a legally binding agreement between you and Procura Solar 
                    for the use of our solar energy consultation, installation, and maintenance services.
                  </p>
                </div>
              </motion.div>

              {/* Services Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Procura Solar provides the following services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Solar Energy Consultation:</strong> Site assessment, system design, and feasibility studies</li>
                    <li><strong>Solar Panel Installation:</strong> Complete installation of residential and commercial solar systems</li>
                    <li><strong>Hybrid Energy Systems:</strong> Integration of solar with battery storage solutions</li>
                    <li><strong>Maintenance Services:</strong> Regular maintenance, repairs, and system optimization</li>
                    <li><strong>Energy Storage Solutions:</strong> Battery backup and energy management systems</li>
                    <li><strong>Technical Support:</strong> Ongoing customer support and system monitoring</li>
                  </ul>
                </div>
              </motion.div>

              {/* Customer Responsibilities */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Customer Responsibilities</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>As a customer, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate information about your energy needs and property requirements</li>
                    <li>Ensure site accessibility for installation teams</li>
                    <li>Obtain necessary permits and approvals as required</li>
                    <li>Make timely payments as per agreed terms</li>
                    <li>Follow safety guidelines during installation and maintenance</li>
                    <li>Report any issues or concerns promptly</li>
                    <li>Maintain the solar system as per manufacturer guidelines</li>
                  </ul>
                </div>
              </motion.div>

              {/* Payment Terms */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Payment terms for our services include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Consultation Fees:</strong> Paid upfront or as per agreement</li>
                    <li><strong>Installation Payments:</strong> Typically 50% advance, 40% on completion, 10% after final inspection</li>
                    <li><strong>Maintenance Contracts:</strong> Annual or monthly payment options available</li>
                    <li><strong>Payment Methods:</strong> Bank transfer, check, or online payment</li>
                    <li><strong>Late Payment:</strong> Interest charges may apply to overdue payments</li>
                    <li><strong>Refund Policy:</strong> As per our refund policy terms</li>
                  </ul>
                </div>
              </motion.div>

              {/* Warranty and Guarantees */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty and Guarantees</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We offer comprehensive warranties on our products and services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Solar Panels:</strong> 25-year manufacturer warranty</li>
                    <li><strong>Installation Workmanship:</strong> 5-year warranty on installation quality</li>
                    <li><strong>Inverters and Components:</strong> 5-10 year manufacturer warranties</li>
                    <li><strong>Maintenance Services:</strong> Service guarantee as per contract terms</li>
                    <li><strong>Performance Guarantee:</strong> Minimum energy output guarantee as specified</li>
                  </ul>
                </div>
              </motion.div>

              {/* Limitation of Liability */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Procura Solar's liability is limited as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Total liability limited to the contract value</li>
                    <li>Not liable for consequential or indirect damages</li>
                    <li>Not responsible for acts of nature or third-party interference</li>
                    <li>Not liable for utility company policies or grid issues</li>
                    <li>Liability for defective products limited to manufacturer warranties</li>
                  </ul>
                </div>
              </motion.div>

              {/* Termination */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Either party may terminate services under the following conditions:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mutual agreement between both parties</li>
                    <li>Breach of contract terms by either party</li>
                    <li>Force majeure events preventing service delivery</li>
                    <li>Non-payment as per agreed terms</li>
                    <li>Written notice with 30 days termination period</li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-green-50 rounded-xl p-8 border border-green-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-3 text-gray-600">
                  <p>For questions about these Terms of Service, please contact us:</p>
                  <p>
                    <strong>Procura Solar</strong><br />
                    E-3/114, 2nd Floor, Anera Colony, Bhopal<br />
                    Email: sales.procura@gmail.com<br />
                    Phone: +91 8959890113, +91 7415550210<br />
                    Website: www.procurasolar.com<br />
                    GST No: 23GLBPS2222E12J
                  </p>
                  <p className="text-sm text-gray-500">
                    These terms may be updated periodically. Continued use of our services constitutes acceptance of any changes.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
