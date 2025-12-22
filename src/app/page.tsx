'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <FAQ />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-transparent to-emerald-100/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </motion.div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Go <span className="text-green-600">Solar</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Take the first step towards sustainable energy and significant savings
              <span className="block text-green-600 font-medium mt-2">Join thousands of satisfied customers saving money with clean energy</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center shadow-2xl"
                >
                  Get Free Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </motion.button>
              </Link>
              
              <Link href="/service">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition-all duration-300 font-semibold text-lg flex items-center justify-center shadow-lg"
                >
                  Explore Services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </motion.button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mt-16 text-gray-600"
            >
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="font-medium">Quick Response</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="font-medium">Expert Guidance</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      
      {/* Popup Quote Form */}
      <PopupQuoteForm />
    </div>
  );
}
