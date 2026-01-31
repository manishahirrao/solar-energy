'use client';

import { motion } from 'framer-motion';
import { MapPin, Zap, Users, ArrowRight, Building2, Home, Factory, Tractor } from 'lucide-react';
import Link from 'next/link';

const OurProjects = () => {
  const projects = [
    {
      title: 'Rooftop Solar Installation',
      location: 'Bhopal',
      capacity: '3kW',
      clients: 'Residential',
      description: 'Successfully completed a 3kW residential rooftop solar installation with advanced backup system. This project features high-efficiency monocrystalline panels and smart inverter technology.',
      image: '/solar-installed-at-terrace.jpeg',
      icon: Home,
      savings: '₹4,000/month',
      color: 'from-emerald-400 to-green-500'
    },
    {
      title: 'Commercial Solar Setup',
      location: 'Mandideep',
      capacity: '50kW',
      clients: 'Commercial',
      description: 'Deployed a 50kW commercial solar setup for a local business complex. High-efficiency panels offset peak-hour energy usage, reducing operational costs significantly.',
      image: '/Commercial Solar Farm.jpg',
      icon: Building2,
      savings: '₹75,000/month',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Industrial Power Plant',
      location: 'Bhopal',
      capacity: '25kW',
      clients: 'Industrial',
      description: 'Designed and implemented a 25kW solar power system for a small industrial unit with durable panels and grid integration for machinery operations.',
      image: '/Floating Solar Plant.jpeg',
      icon: Factory,
      savings: '₹35,000/month',
      color: 'from-violet-400 to-purple-500'
    },
    {
      title: 'Agricultural Solar Pump',
      location: 'Bhopal',
      capacity: '10kW',
      clients: 'Government',
      description: 'Executed a 10kW solar water pumping project for agricultural application ensuring reliable water supply without grid electricity dependency.',
      image: '/Agricultural Solar Pump.jpg',
      icon: Tractor,
      savings: '₹12,000/month',
      color: 'from-amber-400 to-orange-500'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-amber-100 rounded-full blur-[100px] opacity-40" />
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

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Our Latest
            <span className="block bg-gradient-to-r from-emerald-500 via-green-500 to-amber-500 bg-clip-text text-transparent">
              Solar Projects
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of successful solar installations across India.
            Each project represents our commitment to quality and sustainability.
          </p>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="relative bg-white rounded-3xl overflow-hidden h-full border border-slate-100 shadow-lg"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-lg">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      {project.location}
                    </span>
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-lg">
                      <Zap className="w-3 h-3 text-amber-500" />
                      {project.capacity}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10 }}
                  >
                    <project.icon className="w-5 h-5 text-white" />
                  </motion.div>

                  {/* Savings Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="px-4 py-2 bg-emerald-500 rounded-xl shadow-lg">
                      <span className="text-xs text-emerald-100 block">Savings</span>
                      <span className="text-white font-bold">{project.savings}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                      {project.clients}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <Link
                      href="/project"
                      className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors flex items-center gap-1.5"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={`https://wa.me/918959890113?text=Hi, I'm interested in the ${project.title} project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center transition-colors shadow-md"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/project">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold shadow-xl hover:bg-slate-800 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProjects;
