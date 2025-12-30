'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Wrench, Shield, Clock, CheckCircle, AlertTriangle, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolarMaintenance() {
  const maintenancePlans = [
    {
      name: 'Basic',
      price: '₹4,999',
      period: 'per year',
      features: [
        'Bi-annual system inspection',
        'Performance report',
        'Basic cleaning',
        'Email support',
        '10% discount on repairs'
      ],
      recommended: false
    },
    {
      name: 'Premium',
      price: '₹8,999',
      period: 'per year',
      features: [
        'Quarterly system inspection',
        'Detailed performance analysis',
        'Thorough cleaning',
        'Priority phone & email support',
        '15% discount on repairs',
        'Emergency service within 48 hours'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored solution',
      features: [
        'Monthly system monitoring',
        'Comprehensive maintenance',
        'Dedicated account manager',
        '24/7 priority support',
        '20% discount on all services',
        'Same-day emergency response',
        'Performance guarantee'
      ],
      recommended: false
    }
  ];

  const commonIssues = [
    {
      issue: 'Reduced Energy Output',
      cause: 'Dirty panels, shading, or system issues',
      solution: 'Professional cleaning and system check'
    },
    {
      issue: 'Inverter Faults',
      cause: 'Electrical issues or component failure',
      solution: 'Diagnosis and repair by certified technicians'
    },
    {
      issue: 'Physical Damage',
      cause: 'Weather, debris, or wildlife',
      solution: 'Panel replacement and protection measures'
    },
    {
      issue: 'Monitoring Problems',
      cause: 'Connectivity or software issues',
      solution: 'System reset or component replacement'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-900 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Solar Maintenance Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive maintenance and repair services to keep your solar energy system operating at peak efficiency.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/solar-maintenance-service.jpg"
                    alt="Solar Maintenance Services"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Keep Your Solar System Running at Peak Performance
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Regular maintenance is essential to ensure your solar energy system operates efficiently and continues to deliver maximum energy savings. Our comprehensive maintenance services help prevent costly repairs and extend the lifespan of your solar investment.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Increase system efficiency and energy production',
                    'Extend the lifespan of your solar panels',
                    'Protect your investment and warranty',
                    'Identify and fix issues before they become major problems',
                    'Maintain optimal return on investment'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
                  >
                    Schedule Maintenance
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Maintenance Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your needs and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.recommended ? 'ring-2 ring-green-500 transform md:-translate-y-4' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="bg-green-600 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/ {plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold ${
                      plan.recommended
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    } transition-colors`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Common Solar System Issues
            </h2>
            <p className="text-xl text-gray-600">
              We fix all types of solar panel system problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {commonIssues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{issue.issue}</h3>
                </div>
                <div className="pl-9 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Common Causes:</span> {issue.cause}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Our Solution:</span> {issue.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-yellow-50 border border-yellow-200 text-yellow-700 px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 mr-2" />
              <span>Emergency service available 24/7 for critical issues</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
              <Sun className="h-12 w-12 text-yellow-300 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Help With Your Solar System?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our team of certified solar technicians is ready to help you with any maintenance or repair needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-green-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-colors duration-300"
                >
                  Request Service
                </Link>
                <Link 
                  href="tel:+918959890113" 
                  className="inline-block border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-colors duration-300"
                >
                  Emergency: 89598 90113
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
