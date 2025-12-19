'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Zap, Home, Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Service() {
  const services = [
    {
      icon: Zap,
      title: 'Solar Energy',
      description: 'Complete solar panel installation and maintenance services for residential and commercial properties.',
      features: ['High-efficiency solar panels', '25-year warranty', 'Smart monitoring systems', 'Grid-tie and off-grid solutions'],
      image: '/api/placeholder/400/300',
      href: '/service/solar-energy'
    },
    {
      icon: Home,
      title: 'Hybrid Energy',
      description: 'Integrated solar and battery storage systems for maximum energy independence and reliability.',
      features: ['Battery backup systems', 'Smart energy management', 'Load optimization', 'Emergency power backup'],
      image: '/api/placeholder/400/300',
      href: '/service/hybrid-energy'
    },
    {
      icon: Leaf,
      title: 'Solar Consulting',
      description: 'Expert consulting services to help you choose the best solar energy solutions.',
      features: ['Energy audit', 'System design', 'Financial analysis', 'Regulatory compliance'],
      image: '/api/placeholder/400/300',
      href: '/service/solar-consulting'
    },
    {
      icon: Zap,
      title: 'Solar Maintenance',
      description: 'Comprehensive maintenance and repair services for solar energy systems.',
      features: ['Regular inspections', 'Performance optimization', 'Emergency repairs', 'System upgrades'],
      image: '/api/placeholder/400/300',
      href: '/service/maintenance'
    },
    {
      icon: Home,
      title: 'Energy Storage',
      description: 'Advanced battery storage solutions for solar energy independence and grid stability.',
      features: ['Lithium-ion batteries', 'Smart charging', 'Peak shaving', 'Demand response'],
      image: '/api/placeholder/400/300',
      href: '/service/energy-storage'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive solar energy solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white text-opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={service.href}>
                    <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team of experts can design a tailored solar energy system that meets your specific requirements.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg">
              Get a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
