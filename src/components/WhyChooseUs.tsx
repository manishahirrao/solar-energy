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
    <section className="py-20 bg-gray-50">
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
            Why Choose <span className="text-green-600">Procura Solar</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We deliver excellence in every solar project with unmatched expertise and dedication
            <span className="block text-green-600 font-medium mt-2">Your trusted partner for sustainable energy solutions</span>
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Section */}
              <div className={`relative ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-500 via-green-600 to-emerald-500 h-64 w-full max-w-md mx-auto lg:mx-0"
                  whileHover={{ rotate: 3, scale: 1.05 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain mix-blend-screen relative z-10 p-8"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.4 }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-3 z-20"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-sm font-bold text-green-700 uppercase tracking-wide">
                      {feature.title}
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className={`space-y-6 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="text-lg text-gray-600 leading-relaxed mb-6"
                >
                  {feature.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  className="flex items-center gap-4 bg-green-50 px-6 py-4 rounded-xl inline-flex"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index === 0 && <Sun className="w-6 h-6 text-white" />}
                    {index === 1 && <TrendingUp className="w-6 h-6 text-white" />}
                    {index === 2 && <Battery className="w-6 h-6 text-white" />}
                  </motion.div>
                  <motion.span 
                    className="text-gray-800 font-semibold text-lg"
                    whileHover={{ x: 5 }}
                  >
                    {index === 0 && 'Guaranteed Quality'}
                    {index === 1 && 'Best Value'}
                    {index === 2 && 'Expert Service'}
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
