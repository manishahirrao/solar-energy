'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Wrench, Clock, Shield, TrendingUp, CheckCircle, ArrowRight, AlertCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Maintenance() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Solar Maintenance Service.jpg"
            alt="Solar Maintenance Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[
            { width: 80, height: 80, left: 10, top: 20, duration: 3 },
            { width: 60, height: 60, left: 70, top: 60, duration: 4 },
            { width: 100, height: 100, left: 30, top: 80, duration: 5 },
            { width: 50, height: 50, left: 85, top: 15, duration: 3.5 }
          ].map((style, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-5"
              style={{
                width: style.width + 'px',
                height: style.height + 'px',
                left: style.left + '%',
                top: style.top + '%'
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: style.duration,
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
              <Wrench className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Solar Maintenance Services</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Professional maintenance and repair services to keep your solar system operating at peak efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Solar Care</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Regular maintenance is essential for optimal solar system performance and longevity. 
                Our certified technicians provide comprehensive maintenance services to ensure your solar 
                investment continues to deliver maximum returns year after year.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Certified Technicians</h3>
                    <p className="text-gray-600">Highly trained professionals with extensive solar system expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Preventive Care</h3>
                    <p className="text-gray-600">Proactive maintenance to prevent issues before they occur</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Performance Optimization</h3>
                    <p className="text-gray-600">Fine-tuning your system for maximum energy production</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Solar Maintenance Service.jpg"
                  alt="Solar Maintenance"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-6 z-20"
                >
                  <h4 className="text-lg font-bold text-green-700 mb-2">Professional Service</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our maintenance team ensures your solar system operates at peak performance.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Maintenance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive care solutions for all types of solar energy systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: 'Regular Inspections',
                description: 'Scheduled comprehensive checks to ensure optimal system performance and early issue detection'
              },
              {
                icon: Wrench,
                title: 'Performance Optimization',
                description: 'Fine-tuning system components to maximize energy production and efficiency'
              },
              {
                icon: AlertCircle,
                title: 'Emergency Repairs',
                description: 'Rapid response service for unexpected system failures and urgent issues'
              },
              {
                icon: TrendingUp,
                title: 'System Upgrades',
                description: 'Modernizing older systems with latest technology and improved components'
              },
              {
                icon: Shield,
                title: 'Warranty Management',
                description: 'Handling warranty claims and ensuring compliance with manufacturer requirements'
              },
              {
                icon: Clock,
                title: '24/7 Monitoring',
                description: 'Continuous system monitoring with real-time performance alerts and diagnostics'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Maintenance Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible maintenance packages to suit your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Care',
                price: 'Annual Check',
                features: [
                  'Annual system inspection',
                  'Performance report',
                  'Basic cleaning service',
                  'Email support'
                ],
                highlighted: false
              },
              {
                name: 'Premium Care',
                price: 'Bi-Annual Service',
                features: [
                  'Bi-annual inspections',
                  'Detailed performance analysis',
                  'Professional cleaning',
                  'Priority support',
                  'Minor repairs included'
                ],
                highlighted: true
              },
              {
                name: 'Comprehensive Care',
                price: 'Quarterly Service',
                features: [
                  'Quarterly inspections',
                  'Real-time monitoring',
                  'Preventive maintenance',
                  '24/7 emergency support',
                  'All repairs included',
                  'System optimization'
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`rounded-xl shadow-lg p-8 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-green-600 to-green-700 text-white scale-105' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-lg mb-6 ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-green-600'
                      }`} />
                      <span className={plan.highlighted ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-green-600 hover:bg-gray-100'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}>
                    Choose Plan
                  </button>
                </Link>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Maintenance Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to solar system maintenance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'System Assessment',
                description: 'Comprehensive evaluation of current system performance and condition'
              },
              {
                step: '02',
                title: 'Diagnostic Testing',
                description: 'Advanced testing to identify potential issues and performance gaps'
              },
              {
                step: '03',
                title: 'Maintenance Work',
                description: 'Professional cleaning, repairs, and optimization of all system components'
              },
              {
                step: '04',
                title: 'Performance Report',
                description: 'Detailed analysis and recommendations for continued optimal performance'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Regular Maintenance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your investment and ensure optimal performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Up to 25% increase in energy production</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Extended system lifespan by 5-10 years</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Reduced downtime and system failures</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Consistent energy output throughout the year</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Lower repair costs through preventive care</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Maximum ROI on your solar investment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Preservation of manufacturer warranties</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Increased property value with well-maintained systems</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Keep Your Solar System Perfect?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule professional maintenance and ensure your solar system continues to deliver optimal performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center">
                  Schedule Maintenance
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-600 transition-colors font-semibold text-lg">
                  Get Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
