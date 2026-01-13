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

      {/* Rooftop Solar Services in Bhopal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Our Rooftop Solar Services in Bhopal
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Whether you’re a homeowner or running a business, our tailored solar services cover everything:
              </p>
              <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
                <li className="flex items-start">
                  <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-600 flex-shrink-0" />
                  <span>Free rooftop inspection and solar feasibility analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-600 flex-shrink-0" />
                  <span>Custom system design based on roof size, shadow, and tilt</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-600 flex-shrink-0" />
                  <span>Fast, secure installation using pre-fabricated structures</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-600 flex-shrink-0" />
                  <span>Full assistance with subsidy applications and net metering</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-600 flex-shrink-0" />
                  <span>Maintenance contracts to ensure long-term system performance</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-600 flex-shrink-0" />
                  <span>Easy financing plans with zero down payment and EMI options</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/solar-roof.jpeg"
                  alt="Rooftop Solar Services in Bhopal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="hidden sm:block absolute bottom-6 left-6 w-40 md:w-48 lg:w-56 rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-white/10 backdrop-blur-sm">
                  <img
                    src="/solar-roof1.jpeg"
                    alt="Solar Installation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              See Our Work in Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A quick look at how our team delivers safe, clean, and professional rooftop solar installations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-w-3xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/15 via-transparent to-orange-500/15" />
                  <video
                    className="relative w-full h-auto aspect-video object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
                  <div className="text-lg font-bold text-gray-900 mb-2">Scan Our Google Business Profile</div>
                  <div className="text-gray-600 text-sm mb-5">Scan this QR code to view our Google profile</div>
                  <div className="mx-auto w-52 sm:w-56 rounded-xl overflow-hidden border border-gray-200 bg-white">
                    <img
                      src="/qr.png"
                      alt="Google Business Profile QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
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
                      <h4 className="font-semibold text-gray-900 mb-1">30 Year Warranty</h4>
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
              className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition-colors flex items-center"
              onClick={() => {
                // Navigate to WhatsApp
                window.open('https://wa.me/918959890113', '_blank');
              }}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="currentColor"/>
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.04 14.69 2 12.04 2zm0 17.75c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.11.82.83-3.04-.2-.31c-.81-1.32-1.24-2.84-1.24-4.39 0-4.54 3.7-8.23 8.23-8.23 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.23-8.24 8.23z" fill="white"/>
                <path d="M9.03 7.5c-.2-.45-.41-.45-.6-.45-.19 0-.41 0-.62 0s-.57.09-.87.41c-.3.32-1.15 1.12-1.15 2.73s1.18 3.16 1.34 3.38c.16.22 2.3 3.52 5.58 4.94.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.62-.38s-1.9-.94-2.2-1.05c-.3-.11-.52-.17-.74.17s-.83 1.05-1.02 1.27c-.19.22-.38.25-.7.09s-1.36-.5-2.59-1.6c-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.3-.37.45-.55s.22-.33.33-.55c.11-.22.05-.41-.03-.55s-.6-1.45-.82-1.98z" fill="white"/>
              </svg>
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
              
              <Link href="/project">
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
