'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { RefreshCw, CreditCard, Calendar, AlertCircle } from 'lucide-react';

export default function RefundPolicy() {
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
              <RefreshCw className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Refund Policy</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Our refund and cancellation policy for solar energy services and products.
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
            <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
              <p className="text-blue-800 leading-relaxed">
                <strong>Effective Date:</strong> December 2025<br />
                <strong>Company:</strong> Procura Solar<br />
                <strong>Website:</strong> www.procurasolar.com
              </p>
            </div>

            <div className="space-y-8">
              {/* Consultation Services */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Consultation Services</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    For solar consultation services, our refund policy is as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Full Refund:</strong> Available if cancelled 48 hours before scheduled consultation</li>
                    <li><strong>50% Refund:</strong> Available if cancelled 24-48 hours before scheduled consultation</li>
                    <li><strong>No Refund:</strong> For cancellations less than 24 hours before consultation</li>
                    <li><strong>Rescheduling:</strong> Free rescheduling up to 24 hours before appointment</li>
                  </ul>
                  <p>
                    Refunds are processed within 7-10 business days to the original payment method.
                  </p>
                </div>
              </motion.div>

              {/* Solar Installation Services */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Solar Installation Services</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    For solar installation projects, the following refund terms apply:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Advance Payment:</strong> Non-refundable after site survey and system design completion</li>
                    <li><strong>Work Cancellation:</strong> Customer may cancel before installation begins with 25% cancellation fee</li>
                    <li><strong>Partial Refund:</strong> Available if cancelled after materials ordered but before installation</li>
                    <li><strong>No Refund:</strong> After installation work has commenced</li>
                    <li><strong>Special Circumstances:</strong> Refunds considered on case-by-case basis for documented emergencies</li>
                  </ul>
                </div>
              </motion.div>

              {/* Solar Products */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <CreditCard className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Solar Products</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    For solar panels, inverters, and other equipment:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Return Period:</strong> 30 days from delivery date</li>
                    <li><strong>Condition:</strong> Products must be unused, in original packaging</li>
                    <li><strong>Restocking Fee:</strong> 15% restocking fee applies to returned products</li>
                    <li><strong>Shipping:</strong> Customer responsible for return shipping costs</li>
                    <li><strong>Custom Orders:</strong> Non-refundable and non-returnable</li>
                    <li><strong>Defective Products:</strong> Covered under manufacturer warranty, not refund policy</li>
                  </ul>
                </div>
              </motion.div>

              {/* Maintenance Services */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Maintenance Services</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    For annual maintenance contracts and service plans:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Annual Contracts:</strong> Pro-rated refund if cancelled mid-year</li>
                    <li><strong>One-time Services:</strong> 50% refund if cancelled 24 hours before service</li>
                    <li><strong>No Refund:</strong> For services already performed</li>
                    <li><strong>Emergency Services:</strong> Non-refundable once dispatched</li>
                  </ul>
                </div>
              </motion.div>

              {/* Non-Refundable Items */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Non-Refundable Items</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>The following items and services are non-refundable:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Government permit and application fees</li>
                    <li>Utility company connection fees</li>
                    <li>Travel and transportation costs</li>
                    <li>Custom-designed systems and special orders</li>
                    <li>Software licenses and monitoring services</li>
                    <li>Installation labor costs after work completion</li>
                    <li>Consumable materials (wires, connectors, etc.)</li>
                  </ul>
                </div>
              </motion.div>

              {/* Refund Process */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
                <div className="space-y-4 text-gray-600">
                  <p>To request a refund, please follow these steps:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Contact our customer service team via email or phone</li>
                    <li>Provide your order number and reason for refund request</li>
                    <li>Submit any required documentation (photos, reports, etc.)</li>
                    <li>Wait for refund approval (typically 3-5 business days)</li>
                    <li>Receive refund confirmation and processing timeline</li>
                  </ol>
                  <p>
                    Refunds are typically processed within 7-10 business days after approval.
                  </p>
                </div>
              </motion.div>

              {/* Dispute Resolution */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If you disagree with our refund decision, you may:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Request a review by our management team</li>
                    <li>Submit additional supporting documentation</li>
                    <li>Seek mediation through consumer protection agencies</li>
                    <li>File a complaint with relevant regulatory authorities</li>
                  </ul>
                  <p>
                    We are committed to fair and transparent refund practices and will work with you 
                    to resolve any disputes amicably.
                  </p>
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
                  <p>For refund requests and inquiries, please contact us:</p>
                  <p>
                    <strong>Procura Solar</strong><br />
                    E-3/114, 2nd Floor, 10 No. Market, Arera Colony, Bhopal<br />
                    Email: sale.procura@gmail.com<br />
                    Phone: +91 8959890113, +91 7415550210<br />
                    Website: www.procurasolar.com
                  </p>
                  <p className="text-sm text-gray-500">
                    This refund policy may be updated periodically. Changes will be effective immediately upon posting.
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
