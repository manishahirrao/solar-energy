'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: 'Rooftop Solar Installation',
      category: 'Residential',
      location: 'Mumbai',
      description: '5kW residential solar installation with battery backup',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Commercial Solar Farm',
      category: 'Commercial',
      location: 'Gujarat',
      description: '50MW commercial solar power plant with tracking system',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Agricultural Solar Pump',
      category: 'Agricultural',
      location: 'Punjab',
      description: 'Solar-powered water pumping system for irrigation',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Industrial Solar Setup',
      category: 'Industrial',
      location: 'Delhi',
      description: 'Large-scale industrial solar installation with monitoring',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'Hybrid Solar-Wind System',
      category: 'Hybrid',
      location: 'Rajasthan',
      description: 'Integrated solar and wind power generation system',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Solar Street Lighting',
      category: 'Infrastructure',
      location: 'Bangalore',
      description: 'Smart solar street lighting with motion sensors',
      image: '/api/placeholder/400/300'
    },
    {
      id: 7,
      title: 'Hospital Solar System',
      category: 'Healthcare',
      location: 'Chennai',
      description: 'Critical power backup solar system for hospital',
      image: '/api/placeholder/400/300'
    },
    {
      id: 8,
      title: 'School Solar Installation',
      category: 'Educational',
      location: 'Hyderabad',
      description: 'Educational institution solar system with learning center',
      image: '/api/placeholder/400/300'
    },
    {
      id: 9,
      title: 'Solar Carport',
      category: 'Commercial',
      location: 'Pune',
      description: 'EV charging station with solar carport structure',
      image: '/api/placeholder/400/300'
    },
    {
      id: 10,
      title: 'Floating Solar Plant',
      category: 'Innovative',
      location: 'Kerala',
      description: 'Floating solar installation on water reservoir',
      image: '/api/placeholder/400/300'
    },
    {
      id: 11,
      title: 'Solar Water Heater',
      category: 'Residential',
      location: 'Kolkata',
      description: 'Residential solar water heating system installation',
      image: '/api/placeholder/400/300'
    },
    {
      id: 12,
      title: 'Solar Telecom Tower',
      category: 'Infrastructure',
      location: 'Uttar Pradesh',
      description: 'Solar-powered telecom tower with battery backup',
      image: '/api/placeholder/400/300'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Agricultural', 'Hybrid', 'Infrastructure', 'Healthcare', 'Educational', 'Innovative'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our portfolio of successful solar installations and renewable energy projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row justify-between items-center gap-6"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600">View:</span>
              <div className="flex bg-white rounded-lg border border-gray-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-l-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-r-lg transition-colors ${
                    viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid/List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-gray-600">
              Showing {filteredItems.length} of {galleryItems.length} projects
            </p>
          </motion.div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <div className="text-white text-opacity-50 text-lg font-semibold">
                        {item.category}
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm mb-2">{item.location}</p>
                        <p className="text-xs">{item.description}</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow"
                >
                  <div className="md:w-48 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-white text-opacity-50 font-semibold">
                      {item.category}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 sm:mb-0">{item.title}</h3>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Location:</span> {item.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery Statistics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio across different sectors and regions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Completed Projects</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Project Categories</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">States Covered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">1GW+</div>
              <div className="text-gray-600">Total Capacity</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
