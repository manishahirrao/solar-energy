'use client';

import { motion } from 'framer-motion';

const TechnologyPartners = () => {
  const partners = [
    { name: 'Tata Power Solar', logo: '/Tata Power Solar.jpeg' },
    { name: 'Adani Solar', logo: '/Adani Solar.png' },
    { name: 'Vikram Solar', logo: '/Vikram Solar.jpeg' },
    { name: 'Suntech Power Systems', logo: '/Suntech Power Systems.png' },
    { name: 'Moser Baer Solar', logo: '/Moser Baer Solar.png' },
    { name: 'Navitas Solar', logo: '/Navitas Solar.jpg' },
    { name: 'Websol Energy System', logo: '/Websol Energy System.jpeg' }
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
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 leading-tight">
            <span className="text-gray-900">Technology</span> <span className="text-green-600">Partners</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12">
            Partnering with industry leaders to deliver cutting-edge solar solutions
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
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white rounded-lg p-4 w-40 h-24 flex items-center justify-center border border-gray-200 hover:border-green-300 transition-colors flex-shrink-0 shadow-md"
              >
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
              </motion.div>
            ))}
            {/* Duplicate partners for seamless loop */}
            {partners.map((partner, index) => (
              <motion.div
                key={`duplicate-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white rounded-lg p-4 w-40 h-24 flex items-center justify-center border border-gray-200 hover:border-green-300 transition-colors flex-shrink-0 shadow-md"
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
