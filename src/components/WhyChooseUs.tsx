'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Shield, Clock, Users, Award, Sun, Battery, Wrench } from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Quality Assurance',
      description: 'Premium solar panels with long-term warranty and certified installation. Our rigorous quality control ensures every system meets the highest standards.',
      image: '/quality-why-us.webp'
    },
    {
      title: 'Cost Effective',
      description: 'Significantly reduce electricity bills with competitive pricing. We help you achieve maximum ROI with smart financing options.',
      image: '/cost-effective-why-us.jpeg'
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with extensive solar installation experience. Our engineers bring expertise and precision to every project.',
      image: '/expert-team-why-us.jpeg'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-yellow-100 rounded-full blur-3xl opacity-20" />
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Procura Solar
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We deliver excellence in every solar project with unmatched expertise and dedication
            <span className="block text-emerald-600 font-medium mt-3">Your trusted partner for sustainable energy solutions</span>
          </motion.p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              whileHover={{ scale: 1.01 }}
            >
              {/* Image Section */}
              <div className={`relative ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 h-60 sm:h-72 lg:h-80 w-full max-w-lg mx-auto lg:mx-0 border border-gray-200"
                  whileHover={{ rotate: 2, scale: 1.03 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-green-600/20 to-emerald-700/20" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover relative z-10"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.4 }}
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 z-20 shadow-lg border border-emerald-200"
                    whileHover={{ scale: 1.05, rotate: -1 }}
                  >
                    <p className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                      {feature.title}
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className={`space-y-6 sm:space-y-8 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <span className="bg-gradient-to-r from-gray-900 to-emerald-700 bg-clip-text text-transparent">
                    {feature.title}
                  </span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8"
                >
                  {feature.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  className="flex items-center gap-3 sm:gap-4 bg-emerald-50 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl inline-flex border border-emerald-200"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(16, 185, 129, 0.2)" }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index === 0 && <Sun className="w-6 h-6 text-white" />}
                    {index === 1 && <TrendingUp className="w-6 h-6 text-white" />}
                    {index === 2 && <Users className="w-6 h-6 text-white" />}
                  </motion.div>
                  <motion.span 
                    className="text-gray-800 font-semibold text-lg"
                    whileHover={{ x: 5 }}
                  >
                    {index === 0 && '25 Year Warranty'}
                    {index === 1 && 'Guaranteed Savings'}
                    {index === 2 && 'Expert Support'}
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
