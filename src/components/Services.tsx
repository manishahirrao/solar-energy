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
      description: 'Complete solar panel installation and maintenance services for residential and commercial properties.',
      image: '/Rooftop Solar Installation.jpeg'
    },
    {
      icon: Battery,
      title: 'Hybrid Energy',
      description: 'Integrated solar and battery storage systems for maximum energy independence and reliability.',
      image: '/Commercial Solar Farm.jpg'
    },
    {
      icon: Home,
      title: 'Energy Storage',
      description: 'Advanced battery storage solutions for solar energy independence and grid stability.',
      image: '/Industrial Solar Setup.jpg'
    },
    {
      icon: Zap,
      title: 'Solar Maintenance',
      description: 'Comprehensive maintenance and cleaning services to keep your solar system operating at peak efficiency.',
      image: '/Solar Maintenance Service.jpg'
    },
    {
      icon: Trees,
      title: 'Solar Consulting',
      description: 'Expert consulting services to help you choose the best solar energy solutions.',
      image: '/School Solar Installation.avif'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
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
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gray-900">
              We are the best of
            </span>
            <br />
            <span className="text-green-600">
              Renewable Energy
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your energy future with our complete range of renewable energy services
            <span className="block text-green-600 font-medium mt-3">From initial consultation to ongoing maintenance and support</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
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
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-green-50">
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
                  <div className="absolute inset-0 bg-green-600/5" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/95 backdrop-blur-sm rounded-full p-2 sm:p-4 z-20 shadow-lg border border-green-200"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                  >
                    <service.icon className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-green-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10"
                  >
                    {service.description}
                  </motion.p>
                  
                  <Link href={`/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center text-green-600 font-semibold text-base sm:text-lg hover:text-green-700 transition-colors group"
                    whileHover={{ x: 8 }}
                  >
                    <span>Explore Service</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-3"
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
