'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Users } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      bio: 'With over 15 years of experience in renewable energy, Rajesh founded SolarBright with a vision to make India energy independent.',
      expertise: ['Strategic Planning', 'Business Development', 'Renewable Energy Policy'],
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'rajesh@domain.com'
    },
    {
      name: 'Priya Sharma',
      position: 'CTO',
      bio: 'Priya leads our technical team with expertise in solar engineering and smart grid technologies. She holds a PhD in Renewable Energy.',
      expertise: ['Solar Engineering', 'System Design', 'Quality Assurance'],
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'priya@domain.com'
    },
    {
      name: 'Amit Patel',
      position: 'Operations Director',
      bio: 'Amit ensures smooth project execution and operational excellence across all our installations with his 12 years of experience.',
      expertise: ['Project Management', 'Operations', 'Supply Chain'],
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'amit@domain.com'
    },
    {
      name: 'Neha Gupta',
      position: 'Finance Director',
      bio: 'Neha manages our financial strategy and helps clients with solar financing options. She\'s an expert in renewable energy investments.',
      expertise: ['Financial Planning', 'Investment Strategy', 'Risk Management'],
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'neha@domain.com'
    },
    {
      name: 'Vikram Singh',
      position: 'Lead Engineer',
      bio: 'Vikram heads our engineering team and oversees all technical aspects of solar installations with precision and expertise.',
      expertise: ['Solar Installation', 'Technical Design', 'Maintenance'],
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'vikram@domain.com'
    },
    {
      name: 'Anjali Desai',
      position: 'Marketing Head',
      bio: 'Anjali drives our marketing initiatives and customer engagement strategies to promote solar adoption across India.',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Customer Relations'],
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'anjali@domain.com'
    },
    {
      name: 'Sanjay Mehta',
      position: 'Senior Project Manager',
      bio: 'Sanjay manages large-scale solar projects and ensures timely delivery with quality standards maintained throughout.',
      expertise: ['Large-scale Projects', 'Team Leadership', 'Quality Control'],
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'sanjay@domain.com'
    },
    {
      name: 'Kavita Reddy',
      position: 'HR Director',
      bio: 'Kavita builds and nurtures our talented team, ensuring we have the best people to deliver exceptional solar solutions.',
      expertise: ['Human Resources', 'Team Building', 'Organizational Development'],
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'kavita@domain.com'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-5"
              style={{
                width: Math.random() * 80 + 40 + 'px',
                height: Math.random() * 80 + 40 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent bg-opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-white border-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Meet the passionate experts driving India's renewable energy revolution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <div className="text-white text-opacity-50 text-3xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={member.twitter}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Expertise:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team Strength</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The numbers that showcase our expertise and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Years Average Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Certified Professionals</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of the renewable energy revolution. We\'re always looking for passionate talent to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold">
                View Open Positions
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-600 transition-colors font-semibold">
                Send Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
