'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight, Sun, Battery, Trees, Wrench, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const features = [
    { icon: Sun, label: 'Solar Panels' },
    { icon: Battery, label: 'Energy Storage' },
    { icon: Trees, label: 'Eco Friendly' },
    { icon: Wrench, label: '25 Year Warranty' }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-green-900">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {[
              { width: 80, height: 80, left: 10, top: 20, duration: 4 },
              { width: 120, height: 120, left: 70, top: 60, duration: 5 },
              { width: 100, height: 100, left: 30, top: 80, duration: 6 },
              { width: 60, height: 60, left: 85, top: 15, duration: 4.5 },
              { width: 90, height: 90, left: 50, top: 40, duration: 5.5 },
              { width: 110, height: 110, left: 15, top: 70, duration: 6.5 }
            ].map((style, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full opacity-5"
                style={{
                  width: style.width + 'px',
                  height: style.height + 'px',
                  left: style.left + '%',
                  top: style.top + '%'
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: style.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
          {/* Video Background */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
            >
              Empowering Your Future
              <span className="block text-green-300 drop-shadow-lg">with Solar Energy</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-lg font-light"
            >
              Transform your energy consumption with cutting-edge solar solutions. 
              <span className="block text-green-200 font-medium mt-2">Save up to 70% on electricity bills while protecting our planet.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center group shadow-2xl"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/gallery">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center shadow-2xl backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Projects
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-white text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>25 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Certified Installers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>1000+ Happy Customers</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      </section>
  );
};

export default Hero;
