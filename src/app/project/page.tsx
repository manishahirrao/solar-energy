'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Sun, TrendingUp, Shield, Phone, ArrowRight, Camera } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: 'Rooftop Solar Installation',
      category: 'Residential',
      location: 'Bhopal',
      description: 'Successfully completed a 5kW residential rooftop solar installation with advanced lithium-ion battery backup system. This project features high-efficiency monocrystalline panels, smart inverter technology, and real-time monitoring via mobile app. The system generates approximately 7,500 kWh annually, reducing household electricity costs by 85% and carbon footprint by 4.5 metric tons per year.',
      image: '/Rooftop Solar Installation.jpeg',
      capacity: '5kW',
      year: '2024'
    },
    {
      id: 2,
      title: 'Commercial Solar Farm',
      category: 'Commercial',
      location: 'Mandideep',
      description: 'Developed a 50MW commercial solar power plant with cutting-edge dual-axis tracking technology and AI-powered predictive maintenance systems. This flagship project spans 250 acres, incorporates 150,000 bifacial solar panels, and includes a 10MWh energy storage system. Generates 85,000 MWh annually, powering 15,000+ commercial establishments.',
      image: '/Commercial Solar Farm.jpg',
      capacity: '50MW',
      year: '2024'
    },
    {
      id: 3,
      title: 'Agricultural Solar Pump',
      category: 'Agricultural',
      location: 'Sehore',
      description: 'Installed innovative solar-powered water pumping system with 10HP capacity for agricultural irrigation. Features include variable frequency drives, remote monitoring, and automatic weather-based operation. This system irrigates 50 acres of farmland, reduces diesel consumption by 12,000 liters annually, and provides consistent water supply for 3 cropping seasons.',
      image: '/Agricultural Solar Pump.jpg',
      capacity: '10HP',
      year: '2023'
    },
    {
      id: 4,
      title: 'Industrial Solar Setup',
      category: 'Industrial',
      location: 'Govindpura',
      description: 'Engineered and deployed a 100kW industrial solar installation with comprehensive SCADA monitoring and load management system. This project powers critical manufacturing equipment 24/7 with 99.9% uptime, includes automated panel cleaning, and features real-time performance analytics. Achieved ROI within 3 years with 75% energy cost reduction.',
      image: '/Industrial Solar Setup.jpg',
      capacity: '100kW',
      year: '2024'
    },
    {
      id: 5,
      title: 'Hybrid Solar-Wind System',
      category: 'Hybrid',
      location: 'Raisen',
      description: 'Pioneered an integrated 25MW hybrid solar-wind power generation system with advanced energy management and grid synchronization. Features include 15MW solar capacity, 10MW wind turbines, 5MWh battery storage, and AI-based load forecasting. Provides consistent power output 24/7 with 92% capacity factor and zero carbon emissions.',
      image: '/Floating Solar Plant.jpeg',
      capacity: '25MW',
      year: '2023'
    },
    {
      id: 6,
      title: 'Solar Street Lighting',
      category: 'Infrastructure',
      location: 'Bhopal',
      description: 'Implemented smart solar street lighting network with motion sensors and IoT-based central monitoring. This project covers 200+ street lights with adaptive brightness control, remote fault detection, and automatic dusk-to-dawn operation. Reduces municipal electricity costs by 100% and improves public safety with 99.8% operational reliability.',
      image: '/Solar Street Lighting.jpg',
      capacity: '100W',
      year: '2024'
    },
    {
      id: 7,
      title: 'Hospital Solar System',
      category: 'Healthcare',
      location: 'Bhopal',
      description: 'Designed and installed critical 200kW solar power backup system for hospital with medical-grade UPS integration. Features include redundant power supply, zero-downtime switchover, and real-time health monitoring. Ensures uninterrupted power for life-saving equipment, reduces operational costs by 90%, and provides 48-hour backup during grid failures.',
      image: '/Hospital Solar System.jpg',
      capacity: '200kW',
      year: '2023'
    },
    {
      id: 8,
      title: 'School Solar Installation',
      category: 'Educational',
      location: 'Bhopal',
      description: 'Established 50kW educational institution solar system with interactive learning center and STEM curriculum integration. Features include real-time energy monitoring dashboard, student learning modules, and renewable energy laboratory. Powers entire campus including labs and computer centers, saving 60% on electricity costs while providing practical education.',
      image: '/School Solar Installation.avif',
      capacity: '50kW',
      year: '2024'
    },
    {
      id: 9,
      title: 'Solar Carport',
      category: 'Commercial',
      location: 'Bhopal',
      description: 'Constructed innovative 20kW solar carport structure with integrated EV charging stations. Features include weather-protected parking, vehicle-to-grid capability, and smart charging management. Generates 28,000 kWh annually while providing shade for 50 vehicles and charging infrastructure for 20 electric vehicles simultaneously.',
      image: '/Solar Carport.webp',
      capacity: '20kW',
      year: '2024'
    },
    {
      id: 10,
      title: 'Floating Solar Plant',
      category: 'Innovative',
      location: 'Bhopal',
      description: 'Deployed groundbreaking 10MW floating solar installation on water reservoir with specialized anchoring systems. Features include water-cooled panels for increased efficiency, reduced algae growth, and minimal water evaporation. Generates 15% more power than land-based systems while preserving water resources and supporting aquatic ecosystem.',
      image: '/Floating Solar Plant.jpeg',
      capacity: '10MW',
      year: '2023'
    },
    {
      id: 11,
      title: 'Solar Water Heater',
      category: 'Residential',
      location: 'Kolar',
      description: 'Installed advanced 300L residential solar water heating system with heat pump integration and smart temperature control. Features include freeze protection, backup heating element, and mobile app monitoring. Provides hot water 24/7 with 80% energy savings compared to conventional geysers and 15-year system lifespan.',
      image: '/Solar Water Heater.jpg',
      capacity: '300L',
      year: '2024'
    },
    {
      id: 12,
      title: 'Solar Maintenance Service',
      category: 'Maintenance',
      location: 'Bhopal',
      description: 'Comprehensive solar panel maintenance and cleaning service with drone-based inspection and AI-powered diagnostics. Services include panel efficiency testing, inverter optimization, performance monitoring, and preventive maintenance. Maintains 98% system efficiency, extends equipment lifespan by 25%, and ensures maximum energy production.',
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
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 overflow-hidden">
        {/* Background Image with enhanced effects */}
        <div className="absolute inset-0">
          <img
            src="/Rooftop Solar Installation.jpeg"
            alt="Gallery Hero"
            className="w-full h-full object-cover blur-sm"
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-black">
                Our
              </span>
              <br />
              <span className="text-black">
                Projects
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              Explore our portfolio of successful solar energy projects and renewable energy installations - Delivering innovative solar solutions for homes, businesses, and industries
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
                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
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
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10">Project Statistics</h2>
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
    </div>
  );
}
