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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            Our <span className="text-green-600">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive renewable energy solutions tailored to your needs
            <span className="block text-green-600 font-medium mt-2">From consultation to installation and maintenance</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      console.log('Image failed to load:', service.image);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={(e) => {
                      console.log('Image loaded successfully:', service.image);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-600/20 to-emerald-500/20" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 z-20"
                    whileHover={{ rotate: 360, scale: 1.2 }}
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
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-gray-600 text-base leading-relaxed mb-6"
                  >
                    {service.description}
                  </motion.p>
                  
                  <Link href={`/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center text-green-600 font-medium text-sm hover:text-green-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-2"
                    >
                      <ArrowRight className="w-4 h-4" />
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
