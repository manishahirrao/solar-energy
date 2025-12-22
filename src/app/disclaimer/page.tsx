'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, Zap, Shield } from 'lucide-react';

export default function Disclaimer() {
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
              <AlertTriangle className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Disclaimer</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Important information about our solar energy services and website content.
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
            <div className="bg-red-50 rounded-xl p-8 mb-8 border border-red-200">
              <p className="text-red-800 leading-relaxed">
                <strong>Important Notice:</strong> Please read this disclaimer carefully before using our services or website.
              </p>
            </div>

            <div className="space-y-8">
              {/* General Disclaimer */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Info className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">General Disclaimer</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    The information provided by Procura Solar on this website is for general informational 
                    purposes only. While we strive to provide accurate and up-to-date information, we make 
                    no warranties or representations of any kind, express or implied, about the completeness, 
                    accuracy, reliability, or availability of the information contained on this website.
                  </p>
                </div>
              </motion.div>

              {/* Solar Energy Performance */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Solar Energy Performance</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Solar energy system performance depends on various factors including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Weather conditions and seasonal variations</li>
                    <li>Geographic location and solar irradiance</li>
                    <li>System orientation and tilt angle</li>
                    <li>Shading from trees, buildings, or other obstructions</li>
                    <li>Maintenance and cleaning of solar panels</li>
                    <li>Grid availability and utility company policies</li>
                    <li>Age and degradation of solar equipment</li>
                  </ul>
                  <p>
                    Energy savings and production estimates are projections based on ideal conditions and 
                    may vary in actual practice.
                  </p>
                </div>
              </motion.div>

              {/* Financial Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Financial information provided on this website, including cost estimates, ROI calculations, 
                    and savings projections, are for informational purposes only and may not reflect actual results.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Prices are subject to change without notice</li>
                    <li>Government incentives and subsidies may change</li>
                    <li>Electricity rates may fluctuate over time</li>
                    <li>Financing terms depend on credit approval</li>
                    <li>Tax benefits may vary based on individual circumstances</li>
                  </ul>
                  <p>
                    We recommend consulting with financial advisors and tax professionals for personalized advice.
                  </p>
                </div>
              </motion.div>

              {/* Technical Specifications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Technical specifications and product information are provided by manufacturers and may be 
                    subject to change. We do not guarantee the accuracy of third-party product information.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Product specifications may vary by manufacturer</li>
                    <li>Technical data is based on laboratory conditions</li>
                    <li>Real-world performance may differ from specifications</li>
                    <li>Product availability may change without notice</li>
                  </ul>
                </div>
              </motion.div>

              {/* Installation and Services */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation and Services</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Solar panel installation involves electrical work and should only be performed by certified 
                    professionals. We are not responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Damage caused by unauthorized modifications</li>
                    <li>Issues resulting from improper maintenance</li>
                    <li>Delays due to weather or permitting processes</li>
                    <li>Utility company connection delays</li>
                    <li>Damage from natural disasters or extreme weather</li>
                  </ul>
                </div>
              </motion.div>

              {/* Third-Party Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the 
                    content, privacy policies, or practices of third-party sites. External links are provided 
                    for informational purposes only and do not constitute endorsement.
                  </p>
                </div>
              </motion.div>

              {/* Limitation of Liability */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    In no event shall Procura Solar, its directors, employees, or affiliates be liable for 
                    any direct, indirect, incidental, consequential, or special damages arising from or in 
                    connection with the use of our website or services.
                  </p>
                  <p>
                    This includes but is not limited to damages for loss of profits, goodwill, data, or other 
                    intangible losses resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use or inability to use our services</li>
                    <li>Unauthorized access to or alteration of your data</li>
                    <li>Statements or conduct of any third party on the service</li>
                    <li>System downtime or technical issues</li>
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
                  <p>If you have questions about this disclaimer, please contact us:</p>
                  <p>
                    <strong>Procura Solar</strong><br />
                    E-3/114, 2nd Floor, Anera Colony, Bhopal<br />
                    Email: sales.procura@gmail.com<br />
                    Phone: +91 8959890113, +91 7415550210<br />
                    Website: www.procurasolar.com
                  </p>
                  <p className="text-sm text-gray-500">
                    This disclaimer is subject to change without notice. Please review it periodically for updates.
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
