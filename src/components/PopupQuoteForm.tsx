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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds and close popup
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
    }, 3000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 text-white p-6 rounded-t-3xl relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-all hover:rotate-90 duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <Sun className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Get Your Free Quote</h3>
                <p className="text-green-100 text-sm">Save up to 70% on electricity bills</p>
              </motion.div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        <User className="w-4 h-4 inline mr-1 text-green-600" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        <Phone className="w-4 h-4 inline mr-1 text-green-600" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      <Mail className="w-4 h-4 inline mr-1 text-green-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        <Sun className="w-4 h-4 inline mr-1 text-green-600" />
                        Service Type
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                      >
                        <option value="solar-energy">Solar Energy</option>
                        <option value="hybrid-energy">Hybrid Energy</option>
                        <option value="solar-consulting">Solar Consulting</option>
                        <option value="solar-maintenance">Solar Maintenance</option>
                        <option value="energy-storage">Energy Storage</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        <Building className="w-4 h-4 inline mr-1 text-green-600" />
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="agricultural">Agricultural</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      <MessageSquare className="w-4 h-4 inline mr-1 text-green-600" />
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, repeat: 2 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600 mb-3">Your quote request has been submitted successfully.</p>
                  <p className="text-sm text-gray-500">Our team will contact you within 24 hours.</p>
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
