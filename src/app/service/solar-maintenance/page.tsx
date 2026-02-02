'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Wrench, Shield, Clock, CheckCircle, AlertTriangle, Sun, Search, BarChart2, Zap, FileText, AlertCircle, ShieldAlert, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolarMaintenance() {
  // Removed maintenance plans as requested

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

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-900/90 to-emerald-900/90 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/solar-maintainance-service.jpg"
            alt="Solar Maintenance Services"
            fill
            className="object-cover blur-[2px]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-emerald-900/80 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hamesha Active, Hamesha Efficient
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Dekh-rekh humari zimmedari. Hum rakhenge aapke solar system ko hamesha naya jaisa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Maintenance Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Maintenance Process</h2>
            <p className="text-lg text-gray-600">Comprehensive care to keep your solar system performing at its best</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Inspection & Assessment',
                description: 'Thorough examination of all system components to identify any issues or potential problems.',
                icon: <Search className="h-8 w-8 text-blue-600" />
              },
              {
                title: 'Cleaning & Maintenance',
                description: 'Professional cleaning of solar panels and maintenance of all system components.',
                icon: <Wrench className="h-8 w-8 text-blue-600" />
              },
              {
                title: 'Performance Testing',
                description: 'Detailed analysis of system performance and energy production metrics.',
                icon: <BarChart2 className="h-8 w-8 text-blue-600" />
              },
              {
                title: 'Electrical Checks',
                description: 'Comprehensive testing of all electrical connections and components.',
                icon: <Zap className="h-8 w-8 text-blue-600" />
              },
              {
                title: 'Report & Recommendations',
                description: 'Detailed report with findings and recommendations for optimal performance.',
                icon: <FileText className="h-8 w-8 text-blue-600" />
              },
              {
                title: 'Preventive Maintenance',
                description: 'Proactive measures to prevent future issues and extend system lifespan.',
                icon: <Shield className="h-8 w-8 text-blue-600" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
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
                    src="/solar-maintainance-service.jpg"
                    alt="Solar Maintenance Service"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
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

      {/* Simple CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contact us today to schedule your solar maintenance service and ensure your system operates at peak performance.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300"
                onClick={() => {
                  // Open quote form popup using global function
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                Get a Free Quote
              </button>
              <a
                href="tel:+918959890113"
                className="px-8 py-3 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Now
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>Need immediate assistance? <a href="tel:+918959890113" className="text-blue-600 font-medium hover:underline">Call our 24/7 support</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Popup Quote Form */}
      <PopupQuoteForm />
    </div>
  );
}
