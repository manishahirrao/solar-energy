'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Sun, TrendingUp, Shield, Phone, ArrowRight, Camera } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (id: number) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const galleryItems = [
    {
      id: 1,
      title: 'Residential Solar EPC',
      category: 'Solar EPC',
      location: 'Bhopal',
      description: 'End-to-end Engineering, Procurement, and Construction of a 3kW residential solar system. This turnkey solution includes detailed site assessment and customized system design using high-efficiency panels. Our process ensures maximum sunlight harvesting with smart inverter technology. This system reduces electricity costs significantly for the homeowner.',
      image: '/Rooftop Solar Installation.jpeg',
      capacity: '3kW',
      year: '2024'
    },
    {
      id: 2,
      title: 'Commercial Rooftop Solar',
      category: 'Solar Installation',
      location: 'Mandideep',
      description: 'Professional installation of a 10kW commercial rooftop solar system. Our expert team handled the complete installation process, including mounting and electrical connections. The system features high-quality panels to offset energy usage for the office.',
      image: '/Commercial Solar Farm.jpg',
      capacity: '10kW',
      year: '2024'
    },
    {
      id: 3,
      title: 'Solar Maintenance Check',
      category: 'Solar Maintenance',
      location: 'Bhopal',
      description: 'Maintenance service for a 20kW residential solar array. Our service includes comprehensive cleaning and electrical health checks to ensure the system operates at peak efficiency for years to come.',
      image: '/solar-cleaning-brush.jpeg',
      capacity: '20kW',
      year: '2023'
    },
    {
      id: 4,
      title: 'Institute Rooftop Solar',
      category: 'Solar EPC',
      location: 'Vidisha',
      description: 'Turnkey solar solution for a local educational institute. We installed a 15kW rooftop system, integrated with the existing electrical grid. The institution now meets a significant portion of its energy needs using clean energy.',
      image: '/School Solar Installation.avif',
      capacity: '15kW',
      year: '2024'
    },
    {
      id: 5,
      title: 'Hybrid Solar System',
      category: 'Hybrid',
      location: 'Raisen',
      description: 'Integrated 5kW hybrid solar power system with battery storage. This project provides consistent power output and backup during outages, ensuring energy reliability for the household.',
      image: '/Floating Solar Plant.jpeg',
      capacity: '5kW',
      year: '2023'
    },
    {
      id: 6,
      title: 'Solar Street Lights',
      category: 'Infrastructure',
      location: 'Bhopal',
      description: 'Installation of 50 standalone solar street lights in a residential colony. These lights utilize automatic dusk-to-dawn operation to improve safety and reduce common area electricity costs.',
      image: '/Solar Street Lighting.jpg',
      capacity: '50 Units',
      year: '2024'
    },
    {
      id: 7,
      title: 'Clinic Power Backup',
      category: 'Healthcare',
      location: 'Bhopal',
      description: 'Designed and installed a 10kW solar power backup system for a small clinic. The system ensures critical equipment remains operational during power cuts, reducing dependency on diesel generators.',
      image: '/Hospital Solar System.jpg',
      capacity: '10kW',
      year: '2023'
    },
    {
      id: 8,
      title: 'School Lab Solar',
      category: 'Educational',
      location: 'Bhopal',
      description: 'Established a 8kW solar system for a school computer lab. This installation serves as a power source and an educational tool for students learning about renewable energy.',
      image: '/School Solar Installation.avif',
      capacity: '8kW',
      year: '2024'
    },
    {
      id: 9,
      title: 'Solar Car Shed',
      category: 'Commercial',
      location: 'Bhopal',
      description: 'Constructed a 5kW solar carport structure. This dual-purpose facility provides shade for vehicles while generating clean energy for the property.',
      image: '/Solar Carport.webp',
      capacity: '5kW',
      year: '2024'
    },
    {
      id: 10,
      title: 'Small Floating Solar',
      category: 'Innovative',
      location: 'Bhopal',
      description: 'Deployed a pilot 5kW floating solar installation on a farm pond. This efficient design reduces water evaporation and utilizes water surface area for energy generation.',
      image: '/Floating Solar Plant.jpeg',
      capacity: '5kW',
      year: '2023'
    },
    {
      id: 11,
      title: 'Solar Water Heater',
      category: 'Residential',
      location: 'Kolar',
      description: 'Installed 300L residential solar water heating systems. These systems utilize evacuated tube collectors to provide hot water efficiently, saving on electric heating costs.',
      image: '/Solar Water Heater.jpg',
      capacity: '300L',
      year: '2024'
    },
    {
      id: 12,
      title: 'System Optimization',
      category: 'Maintenance',
      location: 'Bhopal',
      description: 'Performance optimization service for home solar installations. We clean panels and check connections to restore systems to their maximum rated efficiency.',
      image: '/solar-cleaning-brush.jpeg',
      capacity: 'Service',
      year: '2024'
    }
  ];

  const categories = ['All', 'Solar EPC', 'Solar Installation', 'Solar Maintenance'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const whatsappLink = (title: string) => `https://wa.me/918959890113?text=Hi, I am interested in knowing more about the ${title} project I saw on your website.`;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 overflow-hidden">
        {/* Background Image with enhanced effects */}
        <div className="absolute inset-0">
          <img
            src="/Rooftop Solar Installation.jpeg"
            alt="Gallery Hero"
            className="w-full h-full object-cover blur-[2px]"
          />
        </div>

        <div className="relative container mx-auto px-4 z-10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            {/* Trust badge */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">
                Humari Safalta,
              </span>
              <br />
              <span className="text-white">
                Aapka Bharosa
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              Bhopal aur MP mein humari safalta ki kahaniyan. Janiye kaise humne badla hai logon ka energy consumption.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center group shadow-2xl border border-green-400/20"
                onClick={() => window.location.href = 'tel:+918959890113'}
              >
                Call Now
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:bg-white/20 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center shadow-2xl"
                onClick={() => window.location.href = '/contact'}
              >
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                Get Consultation
              </motion.button>
            </motion.div>
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
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === category
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
                  className={`p-2 rounded-l-lg transition-colors ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-r-lg transition-colors ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'
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
                <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
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
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.location}</p>
                    <p className="text-xs text-gray-500 mt-1 mb-2">{item.capacity} • {item.year}</p>
                    <div className="text-sm text-gray-600 mb-4 flex-grow">
                      {expandedItems[item.id] ? item.description : `${item.description.substring(0, 100)}...`}
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleReadMore(item.id); }}
                        className="text-green-600 font-semibold ml-1 hover:underline"
                      >
                        {expandedItems[item.id] ? 'Read Less' : 'Read More'}
                      </button>
                    </div>
                    <a
                      href={whatsappLink(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-center font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Request Details
                    </a>
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
                  <div className="relative md:w-48 h-32 overflow-hidden rounded-lg flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 sm:mb-0">{item.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                          {item.category}
                        </span>
                        <a
                          href={whatsappLink(item.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full font-semibold transition-colors flex items-center gap-1"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="text-gray-600 mb-2 text-sm leading-relaxed">
                      {expandedItems[item.id] ? item.description : `${item.description.substring(0, 150)}...`}
                      <button
                        onClick={() => toggleReadMore(item.id)}
                        className="text-green-600 font-semibold ml-1 hover:underline text-sm"
                      >
                        {expandedItems[item.id] ? 'Read Less' : 'Read More'}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-auto">
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
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 text-black">Project Statistics</h2>
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
              <div className="text-5xl font-bold text-green-600 mb-2">250+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">240+</div>
              <div className="text-gray-600">Happy Customers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">30+</div>
              <div className="text-gray-600">Years Warranty</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Inspired by Our Solar Projects?
            </motion.h2>
            <motion.p
              className="text-xl text-green-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join hundreds of satisfied customers across Bhopal and transform your property with clean, renewable solar energy.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Free Consultation</h3>
              <p className="text-green-100">Get expert advice tailored to your energy needs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Save 90% on Bills</h3>
              <p className="text-green-100">Reduce electricity costs significantly</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">30 Year Warranty</h3>
              <p className="text-green-100">Long-term reliability and peace of mind</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              onClick={() => {
                // Open quote form popup using global function
                if (typeof window !== 'undefined') {
                  (window as any).openQuoteForm();
                }
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Your Free Quote Now
            </motion.button>
            <p className="text-green-100 mt-4 text-sm">
              No obligation • Free site assessment • Instant quote
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Popup Quote Form */}
      <PopupQuoteForm />
    </div>
  );
}
