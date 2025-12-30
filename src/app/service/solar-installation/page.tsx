'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Sun, Home, Building, Factory, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolarInstallation() {
  const installationTypes = [
    {
      icon: Home,
      title: 'Residential',
      description: 'Custom solar solutions for homes of all sizes, helping you reduce energy bills and carbon footprint.'
    },
    {
      icon: Building,
      title: 'Commercial',
      description: 'Cost-effective solar solutions for businesses, offices, and retail spaces.'
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Large-scale solar installations for factories, warehouses, and manufacturing plants.'
    }
  ];

  const processSteps = [
    {
      title: 'Site Assessment',
      description: 'Our experts evaluate your property to determine the best solar solution.'
    },
    {
      title: 'System Design',
      description: 'We create a customized solar system design optimized for your energy needs.'
    },
    {
      title: 'Permitting',
      description: 'We handle all necessary permits and paperwork for a hassle-free experience.'
    },
    {
      title: 'Installation',
      description: 'Our certified technicians install your system with minimal disruption.'
    },
    {
      title: 'Inspection',
      description: 'We coordinate with local authorities for system inspection and approval.'
    },
    {
      title: 'Activation',
      description: 'Your system is connected to the grid and ready to generate clean energy.'
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
              Solar Installation Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional installation of high-quality solar panel systems for residential, commercial, and industrial properties.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Installation Services
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solar solutions for every type of property
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {installationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <type.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Installation Process
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We make going solar simple and stress-free with our streamlined installation process. Our team of certified professionals handles every step, from initial consultation to system activation, ensuring a seamless experience from start to finish.
                </p>
                
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Installation Services?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Certified and experienced installers',
              'High-quality components with industry-leading warranties',
              'Competitive pricing and financing options',
              'Complete project management',
              'Post-installation support and maintenance',
              'Local expertise with national standards'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="ml-3 text-gray-700">{benefit}</p>
              </motion.div>
            ))}
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
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your solar installation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-green-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Request a Quote
              </Link>
              <Link 
                href="tel:+918959890113" 
                className="inline-block border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Call Now: 89598 90113
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
