'use client';

import { motion } from 'framer-motion';
import { Sun, Users, Award, Globe, CheckCircle, TrendingUp, Wrench } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Award, label: 'Warranty', value: '30+ Years', description: 'Comprehensive coverage' },
    { icon: Users, label: 'Experience', value: '10+ Years', description: 'Industry expertise' },
    { icon: Sun, label: 'Projects', value: '250+', description: 'Successfully completed' },
    { icon: CheckCircle, label: 'Happy Customers', value: '240+', description: 'Satisfied clients' }
  ];

  const highlights = [
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'ISO certified processes and premium materials'
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Competitive pricing with maximum ROI'
    },
    {
      icon: Wrench,
      title: 'Fast Installation',
      description: 'Quick turnaround with minimal disruption'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-pink-100 rounded-full blur-3xl opacity-20" />
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
              About
            </span>
            <br />
            <span className="text-green-600">
              Procura Solar
            </span>
          </motion.h2>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight font-serif"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              Pioneering Solar Excellence with Innovation and Trust
            </motion.h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-gray-600 leading-relaxed">
                At Procura Solar, we are committed to transforming India's energy landscape through cutting-edge solar technology. Our mission is to make clean, renewable energy accessible to everyone while reducing carbon footprints and energy costs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in providing high-quality solar installations across residential, commercial, and industrial sectors, establishing ourselves as a trusted name in the renewable energy industry. Our approach combines technical expertise with customer-centric service.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6"
            >
              {[
                { value: "10+", label: "Years Experience" },
                { value: "98%", label: "Customer Satisfaction" },
                { value: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div 
                    className="text-2xl sm:text-3xl font-bold text-green-600 mb-2 font-serif"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src="/about.jpg"
                alt="About Procura Solar"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                onError={(e) => {
                  console.log('About image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={(e) => {
                  console.log('About image loaded successfully');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-6 z-20"
              >
                <h4 className="text-lg font-bold text-green-700 mb-2 font-serif">Our Commitment</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Delivering sustainable energy solutions that power a brighter future for generations to come.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 text-center border border-green-100 hover:shadow-lg transition-shadow"
            >
              <stat.icon className="w-8 h-8 sm:w-10 sm:h-12 text-green-600 mx-auto mb-3 sm:mb-4" />
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 font-serif">{stat.value}</div>
              <div className="text-gray-700 font-medium mb-1 text-sm sm:text-base">{stat.label}</div>
              <div className="text-xs sm:text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 text-center text-gray-900">Why Choose Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 font-serif">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
