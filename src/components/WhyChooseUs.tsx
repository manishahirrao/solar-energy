'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Shield, Clock, Users, Award, Sun, Battery, Wrench } from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Quality Assurance',
      description: 'Premium solar panels with long-term warranty and certified installation. Our rigorous quality control ensures every system meets the highest standards.',
      image: '/globe.svg'
    },
    {
      title: 'Cost Effective',
      description: 'Significantly reduce electricity bills with competitive pricing. We help you achieve maximum ROI with smart financing options.',
      image: '/file.svg'
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with extensive solar installation experience. Our engineers bring expertise and precision to every project.',
      image: '/window.svg'
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
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            Why Choose Procura Solar
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We deliver excellence in every solar project with unmatched expertise and dedication
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`grid grid-cols-1 lg:grid-cols-3 gap-6 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-3'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-green-500 via-green-600 to-emerald-500 h-40 w-40"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain mix-blend-screen relative z-10"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.4 }}
                    className="absolute top-2 left-2 bg-white/90 backdrop-blur-md rounded-lg p-2 z-20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                      {feature.title}
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              <div className={`${index % 2 === 0 ? 'lg:col-start-2 lg:col-span-2' : 'lg:col-start-1 lg:col-span-2'}`}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-xl font-bold text-gray-900 mb-3"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="text-gray-600 leading-relaxed mb-4 text-sm"
                >
                  {feature.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index === 0 && <Sun className="w-5 h-5 text-green-600" />}
                    {index === 1 && <TrendingUp className="w-5 h-5 text-green-600" />}
                    {index === 2 && <Battery className="w-5 h-5 text-green-600" />}
                  </motion.div>
                  <motion.span 
                    className="text-gray-700 font-medium text-sm"
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
