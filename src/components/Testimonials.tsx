'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Factory Owner',
      content: 'Procura Solar installed a 500kW system at our manufacturing unit. We reduced electricity costs by 60% and the ROI was achieved in just 3 years. Excellent professional service and support.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      content: 'Our 5kW rooftop installation has been running flawlessly for 2 years. We save ₹8,000 monthly on electricity bills. The team was professional and installation was completed on time.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Amit Patel',
      role: 'Farm Owner',
      content: 'The solar water pump system has transformed our farming. We now have reliable irrigation throughout the year and our diesel costs have dropped to zero. Best investment we ever made.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Sunita Reddy',
      role: 'Hospital Administrator',
      content: 'Our 100kW hospital solar system ensures uninterrupted power supply for critical medical equipment. The backup system has been a lifesaver during power outages.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Vikram Singh',
      role: 'School Principal',
      content: 'The 50kW solar installation powers our entire school campus. We save significant funds on electricity and can invest more in educational resources.',
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
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
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
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-900">
              Our Customers
            </span>
            <br />
            <span className="text-blue-600">
              Give Love Feedback
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12"
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
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-xl border border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </motion.button>
          
          <motion.button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-xl border border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
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
                className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100"
              >
                {/* Quote icon */}
                <div className="absolute top-4 sm:top-8 right-4 sm:right-8 text-blue-100">
                  <Quote className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Content */}
                <motion.p 
                  className="text-gray-700 mb-8 sm:mb-12 leading-relaxed text-lg sm:text-xl md:text-2xl font-light text-center italic"
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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-2xl mr-4 sm:mr-6 shadow-lg">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-base sm:text-lg">{testimonials[currentIndex].role}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
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
