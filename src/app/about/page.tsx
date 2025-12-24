'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Award, Leaf, Target, Sun, Zap, Shield, Clock, Globe, CheckCircle, TrendingUp, Lightbulb, Wrench, ArrowRight } from 'lucide-react';

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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden">
        {/* Background Image with enhanced effects */}
        <div className="absolute inset-0">
          <img
            src="/about-hero.avif"
            alt="About Procura Solar"
            className="w-full h-full object-cover mix-blend-overlay"
          />
          {/* Multiple overlay layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-blue-900/20" />
        </div>
        
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0">
          {[
            { width: 120, height: 120, left: 10, top: 20, duration: 4, color: 'from-green-400 to-emerald-400' },
            { width: 80, height: 80, left: 70, top: 60, duration: 5, color: 'from-blue-400 to-cyan-400' },
            { width: 150, height: 150, left: 30, top: 80, duration: 6, color: 'from-yellow-400 to-orange-400' },
            { width: 60, height: 60, left: 85, top: 15, duration: 3.5, color: 'from-purple-400 to-pink-400' },
            { width: 100, height: 100, left: 50, top: 40, duration: 4.5, color: 'from-red-400 to-rose-400' }
          ].map((style, i) => (
            <motion.div
              key={i}
              className={`absolute bg-gradient-to-br ${style.color} rounded-full opacity-10 blur-xl`}
              style={{
                width: style.width + 'px',
                height: style.height + 'px',
                left: style.left + '%',
                top: style.top + '%'
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
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
        
        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <Award className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-white text-sm font-medium">Leading Solar Solutions Since 2010</span>
              </div>
            </motion.div>
            
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border-2 border-white/20"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Award className="w-12 h-12 text-white" />
            </motion.div>
            
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                Procura Solar
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              Pioneering excellence in renewable energy solutions, 
              <span className="block text-green-200 font-medium mt-3">committed to transforming the way India powers its future through sustainable innovation.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-bold text-lg flex items-center justify-center group shadow-2xl border border-green-400/20"
                onClick={() => window.location.href = '/contact'}
              >
                Get Quote
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full hover:bg-white/20 transition-all duration-300 font-bold text-lg flex items-center justify-center shadow-2xl"
                onClick={() => window.location.href = '/gallery'}
              >
                <Sun className="w-6 h-6 mr-3" />
                Our Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
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
                Empowering India with Clean Solar Energy
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Procura Solar is dedicated to driving India's renewable energy transition with reliable, high-quality solar solutions. Our mission is to make clean, sustainable energy accessible to everyone – from homeowners to large industrial facilities.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of solar professionals designs and delivers systems tailored to each site, whether residential, commercial, or utility-scale. Every project is engineered for performance, durability, and long-term value.
              </p>
              <p className="text-gray-600 leading-relaxed">
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
                    <p className="text-gray-700 text-sm">Designing smart, efficient solar systems for homes and businesses.</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-gray-500">Active projects running</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
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
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To create a sustainable future powered by clean, renewable energy. We envision a world where every home and business harnesses the power of the sun to reduce their carbon footprint and energy costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To provide high-quality, affordable solar energy solutions that make renewable energy accessible to everyone. We strive to exceed customer expectations through innovation, reliability, and exceptional service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Commitment</h3>
                    <p className="text-gray-600 leading-relaxed">
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    className="bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-colors"
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our certified consultants provide comprehensive feasibility studies, system design, and energy optimization strategies tailored to your specific needs.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Technology Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with industry leaders for the best solar solutions
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8 min-w-max px-4"
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {[
                'SunPower', 
                'LG Solar', 
                'Jinko Solar', 
                'Trina Solar', 
                'Sungrow', 
                'Huawei Solar',
                'Canadian Solar',
                'First Solar',
                'Enphase Energy',
                'SolarEdge Technologies',
                'Tesla Energy',
                'BYD Solar'
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center flex-shrink-0"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900 whitespace-nowrap">{partner}</div>
                </motion.div>
              ))}
              {/* Duplicate partners for seamless loop */}
              {[
                'SunPower', 
                'LG Solar', 
                'Jinko Solar', 
                'Trina Solar', 
                'Sungrow', 
                'Huawei Solar',
                'Canadian Solar',
                'First Solar',
                'Enphase Energy',
                'SolarEdge Technologies',
                'Tesla Energy',
                'BYD Solar'
              ].map((partner, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center flex-shrink-0"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900 whitespace-nowrap">{partner}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
