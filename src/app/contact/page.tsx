'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import InquiryForm from '@/components/InquiryForm';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Home, ArrowRight, Sun, Battery, Zap, Trees } from 'lucide-react';

export default function Contact() {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 8959890113',
      description: 'Primary contact number'
    },
    {
      icon: Phone,
      title: 'Alternate Number',
      details: '+91 7415550210',
      description: 'Secondary contact number'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'sale.procura@gmail.com',
      description: 'Get in touch via email'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'E-3/114, 2nd Floor, 10 No. Market, Arera Colony, Bhopal',
      description: 'Our office location'
    },
    {
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="currentColor"/>
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.04 14.69 2 12.04 2zm0 17.75c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.11.82.83-3.04-.2-.31c-.81-1.32-1.24-2.84-1.24-4.39 0-4.54 3.7-8.23 8.23-8.23 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.23-8.24 8.23z" fill="white"/>
          <path d="M9.03 7.5c-.2-.45-.41-.45-.6-.45-.19 0-.41 0-.62 0s-.57.09-.87.41c-.3.32-1.15 1.12-1.15 2.73s1.18 3.16 1.34 3.38c.16.22 2.3 3.52 5.58 4.94.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.62-.38s-1.9-.94-2.2-1.05c-.3-.11-.52-.17-.74.17s-.83 1.05-1.02 1.27c-.19.22-.38.25-.7.09s-1.36-.5-2.59-1.6c-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.3-.37.45-.55s.22-.33.33-.55c.11-.22.05-.41-.03-.55s-.6-1.45-.82-1.98z" fill="white"/>
        </svg>
      ),
      title: 'WhatsApp',
      details: '+91 8959890113',
      description: 'Chat with us on WhatsApp'
    }
  ];

  const officeLocations = [
    {
      city: 'Bhopal Head Office',
      address: 'E-3/114, 2nd Floor, 10 No. Market, Arera Colony, Bhopal, Madhya Pradesh 462022',
      phone: '+91 8959890113',
      email: 'sale.procura@gmail.com',
      coordinates: '23.2599° N, 77.4128° E',
      services: 'All solar solutions, consultation, installation, maintenance'
    },
    {
      city: 'WhatsApp Support',
      address: 'Available 24/7 for instant support and queries',
      phone: '+91 8959890113',
      email: 'sale.procura@gmail.com',
      coordinates: 'Online Support',
      services: 'Quick quotes, emergency support, general inquiries'
    },
    {
      city: 'Alternate Contact',
      address: 'E-3/114, 2nd Floor, 10 No. Market, Arera Colony, Bhopal, Madhya Pradesh 462022',
      phone: '+91 7415550210',
      email: 'sale.procura@gmail.com',
      coordinates: '23.2599° N, 77.4128° E',
      services: 'Backup contact, technical support, service requests'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 overflow-hidden">
        {/* Background Image with enhanced effects */}
        <div className="absolute inset-0">
          <img
            src="/Rooftop Solar Installation.jpeg"
            alt="Contact Procura Solar"
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
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-black">
                Contact
              </span>
              <br />
              <span className="text-black">
                Procura Solar
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              Get in touch with our solar experts for a free consultation - Let's discuss how we can help you save money and protect the environment
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
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 font-bold text-base flex items-center justify-center shadow-2xl"
                onClick={() => window.location.href = 'tel:+918959890113'}
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Best Offer for <span className="text-green-600">Renewable Energy</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              At Procura, we believe in the power of renewable energy to create a more sustainable future. With a passion for clean energy and a commitment to our customers, we are dedicated to delivering the best possible solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sun,
                title: 'Solar Energy',
                description: 'Aenean mattis mauris turpis, quis porta magna aliquam.'
              },
              {
                icon: Battery,
                title: 'Hybrid Energy',
                description: 'Aenean mattis mauris turpis, quis porta magna aliquam.'
              },
              {
                icon: Zap,
                title: 'Wind Energy',
                description: 'Aenean mattis mauris turpis, quis porta magna aliquam.'
              },
              {
                icon: Trees,
                title: 'Renewable Energy',
                description: 'Aenean mattis mauris turpis, quis porta magna aliquam.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                <InquiryForm />
            </motion.div>

            {/* Map & Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Interactive Map */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-xl overflow-hidden shadow-lg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.4625147658!2d77.4128!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd5a5d5%3A0x0!2zMjPCsDE1JzU5LjYiTiA3N8KwMjQnNDYuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                />
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3">
                  <div className="flex items-center text-green-600 font-semibold">
                    <MapPin className="w-5 h-5 mr-2" />
                    Bhopal Office
                  </div>
                </div>
              </motion.div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center text-green-700">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-medium">Emergency support available 24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Our Office Locations</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our conveniently located offices across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{office.city}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600 text-sm">{office.address}</p>
                      <p className="text-gray-500 text-xs mt-1">{office.coordinates}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-green-600 mb-1">Services Available:</p>
                    <p className="text-xs text-gray-600">{office.services}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
