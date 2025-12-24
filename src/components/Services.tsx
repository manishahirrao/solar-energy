'use client';

import { motion } from 'framer-motion';
import { Sun, Battery, Home, Trees, Zap, Wrench } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: 'Solar Energy',
      description: 'Harness the power of the sun with our cutting-edge solar panel technology and installation services.',
      image: '/solar-energy-service.webp'
    },
    {
      icon: Battery,
      title: 'Hybrid Energy',
      description: 'Combine solar with battery storage for maximum energy independence and reliability.',
      image: '/solar-storage-services.webp'
    },
    {
      icon: Trees,
      title: 'Solar Consulting',
      description: 'Expert consultation services to help you make informed decisions about solar energy solutions.',
      image: '/solar-consulting-service.webp'
    },
    {
      icon: Wrench,
      title: 'Solar Maintenance',
      description: 'Professional maintenance services to keep your solar system operating at peak efficiency.',
      image: '/solar-maintenance-service.jpg'
    },
    {
      icon: Zap,
      title: 'Energy Storage',
      description: 'Advanced energy storage solutions for reliable power backup and grid independence.',
      image: '/solar-storage-services.webp'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-blue-100 rounded-full blur-3xl opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Section badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 mb-6"
          >
            <Sun className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-medium">Our Services</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Solar Solutions
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your energy future with our complete range of renewable energy services
            <span className="block text-green-600 font-medium mt-3">From initial consultation to ongoing maintenance and support</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
              whileHover={{ y: -15, scale: 1.03 }}
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      console.log('Image failed to load:', service.image);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={(e) => {
                      console.log('Image loaded successfully:', service.image);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-emerald-600/10 to-green-700/10" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-4 z-20 shadow-lg border border-green-200"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                  >
                    <service.icon className="w-6 h-6 text-green-600" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-gray-600 text-lg leading-relaxed mb-8"
                  >
                    {service.description}
                  </motion.p>
                  
                  <Link href={`/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center text-green-600 font-semibold text-base hover:text-green-700 transition-colors group"
                    whileHover={{ x: 8 }}
                  >
                    <span>Explore Service</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-3"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
