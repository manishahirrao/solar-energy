'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import InquiryForm from '@/components/InquiryForm';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Home, ArrowRight, Sun, Wrench, Zap, Check, Battery } from 'lucide-react';

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
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.04 14.69 2 12.04 2zm0 17.75c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.11.82.83-3.04-.2-.31c-.81-1.32-1.24-2.84-1.24-4.39 0-4.54 3.7-8.23 8.23-8.23 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.23-8.24 8.23z" fill="white" />
          <path d="M9.03 7.5c-.2-.45-.41-.45-.6-.45-.19 0-.41 0-.62 0s-.57.09-.87.41c-.3.32-1.15 1.12-1.15 2.73s1.18 3.16 1.34 3.38c.16.22 2.3 3.52 5.58 4.94.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.62-.38s-1.9-.94-2.2-1.05c-.3-.11-.52-.17-.74.17s-.83 1.05-1.02 1.27c-.19.22-.38.25-.7.09s-1.36-.5-2.59-1.6c-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.3-.37.45-.55s.22-.33.33-.55c.11-.22.05-.41-.03-.55s-.6-1.45-.82-1.98z" fill="white" />
        </svg>
      ),
      title: 'WhatsApp',
      details: '+91 8959890113',
      description: 'Chat with us on WhatsApp'
    }
  ];

  const services = [
    {
      icon: Sun,
      title: 'Solar Panel Installation',
      description: 'Professional installation of high-efficiency solar panels for homes and businesses.',
      features: [
        'Residential & commercial installations',
        'Custom system design',
        'High-efficiency panels',
        'Grid-tie & hybrid systems'
      ]
    },
    {
      icon: Zap,
      title: 'Solar Water Heater',
      description: 'Energy-efficient solar water heating solutions for your home or business.',
      features: [
        'Flat plate collectors',
        'Evacuated tube systems',
        'Thermal storage tanks',
        'Low maintenance design'
      ]
    },
    {
      icon: Wrench,
      title: 'Solar Inverter Systems',
      description: 'High-performance inverters to maximize your solar energy production.',
      features: [
        'String inverters',
        'Microinverters',
        'Hybrid systems',
        'Battery backup solutions'
      ]
    },
    {
      icon: Battery,
      title: 'Solar Water Pumps',
      description: 'Reliable solar-powered water pumping solutions for agriculture and homes.',
      features: [
        'Submersible pumps',
        'Surface pumps',
        'Irrigation systems',
        'Remote monitoring'
      ]
    },
    {
      icon: Wrench,
      title: 'Solar System Maintenance',
      description: 'Keep your solar system running at peak efficiency with our maintenance services.',
      features: [
        'Regular cleaning',
        'Performance checks',
        'Fault detection',
        'Warranty support'
      ]
    },
    {
      icon: Home,
      title: 'Rooftop Solar Solutions',
      description: 'Custom rooftop solar solutions for residential and commercial properties.',
      features: [
        'Net metering setup',
        'Custom mounting solutions',
        'Shade analysis',
        'ROI consultation'
      ]
    }
  ];

  const officeLocations = [
    {
      icon: Home,
      title: 'Head Office',
      address: 'E-3/114, 2nd Floor, 10 No. Market, Arera Colony, Bhopal, Madhya Pradesh 462016',
      phone: '+91 8959890113',
      email: 'sale.procura@gmail.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
      isMain: true
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      address: 'Bhopal, Mandideep, Hoshangabad, Raisen, Vidisha, Sehore, and nearby areas in Madhya Pradesh',
      phone: '+91 7415550210',
      email: 'info@procurasolar.com',
      hours: 'Mon-Sat: 10:00 AM - 6:00 PM',
      isMain: false
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
            src="/contact.jpg"
            alt="Contact Procura Solar"
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-white">Baat Karein,</span>
              <br />
              <span className="text-white">Solar Lagwayein</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              Aaj hi humse judne ke liye contact karein. Free consultation aur expert rai ke liye hum taiyar hain.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            >
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



      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 sm:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Your Free Solar Consultation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fill out the form and our solar experts will contact you within 24 hours to discuss your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <InquiryForm />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6 flex-grow">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-600 flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.details}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Office Hours</h4>
                <div className="flex items-start gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Find Us on Google Maps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our office for a face-to-face consultation. We look forward to realizing your solar potential.
            </p>
          </div>
          <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative">
            <iframe
              src="https://maps.google.com/maps?q=E-3/114%2C%2010%20No.%20Market%2C%20Arera%20Colony%2C%20Bhopal&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Procura Solar Office Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Popup Quote Form */}
      <PopupQuoteForm />
    </div>
  );
}
