'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'How Many Solar Panels Do You Need for Your Business?',
      excerpt: 'Learn how to calculate the optimal number of solar panels for your commercial property and maximize your energy savings.',
      author: 'Rajesh Kumar',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Solar Planning',
      image: '/api/placeholder/400/250',
      href: '/blog/how-many-solar-panels-business'
    },
    {
      id: 2,
      title: 'Understanding Tax Deductions for Small Businesses',
      excerpt: 'Complete guide to available tax benefits and deductions for businesses investing in solar energy systems.',
      author: 'Priya Sharma',
      date: 'December 12, 2024',
      readTime: '7 min read',
      category: 'Finance',
      image: '/api/placeholder/400/250',
      href: '/blog/tax-deductions-small-businesses'
    },
    {
      id: 3,
      title: 'Solar Energy Trends to Watch in 2024',
      excerpt: 'Discover the latest innovations and trends shaping the solar industry this year and beyond.',
      author: 'Amit Patel',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Industry Trends',
      image: '/api/placeholder/400/250',
      href: '/blog/solar-energy-trends-2024'
    },
    {
      id: 4,
      title: 'Commercial vs Residential Solar: Key Differences',
      excerpt: 'Understanding the fundamental differences between commercial and residential solar installations.',
      author: 'Neha Gupta',
      date: 'December 8, 2024',
      readTime: '4 min read',
      category: 'Comparison',
      image: '/api/placeholder/400/250',
      href: '/blog/commercial-vs-residential-solar'
    },
    {
      id: 5,
      title: 'Maintaining Your Solar System: Best Practices',
      excerpt: 'Essential maintenance tips to keep your solar panels operating at peak efficiency for years.',
      author: 'Vikram Singh',
      date: 'December 5, 2024',
      readTime: '5 min read',
      category: 'Maintenance',
      image: '/api/placeholder/400/250',
      href: '/blog/maintaining-solar-system'
    },
    {
      id: 6,
      title: 'Battery Storage Solutions for Solar Systems',
      excerpt: 'Explore the latest battery storage options and how they can enhance your solar energy system.',
      author: 'Anjali Desai',
      date: 'December 3, 2024',
      readTime: '8 min read',
      category: 'Energy Storage',
      image: '/api/placeholder/400/250',
      href: '/blog/battery-storage-solutions'
    }
  ];

  const categories = [
    { name: 'All', count: 6 },
    { name: 'Solar Planning', count: 1 },
    { name: 'Finance', count: 1 },
    { name: 'Industry Trends', count: 1 },
    { name: 'Comparison', count: 1 },
    { name: 'Maintenance', count: 1 },
    { name: 'Energy Storage', count: 1 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Read our latest solar insights and stay updated with renewable energy trends
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-6 mb-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="pb-4 border-b last:border-0">
                      <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">{post.title}</h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <div className="text-white text-opacity-50 text-lg font-semibold">
                          {post.category}
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <Link href={post.href}>
                        <button className="text-green-600 font-semibold flex items-center hover:text-green-700 transition-colors">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center mt-12"
              >
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors">2</button>
                  <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors">3</button>
                  <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors">Next</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
