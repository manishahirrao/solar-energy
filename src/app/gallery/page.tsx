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
    '/Rooftop Solar Installation.jpeg',
    '/Commercial Solar Farm.jpg',
    '/Agricultural Solar Pump.jpg',
    '/Industrial Solar Setup.jpg',
    '/Floating Solar Plant.jpeg',
    '/Hospital Solar System.jpg',
    '/School Solar Installation.avif',
    '/Solar Carport.webp',
    '/Solar Maintenance Service.jpg',
    '/Solar Street Lighting.jpg',
    '/Solar Water Heater.jpg',
   
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
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        
        <div className="relative container mx-auto px-4 z-10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-black">
                Solar
              </span>
              <br />
              <span className="text-gray-900">
                Gallery
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              Explore our stunning solar energy installations and successful projects across India
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-black">Our Solar</span>
              <br />
              <span className="text-green-600">Project Gallery</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Browse through our completed solar installations and witness the transformation of properties across India with clean, renewable energy solutions.
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
                  viewMode === 'grid' 
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/30' 
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-600 hover:text-green-600'
                }`}
              >
                <Grid className="w-5 h-5" />
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
                  viewMode === 'list' 
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image}
                      alt={`Solar project ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">
                        Solar Project {index + 1}
                      </h3>
                      <p className="text-white/90 text-sm">
                        Click to view details
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6 max-w-4xl mx-auto">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={image}
                      alt={`Solar project ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Solar Project {index + 1}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Professional solar installation showcasing our expertise in renewable energy solutions. Click to view full image and explore the details of this successful project.
                    </p>
                    <button className="mt-4 text-green-600 font-semibold hover:text-green-700 transition-colors">
                      View Full Image →
                    </button>
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
                src={filteredImages[selectedImage]}
                alt={`Solar project ${selectedImage + 1}`}
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
