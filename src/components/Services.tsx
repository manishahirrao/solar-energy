'use client';

import { motion } from 'framer-motion';
import { Zap, Home, Wind, Leaf } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Solar Energy',
      description: 'Harness the power of the sun with our cutting-edge solar panel technology and installation services.',
      image: '/globe.svg'
    },
    {
      icon: Home,
      title: 'Hybrid Energy',
      description: 'Combine solar with battery storage for maximum energy independence and reliability.',
      image: '/window.svg'
    },
    {
      icon: Wind,
      title: 'Wind Energy',
      description: 'Supplement your solar system with wind turbines for comprehensive renewable energy solutions.',
      image: '/file.svg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive renewable energy solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-green-500 via-green-600 to-emerald-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain mix-blend-screen relative z-10"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 z-20"
                  >
                    <service.icon className="w-6 h-6 text-green-600" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-gray-600 leading-relaxed mb-6"
                  >
                    {service.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Link
                      href="/service"
                      className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We provide tailored renewable energy solutions to meet your specific requirements. Contact us to discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold"
            >
              Get Quote
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
