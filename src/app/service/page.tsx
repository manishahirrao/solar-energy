'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Sun, Battery, Home, Trees, ArrowRight } from 'lucide-react';
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
      image: '/solar-maintainance-service.jpg',
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
      <section className="relative py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/solar-energy-service.webp"
            alt="Solar Services Hero"
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
              <Sun className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive solar energy solutions tailored to your needs
            </p>
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
            <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg">
              Get a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
