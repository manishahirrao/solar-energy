'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechnologyPartners from '@/components/TechnologyPartners';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import QuoteForm from '@/components/QuoteForm';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurProjects from '@/components/OurProjects';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Sun, TrendingUp, Zap, Shield, ArrowRight, CheckCircle, Sparkles, Play, Award, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TechnologyPartners />

      {/* PM Surya Ghar Yojana Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-80 h-80 bg-orange-200 rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200 rounded-full blur-[150px] opacity-25" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              PM <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">Surya Ghar</span> Yojana
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Government of India's flagship solar rooftop scheme
              <span className="block text-emerald-600 font-medium mt-2">Get subsidies up to ₹78,000 for residential solar installations</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8/*, delay: 0.2*/ }}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-amber-500" />
                  Scheme Benefits
                </h3>
                <div className="space-y-5">
                  {[
                    { icon: TrendingUp, title: 'Huge Subsidies', desc: 'Get up to ₹78,000 government subsidy for residential solar', color: 'text-emerald-600 bg-emerald-100' },
                    { icon: Zap, title: 'Free Electricity', desc: 'Generate your own electricity and reduce dependency on grid', color: 'text-orange-600 bg-orange-100' },
                    { icon: Shield, title: '30 Year Warranty', desc: 'Long-term performance guarantee with manufacturer warranty', color: 'text-blue-600 bg-blue-100' }
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/pm-surya-ghar-yojana.jpg"
                  alt="PM Surya Ghar Yojana"
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = 'none';
                      parent.className = 'relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center h-[400px]';
                      parent.innerHTML = `
                        <div class="text-white text-center p-8">
                          <div class="text-4xl font-bold mb-4">PM Surya Ghar Yojana</div>
                          <div class="text-lg opacity-90">Government Solar Rooftop Scheme</div>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* CTA Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Apply Now!</h4>
                    <p className="text-slate-600 text-sm mb-4">Limited time offer - Get maximum subsidy</p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg"
                      onClick={() => window.open('https://wa.me/918959890113', '_blank')}
                    >
                      Check Eligibility
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AboutUs />
      <Services />



      {/* Rooftop Solar Services */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Our Rooftop Solar
                <span className="block bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Services in Bhopal</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're a homeowner or running a business, our tailored solar services cover everything:
              </p>

              <ul className="space-y-4">
                {[
                  'Free rooftop inspection and solar feasibility analysis',
                  'Custom system design based on roof size, shadow, and tilt',
                  'Fast, secure installation using pre-fabricated structures',
                  'Full assistance with subsidy applications and net metering',
                  'Maintenance contracts to ensure long-term system performance',
                  'Easy financing plans with zero down payment and EMI options'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Video */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl h-48 sm:h-64 group"
                >
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Images */}
                {['/solar-roof.jpeg', '/solar-installed-at-terrace.jpeg', '/solar-roof1.jpeg'].map((img, i) => (
                  <motion.div
                    key={img}
                    whileHover={{ scale: 1.02 }}
                    className={`relative rounded-2xl overflow-hidden shadow-xl ${i === 0 ? 'h-48 sm:h-64' : 'h-40 sm:h-52'} group`}
                  >
                    <img
                      src={img}
                      alt="Solar Installation"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              See Our Work <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">in Action</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
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
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
                  <video
                    className="w-full aspect-video object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src="/pocura-all-detail-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-slate-100">
                  <div className="text-lg font-bold text-slate-900 mb-2">Scan Our Google Business Profile</div>
                  <div className="text-slate-600 text-sm mb-5">Scan this QR code to view our Google profile</div>
                  <div className="mx-auto w-48 rounded-xl overflow-hidden border-2 border-slate-100 bg-white p-2">
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

      <WhyChooseUs />
      <OurProjects />
      <Testimonials />
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Go <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Solar</span>?
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Take the first step towards sustainable energy and start saving today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <Link href="/project">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Explore Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <PopupQuoteForm />
    </div>
  );
}
