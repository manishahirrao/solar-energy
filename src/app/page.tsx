'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechnologyPartners from '@/components/TechnologyPartners';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurProjects from '@/components/OurProjects';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Sun, TrendingUp, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TechnologyPartners />
      <AboutUs />
      <Services />
      
      {/* PM Surya Ghar Yojana Section */}
      <section className="py-20 bg-white relative overflow-hidden">
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
              className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sun className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 sm:mb-10 leading-tight">
              PM <span className="text-orange-600">Surya Ghar</span> Yojana
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-10 sm:mb-12">
              Government of India's flagship solar rooftop scheme
              <span className="block text-green-600 font-medium mt-3">Get subsidies up to ₹78,000 for residential solar installations</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 sm:mb-10">Scheme Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Huge Subsidies</h4>
                      <p className="text-gray-600">Get up to ₹78,000 government subsidy for residential solar installations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Free Electricity</h4>
                      <p className="text-gray-600">Generate your own electricity and reduce dependency on grid power</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">25 Year Warranty</h4>
                      <p className="text-gray-600">Long-term performance guarantee with manufacturer warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
                          <div class="text-4xl font-bold mb-4">PM Surya Ghar Yojana</div>
                          <div class="text-lg">Government Solar Rooftop Scheme</div>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Apply Now!</h4>
                    <p className="text-gray-600 text-sm mb-3">Limited time offer - Get maximum subsidy</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all z-50"
                      onClick={() => {
                        // Open quote form popup
                        const popupQuoteForm = document.getElementById('popup-quote-form');
                        if (popupQuoteForm) {
                          popupQuoteForm.style.display = 'flex';
                          document.body.style.overflow = 'hidden';
                        }
                      }}
                    >
                      Check Eligibility
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA for PM Surya Ghar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">Ready to Join PM Surya Ghar Yojana?</h3>
            <button
              className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition-colors"
              onClick={() => {
                // Navigate to WhatsApp
                window.open('https://wa.me/918959890113', '_blank');
              }}
            >
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>
      
      <WhyChooseUs />
      <OurProjects />
      <Testimonials />
      <FAQ />
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 sm:mb-10">
              Ready to Go <span className="text-green-600">Solar</span>?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-10 sm:mb-12">
              Take the first step towards sustainable energy
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
                  Get Free Quote
                </button>
              </Link>
              
              <Link href="/gallery">
                <button className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition-colors font-semibold">
                  Explore Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Popup Quote Form */}
      <PopupQuoteForm />
    </div>
  );
}
