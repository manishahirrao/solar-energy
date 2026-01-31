'use client';

import { motion } from 'framer-motion';
import { Handshake, CheckCircle } from 'lucide-react';

const TechnologyPartners = () => {
  const partners = [
    { name: 'Tata Power Solar', logo: '/Tata Power Solar.jpeg' },
    { name: 'Adani Solar', logo: '/Adani Solar.png' },
    { name: 'Waaree Solar', logo: '/waaree.webp' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technology <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Partners</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Partnering with India's leading solar manufacturers to deliver cutting-edge solutions
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-40 flex flex-col items-center justify-center group-hover:border-emerald-500/30 transition-all">
                {/* Verified Badge */}
                <div className="absolute top-3 right-3">
                  <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 w-full h-24 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/10">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = `
                          <div class="text-slate-600 text-center font-semibold">
                            ${partner.name}
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                <p className="mt-3 text-sm text-slate-400 font-medium group-hover:text-emerald-400 transition-colors">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 pt-8 border-t border-white/10"
        >
          {[
            { label: 'Tier-1 Solar Panels', value: '100%' },
            { label: 'Quality Assured', value: 'ISO Certified' },
            { label: 'Manufacturer Warranty', value: '30 Years' }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-xl sm:text-2xl font-bold text-white">{item.value}</div>
              <div className="text-sm text-slate-500">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
