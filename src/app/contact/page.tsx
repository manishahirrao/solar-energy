'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import InquiryForm from '@/components/InquiryForm';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Home } from 'lucide-react';

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
      details: 'sales.procura@gmail.com',
      description: 'Get in touch via email'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'E-3/114, 2nd Floor, Anera Colony, Bhopal',
      description: 'Our office location'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      details: '+91 8959890113',
      description: 'Chat with us on WhatsApp'
    }
  ];

  const officeLocations = [
    {
      city: 'Bhopal Office',
      address: 'E-3/114, 2nd Floor, Anera Colony, Bhopal',
      phone: '+91 8959890113',
      email: 'sales.procura@gmail.com'
    },
    {
      city: 'WhatsApp Support',
      address: 'Available 24/7 for instant support',
      phone: '+91 8959890113',
      email: 'sales.procura@gmail.com'
    },
    {
      city: 'Alternate Contact',
      address: 'E-3/114, 2nd Floor, Anera Colony, Bhopal',
      phone: '+91 7415550210',
      email: 'sales.procura@gmail.com'
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
            alt="Contact Procura Solar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent bg-opacity-20"></div>
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
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Phone className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent"
              >
                Contact Us
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg max-w-3xl mx-auto leading-relaxed"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get in touch with our solar energy experts for consultation and quotes
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((info: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {info.icon && <info.icon className="w-8 h-8 text-green-600" />}
                </motion.div>
                <motion.h3 
                  className="text-lg font-semibold text-gray-900 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {info.title}
                </motion.h3>
                <motion.p className="text-green-600 font-medium mb-2">{info.details}</motion.p>
                <motion.p className="text-gray-600 text-sm">{info.description}</motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
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
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <Home className="w-16 h-16 mx-auto mb-4" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Showing office locations</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Office Hours</h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Home className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.email}</span>
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
