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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
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
              <span className="text-white">Baat Karein,</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                Solar Lagwayein
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Aaj hi humse judne ke liye contact karein. Free consultation aur expert rai ke liye hum taiyar hain.
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
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                onClick={() => window.location.href = 'tel:+918959890113'}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                onClick={() => window.open('https://wa.me/918959890113', '_blank')}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.04 14.69 2 12.04 2zm0 17.75c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.11.82.83-3.04-.2-.31c-.81-1.32-1.24-2.84-1.24-4.39 0-4.54 3.7-8.23 8.23-8.23 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.23-8.24 8.23z" />
                </svg>
                WhatsApp
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 lg:py-28 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Get Your Free
              <span className="block bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">Solar Consultation</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Fill out the form and our solar experts will contact you within 24 hours to discuss your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <InquiryForm />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

              <div className="space-y-6 flex-grow">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.details}</p>
                      <p className="text-sm text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">Office Hours</h4>
                <div className="flex items-start gap-3 text-slate-600">
                  <Clock className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Find Us on
              <span className="block bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Google Maps</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Visit our office for a face-to-face consultation. We look forward to realizing your solar potential.
            </p>
          </div>
          <div className="w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative">
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
