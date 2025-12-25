'use client';

import { motion } from 'framer-motion';

const TechnologyPartners = () => {
  const partners = [
    { name: 'Partner 1', logo: '/partner1.png' },
    { name: 'Partner 2', logo: '/partner2.png' },
    { name: 'Partner 3', logo: '/partner3.png' },
    { name: 'Partner 4', logo: '/partner4.png' },
    { name: 'Partner 5', logo: '/partner5.png' },
    { name: 'Partner 6', logo: '/partner6.png' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Technology <span className="text-green-600">Partners</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12">
            Partnering with industry leaders to deliver cutting-edge solar solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="bg-gray-50 rounded-lg p-4 w-full h-24 flex items-center justify-center border border-gray-200 hover:border-green-300 transition-colors">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="text-gray-400 text-sm text-center">
                          ${partner.name}
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
