'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight, Sun, Battery, Trees, Wrench } from 'lucide-react';

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
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full opacity-5"
                style={{
                  width: Math.random() * 100 + 50 + 'px',
                  height: Math.random() * 100 + 50 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%'
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
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
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-2xl"
            >
              Empowering Your Future
              <span className="block text-white drop-shadow-lg">with Solar Energy</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-white mb-6 leading-relaxed max-w-2xl mx-auto drop-shadow-lg"
            >
              At Procura Solar, we're committed to revolutionizing the way you think about energy. Say goodbye to skyrocketing utility bills and hello to a brighter, greener future with our state-of-the-art solar energy solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center"
            >
              <button className="bg-green-600 text-white px-5 py-2.5 rounded-full hover:bg-green-700 transition-all duration-300 font-medium text-sm flex items-center justify-center group transform hover:scale-105 shadow-2xl">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 font-medium text-sm flex items-center justify-center transform hover:scale-105 shadow-2xl backdrop-blur-sm">
                <Play className="w-4 h-4 mr-2" />
                View Projects
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      </section>
  );
};

export default Hero;
