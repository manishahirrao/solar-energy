'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Users, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Factory Owner',
      content: 'Procura Solar installed a 500kW system at our manufacturing unit. We reduced electricity costs by 60% and the ROI was achieved in just 3 years. Excellent professional service and support.',
      rating: 5,
      savings: '₹75,000/month'
    },
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      content: 'Our 5kW rooftop installation has been running flawlessly for 2 years. We save ₹8,000 monthly on electricity bills. The team was professional and installation was completed on time.',
      rating: 5,
      savings: '₹8,000/month'
    },
    {
      name: 'Amit Patel',
      role: 'Farm Owner',
      content: 'The solar water pump system has transformed our farming. We now have reliable irrigation throughout the year and our diesel costs have dropped to zero. Best investment we ever made.',
      rating: 5,
      savings: '₹15,000/month'
    },
    {
      name: 'Sunita Reddy',
      role: 'Hospital Administrator',
      content: 'Our 100kW hospital solar system ensures uninterrupted power supply for critical medical equipment. The backup system has been a lifesaver during power outages.',
      rating: 5,
      savings: '₹50,000/month'
    },
    {
      name: 'Vikram Singh',
      role: 'School Principal',
      content: 'The 50kW solar installation powers our entire school campus. We save significant funds on electricity and can invest more in educational resources.',
      rating: 5,
      savings: '₹35,000/month'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-current' : 'text-slate-600'}`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-emerald-100 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Trusted by
            <span className="block bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Happy Customers
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people saving money and protecting the environment with Procura Solar.
          </p>
        </motion.div>

        {/* Video Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-video group">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              poster="/about.jpg"
            >
              <source src="/testimonial-video-showing-work.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Featured Story Badge */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium text-sm flex items-center gap-2">
              <Play className="w-4 h-4 text-emerald-400" />
              Featured Story
            </div>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
          </motion.button>

          <motion.button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
          </motion.button>

          {/* Testimonial Card */}
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-blue-100">
                    <Quote className="w-16 h-16 md:w-20 md:h-20" />
                  </div>

                  {/* Rating & Savings */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex gap-1">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                      Saves {testimonials[currentIndex].savings}
                    </div>
                  </div>

                  {/* Content */}
                  <motion.p
                    className="text-slate-700 text-lg md:text-xl lg:text-2xl leading-relaxed font-light mb-8 italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.p>

                  {/* Author */}
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {getInitials(testimonials[currentIndex].name)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-slate-500">{testimonials[currentIndex].role}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-slate-300 hover:bg-slate-400 w-2'
                  }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-16 pt-8 border-t border-slate-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-slate-500 text-sm">Happy Clients</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">4.9/5</div>
              <div className="text-slate-500 text-sm">Average Rating</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">100%</div>
              <div className="text-slate-500 text-sm">Would Recommend</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
