'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

export default function SolarEnergyService() {
  const benefits = [
    'Reduce electricity bills by up to 70%',
    '25-year performance warranty on panels',
    'Increase property value',
    'Environmentally friendly energy source',
    'Low maintenance requirements',
    'Energy independence from grid'
  ];

  const process = [
    {
      step: '1',
      title: 'Site Assessment',
      description: 'Our experts evaluate your location, roof structure, and energy requirements to determine the optimal solar solution.'
    },
    {
      step: '2',
      title: 'System Design',
      description: 'We create a customized solar system design tailored to your specific needs and budget.'
    },
    {
      step: '3',
      title: 'Installation',
      description: 'Our certified technicians install your solar system with precision and attention to detail.'
    },
    {
      step: '4',
      title: 'Commissioning',
      description: 'We test and commission your system, ensuring it operates at peak performance.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Solar Energy Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Harness the power of the sun with our cutting-edge solar panel technology and professional installation services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Solar Energy Solutions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our solar energy solutions are designed to provide clean, renewable power for homes and businesses. We use only the highest quality solar panels and equipment to ensure maximum efficiency and longevity.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're looking to reduce your carbon footprint, save on electricity bills, or achieve energy independence, our solar solutions are tailored to meet your specific needs.
              </p>
              
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors font-semibold flex items-center">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <Zap className="w-24 h-24 text-white text-opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to commissioning, we make solar installation simple and hassle-free
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Solar Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading features and benefits that set us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High-Efficiency Panels</h3>
              <p className="text-gray-600 leading-relaxed">
                We use premium solar panels with efficiency ratings above 22%, ensuring maximum power generation from limited roof space.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Monitoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time monitoring system allows you to track energy production and consumption through our mobile app.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our certified technicians ensure professional installation following all safety standards and regulations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Go Solar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote for your solar energy needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call +91 004-9985-484-44
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-600 transition-colors font-semibold flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
