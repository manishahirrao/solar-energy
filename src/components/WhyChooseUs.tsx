'use client';

import { motion } from 'framer-motion';
import { CheckCircle, FileText, Leaf, Shield, Wrench, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Quality Assurance',
      description: 'Premium components, tested installation practices, and strict checks.',
      icon: Shield,
      image: '/quality.jpeg'
    },
    {
      title: 'HDGI 80 Micron',
      description: 'Heavy-duty galvanized structures for strength and durability.',
      icon: CheckCircle,
      image: '/hdgi.jpg'
    },
    {
      title: 'Fast Installation',
      description: 'Quick and secure installation with minimal disruption.',
      icon: Zap,
      image: '/fast-installation.jpeg'
    },
    {
      title: 'End-to-End Document Support',
      description: 'Paperless work — we handle everything from start to finish.',
      icon: FileText,
      image: '/document.webp'
    },
    {
      title: 'Environment Friendly',
      description: 'Clean energy that reduces your carbon footprint.',
      icon: Leaf,
      image: '/environment-friendly.jpg'
    },
    {
      title: 'Low Maintenance & Long Lifespan',
      description: 'Designed for long-term performance with minimal upkeep.',
      icon: Wrench,
      image: '/longlifespan.webp'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
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
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gray-900">
              Why Choose
            </span>
            <br />
            <span className="text-green-600">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 h-72 sm:h-96 w-full max-w-xl mx-auto lg:mx-0 border border-gray-200">
              <div className="absolute inset-0 bg-emerald-600/10" />
              <img
                src="/solar-roof.jpeg"
                alt="Why Choose Procura Solar"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {points.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-4 flex gap-4"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex-shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-200 flex-shrink-0">
                      <p.icon className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                      {p.title}
                    </div>
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {p.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
