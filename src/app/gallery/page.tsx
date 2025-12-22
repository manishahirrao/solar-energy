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
      description: '5kW residential solar installation with battery backup system',
      image: '/Rooftop Solar Installation.jpeg',
      capacity: '5kW',
      year: '2024'
    },
    {
      id: 2,
      title: 'Commercial Solar Farm',
      category: 'Commercial',
      location: 'Gujarat',
      description: '50MW commercial solar power plant with advanced tracking system',
      image: '/Commercial Solar Farm.jpg',
      capacity: '50MW',
      year: '2024'
    },
    {
      id: 3,
      title: 'Agricultural Solar Pump',
      category: 'Agricultural',
      location: 'Punjab',
      description: 'Solar-powered water pumping system for irrigation',
      image: '/Agricultural Solar Pump.jpg',
      capacity: '10HP',
      year: '2023'
    },
    {
      id: 4,
      title: 'Industrial Solar Setup',
      category: 'Industrial',
      location: 'Delhi',
      description: 'Large-scale industrial solar installation with monitoring',
      image: '/Industrial Solar Setup.jpg',
      capacity: '100kW',
      year: '2024'
    },
    {
      id: 5,
      title: 'Hybrid Solar-Wind System',
      category: 'Hybrid',
      location: 'Rajasthan',
      description: 'Integrated solar and wind power generation system',
      image: '/Floating Solar Plant.jpeg',
      capacity: '25MW',
      year: '2023'
    },
    {
      id: 6,
      title: 'Solar Street Lighting',
      category: 'Infrastructure',
      location: 'Bangalore',
      description: 'Smart solar street lighting with motion sensors',
      image: '/Solar Street Lighting.jpg',
      capacity: '100W',
      year: '2024'
    },
    {
      id: 7,
      title: 'Hospital Solar System',
      category: 'Healthcare',
      location: 'Chennai',
      description: 'Critical power backup solar system for hospital',
      image: '/Hospital Solar System.jpg',
      capacity: '200kW',
      year: '2023'
    },
    {
      id: 8,
      title: 'School Solar Installation',
      category: 'Educational',
      location: 'Hyderabad',
      description: 'Educational institution solar system with learning center',
      image: '/School Solar Installation.avif',
      capacity: '50kW',
      year: '2024'
    },
    {
      id: 9,
      title: 'Solar Carport',
      category: 'Commercial',
      location: 'Pune',
      description: 'EV charging station with solar carport structure',
      image: '/Solar Carport.webp',
      capacity: '20kW',
      year: '2024'
    },
    {
      id: 10,
      title: 'Floating Solar Plant',
      category: 'Innovative',
      location: 'Kerala',
      description: 'Floating solar installation on water reservoir',
      image: '/Floating Solar Plant.jpeg',
      capacity: '10MW',
      year: '2023'
    },
    {
      id: 11,
      title: 'Solar Water Heater',
      category: 'Residential',
      location: 'Kolkata',
      description: 'Residential solar water heating system installation',
      image: '/Solar Water Heater.jpg',
      capacity: '300L',
      year: '2024'
    },
    {
      id: 12,
      title: 'Solar Maintenance Service',
      category: 'Maintenance',
      location: 'Mumbai',
      description: 'Professional solar panel cleaning and maintenance',
      image: '/Solar Maintenance Service.jpg',
      capacity: 'Service',
      year: '2024'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Agricultural', 'Hybrid', 'Infrastructure', 'Healthcare', 'Educational', 'Innovative', 'Maintenance'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/solar-energy-service.webp"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[
            { width: 80, height: 80, left: 10, top: 20, duration: 3 },
            { width: 60, height: 60, left: 70, top: 60, duration: 4 },
            { width: 100, height: 100, left: 30, top: 80, duration: 5 },
            { width: 50, height: 50, left: 85, top: 15, duration: 3.5 }
          ].map((style, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-5"
              style={{
                width: style.width + 'px',
                height: style.height + 'px',
                left: style.left + '%',
                top: style.top + '%'
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: style.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-white border-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Grid className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
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
                <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.error('Image failed to load:', item.image);
                        // Try alternative path
                        e.currentTarget.src = item.image.replace(/^\//, '');
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.location}</p>
                    <p className="text-xs text-gray-500 mt-2">{item.capacity} • {item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-6">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow">
                  <div className="relative md:w-48 h-32 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('List image failed to load:', item.image);
                        // Try alternative path
                        e.currentTarget.src = item.image.replace(/^\//, '');
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
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
                      <span className="font-medium">Location:</span> {item.location} • 
                      <span className="font-medium"> Capacity:</span> {item.capacity} • 
                      <span className="font-medium"> Year:</span> {item.year}
                    </p>
                  </div>
                </div>
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
