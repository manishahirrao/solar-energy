'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Search, Grid, List, X } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      image: '/Rooftop Solar Installation.jpeg',
      category: 'Solar EPC',
      title: 'Residential Solar EPC',
      description: 'End-to-end Engineering, Procurement, and Construction of residential solar systems.'
    },
    {
      image: '/Commercial Solar Farm.jpg',
      category: 'Solar Installation',
      title: 'Commercial Solar Installation',
      description: 'Professional installation of commercial solar systems with battery backup.'
    },
    {
      image: '/Solar Maintenance Service.jpg',
      category: 'Solar Maintenance',
      title: 'Comprehensive Maintenance',
      description: 'Regular maintenance and monitoring for optimal solar system performance.'
    },
    {
      image: '/School Solar Installation.avif',
      category: 'Solar EPC',
      title: 'Institutional Solar Solutions',
      description: 'Complete solar solutions for educational institutions and government buildings.'
    },
    {
      image: '/Industrial Solar Setup.jpg',
      category: 'Solar Installation',
      title: 'Industrial Solar Systems',
      description: 'Custom solar solutions for industrial facilities and manufacturing units.'
    },
    {
      image: '/solar-cleaning-brush.jpeg',
      category: 'Solar Maintenance',
      title: 'Performance Optimization',
      description: 'Advanced monitoring and optimization services for existing solar installations.'
    }
  ];

  const filteredImages = galleryImages;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 overflow-hidden">
        {/* Background Image with enhanced effects */}
        <div className="absolute inset-0">
          <img
            src="/Commercial Solar Farm.jpg"
            alt="Gallery Hero"
            className="w-full h-full object-cover blur-[2px]"
          />
        </div>

        <div className="relative container mx-auto px-4 z-10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-white">
                Tasveeron Mein
              </span>
              <br />
              <span className="text-white">
                Humari Kahani
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              Humare projects ki ek jhalak. Quality aur perfection jo dikhta hai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 font-bold text-lg flex items-center justify-center shadow-2xl border border-green-400/20"
                onClick={() => window.location.href = 'tel:+918959890113'}
              >
                Call Now
                <Phone className="w-6 h-6 ml-3" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition-all duration-300 font-bold text-lg flex items-center justify-center shadow-2xl"
                onClick={() => window.location.href = '/project'}
              >
                View Projects
                <ArrowRight className="w-6 h-6 ml-3" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section Header */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-black">Our Solar</span>
              <br />
              <span className="text-black">Service Gallery</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Browse through our completed solar installations and witness the transformation of properties across India with clean, renewable energy solutions.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold ${viewMode === 'grid'
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-600 hover:text-green-600'
                  }`}
              >
                <Grid className="w-5 h-5" />
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold ${viewMode === 'list'
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-600 hover:text-green-600'
                  }`}
              >
                <List className="w-5 h-5" />
                List View
              </button>
            </div>

            <div className="text-gray-600 font-medium">
              <span className="text-green-600 font-bold">{filteredImages.length}</span> Solar Projects
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid/List */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {galleryImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="w-full sm:w-64 h-48 sm:h-auto">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video bg-gray-100">
              <img
                src={filteredImages[selectedImage]?.image}
                alt={filteredImages[selectedImage]?.title || `Solar project ${selectedImage + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-white border-t border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Solar Project {selectedImage + 1}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional solar installation showcasing our expertise in renewable energy solutions. This project demonstrates our commitment to quality and sustainable energy solutions.
              </p>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}
