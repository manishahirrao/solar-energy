'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, User, MessageSquare, Building, Home, Zap, Battery, Trees, Send, CheckCircle, Sun } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  message: string;
}

export default function PopupQuoteForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'solar-energy',
    propertyType: 'residential',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-open popup when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Open after 1 second

    return () => clearTimeout(timer);
  }, []);

  // Global function to open popup
  useEffect(() => {
    // @ts-ignore
    window.openQuoteForm = () => {
      setIsOpen(true);
    };
    
    return () => {
      // @ts-ignore
      delete window.openQuoteForm;
    };
  }, []);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Prevent body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore body scroll
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      };
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to WhatsApp with form data
    const whatsappMessage = `Hello! I'm interested in your solar services.%0A%0AName: ${formData.name}%0A%0APhone: ${formData.phone}%0A%0AEmail: ${formData.email}%0A%0AService: ${formData.service}%0A%0AProperty Type: ${formData.propertyType}%0A%0AMessage: ${formData.message || 'No additional message'}`;
    
    const whatsappUrl = `https://wa.me/918959890113?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message briefly before closing
    setIsSubmitted(true);
    
    // Reset form and close popup after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'solar-energy',
        propertyType: 'residential',
        message: ''
      });
      setIsOpen(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="popup-quote-form" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-[90%] max-w-md overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-white text-gray-900 p-4 sm:p-5 rounded-t-2xl sm:rounded-t-3xl relative flex-shrink-0">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-all hover:rotate-90 duration-300 z-10"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-2 sm:mb-3">
                    <img 
                      src="/procura logo.png" 
                      alt="Procura Solar"
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-gray-900">Get Your Free Quote</h3>
                  <div className="bg-green-50 border border-green-100 text-green-700 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium flex items-center">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-green-600" />
                    Save up to 95% on electricity bills
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Partition Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Form Content */}
            <div className="p-3 sm:p-4 overflow-hidden">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-1.5 text-xs">
                  <div className="space-y-1.5">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                        <User className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-green-600" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1.5 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-xs placeholder-gray-400 text-gray-900"
                        placeholder="Mahesh Kumar"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-green-600" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1.5 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-xs placeholder-gray-400 text-gray-900"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-green-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-2 py-1.5 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-xs placeholder-gray-400 text-gray-900"
                      placeholder="mahesh@example.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                        <img 
                          src="/procura logo.png" 
                          alt="Procura Solar"
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 inline mr-1 object-contain"
                        />
                        Service Type
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1.5 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-xs placeholder-gray-400 text-gray-900"
                      >
                        <option value="solar-panels">Solar Panel Installation</option>
                        <option value="solar-water-heater">Solar Water Heater</option>
                        <option value="solar-inverter">Solar Inverter Systems</option>
                        <option value="solar-pumps">Solar Water Pumps</option>
                        <option value="solar-maintenance">Solar System Maintenance</option>
                        <option value="solar-rooftop">Rooftop Solar Solutions</option>
                        <option value="solar-epc">Solar EPC Solutions</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-green-600" />
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1.5 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-xs placeholder-gray-400 text-gray-900"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-green-600" />
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={1}
                      className="w-full px-3 py-2 sm:px-3 sm:py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 resize-none text-xs sm:text-sm placeholder-gray-500 text-gray-900"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 text-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Get Free Quote
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-center p-6 sm:p-8">
                    <div className="mx-auto flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-green-50 mb-4">
                      <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">Our solar expert will contact you within 24 hours to discuss your requirements.</p>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 text-base sm:text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      onClick={handleClose}
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 rounded-b-3xl border-t">
              <div className="flex items-center justify-center text-xs text-gray-500">
                <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                Your information is secure and will never be shared
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
