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
    <section className="relative h-[80vh] sm:h-[85vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
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
      <div className="relative z-10 h-full flex items-center justify-center pt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-white">
                Empowering Your Future
              </span>
              <br />
              <span className="text-white">
                with Solar Energy
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              A positive impact for your home and the planet
              <span className="block text-green-200 font-medium mt-3">Save up to 90% on electricity bills while protecting our planet.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:bg-green-700 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center group shadow-2xl border border-green-400/20"
                >
                  Get Quote
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/gallery">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:bg-white/20 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center group shadow-2xl border border-white/20"
                >
                  <Play className="w-6 h-6 mr-3" />
                  View Projects
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
