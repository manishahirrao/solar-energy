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
          {/* Enhanced animated background elements */}
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
                className="absolute bg-gradient-to-br from-yellow-400 to-green-400 rounded-full opacity-10"
                style={{
                  width: style.width + 'px',
                  height: style.height + 'px',
                  left: style.left + '%',
                  top: style.top + '%'
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  scale: [1, 1.1, 1],
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
            className="w-full h-full object-cover mix-blend-overlay"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Sun className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-white text-sm font-medium">Trusted by 1000+ Happy Customers</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                Empowering Your Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent">
                with Solar Energy
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              Transform your energy consumption with cutting-edge solar solutions. 
              <span className="block text-green-200 font-medium mt-3">Save up to 70% on electricity bills while protecting our planet.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 mb-12 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 font-bold text-lg flex items-center justify-center group shadow-2xl border border-green-400/20"
                >
                  Get Started
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/gallery">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full hover:bg-white/20 transition-all duration-300 font-bold text-lg flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-6 h-6 mr-3" />
                  View Projects
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-3 border border-white/20"
                  >
                    <feature.icon className="w-8 h-8 text-green-300" />
                  </motion.div>
                  <span className="text-white/90 text-sm font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
