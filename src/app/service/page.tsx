'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Sun, Battery, Home, Trees, ArrowRight, FileText, Settings, Award } from 'lucide-react';
import Link from 'next/link';

export default function Service() {
  const services = [
    {
      icon: Sun,
      title: 'Solar Energy',
      description: 'Complete solar panel installation and maintenance services for residential and commercial properties.',
      features: ['High-efficiency solar panels', '25-year warranty', 'Smart monitoring systems', 'Grid-tie and off-grid solutions'],
      image: '/solar-energy-service.webp',
      href: '/service/solar-energy'
    },
    {
      icon: Battery,
      title: 'Hybrid Energy',
      description: 'Integrated solar and battery storage systems for maximum energy independence and reliability.',
      features: ['Battery backup systems', 'Smart energy management', 'Load optimization', 'Emergency power backup'],
      image: '/solar-storage-services.webp',
      href: '/service/hybrid-energy'
    },
    {
      icon: Trees,
      title: 'Solar Consulting',
      description: 'Expert consulting services to help you choose the best solar energy solutions.',
      features: ['Energy audit', 'System design', 'Financial analysis', 'Regulatory compliance'],
      image: '/solar-consulting-service.webp',
      href: '/service/solar-consulting'
    },
    {
      icon: Sun,
      title: 'Solar Maintenance',
      description: 'Comprehensive maintenance and repair services for solar energy systems.',
      features: ['Regular inspections', 'Performance optimization', 'Emergency repairs', 'System upgrades'],
      image: '/Solar Maintenance Service.jpg',
      href: '/service/maintenance'
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Advanced battery storage solutions for solar energy independence and grid stability.',
      features: ['Lithium-ion batteries', 'Smart charging', 'Peak shaving', 'Demand response'],
      image: '/solar-energy-service.webp',
      href: '/service/energy-storage'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-emerald-900 overflow-hidden">
        {/* Background Image with enhanced effects */}
        <div className="absolute inset-0">
          <img
            src="/solar-energy-service.webp"
            alt="Solar Services Hero"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-2" />
                <span className="text-white text-xs sm:text-sm font-medium">Complete Solar Solutions Provider</span>
              </div>
            </motion.div>
            
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-16 h-16 sm:w-20 sm:h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl border-2 border-white/20"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Sun className="w-8 h-8 sm:w-10 sm:h-12 text-white" />
            </motion.div>
            
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              Comprehensive solar energy solutions tailored to your specific needs
              <span className="block text-yellow-200 font-medium mt-3">From consultation to installation and ongoing maintenance</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center group shadow-2xl border border-yellow-400/20"
                onClick={() => window.location.href = '/contact'}
              >
                Get Quote
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:bg-white/20 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center shadow-2xl"
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Battery className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                    console.error('Service image failed to load:', service.image);
                    // Show fallback gradient if local image fails
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = 'none';
                      parent.className = 'relative h-48 overflow-hidden bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center';
                      parent.innerHTML = `
                        <div class="text-white text-center">
                          <div class="text-2xl font-bold mb-2">${service.title}</div>
                          <div class="text-sm opacity-75">Service Image</div>
                        </div>
                      `;
                    }
                  }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-semibold text-green-700">View Details</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={service.href}>
                    <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team of experts can design a tailored solar energy system that meets your specific requirements.
            </p>
            <button 
              className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
              onClick={() => {
                // Navigate to contact page for consultation
                window.location.href = '/contact';
              }}
            >
              Get a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* PM Surya Ghar Yojana Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sun className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              PM <span className="text-orange-600">Surya Ghar</span> Yojana
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Government of India's flagship solar rooftop scheme with maximum subsidies
              <span className="block text-green-600 font-medium mt-2">Professional assistance for complete application and installation</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/pm-surya-ghar-yojana.jpg"
                  alt="PM Surya Ghar Yojana"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('PM Surya Ghar image failed to load');
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = 'none';
                      parent.className = 'relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-400 to-green-600 flex items-center justify-center h-96';
                      parent.innerHTML = `
                        <div class="text-white text-center p-8">
                          <div class="text-3xl font-bold mb-4">PM Surya Ghar Yojana</div>
                          <div class="text-lg">Government Solar Rooftop Scheme</div>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services Under PM Surya Ghar</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Application Assistance</h4>
                      <p className="text-gray-600">Complete documentation and application process support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Settings className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Installation Service</h4>
                      <p className="text-gray-600">Professional installation with certified technicians</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Subsidy Claims</h4>
                      <p className="text-gray-600">Complete assistance in claiming government subsidies</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
