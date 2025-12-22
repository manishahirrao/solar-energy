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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our customers give love feedback
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied customers who have made the switch to clean energy
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-green-600" />
          </button>
          
          <button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-green-600" />
          </button>

          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                {/* Quote icon */}
                <div className="absolute top-8 right-8 text-green-100">
                  <Quote className="w-16 h-16" />
                </div>

                {/* Rating */}
                <div className="flex mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg md:text-xl font-light">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
