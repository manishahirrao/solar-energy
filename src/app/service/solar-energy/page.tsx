'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Sun, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

export default function SolarEnergyService() {
  const benefits = [
    'Reduce electricity bills by up to 70%',
    '25-year performance warranty on panels',
    'Increase property value',
    'Environmentally friendly energy source',
    'Low maintenance requirements',
    'Energy independence from grid'
  ];

  const process = [
    {
      step: '1',
      title: 'Site Assessment',
      description: 'Our experts evaluate your location, roof structure, and energy requirements to determine the optimal solar solution.'
    },
    {
      step: '2',
      title: 'System Design',
      description: 'We create a customized solar system design tailored to your specific needs and budget.'
    },
    {
      step: '3',
      title: 'Installation',
      description: 'Our certified technicians install your solar system with precision and attention to detail.'
    },
    {
      step: '4',
      title: 'Commissioning',
      description: 'We test and commission your system, ensuring it operates at peak performance.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/solar-energy-service.webp"
            alt="Solar Energy Service"
            className="w-full h-full object-cover"
          />
        </div>
        
        
        <div className="relative container mx-auto px-4 z-10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent"
              >
                Solar Energy Solutions
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Harness the power of the sun with our cutting-edge solar panel technology and installation services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Solar Energy Solutions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our solar energy solutions are designed to provide clean, renewable power for homes and businesses. We use only the highest quality solar panels and equipment to ensure maximum efficiency and longevity.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're looking to reduce your carbon footprint, save on electricity bills, or achieve energy independence, our solar solutions are tailored to meet your specific needs.
              </p>
              
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors font-semibold flex items-center">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src="/Industrial Solar Setup.jpg"
                alt="Solar Installation"
                className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  console.error('Solar solution image failed to load:', '/Industrial Solar Setup.jpg');
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    e.currentTarget.style.display = 'none';
                    parent.className = 'relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center h-64';
                    parent.innerHTML = `
                      <div class="text-white text-center">
                        <div class="text-lg font-bold">Solar Installation</div>
                      </div>
                    `;
                  }
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to commissioning, we make solar installation simple and hassle-free
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Solar Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading features and benefits that set us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/Rooftop Solar Installation.jpeg"
                  alt="High-Efficiency Panels"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error('Solar energy image failed to load:', '/Rooftop Solar Installation.jpeg');
                    // Show fallback gradient if local image fails
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = 'none';
                      parent.className = 'relative h-48 overflow-hidden bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center';
                      parent.innerHTML = `
                        <div class="text-white text-center">
                          <div class="text-lg font-bold">High-Efficiency Panels</div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">High-Efficiency Panels</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use premium solar panels with efficiency ratings above 22%, ensuring maximum power generation from limited roof space.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/Commercial Solar Farm.jpg"
                  alt="Smart Monitoring"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error('Solar energy image failed to load:', '/Commercial Solar Farm.jpg');
                    // Show fallback gradient if local image fails
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = 'none';
                      parent.className = 'relative h-48 overflow-hidden bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center';
                      parent.innerHTML = `
                        <div class="text-white text-center">
                          <div class="text-lg font-bold">Smart Monitoring</div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Monitoring</h3>
                <p className="text-gray-600 leading-relaxed">
                  Real-time monitoring system allows you to track energy production and consumption through our mobile app.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/Industrial Solar Setup.jpg"
                  alt="Expert Installation"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error('Solar energy image failed to load:', '/Industrial Solar Setup.jpg');
                    // Show fallback gradient if local image fails
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = 'none';
                      parent.className = 'relative h-48 overflow-hidden bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center';
                      parent.innerHTML = `
                        <div class="text-white text-center">
                          <div class="text-lg font-bold">Expert Installation</div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our certified technicians ensure professional installation following all safety standards and regulations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solar Projects Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solar Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our successful solar energy installations across different sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Rooftop',
                location: 'Bhopal, Madhya Pradesh',
                image: '/Rooftop Solar Installation.jpeg',
                capacity: '5kW System',
                description: 'Complete rooftop solar installation with net metering'
              },
              {
                title: 'Agricultural Solar Pump',
                location: 'Sehore, Madhya Pradesh',
                image: '/Agricultural Solar Pump.jpg',
                capacity: '10HP Pump',
                description: 'Solar-powered irrigation system for farming'
              },
              {
                title: 'School Installation',
                location: 'Indore, Madhya Pradesh',
                image: '/School Solar Installation.avif',
                capacity: '50kW System',
                description: 'Educational institution with solar learning center'
              },
              {
                title: 'Hospital Backup',
                location: 'Vidisha, Madhya Pradesh',
                image: '/Hospital Solar System.jpg',
                capacity: '200kW System',
                description: 'Critical power backup for healthcare facility'
              },
              {
                title: 'Solar Carport',
                location: 'Jabalpur, Madhya Pradesh',
                image: '/Solar Carport.webp',
                capacity: '20kW System',
                description: 'EV charging station with solar carport'
              },
              {
                title: 'Industrial Setup',
                location: 'Gwalior, Madhya Pradesh',
                image: '/Industrial Solar Setup.jpg',
                capacity: '100kW System',
                description: 'Large-scale industrial solar installation'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      console.error('Project image failed to load:', project.image);
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        e.currentTarget.style.display = 'none';
                        parent.className = 'relative h-64 overflow-hidden bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center';
                        parent.innerHTML = `
                          <div class="text-white text-center">
                            <div class="text-lg font-bold">${project.title}</div>
                          </div>
                        `;
                      }
                    }}
                  />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-2">{project.location}</p>
                    <div className="flex items-center text-xs bg-green-600 px-2 py-1 rounded-full inline-block">
                      <span className="font-medium">{project.capacity}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Go Solar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote for your solar energy needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  // Open quote form popup
                  const popupQuoteForm = document.getElementById('popup-quote-form');
                  if (popupQuoteForm) {
                    popupQuoteForm.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                  }
                }}
                className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold flex items-center"
              >
                Get Quote
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-600 transition-colors font-semibold flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 00-2 2v12a2 2 0 002 2M3 19a2 2 0 002-2v-12M3 5a2 2 0 00-2-2z"></path>
                </svg>
                WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
