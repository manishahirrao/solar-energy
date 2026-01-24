'use client';

import { motion } from 'framer-motion';

const TechnologyPartners = () => {
  const partners = [
    { name: 'Tata Power Solar', logo: '/Tata Power Solar.jpeg' },
    { name: 'Adani Solar', logo: '/Adani Solar.png' },
    { name: 'Waaree Solar', logo: '/waaree.webp' }
  ];

  return (
    <section className="pt-4 pb-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 sm:mb-10 leading-tight">
            <span className="text-gray-900">Technology</span> <span className="text-green-600">Partners</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12">
            Partnering with industry leaders to deliver cutting-edge solar solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-2 h-32 flex items-center justify-center border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = `
                      <div class="text-gray-400 text-sm text-center font-medium">
                        ${partner.name}
                      </div>
                    `;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
