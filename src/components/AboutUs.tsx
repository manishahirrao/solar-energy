'use client';

import { motion } from 'framer-motion';
import { Sun, Users, Award, CheckCircle, TrendingUp, Wrench, ArrowRight, Target, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

const AboutUs = () => {
  const stats = [
    { icon: Award, label: 'Warranty', value: '30+', unit: 'Years', color: 'from-violet-500 to-purple-600' },
    { icon: Users, label: 'Experience', value: '10+', unit: 'Years', color: 'from-blue-500 to-cyan-600' },
    { icon: Sun, label: 'Projects', value: '500+', unit: 'Completed', color: 'from-amber-500 to-orange-600' },
    { icon: Heart, label: 'Happy Clients', value: '99%', unit: 'Satisfied', color: 'from-rose-500 to-pink-600' }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Quality First',
      description: 'ISO certified processes with premium materials for lasting performance.',
      color: 'text-emerald-600 bg-emerald-100'
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Competitive pricing that maximizes your return on investment.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Wrench,
      title: 'Expert Installation',
      description: 'Quick turnaround with minimal disruption to your daily life.',
      color: 'text-amber-600 bg-amber-100'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-emerald-100 rounded-full blur-[150px] opacity-40" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-violet-100 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
            About
            <span className="block bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              Procura Solar
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
              <Target className="w-4 h-4" />
              Our Mission
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Pioneering Solar Excellence with Innovation and Trust
            </h3>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                At Procura Solar, we are committed to transforming India's energy landscape through cutting-edge solar technology. Our mission is to make clean, renewable energy accessible to everyone while reducing carbon footprints and energy costs.
              </p>
              <p>
                We specialize in providing high-quality solar installations across residential, commercial, and industrial sectors, establishing ourselves as a trusted name in the renewable energy industry.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 pt-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{value.title}</h4>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Commercial Solar Farm.jpg"
                alt="Procura Solar Installation"
                className="w-full h-[450px] lg:h-[550px] object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">PM Surya Ghar Yojana</h4>
                      <p className="text-emerald-600 text-sm font-medium">Empaneled Partner</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Delivering sustainable energy solutions that power a brighter future for generations.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.unit}</div>
                <div className="text-sm font-medium text-slate-700 mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
