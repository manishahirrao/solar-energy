'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Award, Leaf, Target, Sun, Zap, Shield, Clock, Globe, CheckCircle, TrendingUp, Lightbulb, Wrench, ArrowRight, Phone } from 'lucide-react';

export default function About() {
  const stats = [
    { number: 'Many', label: 'Projects Delivered', icon: Award },
    { number: 'Experienced', label: 'Solar Specialists', icon: Award },
    { number: 'Trusted', label: 'Customer Relationships', icon: Leaf },
    { number: 'Extensive', label: 'Solar Capacity Installed', icon: Target }
  ];

  const values = [
    {
      title: 'Sustainability',
      description: 'We are committed to promoting renewable energy solutions that protect our planet for future generations.',
      icon: Leaf
    },
    {
      title: 'Innovation',
      description: 'We continuously invest in the latest solar technology to provide the most efficient solutions.',
      icon: Target
    },
    {
      title: 'Quality',
      description: 'We never compromise on quality, using only the best materials and installation practices.',
      icon: Award
    },
    {
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do, ensuring complete satisfaction.',
      icon: Award
    }
  ];

  const milestones = [
    { year: 'Foundation', title: 'Company Established', description: 'Started with a vision to make solar energy accessible to all' },
    { year: 'Growth', title: 'Expanded Operations', description: 'Extended services across multiple states with growing team' },
    { year: 'Innovation', title: 'Technology Integration', description: 'Adopted cutting-edge solar technology and smart solutions' },
    { year: 'Excellence', title: 'Industry Recognition', description: 'Received multiple awards for outstanding service and innovation' }
  ];

  const expertise = [
    { title: 'Residential Solar', description: 'Customized solar solutions for homes of all sizes', icon: Sun },
    { title: 'Commercial Systems', description: 'Large-scale solar installations for businesses and industries', icon: Globe },
    { title: 'Energy Storage', description: 'Advanced battery solutions for energy independence', icon: Zap },
    { title: 'Smart Technology', description: 'IoT-enabled monitoring and optimization systems', icon: Lightbulb },
    { title: 'Maintenance', description: 'Comprehensive maintenance and support services', icon: Wrench },
    { title: 'Consultation', description: 'Expert energy consulting and feasibility studies', icon: CheckCircle }
  ];


  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
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
              <span className="text-white">Humara Sapna,</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                Har Ghar Solar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Procura Solar ke saath janiye kaise hum badal rahe hain energy ka future, ek waqt mein ek ghar.
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
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                Get Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                onClick={() => window.location.href = '/project'}
              >
                <Sun className="w-5 h-5" />
                Our Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Empowering India with
                <span className="block bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Clean Solar Energy</span>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Procura Solar is dedicated to driving India's renewable energy transition with reliable, high-quality solar solutions. Our mission is to make clean, sustainable energy accessible to everyone – from homeowners to large industrial facilities.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our team of solar professionals designs and delivers systems tailored to each site, whether residential, commercial, or utility-scale. Every project is engineered for performance, durability, and long-term value.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe solar energy is not just about lowering bills – it is about building a sustainable future for generations to come. Every installation moves us closer to a cleaner, more resilient energy landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src="/about.jpg"
                  alt="Solar installation by Procura Solar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log('About image failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    console.log('About image loaded successfully');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 flex items-center justify-between gap-4 z-20"
                >
                  <div>
                    <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">Procura Solar</p>
                    <p className="text-slate-700 text-sm">Designing smart, efficient solar systems for homes and businesses.</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-slate-500">Active projects running</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 sm:mb-10">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 sm:mb-10">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From a small vision to a leading solar energy provider
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sun className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Vision</h3>
                    <p className="text-slate-600 leading-relaxed">
                      To create a sustainable future powered by clean, renewable energy. We envision a world where every home and business harnesses the power of the sun to reduce their carbon footprint and energy costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Mission</h3>
                    <p className="text-slate-600 leading-relaxed">
                      To provide high-quality, affordable solar energy solutions that make renewable energy accessible to everyone. We strive to exceed customer expectations through innovation, reliability, and exceptional service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Commitment</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We are committed to delivering excellence in every project, from initial consultation to final installation and beyond. Our team stands behind every installation with comprehensive warranties and ongoing support.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-green-600 font-semibold text-sm mb-2">{milestone.year}</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{milestone.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 sm:mb-10">Our Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solar solutions backed by technical excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-slate-50 rounded-xl p-6 hover:bg-green-50 transition-colors"
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/solar-consulting-service.webp"
                  alt="Solar Consulting Services"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    console.log('Consulting image failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    console.log('Consulting image loaded successfully');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-6 z-20"
                >
                  <h4 className="text-lg font-bold text-green-700 mb-2">Expert Solar Consulting</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Our certified consultants provide comprehensive feasibility studies, system design, and energy optimization strategies tailored to your specific needs.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/15 rounded-full blur-[100px]" />
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
              Ready to Join Our <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Solar Journey</span>?
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Partner with Procura Solar and experience the difference of working with industry leaders committed to excellence and sustainability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Sun, title: 'Free Consultation', desc: 'Expert advice tailored to your needs' },
                { icon: TrendingUp, title: 'Save 90% on Bills', desc: 'Reduce electricity costs significantly' },
                { icon: Shield, title: '30 Year Warranty', desc: 'Long-term reliability guaranteed' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <item.icon className="w-8 h-8 text-emerald-400 mb-3 mx-auto" />
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold text-white inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  (window as any).openQuoteForm();
                }
              }}
            >
              Get Your Free Quote Now
              <Phone className="w-5 h-5" />
            </motion.button>
            <p className="text-slate-500 mt-4 text-sm">
              No obligation • Free site assessment • Instant quote
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Popup Quote Form */}
      <PopupQuoteForm />
    </div>
  );
}
