'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, Grid, List, X, Camera, Sparkles, MapPin, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      image: '/Rooftop Solar Installation.jpeg',
      category: 'Solar EPC',
      title: 'Residential Solar EPC',
      description: 'End-to-end Engineering, Procurement, and Construction of residential solar systems.',
      location: 'Bhopal',
      capacity: '5kW'
    },
    {
      image: '/Commercial Solar Farm.jpg',
      category: 'Solar Installation',
      title: 'Commercial Solar Installation',
      description: 'Professional installation of commercial solar systems with battery backup.',
      location: 'Mandideep',
      capacity: '25kW'
    },
    {
      image: '/Solar Maintenance Service.jpg',
      category: 'Solar Maintenance',
      title: 'Comprehensive Maintenance',
      description: 'Regular maintenance and monitoring for optimal solar system performance.',
      location: 'Bhopal',
      capacity: '15kW'
    },
    {
      image: '/School Solar Installation.avif',
      category: 'Solar EPC',
      title: 'Institutional Solar Solutions',
      description: 'Complete solar solutions for educational institutions and government buildings.',
      location: 'Vidisha',
      capacity: '20kW'
    },
    {
      image: '/Industrial Solar Setup.jpg',
      category: 'Solar Installation',
      title: 'Industrial Solar Systems',
      description: 'Custom solar solutions for industrial facilities and manufacturing units.',
      location: 'Mandideep',
      capacity: '50kW'
    },
    {
      image: '/solar-cleaning-brush.jpeg',
      category: 'Solar Maintenance',
      title: 'Performance Optimization',
      description: 'Advanced monitoring and optimization services for existing solar installations.',
      location: 'Bhopal',
      capacity: '10kW'
    }
  ];

  const filteredImages = galleryImages;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Commercial Solar Farm.jpg"
            alt="Gallery Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative container mx-auto px-4 z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Tasveeron Mein</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                Humari Kahani
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Humare projects ki ek jhalak. Quality aur perfection jo dikhta hai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                onClick={() => window.location.href = 'tel:+918959890113'}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                onClick={() => window.location.href = '/project'}
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section Header */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-emerald-100 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-violet-100 rounded-full blur-[150px] opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Solar
              <span className="block bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Service Gallery</span>
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse through our completed solar installations and witness the transformation of properties across India with clean, renewable energy solutions.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-3 bg-slate-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm ${viewMode === 'grid'
                  ? 'bg-white text-emerald-600 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <Grid className="w-4 h-4" />
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm ${viewMode === 'list'
                  ? 'bg-white text-emerald-600 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <List className="w-4 h-4" />
                List
              </button>
            </div>

            <div className="text-slate-500 font-medium text-sm">
              <span className="text-emerald-600 font-bold text-lg">{filteredImages.length}</span> Solar Projects
            </div>
          </div>

          {/* Gallery Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-slate-100">
                    <div className="h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Tags */}
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-emerald-500 rounded-full">
                        {item.category}
                      </span>

                      {/* Location */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        <span className="text-xs font-medium text-slate-700">{item.location}</span>
                      </div>

                      {/* Capacity Badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-sm font-bold text-slate-900">{item.capacity}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {galleryImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row border border-slate-100 cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative w-full sm:w-56 h-48 sm:h-auto flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white bg-emerald-500 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-2 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500" /> {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-amber-500" /> {item.capacity}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 p-2.5 rounded-full transition-all duration-300 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video bg-slate-100">
                <img
                  src={filteredImages[selectedImage]?.image}
                  alt={filteredImages[selectedImage]?.title || `Solar project ${selectedImage + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 bg-white border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full">
                    {filteredImages[selectedImage]?.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-500">
                    <MapPin className="w-3.5 h-3.5" /> {filteredImages[selectedImage]?.location}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-500">
                    <Zap className="w-3.5 h-3.5 text-amber-500" /> {filteredImages[selectedImage]?.capacity}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {filteredImages[selectedImage]?.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {filteredImages[selectedImage]?.description}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold text-sm"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
