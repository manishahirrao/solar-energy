'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Shield, Clock, Users, Award } from 'lucide-react';
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Procura Solar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver excellence in every solar project with unmatched expertise and dedication
          </p>
        </motion.div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-3 gap-6 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-3'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-green-500 via-green-600 to-emerald-500 h-40 w-40"
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
                  className="text-2xl font-bold text-gray-900 mb-3"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="text-base text-gray-600 leading-relaxed mb-4"
                >
                  {feature.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    {index === 0 && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {index === 1 && <TrendingUp className="w-5 h-5 text-green-600" />}
                    {index === 2 && <Shield className="w-5 h-5 text-green-600" />}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    {index === 0 && 'Guaranteed Quality'}
                    {index === 1 && 'Best Value'}
                    {index === 2 && 'Expert Service'}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Navigation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Explore Our Services?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover our comprehensive solar solutions tailored to your needs. From residential to commercial installations, we have the perfect solution for you.
            </p>
            <Link 
              href="/service"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg group"
            >
              View Our Services
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
