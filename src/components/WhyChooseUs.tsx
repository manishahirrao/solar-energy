'use client';

import { motion } from 'framer-motion';
import { CheckCircle, FileText, Leaf, Shield, Wrench, Zap, Award, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Quality Assurance',
      description: 'Premium components, tested installation practices, and strict quality checks.',
      icon: Shield,
      image: '/quality.jpeg',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: 'HDGI 80 Micron',
      description: 'Heavy-duty galvanized structures for strength and durability.',
      icon: Award,
      image: '/hdgi.jpg',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Fast Installation',
      description: 'Quick and secure installation with minimal disruption.',
      icon: Zap,
      image: '/fast-installation.jpeg',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Document Support',
      description: 'Paperless work — we handle everything from start to finish.',
      icon: FileText,
      image: '/document.webp',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Eco Friendly',
      description: 'Clean energy that reduces your carbon footprint.',
      icon: Leaf,
      image: '/environment-friendly.jpg',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Long Lifespan',
      description: 'Designed for long-term performance with minimal upkeep.',
      icon: Clock,
      image: '/longlifespan.webp',
      gradient: 'from-rose-500 to-pink-600'
    }
  ];

  const stats = [
    { value: '500+', label: 'Installations', icon: CheckCircle },
    { value: '99%', label: 'Satisfaction', icon: Award },
    { value: '30Y', label: 'Warranty', icon: Shield },
    { value: '24/7', label: 'Support', icon: Zap }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Procura
            <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-amber-400 bg-clip-text text-transparent">
              Difference
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We deliver excellence in every solar project with unmatched expertise,
            premium quality materials, and dedicated customer support.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-emerald-500/30 transition-all">
                <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/solar-roof.jpeg"
                alt="Procura Solar Installation"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">PM Surya Ghar Yojana</div>
                      <div className="text-slate-300 text-sm">Empaneled Partner</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/30 transition-all h-full">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <point.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {point.description}
                  </p>

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              if (typeof window !== 'undefined') {
                (window as any).openQuoteForm();
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
          >
            <Zap className="w-5 h-5" />
            Start Your Solar Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
