'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Grid, List, Sun, TrendingUp, Shield, Phone, ArrowRight, Camera, MapPin, Zap, Filter, Sparkles } from 'lucide-react';
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
      description: 'End-to-end Engineering, Procurement, and Construction of a 3kW residential solar system. This turnkey solution includes detailed site assessment and customized system design using high-efficiency panels.',
      image: '/Rooftop Solar Installation.jpeg',
      capacity: '3kW',
      year: '2024',
      savings: '₹4,000/month'
    },
    {
      id: 2,
      title: 'Commercial Rooftop Solar',
      category: 'Solar Installation',
      location: 'Mandideep',
      description: 'Professional installation of a 10kW commercial rooftop solar system. Our expert team handled the complete installation process, including mounting and electrical connections.',
      image: '/Commercial Solar Farm.jpg',
      capacity: '10kW',
      year: '2024',
      savings: '₹15,000/month'
    },
    {
      id: 3,
      title: 'Solar Maintenance Check',
      category: 'Solar Maintenance',
      location: 'Bhopal',
      description: 'Maintenance service for a 20kW residential solar array. Our service includes comprehensive cleaning and electrical health checks to ensure the system operates at peak efficiency.',
      image: '/solar-cleaning-brush.jpeg',
      capacity: '20kW',
      year: '2023',
      savings: '₹25,000/month'
    },
    {
      id: 4,
      title: 'Institute Rooftop Solar',
      category: 'Solar EPC',
      location: 'Vidisha',
      description: 'Turnkey solar solution for a local educational institute. We installed a 15kW rooftop system, integrated with the existing electrical grid.',
      image: '/School Solar Installation.avif',
      capacity: '15kW',
      year: '2024',
      savings: '₹20,000/month'
    },
    {
      id: 5,
      title: 'Hybrid Solar System',
      category: 'Solar EPC',
      location: 'Raisen',
      description: 'Integrated 5kW hybrid solar power system with battery storage. This project provides consistent power output and backup during outages.',
      image: '/Floating Solar Plant.jpeg',
      capacity: '5kW',
      year: '2023',
      savings: '₹6,000/month'
    },
    {
      id: 6,
      title: 'Solar Street Lights',
      category: 'Solar Installation',
      location: 'Bhopal',
      description: 'Installation of 50 standalone solar street lights in a residential colony. These lights utilize automatic dusk-to-dawn operation.',
      image: '/Solar Street Lighting.jpg',
      capacity: '50 Units',
      year: '2024',
      savings: 'Community'
    },
    {
      id: 7,
      title: 'Clinic Power Backup',
      category: 'Solar EPC',
      location: 'Bhopal',
      description: 'Designed and installed a 10kW solar power backup system for a small clinic. The system ensures critical equipment remains operational during power cuts.',
      image: '/Hospital Solar System.jpg',
      capacity: '10kW',
      year: '2023',
      savings: '₹12,000/month'
    },
    {
      id: 8,
      title: 'School Lab Solar',
      category: 'Solar Installation',
      location: 'Bhopal',
      description: 'Established a 8kW solar system for a school computer lab. This installation serves as a power source and an educational tool.',
      image: '/School Solar Installation.avif',
      capacity: '8kW',
      year: '2024',
      savings: '₹10,000/month'
    }
  ];

  const categories = ['All', 'Solar EPC', 'Solar Installation', 'Solar Maintenance'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const whatsappLink = (title: string) => `https://wa.me/918959890113?text=Hi, I am interested in knowing more about the ${title} project I saw on your website.`;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
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
            src="/Rooftop Solar Installation.jpeg"
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
              <span className="text-white">Humari Safalta,</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Aapka Bharosa
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Bhopal aur MP mein humari safalta ki kahaniyan. Janiye kaise humne badla hai logon ka energy consumption.
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
                onClick={() => window.location.href = '/contact'}
              >
                <Camera className="w-5 h-5" />
                Get Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row justify-between items-center gap-6"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="flex items-center gap-2 text-slate-500 font-medium text-sm mr-2">
                <Filter className="w-4 h-4" />
                Filter:
              </span>
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${selectedCategory === category
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-slate-500 text-sm">View:</span>
              <div className="flex bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-emerald-500 text-white' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-emerald-500 text-white' : 'text-slate-600 hover:bg-slate-50'
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-slate-500">
              Showing <span className="font-semibold text-slate-900">{filteredItems.length}</span> of {galleryItems.length} projects
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
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-slate-100 flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = item.image.replace(/^\//, '');
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Tags */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {item.category}
                        </span>
                      </div>

                      {/* Savings Badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
                          <span className="text-xs text-slate-500">Saves</span>
                          <span className="block text-emerald-600 font-bold text-sm">{item.savings}</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        <span className="text-xs font-medium text-slate-700">{item.location}</span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span className="text-xs text-slate-500">{item.capacity} • {item.year}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                        {item.title}
                      </h3>

                      <div className="text-sm text-slate-600 mb-4 flex-grow">
                        {expandedItems[item.id] ? item.description : `${item.description.substring(0, 80)}...`}
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleReadMore(item.id); }}
                          className="text-emerald-600 font-semibold ml-1 hover:underline"
                        >
                          {expandedItems[item.id] ? 'Less' : 'More'}
                        </button>
                      </div>

                      <a
                        href={whatsappLink(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-2.5 rounded-xl text-center font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Request Details
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="bg-white rounded-2xl p-5 flex flex-col md:flex-row gap-5 shadow-lg hover:shadow-xl border border-slate-100 transition-all"
                >
                  <div className="relative md:w-48 h-36 overflow-hidden rounded-xl flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-2 left-2 bg-emerald-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium text-xs">
                          Saves {item.savings}
                        </span>
                        <a
                          href={whatsappLink(item.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-full font-semibold text-sm transition-colors flex items-center gap-1.5"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="text-slate-600 mb-2 text-sm leading-relaxed flex-grow">
                      {expandedItems[item.id] ? item.description : `${item.description.substring(0, 150)}...`}
                      <button
                        onClick={() => toggleReadMore(item.id)}
                        className="text-emerald-600 font-semibold ml-1 hover:underline"
                      >
                        {expandedItems[item.id] ? 'Read Less' : 'Read More'}
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-auto pt-3 border-t border-slate-100">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        {item.capacity}
                      </span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Project
              <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Statistics</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Projects Completed', color: 'from-emerald-500 to-green-600' },
              { value: '99%', label: 'Happy Customers', color: 'from-blue-500 to-cyan-600' },
              { value: '10+', label: 'Years Experience', color: 'from-amber-500 to-orange-600' },
              { value: '30Y', label: 'Panel Warranty', color: 'from-violet-500 to-purple-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-100 rounded-full blur-[120px] opacity-50" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100 rounded-full blur-[150px] opacity-40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Inspired by Our <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Projects</span>?
            </h2>

            <p className="text-xl text-slate-600 mb-10">
              Join hundreds of satisfied customers across Bhopal and transform your property with clean, renewable solar energy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Sun, title: 'Free Consultation', desc: 'Expert advice tailored to your needs' },
                { icon: TrendingUp, title: 'Save 90% on Bills', desc: 'Reduce electricity costs significantly' },
                { icon: Shield, title: '30 Year Warranty', desc: 'Long-term reliability guaranteed' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-slate-50 rounded-2xl"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-emerald-500/25"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  (window as any).openQuoteForm();
                }
              }}
            >
              <Phone className="w-5 h-5" />
              Get Your Free Quote Now
            </motion.button>
            <p className="text-slate-500 mt-4 text-sm">
              No obligation • Free site assessment • Instant quote
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <PopupQuoteForm />
    </div>
  );
}
