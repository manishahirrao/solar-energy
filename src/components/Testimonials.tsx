'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Boy Williamson',
      role: 'CEO, Tech Company',
      content: 'SolarBright transformed our energy costs completely. The installation was professional and the results exceeded our expectations.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Marvin McKinney',
      role: 'Homeowner',
      content: 'I\'m saving 70% on my electricity bills! The team was knowledgeable and guided me through the entire process.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Courtney Henry',
      role: 'Factory Manager',
      content: 'Best investment we made for our manufacturing unit. The solar system has been running flawlessly since installation.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Raj Patel',
      role: 'Restaurant Owner',
      content: 'Our monthly energy bill went from ₹50,000 to ₹15,000. The ROI was achieved in just 18 months. Highly recommended!',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Anita Sharma',
      role: 'School Principal',
      content: 'The solar installation has helped us save significantly on operational costs. We can now invest more in educational resources.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      content: 'Professional team, excellent service, and great after-sales support. The monitoring app is very helpful.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Priya Nair',
      role: 'Hotel Manager',
      content: 'Our guests love that we use green energy. The system has reduced our operational costs by 60%.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'David Kumar',
      role: 'Agricultural Business Owner',
      content: 'Perfect for our irrigation systems. Reliable power even in remote areas. Excellent investment.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-yellow-100 rounded-full blur-3xl opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Section badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-medium">Customer Success Stories</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              What Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from our satisfied customers who have made the switch to clean energy
            <span className="block text-blue-600 font-medium mt-3">Real stories from real people saving money and protecting the environment</span>
          </motion.p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <motion.button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl border border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </motion.button>
          
          <motion.button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl border border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </motion.button>

          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
              >
                {/* Quote icon */}
                <div className="absolute top-8 right-8 text-blue-100">
                  <Quote className="w-20 h-20" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-8">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Content */}
                <motion.p 
                  className="text-gray-700 mb-12 leading-relaxed text-xl md:text-2xl font-light text-center italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  "{testimonials[currentIndex].content}"
                </motion.p>

                {/* Author */}
                <motion.div 
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-lg">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-xl mb-1">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-lg">{testimonials[currentIndex].role}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-10'
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
